'use strict';
/* ============================================================ PLATFORMER (GDevelop) */
(function(){
const T=48,BLOCKS=[[0,7,5,7],[8,7,13,7],[1,5,3,5],[8,5,10,5],[12,2,12,6]];
const CELLS=new Set();BLOCKS.forEach(([c0,r0,c1,r1])=>{for(let c=c0;c<=c1;c++)for(let r=r0;r<=r1;r++)CELLS.add(c+','+r)});
const solid=(c,r)=>CELLS.has(c+','+r);
const FLOOR=336;
const frame=(t,n,fps)=>Math.floor(t*fps)%n;
function platCfg(){return{W:672,H:384,preset:'plat',controls:'Move: A D or arrows. Jump: W, Space or Z.',legend:'Debug view: green = hurtbox, cyan = ground check or ray.',pad:[['l','◀'],['r','▶'],['j','JUMP']],
 rules:[
  {a:'Player',b:'World',on:true,fx:'Solid: you stand on it and cannot walk through it.'},
  {a:'Player',b:'Enemy',on:true,fx:'Touching a slime hurts you.'},
  {a:'Player',b:'Hazard',on:true,fx:'Spikes hurt you.'},
  {a:'Player',b:'Pickup',on:true,fx:'Collects the berry.'},
  {a:'Player',b:'Trigger',on:true,fx:'Touching the flag sets your respawn point.'},
  {a:'Enemy',b:'World',on:true,fx:'Slimes stand on the floor and turn at walls.'},
  {a:'Pickup',b:'Enemy',on:false,extra:true,fx:'Slimes eat berries they walk over. Usually a mistake.'}],
 toggles:[
  {id:'feet',on:true,label:'Ground check uses a feet sensor',fx:'Off: the whole body is the ground check.'},
  {id:'invuln',on:true,label:'Invulnerability window after a hit',fx:'Off: overlap is true every frame.'},
  {id:'ledge',on:true,label:'Slime on the platform has a ledge ray',fx:'Off: it walks off the edge.'}],
 sliders:[{id:'hurt',label:'Hurtbox size vs the sprite',min:40,max:130,val:80,unit:'%'}],
 init(S){
  S.ent=[];S.fx=[];S.score=0;
  BLOCKS.forEach(([c0,r0,c1,r1])=>S.add({g:'World',x:c0*T,y:r0*T,w:(c1-c0+1)*T,h:(r1-r0+1)*T}));
  S.p=S.add({g:'Player',x:20,y:FLOOR-37,w:29,h:37,vx:0,vy:0,hp:5,inv:0,prevJump:false,face:1});
  S.cp={x:20,y:FLOOR-37};
  S.add({g:'Enemy',x:430,y:FLOOR-26,w:30,h:26,vx:50,vy:0,min:395,max:560,sx:430,sy:FLOOR-26});
  S.add({g:'Enemy',x:430,y:5*T-26,w:30,h:26,vx:50,vy:0,sx:430,sy:5*T-26});
  S.add({g:'Hazard',x:4*T+3,y:6*T+30,w:42,h:18});
  [[120,214],[250,312],[500,214],[486,314],[600,56,1]].forEach(c=>S.add({g:'Pickup',x:c[0]-11,y:c[1]-11,w:22,h:22,bonus:!!c[2]}));
  S.add({g:'Trigger',x:396,y:FLOOR-60,w:20,h:60,got:false});
 },
 update(S,dt){
  const p=S.p,I=S.input();
  const cx=p.x+p.w/2,by=p.y+p.h,sc=S.opt.hurt/100;p.w=36*sc;p.h=46*sc;p.x=cx-p.w/2;p.y=by-p.h;
  const worlds=S.of('World'),pw=S.on('Player','World');S.tests+=pw?worlds.length:0;
  const sensor=S.opt.feet?{x:p.x+p.w/2-7,y:p.y+p.h-1,w:14,h:3}:{x:p.x-1,y:p.y-1,w:p.w+2,h:p.h+2};
  p.sensor=sensor;const grounded=pw&&worlds.some(w=>overlap(sensor,w));p.grounded=grounded;
  if(I.jump&&!p.prevJump&&grounded)p.vy=-520;p.prevJump=I.jump;
  const tgt=((I.r?1:0)-(I.l?1:0))*160;if(tgt)p.face=Math.sign(tgt);p.vx+=clampN(tgt-p.vx,-1100*dt,1100*dt);
  p.vy=Math.min(p.vy+1400*dt,720);
  let wallSide=0;
  if(pw){const r=moveAxis(p,p.vx*dt,0,worlds);if(r.x){wallSide=r.x;p.vx=0}const q=moveAxis(p,0,p.vy*dt,worlds);if(q.y)p.vy=0}else{p.x+=p.vx*dt;p.y+=p.vy*dt}
  p.wall=wallSide&&!grounded;
  if(p.y>S.H+80){if(!pw)S.count('fell');S.say('Fell out of the world. Back to the checkpoint.','fall');p.x=S.cp.x;p.y=S.cp.y;p.vx=p.vy=0}
  p.inv=Math.max(0,p.inv-dt);
  for(const e of S.of('Enemy')){
    e.vy=Math.min(e.vy+1400*dt,720);
    if(S.on('Enemy','World')){const r=moveAxis(e,e.vx*dt,0,worlds);if(r.x)e.vx*=-1;const q=moveAxis(e,0,e.vy*dt,worlds);if(q.y)e.vy=0;S.tests+=worlds.length}else{e.x+=e.vx*dt;e.y+=e.vy*dt}
    if(e.min!=null&&(e.x<e.min||e.x+e.w>e.max))e.vx=Math.abs(e.vx)*(e.x<e.min?1:-1);
    if(S.opt.ledge&&e.vy===0){const ax=e.x+e.w/2+Math.sign(e.vx)*(e.w/2+4),ay=e.y+e.h+6;e.ray={x:ax,y:ay};if(!worlds.some(w=>ax>=w.x&&ax<=w.x+w.w&&ay>=w.y&&ay<=w.y+w.h))e.vx*=-1}else e.ray=null;
    if(e.y>S.H+80){e.x=e.sx;e.y=e.sy;e.vy=0;S.count('efall');S.say('A slime walked off the edge and fell.','efall',2)}
    if(Math.abs(e.vx)<1)e.vx=50}
  const hurt=(pl,o)=>{const body={x:pl.x+pl.w/2-18,y:pl.y+pl.h-46,w:36,h:46};if(!overlap(body,o))S.count('unfair');
    if(S.opt.invuln){if(p.inv<=0){p.hp--;p.inv=1;S.say('Hit! Invulnerable for 1 second.','hit',.1)}}else{p.hp-=1;S.count('drain');S.say('Overlap is true every frame: -1 heart per frame.','drain',.5)}};
  S.pairs('Player','Enemy',hurt);S.pairs('Player','Hazard',hurt);
  S.pairs('Player','Pickup',(a,c)=>{c.dead=true;S.score++;S.fx.push({x:c.x+11,y:c.y+11,t:0});if(c.bonus){S.count('bonus');S.say('You climbed the wall: that berry should be unreachable.','bonus',0)}else S.say('Berry collected.','berry',.1)});
  S.pairs('Player','Trigger',(a,t)=>{if(!t.got){t.got=true;S.cp={x:t.x-6,y:FLOOR-p.h};S.say('Checkpoint set. Detection only: nothing pushed you.','cp')}});
  S.pairs('Pickup','Enemy',(c)=>{c.dead=true;S.count('eat');S.say('A slime ate a berry.','eat',.2)});
  if(p.hp<=0){S.say('Out of hearts. Back to the checkpoint.','die',1);p.hp=5;p.x=S.cp.x;p.y=S.cp.y;p.vx=p.vy=0;p.inv=1}
  S.fx.forEach(f=>f.t+=dt);S.fx=S.fx.filter(f=>f.t<.4);
 },
 draw(S){const c=S.ctx,p=S.p;
  rect(c,0,0,S.W,S.H,'#8cc3ee');spr(c,'pf_bg_sky.jpg',0,0,672,384);
  const hi=img('pf_bg_hill.png');if(ready(hi))c.drawImage(hi,0,0,672,hi.naturalHeight,0,384-hi.naturalHeight,672,hi.naturalHeight);
  spr(c,'pf_tree_2.png',506,FLOOR-137,67,137);
  const rk=img('pf_rock.png');
  if(ready(rk))for(const k of CELLS){const [col,row]=k.split(',').map(Number);
    const m=(solid(col,row-1)?1:0)|(solid(col+1,row)?2:0)|(solid(col,row+1)?4:0)|(solid(col-1,row)?8:0),v=(col*7+row*3)%3;
    c.drawImage(rk,(v*16+m)*48,0,48,48,col*T,row*T,48,48)}
  for(const e of S.ent){if(e.dead)continue;
    if(e.g==='Hazard')spr(c,'pf_spike_up.png',e.x-3,e.y-30,48,48);
    else if(e.g==='Pickup'){const f=frame(S.t+e.x*.01,17,14);spr(c,'pf_berry_'+f+'.png',e.x-10,e.y-10,44,44);}
    else if(e.g==='Trigger'){spr(c,e.got?'pf_cp_idle_'+frame(S.t,10,10)+'.png':'pf_cp_off_0.png',e.x-22,e.y-4,64,64)}
    else if(e.g==='Enemy'){spr(c,'dg_slime.png',e.x+e.w/2-20,e.y+e.h-35,40,40,{flip:e.vx<0})}}
  S.fx.forEach(f=>spr(c,'pf_pop_'+Math.min(5,Math.floor(f.t/.4*6))+'.png',f.x-32,f.y-32,64,64));
  // player sprite is 48x48 art, the hurtbox may be smaller or larger
  const st=p.wall?'pf_pl_wall_'+frame(S.t,4,8):!p.grounded?(p.vy<0?'pf_pl_jump_0':'pf_pl_fall_0'):(Math.abs(p.vx)>25?'pf_pl_run_'+frame(S.t,5,12):'pf_pl_idle_'+frame(S.t,4,6));
  if(p.inv<=0||Math.floor(S.t*14)%2)spr(c,st+'_r.png',p.x+p.w/2-24,p.y+p.h-46,48,48,{flip:p.face<0});
  if(S.debug){c.lineWidth=1.5;c.strokeStyle=C.g;c.strokeRect(p.x+.5,p.y+.5,p.w,p.h);c.strokeStyle=C.c;c.lineWidth=2;c.strokeRect(p.sensor.x,p.sensor.y,p.sensor.w,p.sensor.h);
    for(const e of S.of('Enemy')){c.strokeStyle=C.g;c.lineWidth=1.5;c.strokeRect(e.x+.5,e.y+.5,e.w,e.h);if(e.ray){c.strokeStyle=C.c;c.lineWidth=2;c.beginPath();c.moveTo(e.ray.x,e.ray.y-6);c.lineTo(e.ray.x,e.ray.y);c.stroke()}}
    for(const e of S.of('Hazard')){c.strokeStyle=C.r;c.strokeRect(e.x+.5,e.y+.5,e.w,e.h)}
  }
  for(let i=0;i<5;i++){outline(c,'♥',10+i*18,24,i<p.hp?C.r:'#4a2a32',18)}
  outline(c,'berries '+S.score,10,46,'#ffd23f',12);
 }}}
TEAMS.plat={name:'Platformer',eng:'GDevelop',preset:'plat',thumb:'pf_pl_idle_0_r.png',
 pitch:'You move by hand-tuned code. Collision is mostly detection: hurt, collect, checkpoint.',cfg:platCfg,
 missions:[
  {type:'hunt',title:'This level is broken',story:'Five things are wrong with this level. Walk, jump and touch things until you find them all.',
   rules:{'Pickup|Enemy':true},opts:{feet:false,invuln:false,ledge:false,hurt:130},
   bugs:[
    {id:'wall',name:'You can climb a wall that is too tall',hintText:'A berry floats above the tall wall. Run at the wall and keep jumping.',done:S=>(S.ev.bonus||0)>=1,
     cause:'The ground check is the whole body, so touching a wall counts as standing and you can jump again in mid-air.',fix:{opts:{feet:true}}},
    {id:'drain',name:'Spikes drain every heart at once',hintText:'Touch the spikes near the start.',done:S=>(S.ev.drain||0)>=1,
     cause:'Overlap is true on every frame, so one touch hurts sixty times. There is no invulnerability window.',fix:{opts:{invuln:true}}},
    {id:'ledge',name:'A slime walks off its platform',hintText:'Watch the slime on the high platform for a few seconds.',done:S=>(S.ev.efall||0)>=1,
     cause:'Nothing looks ahead of it. A short ray pointing down in front of the slime would say the floor has ended.',fix:{opts:{ledge:true}}},
    {id:'eat',name:'Slimes eat your berries',hintText:'Watch the slime on the ground at the right, near a berry.',done:S=>(S.ev.eat||0)>=1,
     cause:'The pair Pickup x Enemy is ticked, so slimes collect berries too. Nobody decided that.',fix:{rules:{'Pickup|Enemy':false}}},
    {id:'unfair',name:'You get hurt without being touched',hintText:'Walk close to the spikes without touching them.',done:S=>(S.ev.unfair||0)>=1,
     cause:'The hurtbox is bigger than the character. Players call that unfair, and they are right.',fix:{opts:{hurt:80}}}]},
  {title:'Walk through the floor',term:'Detection vs response',story:'A collision rule is a pair of groups. A ticked pair is tested every frame and has an effect. Right now Player x World is ticked, so the ground holds you up.',
   predict:{q:'If you untick Player x World, what happens to the floor under you?',opts:['Nothing, the floor is still solid','You fall straight through it'],ans:1,why:'Nothing tests that pair any more, so nothing pushes you back out. The ground is still drawn, but the game no longer knows it is there.'},
   task:'Untick Player x World, then watch.',wait:'Waiting for you to untick Player x World and fall...',focus:['r:Player|World'],done:S=>(S.ev.fell||0)>=1,
   why:'A solid pair needs a RESPONSE: the game must push you out of the ground. A berry only needs DETECTION: the game notices the touch and reacts, with nothing pushed. Both are pairs in the matrix.',
   engine:'In GDevelop the Platformer Character behaviour is the response for floors and walls. The conditions you write, like Player is in collision with Berry, are the detection.'},
  {title:'A rule nobody asked for',term:'The collision matrix',story:'Every tick is a decision, and so is every empty cell. Pickup x Enemy is unticked on purpose: slimes should not touch berries.',
   predict:{q:'What happens if you tick Pickup x Enemy?',opts:['Nothing, slimes ignore berries','Slimes start eating berries they walk over'],ans:1,why:'A ticked pair is tested, and the effect is whatever you wrote for it. Nobody planned this one, so it is a bug.'},
   task:'Tick Pickup x Enemy. A slime patrols past a berry on the right.',wait:'Waiting for a slime to eat a berry...',focus:['r:Pickup|Enemy'],done:S=>(S.ev.eat||0)>=1,
   why:'Unticked pairs are not neutral: the matrix says what is allowed to touch what, including what is not. Write the empty cells down too. Each ticked pair also costs a test every frame, see the counter.',
   engine:'In GDevelop an unticked pair simply means you never wrote that collision condition. Nothing enforces the empty cells except you.'},
  {title:'Climb a wall you should not',term:'Hitbox craft: sensors',story:'A berry floats above a wall that is five tiles tall. A jump is about two tiles, so you should not reach it.',
   predict:{q:'Can a normal jump reach the berry above the wall?',opts:['No, the wall is too tall','Yes, with a good jump'],ans:0,why:'The wall is about 240 pixels tall and a jump is about 95.'},
   task:'Turn the feet sensor OFF so the whole body is the ground check. Run at the wall and keep jumping up it.',wait:'Waiting for the berry above the wall...',focus:['t:feet'],
   setup:S=>{S.p.x=500;S.p.y=FLOOR-S.p.h},done:S=>(S.ev.bonus||0)>=1,
   why:'With the whole body as the ground check, touching the wall counts as standing, so you can jump again in mid-air and climb. A thin sensor at the feet only counts the floor. Hurtbox, hitbox and sensor are different shapes for different questions.',
   engine:'GDevelop already has an "is on floor" condition on the Platformer Character. This bug appears when you write your own IsGrounded variable from the whole body.'},
  {title:'Look before you step',term:'Raycast',story:'The slime on the high platform patrols it. A short ray pointing down, just ahead of it, asks one question: is there floor there?',
   predict:{q:'What happens to that slime if the ledge ray is switched off?',opts:['It keeps patrolling the platform','It walks off the edge'],ans:1,why:'Nothing tells it the floor has ended. Walls turn it round, but a gap is not a wall.'},
   task:'Turn the ledge ray off and watch the slime on the platform.',wait:'Waiting for the slime to fall...',focus:['t:ledge'],done:S=>(S.ev.efall||0)>=1,
   why:'A raycast answers questions that are not "are we touching right now": is there floor ahead, can it see me, what am I looking at. Cast from slightly ahead of the body. A ray from the centre only notices the edge once it is already stepped off.',
   engine:'GDevelop has Raycast conditions: cast a ray from X;Y at an angle for a max distance, against a group, and save the hit point in two scene variables.'},
  {title:'Hurt once, not sixty times',term:'Once, not every frame',story:'Touching the spikes keeps the overlap true for as long as you stand there. The game checks every frame.',
   predict:{q:'With no invulnerability window, you step on the spikes. What happens?',opts:['You lose one heart','You lose a heart every frame until you are out'],ans:1,why:'Overlap is not an event, it is a state. Every frame it is true again.'},
   task:'Turn the invulnerability window OFF and touch the spikes (walk right from the start).',wait:'Waiting for you to drain on the spikes...',focus:['t:invuln'],done:S=>(S.ev.drain||0)>=1,
   why:'Collision detection is continuous. Anything that should happen once needs a flag or a timer: an invulnerability window after damage, a Collected flag on a coin, delete the thing in the same event.',
   engine:'In GDevelop: set a variable or start a timer in the same event that applies the damage, and check it in the condition of that event.'}],
 code:`// GDevelop events. The ray condition matches GDevelop 5.6.282.
// 1. Hazard, with an invulnerability window
Condition: Player is in collision with SpikesGroup
Condition: Variable Invulnerable of Player = 0
Action:    Subtract 1 from Health, set Invulnerable = 1
Condition: Timer "hurt" of Player > 1 second
Action:    Set Invulnerable = 0

// 2. Ledge ray for a patrolling enemy
Condition: Cast a ray from Enemy.X() + Enemy.Dir * 20 ; Enemy.Y() + 20,
           angle: 90 and max distance: 40 px, against WorldGroup,
           and save the result in HitX, HitY    // inverted: no ground found
Action:    Enemy: set Dir to -Enemy.Dir`,
 engNote:'The same three ideas, written as GDevelop events. Nothing here needs a physics engine.',
 refs:[['Celeste','coyote time, corner correction, wall jump','Celeste coyote time corner correction explained'],['Super Meat Boy','tiny forgiving hitbox against lethal saws','Super Meat Boy hitbox collision explained'],['Hollow Knight','pogo off enemies and spikes','Hollow Knight nail bounce pogo mechanics']]};
})();

