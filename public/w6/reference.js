'use strict';
/* ====================================================== MATRIX (state can come from a shared link, so it is validated and every string is escaped) */
const PRESETS={
 plat:{label:'Platformer',groups:[['Player','The player character'],['Enemy','Hostile AI'],['World','Tilemap, platforms, walls'],['Pickup','Coins, berries, keys'],['Hazard','Spikes, pits'],['Trigger','Checkpoints, invisible zones'],['PlayerAttack','Dash hit, projectiles']],
  pairs:[['Player','World'],['Player','Enemy'],['Player','Pickup'],['Player','Hazard'],['Player','Trigger'],['Enemy','World'],['PlayerAttack','Enemy'],['PlayerAttack','World']]},
 td:{label:'Tower defense',groups:[['Tower','Placed towers'],['Enemy','Walking enemies'],['Projectile','Bullets, arrows'],['Base','The goal enemies reach'],['PlacementZone','Tiles you may build on'],['PlacementGhost','The preview under the cursor'],['Path','Where enemies walk']],
  pairs:[['Projectile','Enemy'],['Enemy','Base'],['PlacementGhost','PlacementZone'],['PlacementGhost','Tower'],['PlacementGhost','Path']]},
 plinko:{label:'Dropper / Plinko',groups:[['Ball','The thing you drop'],['Peg','Static bumpers'],['Wall','Board sides'],['Bumper','Active bouncers'],['Bin','Scoring slots (trigger)'],['Dropper','The release mechanism']],
  pairs:[['Ball','Peg'],['Ball','Wall'],['Ball','Bumper'],['Ball','Bin']]},
 rbx:{label:'Roblox horror',groups:[['Player','The player character'],['Monster','The chaser'],['World','Walls, floors'],['Door','Doors that open and close'],['Interactable','Keys, notes, switches'],['Trigger','Jump scare zones'],['Prop','Crates, furniture']],
  pairs:[['Player','World'],['Player','Door'],['Player','Prop'],['Player','Monster'],['Monster','World'],['Monster','Door'],['Prop','World'],['Prop','Prop']]}
};
const BADPAIRS=[
 ['PlayerAttack','Player','Your own attacks should not hit you.'],['Pickup','Enemy','Enemies picking up coins is almost never intended.'],['Pickup','World','Pickups rarely need to touch walls.'],
 ['Trigger','World','A trigger zone should only care about the player or monster.'],['Trigger','Enemy','Check this is on purpose.'],['World','World','Static vs static never needs testing.'],
 ['Peg','Peg','Pegs are static: they never move into each other.'],['Wall','Wall','Static vs static never needs testing.'],['Tower','Enemy','Enemies usually walk past towers, they do not collide with them.'],
 ['Projectile','Tower','A tower should not be hit by its own shots.'],['Enemy','Enemy','Enemy vs enemy is costly: a crowd of 100 makes thousands of tests.'],['Projectile','Projectile','Bullets rarely need to hit each other.'],
 ['Ball','Ball','Usually off in plinko: balls drop through each other. Tick it only if you want them to bounce apart.'],['Bin','Peg','A scoring slot should only care about the ball.'],['Interactable','World','Interaction is a raycast, not a collision.']
];
var idf=s=>String(s).replace(/[^A-Za-z0-9_]/g,'').slice(0,24);
let MX=null,curPreset='plat',outMode='md',dirty=false;
function loadPreset(k){curPreset=k;const p=PRESETS[k];MX={preset:k,groups:p.groups.map(g=>({n:g[0],d:g[1]})),pairs:p.pairs.map(a=>pk(a[0],a[1]))}}
function sanitize(d){                       // returns a safe state or null
  if(!d||!Array.isArray(d.groups)||!Array.isArray(d.pairs))return null;
  const seen=new Set(),groups=[];
  for(const g of d.groups.slice(0,20)){const n=idf(g&&g.n);if(!n||seen.has(n))continue;seen.add(n);groups.push({n,d:String((g&&g.d)||'').slice(0,80)})}
  if(!groups.length)return null;
  const pairs=[];for(const p of d.pairs.slice(0,300)){if(typeof p!=='string')continue;const [a,b,...r]=p.split('|');if(r.length||!seen.has(a)||!seen.has(b))continue;const k=pk(a,b);if(!pairs.includes(k))pairs.push(k)}
  return{preset:PRESETS[d.preset]?d.preset:'plat',groups,pairs};
}
function renderPresetTabs(){const h=$('#presetTabs');h.textContent='';Object.entries(PRESETS).forEach(([k,p])=>{const b=document.createElement('button');b.className='tab'+(k===curPreset?' on':'');b.textContent=p.label;b.onclick=()=>{loadPreset(k);dirty=true;renderMatrix()};h.appendChild(b)})}
function renderMatrix(){
  renderPresetTabs();
  const g=MX.groups,t=$('#mxTable');
  let h='<table class="mx"><tr><th>Group</th><th>Contains</th>'+g.map(x=>`<th class="rot">${esc(x.n)}</th>`).join('')+'<th></th></tr>';
  g.forEach((r,i)=>{h+=`<tr><th>${esc(r.n)}</th><td><input type="text" value="${esc(r.d)}" data-i="${i}" class="dsc" maxlength="80"></td>`;
    g.forEach((c,j)=>{ if(j<i){h+='<td class="dis"></td>'}else{const on=MX.pairs.includes(pk(r.n,c.n));h+=`<td class="${i===j?'diag':''}"><input type="checkbox" data-i="${i}" data-j="${j}" ${on?'checked':''} aria-label="${esc(r.n)} with ${esc(c.n)}"></td>`}});
    h+=`<td><button class="b p" data-del="${i}" style="padding:2px 8px" aria-label="Remove ${esc(r.n)}">x</button></td></tr>`});
  t.innerHTML=h+'</table>';
  $$('#mxTable input[type=checkbox]').forEach(cb=>cb.onchange=()=>{const k=pk(MX.groups[+cb.dataset.i].n,MX.groups[+cb.dataset.j].n);MX.pairs=MX.pairs.filter(x=>x!==k);if(cb.checked)MX.pairs.push(k);dirty=true;update()});
  $$('#mxTable .dsc').forEach(i=>i.oninput=()=>{MX.groups[+i.dataset.i].d=i.value;dirty=true;update()});
  $$('#mxTable [data-del]').forEach(b=>b.onclick=()=>{const n=MX.groups[+b.dataset.del].n;MX.groups.splice(+b.dataset.del,1);MX.pairs=MX.pairs.filter(k=>!k.split('|').includes(n));dirty=true;renderMatrix()});
  update();
}
function checks(){
  const g=MX.groups.map(x=>x.n),out=[];
  const possible=g.length*(g.length+1)/2,ticked=MX.pairs.length;
  BADPAIRS.forEach(([a,b,m])=>{if(g.includes(a)&&g.includes(b)&&MX.pairs.includes(pk(a,b)))out.push(['warn',`${a} x ${b} is ticked. ${m}`])});
  g.forEach(n=>{if(!MX.pairs.some(k=>k.split('|').includes(n)))out.push(['info',`${n} is not ticked with anything. Either it never collides (is the group needed?) or a tick is missing.`])});
  if(possible&&ticked/possible>.5)out.push(['warn',`More than half of all pairs are ticked (${ticked} of ${possible}). That is close to having no matrix.`]);
  out.push([ticked&&!out.some(o=>o[0]==='warn')?'ok':'info',`${ticked} of ${possible} possible pairs ticked, so ${possible-ticked} checks never run (${possible?Math.round((possible-ticked)/possible*100):0}% saved).`]);
  return out;
}
function outputs(){
  const g=MX.groups,names=g.map(x=>x.n),pairs=MX.pairs.map(k=>k.split('|'));
  const partners=n=>pairs.filter(p=>p.includes(n)).map(p=>p[0]===n?p[1]:p[0]);
  const md='# Collision matrix\n\n| Group | Contains | Collides with |\n|---|---|---|\n'+g.map(x=>{const w=partners(x.n);return`| ${x.n} | ${x.d||''} | ${w.length?w.join(', '):'nothing'} |`}).join('\n')+'\n';
  const gd='// 1. Create one object group per row (Scene > Object groups):\n//    '+names.join(', ')+'\n// 2. Nothing collides in GDevelop until you write the event.\n//    One event for every ticked pair:\n\n'+(pairs.length?pairs.map(([a,b])=>`Condition: ${a} is in collision with ${b}`).join('\n'):'// (no pairs ticked)')+'\n\n// Anything not listed above is never tested.';
  const all=[];names.forEach((a,i)=>names.slice(i).forEach(b=>all.push([a,b])));
  const off=all.filter(([a,b])=>!MX.pairs.includes(pk(a,b)));
  const lua='-- Roblox: everything collides with everything by default,\n-- so you write the pairs you turned OFF.\nlocal PhysicsService = game:GetService("PhysicsService")\n\n'+names.map(n=>`PhysicsService:RegisterCollisionGroup("${n}")`).join('\n')+'\n\n'+(off.length?off.map(([a,b])=>`PhysicsService:CollisionGroupSetCollidable("${a}", "${b}", false)`).join('\n'):'-- (every pair collides)')+'\n\n-- Then assign each part:  part.CollisionGroup = "World"\n-- Trigger zones: CanCollide = false plus a touch or overlap check. Verify against the Roblox docs.';
  return{md,gd,lua};
}
function writeHash(){try{history.replaceState(null,'','#matrix='+encode())}catch(e){}}
function update(){
  $('#mxWarn').innerHTML=checks().map(([c,m])=>`<div class="${c==='warn'?'warn':c==='ok'?'okk':'info'}">${esc(m)}</div>`).join('');
  $('#outBox').textContent=outputs()[outMode];
  if(dirty)writeHash();
}
function encode(){try{return btoa(unescape(encodeURIComponent(JSON.stringify(MX))))}catch(e){return''}}
function decode(s){try{return sanitize(JSON.parse(decodeURIComponent(escape(atob(s)))))}catch(e){return null}}
$('#addGroup').onclick=()=>{const v=idf($('#newGroup').value.trim());if(!v||MX.groups.some(x=>x.n===v)||MX.groups.length>=20)return;MX.groups.push({n:v,d:''});$('#newGroup').value='';dirty=true;renderMatrix()};
$('#resetPreset').onclick=()=>{loadPreset(curPreset);dirty=true;renderMatrix()};
$$('#outTabs .tab').forEach(b=>b.onclick=()=>{$$('#outTabs .tab').forEach(x=>x.classList.remove('on'));b.classList.add('on');outMode=b.dataset.o;update()});
function flash(m){const e=$('#copyMsg');e.textContent=m;setTimeout(()=>e.textContent='',2200)}
$('#copyOut').onclick=()=>navigator.clipboard.writeText($('#outBox').textContent).then(()=>flash('Copied.'),()=>flash('Select the text and copy it.'));
$('#copyLink').onclick=()=>{writeHash();navigator.clipboard.writeText(location.href).then(()=>flash('Link copied.'),()=>flash('Copy the address bar.'))};
function openPreset(k){loadPreset(k);dirty=true;renderMatrix();go('ref');refTab('matrix')}

