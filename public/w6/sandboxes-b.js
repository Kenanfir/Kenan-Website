'use strict';
/* ============================================================ DROPPER / PLINKO (GDevelop Physics2) */
(function(){
const W=640,H=384,BR=8,PR=6,sp=W/13,binY=H-60,bins=8,bw=W/bins,vals=[100,10,5,1,1,5,10,100];
const bumpers=[[213,150],[427,150],[320,222]];
const pegs=[];for(let r=0;r<7;r++){const odd=r%2===1,n=odd?12:13;for(let i=0;i<n;i++){const x=odd?(i+1)*sp:(i+.5)*sp,y=66+r*34;if(!bumpers.some(b=>Math.hypot(x-b[0],y-b[1])<36))pegs.push({x,y})}}
function plinkoCfg(){return{W,H,preset:'plinko',controls:'Tap or click the board to drop a ball.',legend:'Debug view: green outlines show every hitbox.',pad:[],
 rules:[
  {a:'Ball',b:'Peg',on:true,fx:'The ball bounces off pegs (collision RESPONSE).'},
  {a:'Ball',b:'Wall',on:true,fx:'The board sides keep the ball in.'},
  {a:'Ball',b:'Bumper',on:true,fx:'Bumpers kick the ball harder.'},
  {a:'Ball',b:'Bin',on:true,fx:'A ball in a slot is scored and removed (DETECTION, nothing is pushed).'},
  {a:'Ball',b:'Ball',on:false,extra:true,fx:'Balls bounce off each other. Costly with many balls.'}],
 toggles:[
  {id:'bullet',on:false,label:'Sub-steps (like "Set as bullet")',fx:'Off + a fast drop = balls skip pegs. On = 10 small steps a frame.'},
  {id:'nudge',on:true,label:'Random nudge on bounce',fx:'Off: perfect physics. A ball on top of a peg can balance there.'},
  {id:'aim',on:false,label:'Aim ray from the dropper (a raycast)',fx:'On: a ray shoots down from your pointer to the first thing it meets.'}],
 sliders:[{id:'vy',label:'Drop speed',min:0,max:3500,step:100,val:0,unit:' px/s'},{id:'rest',label:'Bounce',min:10,max:95,val:55,unit:'%'}],
 buttons:[['Drop ball',S=>S.drop()],['Drop 10',S=>{for(let i=0;i<10;i++)S.drop()}],['Drop on a peg',S=>S.drop(pegs[3].x-BR)]],
 init(S){S.ent=[];S.score=0;S.n=0;S.aimX=null;S.aimMoved=0;S.aimHit=null;
  S.drop=x=>{if(S.of('Ball').length>=60)return{x:0,y:0,vx:0,vy:0,w:16,h:16,g:'Ball',dead:true,done:1,t:9};return S.add({g:'Ball',x:(x==null?60+Math.random()*(W-120):x),y:10,w:BR*2,h:BR*2,vx:0,vy:S.opt.vy,contacts:0,fast:S.opt.vy>=2500,done:0,t:0,still:0})};
  pegs.forEach(p=>S.add({g:'Peg',x:p.x-PR,y:p.y-PR,w:PR*2,h:PR*2,cx:p.x,cy:p.y,r:PR}));
  bumpers.forEach(b=>S.add({g:'Bumper',x:b[0]-20,y:b[1]-20,w:40,h:40,cx:b[0],cy:b[1],r:20}));
  for(let i=0;i<bins;i++)S.add({g:'Bin',x:i*bw+3,y:binY,w:bw-6,h:60,i});
  S.add({g:'Wall',x:-10,y:0,w:10,h:H});S.add({g:'Wall',x:W,y:0,w:10,h:H});
  if(!S.bound){S.bound=true;const c=S.cv.c;c.addEventListener('pointerdown',e=>S.drop(S.cv.pos(e).x-BR));c.addEventListener('pointermove',e=>{const x=S.cv.pos(e).x;if(S.aimX!=null&&Math.abs(x-S.aimX)>1)S.aimMoved++;S.aimX=x})}
  S.drop(W/2+3-BR)},
 update(S,dt){
  const balls=S.of('Ball'),n=S.opt.bullet?10:1,h2=dt/n,rest=S.opt.rest/100;
  S.tests+=balls.length*(S.on('Ball','Peg')?S.of('Peg').length:0);
  for(const b of balls){
   if(b.done){b.t+=dt;if(b.t>.5)b.dead=true;continue}
   for(let k=0;k<n&&!b.done;k++){
    b.vy+=900*h2;b.x+=b.vx*h2;b.y+=b.vy*h2;
    if(S.on('Ball','Wall')){if(b.x<0){b.x=0;b.vx=Math.abs(b.vx)*rest}if(b.x+16>W){b.x=W-16;b.vx=-Math.abs(b.vx)*rest}}
    const circ=(o,kick)=>{const dx=b.x+BR-o.cx,dy=b.y+BR-o.cy,d=Math.hypot(dx,dy),m=BR+o.r;if(d<m&&d>0){const nx=dx/d,ny=dy/d;b.x=o.cx+nx*m-BR;b.y=o.cy+ny*m-BR;const vn=b.vx*nx+b.vy*ny;if(vn<0){const e=kick?1.35:1+rest;b.vx-=e*vn*nx;b.vy-=e*vn*ny;if(S.opt.nudge)b.vx+=(Math.random()-.5)*10;b.contacts++;if(kick)S.say('Bumper kick!','bump',.4)}}};
    if(S.on('Ball','Peg'))for(const p of S.of('Peg'))circ(p,false);
    if(S.on('Ball','Bumper')){S.tests+=S.of('Bumper').length;for(const p of S.of('Bumper'))circ(p,true)}
    else if(!b.bm&&S.of('Bumper').some(o=>Math.hypot(b.x+BR-o.cx,b.y+BR-o.cy)<BR+o.r)){b.bm=1;S.count('bumperMiss')}
    if(b.y>H+30||b.x<-30||b.x>W+30){b.dead=true;if(b.x<-30||b.x>W+30)S.count('side');if(b.fast&&b.contacts<=1)S.count('skip');if(!S.on('Ball','Bin')&&b.y>H)S.count('lost');S.say(b.y>H?'A ball fell out of the bottom and nothing counted it.':'A ball left the board.','lost',.8)}}
   if(!b.dead&&Math.hypot(b.vx,b.vy)<8&&b.y<binY-30){b.still+=dt;if(b.still>1&&!b.flag){b.flag=1;S.count('stuck');S.say('A ball is stuck on a peg.','stuck',3)}}else b.still=0}
  S.pairs('Ball','Bin',(b,bin)=>{if(b.done)return;b.done=1;S.score+=vals[bin.i];S.n++;
    if(!S.on('Ball','Peg'))S.count('slotNoPeg');
    if(b.fast&&b.contacts<=1){S.count('skip');S.say('Skipped the pegs completely. Tunnelling.','skip',.3)}
    else if(b.fast&&b.contacts>=3&&S.opt.bullet){S.count('fixed');S.say('Fast ball, but it hit the pegs. Sub-steps fixed it.','fixed',.3)}
    else S.say('Slot '+(bin.i+1)+' counted: +'+vals[bin.i]+'. Detection: the ball was not pushed.','slot',.1)});
  S.pairs('Ball','Ball',(a,b)=>{const dx=b.x-a.x,dy=b.y-a.y,d=Math.hypot(dx,dy)||1;if(d<16){const nx=dx/d,ny=dy/d,ov=(16-d)/2;a.x-=nx*ov;a.y-=ny*ov;b.x+=nx*ov;b.y+=ny*ov;const va=a.vx*nx+a.vy*ny,vb=b.vx*nx+b.vy*ny;a.vx+=(vb-va)*nx;a.vy+=(vb-va)*ny;b.vx+=(va-vb)*nx;b.vy+=(va-vb)*ny}});
  // aim ray: straight down from the pointer, first peg or bumper it meets
  S.aimHit=null;
  if(S.opt.aim&&S.aimX!=null){let best=null;for(const o of [...S.of('Peg'),...S.of('Bumper')]){const dx=Math.abs(S.aimX-o.cx);if(dx<=o.r){const y=o.cy-Math.sqrt(o.r*o.r-dx*dx);if(!best||y<best.y)best={y,what:o.g}}}
    S.aimHit=best||{y:binY,what:'Bin'};S.tests+=S.of('Peg').length+S.of('Bumper').length;if(S.aimMoved>3)S.count('aimed')}
 },
 draw(S){const c=S.ctx;
  rect(c,0,0,S.W,S.H,'#0e2430');
  for(let ty=0;ty<6;ty++)for(let tx=0;tx<10;tx++)spr(c,'pl_board.png',tx*64,ty*64,64,64);
  for(let i=0;i<bins;i++){spr(c,'pl_bin.png',i*bw+2,binY,bw-4,60,{alpha:S.on('Ball','Bin')?1:.4});outline(c,String(vals[i]),i*bw+bw/2,binY+40,S.on('Ball','Bin')?C.g:'#667',16,'center')}
  for(let i=0;i<=bins;i++)spr(c,'pl_divider.png',i*bw-4,binY-6,8,66);
  for(const p of S.of('Peg'))spr(c,'pl_peg.png',p.cx-8,p.cy-8,16,16,{alpha:S.on('Ball','Peg')?1:.35});
  for(const b of S.of('Bumper'))spr(c,'pl_bumper.png',b.cx-22,b.cy-22,44,44,{alpha:S.on('Ball','Bumper')?1:.35});
  if(S.debug)for(const o of [...S.of('Peg'),...S.of('Bumper')]){c.strokeStyle='rgba(163,255,18,.55)';c.lineWidth=1;c.beginPath();c.arc(o.cx,o.cy,o.r,0,7);c.stroke()}
  for(const b of S.of('Ball')){spr(c,'pl_ball.png',b.x,b.y,16,16,{alpha:b.done?.6:1});if(S.debug){c.strokeStyle=C.g;c.lineWidth=1;c.strokeRect(b.x+.5,b.y+.5,16,16)}}
  if(S.aimHit){c.setLineDash([5,4]);c.strokeStyle=C.c;c.lineWidth=2;c.beginPath();c.moveTo(S.aimX,0);c.lineTo(S.aimX,S.aimHit.y);c.stroke();c.setLineDash([]);c.fillStyle=C.c;c.beginPath();c.arc(S.aimX,S.aimHit.y,4,0,7);c.fill();outline(c,'ray hit: '+S.aimHit.what,S.aimX+8,Math.max(14,S.aimHit.y-6),C.c,11)}
  if(!S.on('Ball','Wall')){c.setLineDash([4,4]);c.strokeStyle=C.r;c.strokeRect(1,1,W-2,H-2);c.setLineDash([])}
  outline(c,'score '+S.score,10,20,'#fff',14);
 }}}
TEAMS.plinko={name:'Dropper / Plinko',eng:'GDevelop (Physics2)',preset:'plinko',thumb:'pl_ball.png',
 pitch:'The one type where a physics engine is right: the bounce is the game. The slots still just count.',cfg:plinkoCfg,
 missions:[
  {type:'hunt',title:'This board is broken',story:'Four things are wrong with this plinko board. Drop balls, tap the board, and find them all.',
   rules:{'Ball|Wall':false,'Ball|Bumper':false},opts:{bullet:false,nudge:false,vy:3000},
   setup:S=>{S.of('Ball').forEach(b=>b.dead=true);for(let i=0;i<6;i++)S.drop();const sb=S.drop(pegs[3].x-BR);sb.vy=0;sb.fast=false},
   bugs:[
    {id:'skip',name:'Fast balls skip right through the pegs',hintText:'Drop a few balls and watch the fast ones fall.',done:S=>(S.ev.skip||0)>=1,
     cause:'A fast ball moves further in one frame than a peg is wide, and the game only checks once per frame.',fix:{opts:{bullet:true,vy:0}}},
    {id:'stuck',name:'A ball gets stuck on a peg',hintText:'One ball starts on top of a peg. Wait a few seconds.',done:S=>(S.ev.stuck||0)>=1,
     cause:'Perfect shapes and perfect physics: nothing pushes the ball sideways, so it balances forever.',fix:{opts:{nudge:true}}},
    {id:'side',name:'Balls fall out through the sides',hintText:'Tap the board close to the left or right edge.',done:S=>(S.ev.side||0)>=1,
     cause:'The pair Ball x Wall is not ticked, so nothing keeps the ball inside the board.',fix:{rules:{'Ball|Wall':true}}},
    {id:'bump',name:'The bumpers do nothing',hintText:'Tap the board right above a red bumper.',done:S=>(S.ev.bumperMiss||0)>=1,
     cause:'The pair Ball x Bumper is not ticked, so a ball just passes through the bumper.',fix:{rules:{'Ball|Bumper':true}}}]},
  {title:'Bounce vs count',term:'Detection vs response',story:'Pegs push the ball (response). Slots only notice it (detection). Both are pairs. Right now every rule is ticked.',
   predict:{q:'If you untick Ball x Peg, what do the balls do?',opts:['Still bounce off the pegs','Fall straight through the pegs'],ans:1,why:'The pegs are still drawn, but nothing tests the pair, so nothing pushes the ball.'},
   task:'Untick Ball x Peg and drop a ball. Watch it fall.',wait:'Waiting for a ball to reach a slot without bouncing...',focus:['r:Ball|Peg'],done:S=>(S.ev.slotNoPeg||0)>=1,
   why:'Pegs need response, because they must change the ball\'s direction. Slots need detection, because they only record what happened. A physics engine is for the first kind. Do not use it for the second.',
   engine:'GDevelop Physics2: pegs are static bodies (response). Slots use a collision condition (detection) and Delete Ball.'},
  {title:'The pair you forgot',term:'The collision matrix',story:'The slots are triggers. They count a ball because the pair Ball x Bin is ticked. A forgotten pair is a silent bug: the game runs and nothing happens.',
   predict:{q:'If you untick Ball x Bin, what happens at the bottom?',opts:['Balls still score','Balls fall out and nothing is counted'],ans:1,why:'No pair, no test, no score. Nothing complains.'},
   task:'Untick Ball x Bin and drop a ball.',wait:'Waiting for a ball to fall out uncounted...',focus:['r:Ball|Bin'],done:S=>(S.ev.lost||0)>=1,
   why:'Writing the matrix first catches this: every object that needs to react to another object appears in it. If a row has no ticks, ask why.',
   engine:'In GDevelop this is a missing condition: you never wrote Ball is in collision with Bin, so the event never runs.'},
  {title:'The ball that cannot fall',term:'Geometry is not forgiving',story:'Perfect shapes and perfect physics can balance a ball on top of a peg forever. The ball starts exactly on one.',
   predict:{q:'With the random nudge off, a ball sits exactly on top of a peg. What happens?',opts:['It rolls off','It can balance there'],ans:1,why:'There is no sideways push at all, so nothing ever tips it.'},
   task:'The random nudge is off and a ball is placed on a peg. Wait a couple of seconds.',wait:'Waiting for the ball to stick...',opts:{nudge:false},focus:['t:nudge'],
   setup:S=>{S.of('Ball').forEach(b=>b.dead=true);S.drop(pegs[3].x-BR)},done:S=>(S.ev.stuck||0)>=1,
   why:'Real collisions are never perfect and your game should not be either. A tiny random nudge on contact, or a nudge when the speed is near zero, keeps the game moving.',
   engine:'GDevelop Physics2: when the ball speed is almost zero and it is above the slots, apply a small random horizontal force.'},
  {title:'Look down the line',term:'Raycast',story:'Move your pointer over the board. A ray goes straight down from it and stops at the first thing it meets.',
   predict:{q:'What does that ray tell you?',opts:['Where the ball will end up','What it would hit first'],ans:1,why:'A ray reports the first thing along a line, not what happens after the bounce.'},
   task:'Turn on the aim ray and sweep your pointer across the board.',wait:'Waiting for you to move the pointer over the board...',opts:{aim:true},focus:['t:aim'],done:S=>(S.ev.aimed||0)>=20,
   why:'Use a raycast for "what is in front of me": the first peg, the first wall, the first enemy. Do not use it to predict a bouncing result, only the first contact.',
   engine:'GDevelop: cast a ray from X;Y, angle 90 and a max distance, against Peg, and save the hit point in two scene variables.'},
  {title:'Too fast to hit',term:'Tunnelling',story:'A ball dropped at top speed moves further in one frame than a peg is wide. The game checks overlap once per frame.',
   predict:{q:'Drop balls at full speed with sub-steps off. What do they do?',opts:['Bounce as normal','Some pass straight through pegs'],ans:1,why:'Frame one: above the peg. Frame two: below it. No frame ever overlapped.'},
   task:'Tap the board to drop fast balls. See some skip the pegs, then turn Sub-steps on and keep dropping until balls bounce.',wait:'Waiting for two fast balls that hit the pegs with sub-steps on...',opts:{vy:3500,bullet:false},focus:['t:bullet'],setup:S=>{S.of('Ball').forEach(b=>b.dead=true);for(let i=0;i<5;i++)S.drop()},done:S=>(S.ev.fixed||0)>=2,
   why:'Fast things need more than one test per frame: sub-steps, a swept test, or a raycast along the move. GDevelop Physics has a "Set as bullet" action for exactly this.',
   engine:'GDevelop Physics2: the Set as bullet action on the Ball, or cap the maximum speed.'}],
 code:`// GDevelop. Physics2 behaviour on Ball (dynamic) and Peg (static).
// Ball: Bounce about 0.5, Friction about 0.1.   Pegs: Static.
Action: Ball: Set as bullet                 // better collision at high speed, costs performance

// Slot counts the ball: detection only, nothing is pushed
Condition: Ball is in collision with BinGroup
Action:    Add Bin.Score to Score
Action:    Delete Ball

// Ball stuck on a peg
Condition: Ball speed < 5 and Ball.Y() < BinTop
Action:    Apply a small random horizontal force to Ball`,
 engNote:'The same ideas as GDevelop events and Physics2 actions.',
 refs:[['Peggle','a ball bouncing off many pegs, the whole game is the bounce','Peggle physics ball peg gameplay'],['Pachinko machines','real pegs and slots, the same idea in the physical world','pachinko machine how it works'],['Angry Birds','physics IS the game, a case where a physics engine fits','Angry Birds physics explained']]};
})();