/* ============================================================ TOWER DEFENSE (GDevelop) */
(function(){
const path=[[0,96],[224,96],[224,288],[416,288],[416,160],[640,160]];
const segs=[];for(let i=1;i<path.length;i++)segs.push({x0:path[i-1][0],y0:path[i-1][1],x1:path[i][0],y1:path[i][1]});
const segL=segs.map(s=>Math.hypot(s.x1-s.x0,s.y1-s.y0)),total=segL.reduce((a,b)=>a+b,0);
const at=s=>{let r=Math.max(0,s);for(let i=0;i<segs.length;i++){if(r<=segL[i]){const f=r/segL[i];return[segs[i].x0+(segs[i].x1-segs[i].x0)*f,segs[i].y0+(segs[i].y1-segs[i].y0)*f,Math.atan2(segs[i].y1-segs[i].y0,segs[i].x1-segs[i].x0)]}r-=segL[i]}return[path[path.length-1][0],path[path.length-1][1],0]};
const dSeg=(px,py,s)=>{const dx=s.x1-s.x0,dy=s.y1-s.y0,t=clampN(((px-s.x0)*dx+(py-s.y0)*dy)/(dx*dx+dy*dy),0,1);return Math.hypot(px-(s.x0+dx*t),py-(s.y0+dy*t))};
const pads=[[96,176],[96,32],[150,230],[320,208],[320,352],[500,224],[520,96]];
const check=S=>{const gh=S.ghost;
  const pathHit=S.on('PlacementGhost','Path')&&S.of('Path').some(p=>dSeg(gh.x+24,gh.y+24,p.seg)<28+20);
  S.tests+=S.on('PlacementGhost','Path')?S.of('Path').length:0;
  const inZone=S.of('PlacementZone').some(z=>overlap(gh,z));
  const zoneOk=!S.on('PlacementGhost','PlacementZone')||inZone;
  S.tests+=S.on('PlacementGhost','PlacementZone')?S.of('PlacementZone').length:0;
  const towerHit=S.on('PlacementGhost','Tower')&&S.of('Tower').some(t=>overlap(gh,t));
  S.tests+=S.on('PlacementGhost','Tower')?S.of('Tower').length:0;
  gh.onPath=S.of('Path').some(p=>dSeg(gh.x+24,gh.y+24,p.seg)<28+20);gh.onTower=S.of('Tower').some(t=>overlap(gh,t));
  gh.inZone=inZone;gh.ok=zoneOk&&!pathHit&&!towerHit;gh.why=!zoneOk?'not on a pad':pathHit?'on the path':towerHit?'on a tower':'ok'};
const newEnemy=(s)=>({g:'Enemy',s,hp:3,x:0,y:0,w:26,h:26,sp:45,slow:1,hd:0});
function tdCfg(){return{W:640,H:384,preset:'td',controls:'Tap or click the map to build a tower (50 gold).',legend:'Debug view: cyan circle = tower range, green box = enemy hitbox.',pad:[],
 rules:[
  {a:'Projectile',b:'Enemy',on:true,fx:'A shot that reaches an enemy damages it.'},
  {a:'Enemy',b:'Base',on:true,fx:'An enemy reaching the base costs a life.'},
  {a:'PlacementGhost',b:'PlacementZone',on:true,fx:'You may only build on the pads.'},
  {a:'PlacementGhost',b:'Path',on:true,fx:'You cannot build on the path.'},
  {a:'PlacementGhost',b:'Tower',on:true,fx:'You cannot build on another tower.'},
  {a:'Enemy',b:'Enemy',on:false,extra:true,fx:'Enemies bunch up and block each other.'}],
 toggles:[{id:'del',on:true,label:'Delete the shot in the same event as the damage',fx:'Off: the shot stays and damages again every frame.'},
  {id:'hitscan',on:false,label:'Instant shots (a raycast)',fx:'On: towers draw a ray to the first enemy. No shot object.'}],
 sliders:[{id:'range',label:'Tower range',min:60,max:170,val:110,unit:' px'}],
 buttons:[['Send 20 enemies',S=>{for(let i=0;i<20;i++)S.add(newEnemy(-i*9))}]],
 init(S){S.ent=[];S.fx=[];S.beams=[];S.gold=100;S.lives=5;S.spawn=0;
  S.ghost=S.add({g:'PlacementGhost',x:300,y:300,w:48,h:48,ok:false});
  pads.forEach(p=>S.add({g:'PlacementZone',x:p[0]-28,y:p[1]-28,w:56,h:56}));
  segs.forEach(s=>S.add({g:'Path',x:Math.min(s.x0,s.x1)-28,y:Math.min(s.y0,s.y1)-28,w:Math.abs(s.x1-s.x0)+56,h:Math.abs(s.y1-s.y0)+56,seg:s}));
  S.add({g:'Base',x:590,y:136,w:50,h:48});
  S.add({g:'Tower',x:pads[0][0]-24,y:pads[0][1]-24,w:48,h:48,cd:0,ang:-Math.PI/2});S.add({g:'Tower',x:pads[5][0]-24,y:pads[5][1]-24,w:48,h:48,cd:0,ang:-Math.PI/2});
  if(!S.bound){S.bound=true;const cv=S.cv.c;
   cv.addEventListener('pointermove',e=>{const q=S.cv.pos(e);S.ghost.x=q.x-24;S.ghost.y=q.y-24});
   cv.addEventListener('pointerdown',e=>{const q=S.cv.pos(e);S.ghost.x=q.x-24;S.ghost.y=q.y-24;check(S);
     if(S.ghost.ok&&S.gold>=50){S.gold-=50;S.add({g:'Tower',x:S.ghost.x,y:S.ghost.y,w:48,h:48,cd:0,ang:-Math.PI/2});if(!S.ghost.inZone)S.count('builtOff');if(S.ghost.onPath)S.count('builtPath');if(S.ghost.onTower)S.count('builtOverlap');S.say('Tower built (-50 gold).','build',.2)}
     else S.say(S.gold<50?'Not enough gold (50).':'Cannot build there: the matrix says no ('+S.ghost.why+').','nobuild',.4)})}},
 update(S,dt){
  const en=S.of('Enemy');
  S.spawn-=dt;if(S.spawn<=0&&en.length<16){S.add(newEnemy(0));S.spawn=1.2}
  check(S);
  en.forEach(e=>e.slow=1);
  S.pairs('Enemy','Enemy',(a,b)=>{(a.s<b.s?a:b).slow=.25});
  for(const e of en){e.s+=e.sp*e.slow*dt;const q=at(e.s);e.hd=q[2];e.x=q[0]-13;e.y=q[1]-13;if(e.s>total+40){e.dead=true;if(!S.on('Enemy','Base'))S.count('basePass')}}
  S.pairs('Enemy','Base',e=>{e.dead=true;S.lives--;S.say('An enemy reached the base: -1 life.','base',.1)});
  if(!S.on('Enemy','Base')){const bs=S.of('Base')[0];for(const e of en)if(!e.passed&&overlap(e,bs)){e.passed=true;S.count('basePass');S.say('An enemy walked through the base and nothing happened.','bp',.5)}}
  S.beams=S.beams.filter(b=>(b.t+=dt)<.12);
  for(const t of S.of('Tower')){t.cd-=dt;
    let best=null,bd=1e9;for(const e of en){if(e.s<0||e.dead)continue;const d=Math.hypot(e.x+13-(t.x+24),e.y+13-(t.y+24));if(d<S.opt.range&&d<bd){bd=d;best=e}}
    if(best){t.ang=Math.atan2(best.y+13-(t.y+24),best.x+13-(t.x+24));
      if(t.cd<=0){t.cd=.7;
        if(S.opt.hitscan){S.beams.push({x0:t.x+24,y0:t.y+24,x1:best.x+13,y1:best.y+13,t:0});S.count('beam');best.hp--;if(best.hp<=0){best.dead=true;S.gold+=10;S.fx.push({x:best.x+13,y:best.y+13,t:0})}}
        else S.add({g:'Projectile',x:t.x+19,y:t.y+19,w:10,h:10,tgt:best,age:0,vx:0,vy:0})}}}
  for(const p of S.of('Projectile')){p.age+=dt;const tg=p.tgt&&!p.tgt.dead?p.tgt:null;
    if(tg){const dx=tg.x+13-p.x-5,dy=tg.y+13-p.y-5,d=Math.hypot(dx,dy)||1;p.vx=dx/d*320;p.vy=dy/d*320}
    p.x+=p.vx*dt;p.y+=p.vy*dt;if(p.age>3||p.x<-30||p.x>S.W+30||p.y<-30||p.y>S.H+30)p.dead=true;
    if(!S.on('Projectile','Enemy')&&!p.passed&&en.some(e=>e.s>=0&&overlap(p,e))){p.passed=true;S.count('pass');S.say('The shot flew straight through an enemy: pair not ticked.','pass',.5)}}
  S.pairs('Projectile','Enemy',(p,e)=>{if(e.s<0)return;e.hp--;if(S.opt.del)p.dead=true;else{p.multi=(p.multi||0)+1;if(p.multi>1)S.count('multi');S.say('The shot was not deleted: it hit again this frame.','multi',1)}if(e.hp<=0){e.dead=true;S.gold+=10;S.fx.push({x:e.x+13,y:e.y+13,t:0})}});
  S.fx.forEach(f=>f.t+=dt);S.fx=S.fx.filter(f=>f.t<.4);
  if(S.lives<=0){S.say('The base fell. Restarting the wave.','lose',2);S.lives=5;S.ent=S.ent.filter(e=>e.g!=='Enemy'&&e.g!=='Projectile')}
 },
 draw(S){const c=S.ctx,gh=S.ghost;
  rect(c,0,0,S.W,S.H,'#2ecc71');
  for(let ty=0;ty<6;ty++)for(let tx=0;tx<10;tx++)spr(c,'td_grass_'+((tx*5+ty*3)%4)+'.png',tx*64,ty*64,64,64);
  c.lineJoin='round';c.lineCap='round';c.strokeStyle='#7a4a22';c.lineWidth=64;c.beginPath();path.forEach((p,i)=>i?c.lineTo(p[0],p[1]):c.moveTo(p[0],p[1]));c.stroke();
  const dirt=img('td_dirt_0.png');if(ready(dirt)){c.strokeStyle=c.createPattern(dirt,'repeat');c.lineWidth=56;c.stroke()}
  for(const z of S.of('PlacementZone'))spr(c,'td_pad.png',z.x,z.y,56,56,{alpha:S.on('PlacementGhost','PlacementZone')?1:.35});
  spr(c,'td_base.png',576,128,64,64);
  for(const t of S.of('Tower')){c.fillStyle='rgba(0,0,0,.25)';c.beginPath();c.arc(t.x+24,t.y+26,22,0,7);c.fill();spr(c,'td_tower_g.png',t.x-4,t.y-4,56,56,{rot:t.ang+Math.PI/2});
    if(S.debug){c.strokeStyle='rgba(0,224,255,.45)';c.lineWidth=1.5;c.beginPath();c.arc(t.x+24,t.y+24,S.opt.range,0,7);c.stroke()}}
  for(const e of S.of('Enemy')){if(e.s<0)continue;spr(c,'td_enemy_a.png',e.x-7,e.y-7,40,40,{rot:e.hd});if(S.debug){c.strokeStyle=C.g;c.lineWidth=1;c.strokeRect(e.x+.5,e.y+.5,e.w,e.h)}}
  for(const p of S.of('Projectile'))spr(c,'td_rocket.png',p.x-14,p.y-14,38,38,{rot:Math.atan2(p.vy,p.vx)+Math.PI/2});
  for(const b of S.beams){c.strokeStyle='rgba(255,230,120,'+(1-b.t/.12)+')';c.lineWidth=4;c.beginPath();c.moveTo(b.x0,b.y0);c.lineTo(b.x1,b.y1);c.stroke()}
  S.fx.forEach(f=>spr(c,'td_smoke.png',f.x-24,f.y-24,48,48,{alpha:1-f.t/.4}));
  c.globalAlpha=.75;spr(c,'td_tower_g.png',gh.x-4,gh.y-4,56,56,{rot:-Math.PI/2});c.globalAlpha=.35;c.fillStyle=gh.ok?C.g:C.r;c.beginPath();c.arc(gh.x+24,gh.y+24,26,0,7);c.fill();c.globalAlpha=1;
  outline(c,gh.ok?'tap to build (50)':gh.why,gh.x+24,gh.y-8,gh.ok?C.g:'#ff8aa0',11,'center');
  outline(c,'gold '+S.gold,S.W-10,20,'#ffd23f',14,'right');outline(c,'lives '+S.lives,S.W-10,40,'#fff',14,'right');
 }}}
TEAMS.td={name:'Tower defense',eng:'GDevelop',preset:'td',thumb:'td_tower_g.png',
 pitch:'Almost all detection: in range, shot reached it, enemy reached the base. The danger is object count.',cfg:tdCfg,
 missions:[
  {type:'hunt',title:'This tower defense is broken',story:'Five things are wrong with it. Build towers, watch a wave, and find them all. You start with 100 gold.',
   rules:{'PlacementGhost|Path':false,'PlacementGhost|Tower':false,'Enemy|Base':false,'Enemy|Enemy':true},opts:{del:false},
   setup:S=>{S.of('Tower')[1].dead=true;for(let i=0;i<4;i++)S.add(newEnemy(880+i*14))},
   bugs:[
    {id:'path',name:'You can build on the road',hintText:'Tap a tower right onto the brown road.',done:S=>(S.ev.builtPath||0)>=1,
     cause:'The pair PlacementGhost x Path is not ticked, so nothing stops a tower going on the road.',fix:{rules:{'PlacementGhost|Path':true}}},
    {id:'stack',name:'Towers stack on top of each other',hintText:'Build a tower on top of an existing tower.',done:S=>(S.ev.builtOverlap||0)>=1,
     cause:'PlacementGhost x Tower is not ticked, so the build check never looks at other towers.',fix:{rules:{'PlacementGhost|Tower':true}}},
    {id:'multi',name:'One shot kills an enemy at once',hintText:'Watch what happens to the first enemy a tower shoots.',done:S=>(S.ev.multi||0)>=1,
     cause:'The shot is not deleted when it hits, so it damages the enemy again on every frame it overlaps.',fix:{opts:{del:true}}},
    {id:'base',name:'Enemies walk through the base for free',hintText:'Press Send 20 enemies and watch the right edge.',done:S=>(S.ev.basePass||0)>=1,
     cause:'Enemy x Base is not ticked, so nothing happens when an enemy reaches it. No life is lost.',fix:{rules:{'Enemy|Base':true}}},
    {id:'cost',name:'The game does far more checks than it needs',hintText:'Press Send 20 enemies. Open "All collision rules" and watch the pair-test counter.',done:S=>S.on('Enemy','Enemy')&&S.tests>=80,
     cause:'Enemy x Enemy is ticked, so every enemy is tested against every other enemy, every frame, for nothing.',fix:{rules:{'Enemy|Enemy':false}}}]},
  {title:'Shots that pass through',term:'Detection vs response',story:'A shot only hurts an enemy if the pair Projectile x Enemy is ticked. Nothing here is pushed or bounced: touching just triggers an effect.',
   predict:{q:'If you untick Projectile x Enemy, what do the shots do?',opts:['They still hurt enemies','They fly straight through, harmless'],ans:1,why:'Nothing tests that pair, so the game never notices the touch.'},
   task:'Untick Projectile x Enemy and watch a few shots.',wait:'Waiting for shots to pass through enemies...',focus:['r:Projectile|Enemy'],done:S=>(S.ev.pass||0)>=4,
   why:'That is detection: a touch triggers an effect and nothing is simulated. Most of a tower defense is detection, so you never need a physics engine for it.',
   engine:'In GDevelop: Projectile is in collision with Enemy, then subtract health from the enemy. No physics behaviour needed.'},
  {title:'Count the cost',term:'The matrix saves frames',story:'Every ticked pair is tested every frame. The counter under the game shows how many tests your matrix makes, and what you would pay if everything were tested against everything.',
   predict:{q:'Send 20 enemies and tick Enemy x Enemy. What happens to the pair tests?',opts:['Barely changes','Jumps by hundreds'],ans:1,why:'20 enemies tested against each other is 190 pairs, every frame.'},
   task:'Press Send 20 enemies, then tick Enemy x Enemy and watch the number.',wait:'Waiting for the pair tests to climb above 200...',focus:['r:Enemy|Enemy'],cost:true,done:S=>S.on('Enemy','Enemy')&&S.tests>=200,
   why:'With 100 enemies that is nearly 5,000 tests every frame for something nobody asked for. A matrix is how you keep the number down: only test pairs that mean something.',
   engine:'In GDevelop every collision condition you write tests all instances of both groups. Fewer events, fewer pairs.'},
  {title:'Build where you should not',term:'Hitbox craft: a separate object',story:'A ghost tower follows your pointer. Three rules decide if the click is allowed: on a pad, not on the path, not on another tower.',
   predict:{q:'If you untick PlacementGhost x PlacementZone, where can you build?',opts:['Still only on pads','Anywhere that is not blocked by another rule'],ans:1,why:'The pad rule is what limited you to pads. The path and tower rules still apply.'},
   task:'Untick PlacementGhost x PlacementZone and build a tower on grass, off the pads. Tap the map. You start with 100 gold.',wait:'Waiting for a tower built off the pads...',focus:['r:PlacementGhost|PlacementZone'],done:S=>(S.ev.builtOff||0)>=1,
   why:'The ghost is its own object with its own rules. Three small pairs replace a pile of special cases, and each one is a line in the matrix.',
   engine:'In GDevelop the ghost is a sprite that follows the mouse. The click event checks its collisions with PlacementZone, Path and Tower before it creates a tower.'},
  {title:'An instant shot',term:'Raycast',story:'Some towers fire instantly: a ray from the tower to the first enemy in range. There is no shot object to track.',
   predict:{q:'With instant shots on, how many Projectile objects exist?',opts:['The same as before','None'],ans:1,why:'A ray is a line test, not an object. It finds the first enemy along the line in one step.'},
   task:'Turn on Instant shots and watch the towers.',wait:'Waiting for five instant shots...',focus:['t:hitscan'],done:S=>(S.ev.beam||0)>=5,
   why:'A raycast answers "what is the first thing along this line?". Instant shots, line of sight and ledge checks all use it, and none of them needs a fast moving object that might tunnel.',
   engine:'GDevelop: cast a ray from X;Y, angle and max distance, against Enemy, and save the hit point in two scene variables.'},
  {title:'One shot, many hits',term:'Once, not every frame',story:'The shot touches the enemy for more than one frame. Without a rule for that, one shot becomes many hits.',
   predict:{q:'If the shot is not deleted when it hits, what happens?',opts:['Still one point of damage','It hurts the enemy again every frame it overlaps'],ans:1,why:'Overlap is a state, not an event. It is true again next frame.'},
   task:'Turn off "Delete the shot in the same event as the damage" and watch the enemies.',wait:'Waiting for a shot to hit twice...',focus:['t:del'],done:S=>(S.ev.multi||0)>=1,
   why:'The same lesson as spikes in a platformer. Delete the thing, or set a flag, in the same event that applies the effect.',
   engine:'In GDevelop: put Delete Projectile in the same event as the damage action.'}],
 code:`// GDevelop events (the distance step is pseudocode)
// Tower finds a target
Condition: Distance between Tower and Enemy < Tower.Range
Action:    Pick the nearest Enemy to Tower, create a Projectile aimed at it

// Projectile damage, once
Condition: Projectile is in collision with Enemy
Action:    Subtract Projectile.Damage from Enemy.Health
Action:    Delete Projectile                  // same event, so it cannot hit twice

// Enemy reaches the base
Condition: Enemy is in collision with Base
Action:    Subtract 1 from Lives, delete Enemy`,
 engNote:'The same ideas as GDevelop events. A matrix keeps these to the pairs that matter.',
 refs:[['Bloons TD 6','range circles, projectile hits, huge enemy counts','Bloons TD 6 tower range and projectile mechanics'],['Kingdom Rush','placement spots and the enemy path','Kingdom Rush tower placement and enemy path'],['Plants vs. Zombies','lane based hit checks instead of free collision','Plants vs Zombies lane based hit detection']]};
})();