/* ====================================================== BUG CLINIC */
const BUGS=[
 ['Player sticks to walls','Friction applied on side contact.','Zero horizontal friction, or use a separate wall sensor.',['plat','plinko']],
 ['Fast objects pass through walls (or pegs)','Tunnelling: the object moves further in one frame than the wall is thick.','Raycast along the movement, cap the max speed, or with GDevelop Physics use "Set as bullet". See demo 1.',['plat','td','plinko','rbx']],
 ['Jitter when standing still','Two systems both correct position every frame.','One system owns position. Find the second and delete it.',['plat','rbx']],
 ['Infinite jump or wall climbing','The grounded check is true while touching a wall.','Use a feet-only sensor, or the Platformer behaviour\'s "is on floor". See demo 2.',['plat']],
 ['Coin or checkpoint counts twice','Score added before the object is deleted, same frame.','Delete first, or set a Collected flag on the instance.',['plat','td','plinko']],
 ['Damage every frame in a hazard','Overlap is continuously true.','Invulnerability timer after each hit, with a visible flash.',['plat','rbx']],
 ['Enemies all die at once','A damage action with no picking condition above it.','Add a picking condition, or use For Each Object.',['plat','td']],
 ['Wrong door opens','Two instances, one condition, nothing to tell them apart.','Object variables, or For Each Object.',['plat','rbx']],
 ['Frame rate collapses with many enemies','Every object is tested against every other.','Tick only needed pairs in your matrix and write only those events. See the tower defense demo.',['td','plinko','rbx']],
 ['Tower shoots a dead enemy, or one projectile hits twice','The projectile is not deleted in the same event as the damage.','Delete the projectile in the event that subtracts health, and check the target still exists.',['td']],
 ['Can place a tower on the path','No overlap check on the placement ghost.','Ghost vs Path and Ghost vs Tower in the matrix. Refuse the click while overlapping.',['td']],
 ['Ball stuck on a peg','Perfect balance on top of a static peg.','Nudge the ball sideways when its speed is near zero.',['plinko']],
 ['Same result every drop','Everything is perfectly deterministic.','A tiny random nudge on release, or let the player choose where to drop.',['plinko']],
 ['Interaction prompt does not appear','The ray hits your own character, or a wall, first.','Exclude the character from the ray filter. Check what the ray hit first.',['rbx']],
 ['Jump scare fires twice','The trigger zone fires on every overlap.','A flag: set it on the first overlap and ignore after.',['rbx','plat']],
 ['Monster walks through, or gets stuck on, doors','The Monster x Door pair was never decided.','Decide it in the matrix on purpose: tick it if doors should block the monster.',['rbx']]
];
let bugFilter='all';
function renderBugs(){
  const q=$('#bugSearch').value.toLowerCase();
  const rows=BUGS.filter(b=>(bugFilter==='all'||b[3].includes(bugFilter))&&(!q||(b[0]+b[1]+b[2]).toLowerCase().includes(q)));
  $('#bugList').innerHTML=rows.map(b=>`<details><summary>${esc(b[0])}</summary><div class="row"><b>Cause</b><span>${esc(b[1])}</span><b>Fix</b><span>${esc(b[2])}</span></div></details>`).join('')||'<p>Nothing matches.</p>';
}
(function(){const c=$('#bugChips');[['all','All'],['plat','Platformer'],['td','Tower defense'],['plinko','Plinko'],['rbx','Roblox horror']].forEach(([k,l])=>{const b=document.createElement('button');b.className='tab'+(k==='all'?' on':'');b.textContent=l;b.onclick=()=>{bugFilter=k;$$('#bugChips .tab').forEach(x=>x.classList.remove('on'));b.classList.add('on');renderBugs()};c.appendChild(b)});$('#bugSearch').oninput=renderBugs;renderBugs()})();