/* ============================================================ ROBLOX HORROR (Roblox Studio, Luau) */
(function(){
const T=32,W=640,H=352;
const WALLS=[[0,0,640,32],[0,320,640,32],[0,0,32,352],[608,0,32,352],[224,32,32,96],[224,192,32,128],[480,32,32,96],[480,192,32,128]];
const hashN=(x,y)=>((x*73856093)^(y*19349663))>>>0;
function horrorCfg(){return{W,H,preset:'rbx',controls:'Move: WASD or arrows. Use: E or X.',legend:'Debug view: green = your hitbox and ray, red = trigger zone and monster.',pad:[['u','▲'],['d','▼'],['l','◀'],['r','▶'],['a','USE']],
 rules:[
  {a:'Player',b:'World',on:true,fx:'Walls stop you.'},
  {a:'Player',b:'Door',on:true,fx:'A closed door stops you. Open it with USE.'},
  {a:'Player',b:'Prop',on:true,fx:'Barrels, tables and chests stop you.'},
  {a:'Player',b:'Monster',on:true,fx:'The monster catches you.'},
  {a:'Monster',b:'World',on:true,fx:'The monster cannot walk through walls.'},
  {a:'Monster',b:'Door',on:true,fx:'Closed doors stop the monster too.'},
  {a:'Player',b:'Trigger',on:true,fx:'The zone in the corridor fires a jump scare.'}],
 toggles:[
  {id:'noself',on:true,label:'Interaction ray ignores your own character',fx:'Off: the ray hits you first, so the prompt never appears.'},
  {id:'once',on:true,label:'Jump scare fires once (a flag)',fx:'Off: it fires every frame you stand in the zone.'}],
 sliders:[],buttons:[],
 init(S){S.ent=[];S.keys=0;S.scares=0;S.fired=false;S.flick=0;S.face={x:1,y:0};S.prevAct=false;S.won=0;S.caught=0;S.chaseT=0;S.prevState='patrol';
  WALLS.forEach(w=>S.add({g:'World',x:w[0],y:w[1],w:w[2],h:w[3]}));
  [[3,7,'barrel'],[9,8,'table'],[13,2,'chest']].forEach(p=>S.add({g:'Prop',x:p[0]*T+2,y:p[1]*T+2,w:28,h:28,sp:p[2]}));
  S.doors=[S.add({g:'Door',x:224,y:128,w:32,h:64,open:false,name:'door',lock:false}),S.add({g:'Door',x:480,y:128,w:32,h:64,open:false,name:'exit door',lock:true})];
  S.key=S.add({g:'Interactable',x:5*T+6,y:1*T+6,w:20,h:20,name:'key'});
  S.p=S.add({g:'Player',x:2*T+6,y:4*T+6,w:20,h:20});
  S.m=S.add({g:'Monster',x:11*T+4,y:4*T+4,w:24,h:24,state:'patrol',wp:0,freeze:false});
  S.zone=S.add({g:'Trigger',x:256,y:128,w:64,h:64});S.exit={x:512,y:128,w:96,h:64}},
 update(S,dt){
  const p=S.p,m=S.m,I=S.input();S.selfFlash=Math.max(0,(S.selfFlash||0)-dt);
  const solidsFor=who=>{const o=[];if(S.on(who,'World'))o.push(...S.of('World'));if(S.on(who,'Door'))o.push(...S.of('Door').filter(d=>!d.open));if(who==='Player'&&S.on('Player','Prop'))o.push(...S.of('Prop'));return o};
  let dx=(I.r?1:0)-(I.l?1:0),dy=(I.d?1:0)-(I.u?1:0);if(dx||dy){const l=Math.hypot(dx,dy);S.face={x:dx/l,y:dy/l};dx=dx/l*115*dt;dy=dy/l*115*dt}
  const ps=solidsFor('Player');S.tests+=ps.length;moveAxis(p,dx,0,ps);moveAxis(p,0,dy,ps);
  if(p.x+10<30||p.x+10>610||p.y+10<30||p.y+10>322)S.count('outside');
  // interaction ray, 48 px from the middle of the player
  const ox=p.x+10,oy=p.y+10,L=48,x1=ox+S.face.x*L,y1=oy+S.face.y*L;let best=1,hit=null;
  if(!S.opt.noself){best=0;hit={self:true}}
  else for(const e of [...S.of('World'),...S.of('Door'),...S.of('Prop'),...S.of('Interactable')]){const t=segRect(ox,oy,x1,y1,e);if(t!==null&&t<best&&!(e.g==='Door'&&e.open)){best=t;hit=e}}
  S.tests+=S.of('World').length+S.of('Door').length;
  S.ray={x0:ox,y0:oy,x1:ox+(x1-ox)*best,y1:oy+(y1-oy)*best,hit};
  S.prompt=!hit?'':hit.self?(S.selfFlash>0?'the ray hit YOU first':''):hit.g==='Door'?(hit.lock&&!S.keys?'locked, find the key':hit.open?'close the '+hit.name:'open the '+hit.name):hit.g==='Interactable'?'pick up the '+hit.name:'';
  if(I.act&&!S.prevAct&&hit&&!hit.self){
   if(hit.g==='Interactable'){hit.dead=true;S.keys++;S.say('Picked up the key.','key')}
   else if(hit.g==='Door'){if(hit.lock&&!S.keys)S.say('Locked. You need the key.','lock');else{hit.open=!hit.open;S.say((hit.open?'Opened the ':'Closed the ')+hit.name+'.','dr')}}}
  if(I.act&&!S.prevAct&&hit&&hit.self){S.count('selfUse');S.selfFlash=1.6;S.say('You pressed USE and the ray hit your own body first.','selfuse',.5)}
  if(!S.on('Player','Prop')&&S.of('Prop').some(e=>overlap(p,e)))S.count('thruProp');
  S.prevAct=I.act;
  // monster: chases on a clear line of sight, hunts by sound, otherwise patrols
  const cm={x:m.x+12,y:m.y+12},cp={x:p.x+10,y:p.y+10},dist=Math.hypot(cp.x-cm.x,cp.y-cm.y);
  let blocked=false;for(const e of [...S.of('World'),...S.of('Door').filter(d=>!d.open),...S.of('Prop')]){if(segRect(cm.x,cm.y,cp.x,cp.y,e)!==null){blocked=true;break}}
  S.tests+=S.of('World').length+S.of('Prop').length;
  m.state=!blocked&&dist<260?'chase':dist<200?'hunt':'patrol';
  if(m.state==='chase')S.chaseT+=dt;else{if(S.prevState==='chase'&&S.chaseT>.4){S.count('lost');S.say('You broke the line of sight: it lost you.','lost',2)}S.chaseT=0}
  S.prevState=m.state;
  if(!m.freeze){let tx,ty,sp;if(m.state==='patrol'){const w=[[368,48],[368,304]][m.wp];tx=w[0];ty=w[1];sp=48;if(Math.hypot(tx-cm.x,ty-cm.y)<8)m.wp=1-m.wp}else{tx=cp.x;ty=cp.y;sp=m.state==='chase'?85:62}
   const a=Math.atan2(ty-cm.y,tx-cm.x),ms=solidsFor('Monster');S.tests+=ms.length;moveAxis(m,Math.cos(a)*sp*dt,0,ms);moveAxis(m,0,Math.sin(a)*sp*dt,ms)}
  if(m.x+12<236&&S.of('Door')[0]&&!S.of('Door')[0].open&&m.y+12>128&&m.y+12<192)S.count('mthru');
  S.pairs('Player','Monster',()=>{S.caught++;S.say('The monster caught you. Back to the start.','caught',1);p.x=2*T+6;p.y=4*T+6;m.x=11*T+4;m.y=4*T+4});
  const inz=overlap(p,S.zone);S.tests+=S.on('Player','Trigger')?1:0;
  if(S.on('Player','Trigger')&&inz){if(!S.opt.once||!S.fired){S.fired=true;S.scares++;S.flick=.6;S.say('JUMP SCARE ('+S.scares+')','scare',0)}}
  S.flick=Math.max(0,S.flick-dt);
  if(overlap(p,S.exit)&&!S.won){S.won=1;S.say('You escaped. Resetting.','win',3);setTimeout(()=>{S.ent=[];S.cfg.init(S)},2200)}
 },
 draw(S){const c=S.ctx,p=S.p,m=S.m;
  rect(c,0,0,W,H,'#3a1c1c');
  for(let r=0;r<11;r++)for(let k=0;k<20;k++)spr(c,'dg_floor_'+(hashN(k,r)%7===0?1:0)+'.png',k*T,r*T,T,T);
  for(let k=0;k<20;k++)for(let r=0;r<11;r++){const wall=WALLS.some(w=>k*T>=w[0]&&k*T<w[0]+w[2]&&r*T>=w[1]&&r*T<w[1]+w[3]);if(wall)spr(c,'dg_wall.png',k*T,r*T,T,T,{alpha:S.on('Player','World')?1:.45})}
  [3,11,17].forEach(k=>spr(c,'dg_torch.png',k*T,0,T,T));
  const z=S.zone;spr(c,'dg_rubble.png',z.x,z.y,32,32,{alpha:.45});spr(c,'dg_rubble.png',z.x+32,z.y+32,32,32,{alpha:.45});
  for(let r=4;r<6;r++)spr(c,'dg_exit.png',17*T,r*T,T,T);
  for(const d of S.of('Door'))for(let r=0;r<2;r++)spr(c,d.open?'dg_door_open.png':(d.lock?'dg_door_locked.png':'dg_door.png'),d.x,d.y+r*T,T,T);
  for(const e of S.of('Prop'))spr(c,'dg_'+e.sp+'.png',e.x-2,e.y-2,32,32,{alpha:S.on('Player','Prop')?1:.5});
  for(const k of S.of('Interactable')){spr(c,'dg_key.png',k.x-6,k.y-6,32,32)}
  spr(c,'dg_monster.png',m.x-4,m.y-4,32,32,{flip:S.p.x<m.x});
  spr(c,'dg_player.png',p.x-6,p.y-8,32,32,{flip:S.face.x<0});
  if(S.debug){c.setLineDash([5,4]);c.strokeStyle=C.r;c.lineWidth=1.5;c.strokeRect(z.x+.5,z.y+.5,z.w,z.h);c.setLineDash([]);outline(c,'trigger',z.x+4,z.y+12,C.r,10);
    c.strokeStyle=C.g;c.lineWidth=1.5;c.strokeRect(p.x+.5,p.y+.5,p.w,p.h);c.strokeStyle=m.state==='chase'?C.r:'#ff9a3c';c.strokeRect(m.x+.5,m.y+.5,m.w,m.h);
    if(S.ray){c.strokeStyle=S.ray.hit&&S.ray.hit.self?C.r:C.g;c.lineWidth=2;c.beginPath();c.moveTo(S.ray.x0,S.ray.y0);c.lineTo(S.ray.x1,S.ray.y1);c.stroke()}
    outline(c,m.state==='hunt'?'hears you':m.state,m.x+12,m.y-6,m.state==='chase'?C.r:'#ff9a3c',10,'center')}
  // a little darkness around the player
  const g=c.createRadialGradient(p.x+10,p.y+10,70,p.x+10,p.y+10,230);g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(1,'rgba(0,0,10,.62)');c.fillStyle=g;c.fillRect(0,0,W,H);
  if(S.prompt)outline(c,'[USE] '+S.prompt,p.x+10,p.y-12,S.ray.hit&&S.ray.hit.self?C.r:C.g,12,'center');
  if(S.flick>0){c.fillStyle='rgba(0,0,0,'+Math.min(.92,S.flick*1.8)+')';c.fillRect(0,0,W,H);outline(c,'THE LIGHTS GO OUT',W/2,H/2,C.r,22,'center')}
  outline(c,'keys '+S.keys+'    scares '+S.scares+'    caught '+S.caught,12,H-10,'#fff',11);
 }}}
TEAMS.rbx={name:'Roblox horror',eng:'Roblox Studio (Luau)',preset:'rbx',thumb:'dg_monster.png',
 pitch:'Roblox has collision groups, a real matrix. Interaction and sight are raycasts.',cfg:horrorCfg,
 missions:[
  {type:'hunt',title:'This dungeon is broken',story:'Four things are wrong with it. Explore, touch everything, and find them all. The first door is already open.',
   rules:{'Player|Prop':false,'Player|World':false},opts:{noself:false,once:false},
   setup:S=>{S.of('Door')[0].open=true},
   bugs:[
    {id:'walls',name:'You can walk out through the walls',hintText:'Walk into any wall and keep going.',done:S=>(S.ev.outside||0)>=1,
     cause:'Player x World is not ticked, so the walls exist on screen but nothing tests them.',fix:{rules:{'Player|World':true}}},
    {id:'props',name:'You walk through the barrel and the crates',hintText:'Walk into the barrel in the left room.',done:S=>(S.ev.thruProp||0)>=1,
     cause:'Player x Prop is not ticked, so props are scenery the player ignores.',fix:{rules:{'Player|Prop':true}}},
    {id:'use',name:'Using things does nothing',hintText:'Face the key or a door and press E.',done:S=>(S.ev.selfUse||0)>=1,
     cause:'The interaction ray starts inside your own body, so the first thing it hits is you.',fix:{opts:{noself:true}}},
    {id:'scare',name:'The jump scare fires over and over',hintText:'Walk into the glowing rubble square in the corridor.',done:S=>S.scares>=3,
     cause:'A trigger zone is true on every frame you stand in it. Without a flag it fires every frame.',fix:{opts:{once:true}}}]},
  {title:'Walk through the walls',term:'Detection vs response',story:'Walls stop you because Player x World is ticked: the engine tests it and pushes you back. Your character is next to the left wall.',
   predict:{q:'If you untick Player x World, what happens at the wall?',opts:['It still stops you','You walk straight through it'],ans:1,why:'Nothing tests the pair, so nothing pushes you out of the wall.'},
   task:'Untick Player x World and walk left (A) into the wall.',wait:'Waiting for you to walk through a wall...',focus:['r:Player|World'],setup:S=>{S.p.x=64;S.p.y=128;S.m.freeze=true},done:S=>(S.ev.outside||0)>=1,
   why:'Walls need a RESPONSE: stop the player, which is what a physics engine does for solid parts. Roblox does this for anchored parts that can collide. Turning CanCollide off on a part is this same step.',
   engine:'In Roblox, the part property CanCollide (or a collision group that does not collide) is this tick.'},
  {title:'A door the monster ignores',term:'The collision matrix',story:'The door stops the monster because Monster x Door is ticked. In Roblox every group collides with every other by default, so you write the exceptions. This sandbox shows ticks as pairs that interact.',
   predict:{q:'Untick Monster x Door, then stand next to the closed door. What does the monster do?',opts:['Waits behind the closed door','Walks straight through it'],ans:1,why:'The door only stops what it is tested against. For the monster it no longer exists.'},
   task:'Untick Monster x Door and wait. The monster hears you and comes for you.',wait:'Waiting for the monster to come through the closed door...',focus:['r:Monster|Door'],setup:S=>{S.p.x=190;S.p.y=160;S.m.x=330;S.m.y=150},done:S=>(S.ev.mthru||0)>=1,
   why:'Every pair is a decision. Decide on purpose whether doors stop the monster, and write it in the matrix. A forgotten pair is a monster that walks through a wall.',
   engine:'Roblox: PhysicsService:CollisionGroupSetCollidable("Monster", "Door", false) makes them ignore each other. Everything else collides by default.'},
  {title:'A scare that fires once',term:'Once, not every frame',story:'The glowing rubble is a trigger zone. It detects you and sets off the jump scare. It never pushes you.',
   predict:{q:'If the scare has no "fired once" flag, how many times does it fire while you stand in it?',opts:['Once','Every frame you are inside'],ans:1,why:'Overlap is a state. The zone sees you again each frame.'},
   task:'Turn the flag OFF, then walk into the rubble zone (down from where you stand).',wait:'Waiting for the scare to fire five times...',focus:['t:once'],setup:S=>{S.p.x=272;S.p.y=96;S.m.freeze=true},done:S=>S.scares>=5,
   why:'A trigger is detection: it never moves you, and it tests every frame. Anything that should happen once needs a flag or a timer, same as spikes in a platformer.',
   engine:'Roblox: debounce a Touched or overlap event with a variable, or disconnect the connection after the first hit.'},
  {title:'Look at what you use',term:'Raycast',story:'To use the key, a ray goes forward from your character. You are facing the key. Press USE (E) and see what happens.',
   predict:{q:'The ray starts inside your own body. What does it hit first?',opts:['The key in front of you','Your own body'],ans:1,why:'A ray reports the first thing along the line, and it starts inside you.'},
   task:'Press USE (E): the prompt says the ray hit you. Then turn "Interaction ray ignores your own character" ON and press USE again.',wait:'Waiting for you to pick up the key...',opts:{noself:false},focus:['t:noself'],setup:S=>{S.p.x=166;S.p.y=84;S.face={x:0,y:-1};S.m.freeze=true},done:S=>S.keys>=1,
   why:'A raycast needs a start, a direction and a filter. If the filter does not exclude yourself, the first hit is always you.',
   engine:'Roblox: workspace:Raycast(origin, direction, params) with params.FilterType = Exclude and your character in FilterDescendantsInstances.'},
  {title:'Hide from the line of sight',term:'Raycast',story:'The monster chases only while a ray from it to you is clear of walls, closed doors and props. Block the ray and it loses you.',
   predict:{q:'Does a barrel or a table between you and the monster block its line of sight?',opts:['No, it sees over them','Yes, props are in the ray\'s filter'],ans:1,why:'The ray is tested against World, closed doors and props. Anything in that set blocks it.'},
   task:'Break the line of sight: walk behind the table or the chest, or go through the door and close it behind you.',wait:'Waiting for the monster to lose sight of you...',setup:S=>{S.p.x=330;S.p.y=212;S.m.x=420;S.m.y=212},done:S=>(S.ev.lost||0)>=1,
   why:'Line of sight is a raycast from the enemy to the player against a set of groups. Choose the groups in the matrix and you choose what hides you.',
   engine:'Roblox: workspace:Raycast from the monster\'s head to the player, with a filter that includes walls and doors. If the first hit is not the player, it cannot see.'}],
 code:`-- Luau. Check names against create.roblox.com/docs before relying on them.
-- Collision groups: the matrix, in code
local PhysicsService = game:GetService("PhysicsService")
PhysicsService:RegisterCollisionGroup("Player")
PhysicsService:RegisterCollisionGroup("Monster")
PhysicsService:RegisterCollisionGroup("Prop")
PhysicsService:CollisionGroupSetCollidable("Monster", "Prop", false)  -- everything collides unless you turn it off
somePart.CollisionGroup = "Prop"

-- Interaction ray from the camera
local params = RaycastParams.new()
params.FilterType = Enum.RaycastFilterType.Exclude
params.FilterDescendantsInstances = { character }
local result = workspace:Raycast(camera.CFrame.Position, camera.CFrame.LookVector * 12, params)
if result and result.Instance:HasTag("Interactable") then
  showPrompt(result.Instance)
end`,
 engNote:'The same ideas in Roblox: collision groups are your matrix, workspace:Raycast is your ray. Verify names against the Roblox docs.',
 refs:[['Doors (Roblox)','interaction prompts, line of sight, monsters in rooms','Roblox Doors gameplay'],['Piggy (Roblox)','a chase monster and doors that block it','Roblox Piggy gameplay chase'],['Resident Evil 2 remake','interaction aiming, doors and tight corridors','Resident Evil 2 remake door and interaction mechanics']]};
})();