/* ====================================================== NAV + INIT */
function go(v){['home','lab','ref'].forEach(x=>$('#view-'+x).classList.toggle('on',x===v));$$('#mainNav .tab').forEach(b=>b.classList.toggle('on',b.dataset.v===v||(v==='lab'&&b.dataset.v==='home')));window.scrollTo({top:0})}
function refTab(t){$$('#refTabs .tab').forEach(b=>b.classList.toggle('on',b.dataset.r===t));$$('#view-ref .refpane').forEach(s=>s.classList.toggle('on',s.id==='r-'+t))}
$$('#mainNav .tab').forEach(b=>b.onclick=()=>{if(b.dataset.v==='home'&&LAB&&LAB.st){LAB.st.destroy();LAB=null}go(b.dataset.v)});
$$('#refTabs .tab').forEach(b=>b.onclick=()=>refTab(b.dataset.r));
function openTeam(k){location.hash='game='+k;go('lab');runLab(k)}
(function buildHome(){const box=$('#gameCards');
  Object.entries(TEAMS).forEach(([k,T])=>{const saved=store.get(progressKey(k))||[],n=T.missions.length,d=saved.filter(Boolean).length;
    box.append(h('button',{class:'gamecard',onclick:()=>openTeam(k)},
      h('div',{class:'thumb'},h('img',{src:'assets/'+T.thumb,alt:''})),
      h('div',{class:'gtxt'},h('span',{class:'tag',text:T.eng}),h('h3',{text:T.name}),h('p',{text:T.pitch}),h('span',{class:'prog',text:d?(d+' of '+n+' missions done'):n+' missions, about 15 minutes'}))))})})();
loadPreset('plat');
if(location.hash.startsWith('#matrix=')){const d=decode(location.hash.slice(8));if(d){MX=d;curPreset=d.preset;go('ref');refTab('matrix')}}
else if(location.hash.startsWith('#game=')&&TEAMS[location.hash.slice(6)])openTeam(location.hash.slice(6));
renderMatrix();
