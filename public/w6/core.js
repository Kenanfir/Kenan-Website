'use strict';
/* ============================================================ helpers */
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function h(tag,props,...kids){const e=document.createElement(tag);for(const k in props||{}){const v=props[k];if(v==null)continue;if(k==='class')e.className=v;else if(k==='text')e.textContent=v;else if(k.startsWith('on'))e[k]=v;else e.setAttribute(k,v)}kids.flat().forEach(c=>{if(c!=null)e.append(c)});return e}
const C={g:'#A3FF12',p:'#8A2BE2',c:'#00E0FF',r:'#ff4d6d',bg:'#050505',line:'#333',tx:'#fff',mut:'#888'};
const clampN=(v,a,b)=>Math.max(a,Math.min(b,v));
const pk=(a,b)=>a<b?a+'|'+b:b+'|'+a;
function overlap(a,b){return a.x<b.x+b.w&&a.x+a.w>b.x&&a.y<b.y+b.h&&a.y+a.h>b.y}
function segRect(x0,y0,x1,y1,r){let tmin=0,tmax=1;const dx=x1-x0,dy=y1-y0;
  for(const [p,q,lo,hi] of [[x0,dx,r.x,r.x+r.w],[y0,dy,r.y,r.y+r.h]]){
    if(Math.abs(q)<1e-9){if(p<lo||p>hi)return null}
    else{let t1=(lo-p)/q,t2=(hi-p)/q;if(t1>t2)[t1,t2]=[t2,t1];tmin=Math.max(tmin,t1);tmax=Math.min(tmax,t2);if(tmin>tmax)return null}}
  return tmin}
function moveAxis(e,dx,dy,solids){const r={x:0,y:0};
  if(dx){e.x+=dx;for(const s of solids)if(overlap(e,s)){e.x=dx>0?s.x-e.w:s.x+s.w;r.x=Math.sign(dx)}}
  if(dy){e.y+=dy;for(const s of solids)if(overlap(e,s)){if(dy>0){e.y=s.y-e.h;r.y=1}else{e.y=s.y+s.h;r.y=-1}}}
  return r}
const store={get(k){try{return JSON.parse(localStorage.getItem(k))}catch(e){return null}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
// code block from plain text: comment tails (// or --) are dimmed, built from DOM nodes
function codeEl(text){const pre=h('pre');text.split('\n').forEach((ln,i,a)=>{
  const m=ln.match(/^(.*?)(\s*(?:\/\/|--).*)$/);
  if(m){pre.append(m[1]);pre.append(h('span',{class:'c',text:m[2]}))}else pre.append(ln);
  if(i<a.length-1)pre.append('\n')});return pre}

/* ============================================================ assets */
const IM={};
function img(n){let i=IM[n];if(!i){i=IM[n]=new Image();i.src='assets/'+n}return i}
const ready=i=>i&&i.complete&&i.naturalWidth>0;
// draw a sprite at x,y size w,hh. o: {flip, rot (radians, about the centre), alpha, sx,sy,sw,sh}
function spr(c,name,x,y,w,hh,o){const i=img(name);if(!ready(i))return;o=o||{};
  c.save();if(o.alpha!=null)c.globalAlpha=o.alpha;
  if(o.rot||o.flip){c.translate(x+w/2,y+hh/2);if(o.rot)c.rotate(o.rot);if(o.flip)c.scale(-1,1);x=-w/2;y=-hh/2}
  if(o.sw)c.drawImage(i,o.sx,o.sy,o.sw,o.sh,x,y,w,hh);else c.drawImage(i,x,y,w,hh);
  c.restore()}
function rect(ctx,x,y,w,hh,fill,stroke){if(fill){ctx.fillStyle=fill;ctx.fillRect(x,y,w,hh)}if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=1.5;ctx.strokeRect(x+.5,y+.5,w,hh)}}
function txt(ctx,s,x,y,col,size,al){ctx.fillStyle=col||C.tx;ctx.font=(size||12)+'px "Space Mono",monospace';ctx.textAlign=al||'left';ctx.fillText(s,x,y)}
function outline(ctx,s,x,y,col,size,al){ctx.font='bold '+(size||12)+'px "Space Mono",monospace';ctx.textAlign=al||'left';ctx.lineWidth=3;ctx.strokeStyle='#000';ctx.lineJoin='round';ctx.strokeText(s,x,y);ctx.fillStyle=col||C.tx;ctx.fillText(s,x,y)}

/* ============================================================ canvas + loop */
const REG=[];
function mkCanvas(host,W,H){
  const c=document.createElement('canvas'),dpr=Math.min(window.devicePixelRatio||1,2);
  c.width=W*dpr;c.height=H*dpr;c.style.aspectRatio=W+'/'+H;
  const ctx=c.getContext('2d');ctx.scale(dpr,dpr);ctx.imageSmoothingEnabled=false;
  host.appendChild(c);
  const pos=e=>{const r=c.getBoundingClientRect();return{x:(e.clientX-r.left)*W/r.width,y:(e.clientY-r.top)*H/r.height}};
  return{c,ctx,W,H,pos}}
function reg(d){REG.push(d);d.vis=true;
  if('IntersectionObserver' in window)new IntersectionObserver(es=>{d.vis=es[0].isIntersecting}).observe(d.cv.c);
  return d}
let lastT=performance.now();
function loop(t){const dt=Math.min(.05,(t-lastT)/1000);lastT=t;
  for(const d of REG){if(d.vis&&d.cv.c.offsetParent!==null){d.update(dt);d.draw()}}
  requestAnimationFrame(loop)}
requestAnimationFrame(loop);

/* ============================================================ input */
const KB={},VK={},SB={active:false};
addEventListener('keydown',e=>{const k=e.key.toLowerCase();KB[k]=1;if(SB.active&&['arrowup','arrowdown','arrowleft','arrowright',' '].includes(k))e.preventDefault()});
addEventListener('keyup',e=>{KB[e.key.toLowerCase()]=0});
const inp=()=>({l:!!(KB.a||KB.arrowleft||VK.l),r:!!(KB.d||KB.arrowright||VK.r),u:!!(KB.w||KB.arrowup||VK.u),d:!!(KB.s||KB.arrowdown||VK.d),jump:!!(KB.z||KB[' ']||KB.w||KB.arrowup||VK.j),act:!!(KB.e||KB.x||VK.a)});

/* ============================================================ SANDBOX SHELL
   A sandbox = canvas + the collision rules (the matrix, live) + switches. A ticked rule means the pair is tested and
   has its effect. An unticked rule means it is never tested. The shell is generic; each game supplies init/update/draw. */
function mkSandbox(host,cfg){
  const W=cfg.W||640,H=cfg.H||384;
  const cv=mkCanvas(host,W,H);
  const S={cv,ctx:cv.ctx,W,H,ent:[],tick:{},opt:{},log:[],tests:0,debug:true,t:0,cfg,logT:{},ev:{},frameHook:null};
  const ui={rules:{},toggles:{},sliders:{}};
  cv.c.addEventListener('pointerenter',()=>SB.active=true);cv.c.addEventListener('pointerleave',()=>SB.active=false);cv.c.addEventListener('pointerdown',()=>SB.active=true);
  S.on=(a,b)=>!!S.tick[pk(a,b)];
  S.of=g=>S.ent.filter(e=>e.g===g&&!e.dead);
  S.add=e=>{S.ent.push(e);return e};
  S.count=k=>{S.ev[k]=(S.ev[k]||0)+1};
  S.input=inp;
  const logBox=h('div',{class:'logbox'});
  S.say=(m,key,gap)=>{const k=key||m,now=S.t;if(S.logT[k]!=null&&now-S.logT[k]<(gap==null?.6:gap))return;S.logT[k]=now;S.log.unshift(m);S.log.length=Math.min(S.log.length,3);logBox.textContent=S.log.join('\n')};
  S.pairs=(a,b,fn)=>{if(!S.on(a,b))return;const A=S.of(a),B=S.of(b);
    if(a===b){S.tests+=A.length*(A.length-1)/2;for(let i=0;i<A.length;i++)for(let j=i+1;j<A.length;j++)if(!A[i].dead&&!A[j].dead&&overlap(A[i],A[j]))fn(A[i],A[j]);return}
    S.tests+=A.length*B.length;for(const x of A)for(const y of B)if(!x.dead&&!y.dead&&overlap(x,y))fn(x,y)};
  cfg.rules.forEach(r=>S.tick[pk(r.a,r.b)]=r.on);
  cfg.toggles.forEach(t=>S.opt[t.id]=t.on);(cfg.sliders||[]).forEach(s=>S.opt[s.id]=s.val);
  const pad=h('div',{class:'pad'},(cfg.pad||[]).map(([k,l])=>{const b=h('button',{class:'b padbtn',text:l});
    b.addEventListener('pointerdown',e=>{e.preventDefault();VK[k]=1;SB.active=true});['pointerup','pointerleave','pointercancel'].forEach(ev=>b.addEventListener(ev,()=>{VK[k]=0}));return b}));
  const rulesBox=h('div',{class:'rules'});
  cfg.rules.forEach(r=>{const key=pk(r.a,r.b),cb=h('input',{type:'checkbox'});cb.checked=r.on;
    cb.onchange=()=>{S.tick[key]=cb.checked;S.say((cb.checked?'Ticked ':'Unticked ')+r.a+' x '+r.b,'tk'+key,0)};
    const row=h('label',{class:'rule'},cb,h('b',{text:r.a+' x '+r.b+(r.extra?'  (extra)':'')}),h('span',{text:r.fx}));rulesBox.append(row);ui.rules[key]={cb,row}});
  const togBox=h('div',{class:'rules'});
  cfg.toggles.forEach(t=>{const cb=h('input',{type:'checkbox'});cb.checked=t.on;cb.onchange=()=>{S.opt[t.id]=cb.checked;S.say(t.label+': '+(cb.checked?'on':'off'),'op'+t.id,0)};
    const row=h('label',{class:'rule'},cb,h('b',{text:t.label}),h('span',{text:t.fx}));togBox.append(row);ui.toggles[t.id]={cb,row}});
  (cfg.sliders||[]).forEach(s=>{const v=h('b',{text:s.val+(s.unit||''),style:'color:#fff'});const r=h('input',{type:'range',min:s.min,max:s.max,step:s.step||1,value:s.val});
    r.oninput=()=>{S.opt[s.id]=+r.value;v.textContent=r.value+(s.unit||'')};const row=h('div',{class:'rule slider'},h('label',{},s.label+' ',r,v));togBox.append(row);ui.sliders[s.id]={r,v,u:s.unit||'',row}});
  const dbg=h('input',{type:'checkbox'});dbg.checked=true;dbg.onchange=()=>S.debug=dbg.checked;
  const btns=h('div',{class:'ctl'},h('label',{},dbg,' Debug view'),(cfg.buttons||[]).map(([l,fn])=>h('button',{class:'b',text:l,onclick:()=>fn(S)})));
  const statT=h('b',{class:'big',text:'0'}),statN=h('b',{class:'big red',text:'0'});
  const stat=h('div',{class:'stat'},h('div',{},h('span',{text:'Pair tests per frame (your matrix)'}),statT),h('div',{},h('span',{text:'If everything were tested against everything'}),statN));
  const api={S,ui,cfg,cv};
  api.setRule=(a,b,v)=>{const k=pk(a,b);S.tick[k]=v;if(ui.rules[k])ui.rules[k].cb.checked=v};
  api.setOpt=(id,v)=>{S.opt[id]=v;const t=ui.toggles[id];if(t)t.cb.checked=!!v;const s=ui.sliders[id];if(s){s.r.value=v;s.v.textContent=v+s.u}};
  api.highlight=ids=>{[...Object.values(ui.rules),...Object.values(ui.toggles),...Object.values(ui.sliders)].forEach(x=>x.row.classList.remove('hl'));
    (ids||[]).forEach(id=>{const k=id.slice(0,1),v=id.slice(2);const x=k==='r'?ui.rules[v]:k==='t'?ui.toggles[v]:ui.sliders[v];if(x)x.row.classList.add('hl')})};
  api.reset=()=>{S.ent=[];S.log=[];logBox.textContent='';S.t=0;S.ev={};S.logT={};cfg.init(S)};
  api.defaults=()=>{cfg.rules.forEach(r=>api.setRule(r.a,r.b,r.on));cfg.toggles.forEach(t=>api.setOpt(t.id,t.on));(cfg.sliders||[]).forEach(s=>api.setOpt(s.id,s.val))};
  api.panel=h('div',{class:'stage-extra'},
    h('div',{class:'strip'},stat,h('div',{class:'logwrap'},h('span',{text:'What just happened'}),logBox)),
    h('div',{class:'grid2 tight'},h('div',{class:'card'},h('h3',{text:'Collision rules (your matrix, live)'}),rulesBox),h('div',{class:'card'},h('h3',{text:'Break it'}),togBox,btns)));
  host.append(pad,api.panel);
  cfg.init(S);
  let fr=0;
  api.reg=reg({cv,S,update(dt){dt=Math.min(dt,.033);S.t+=dt;S.tests=0;cfg.update(S,dt);if(S.frameHook)S.frameHook(S);
      if(++fr%10===0){const n=S.ent.filter(e=>!e.dead).length;statT.textContent=S.tests;statN.textContent=n*(n-1)/2}},draw(){cfg.draw(S)}});
  api.destroy=()=>{const i=REG.indexOf(api.reg);if(i>=0)REG.splice(i,1)};
  return api}

/* ============================================================ GUIDED LAB */
const TEAMS={};        // filled by sandboxes.js
let LAB=null;
function progressKey(t){return 'w6lab.'+t}
function runLab(team){
  const T=TEAMS[team];if(!T)return;
  if(LAB&&LAB.st)LAB.st.destroy();
  const body=$('#labBody');body.textContent='';
  const saved=store.get(progressKey(team))||[];
  LAB={team,T,st:null,i:0,done:T.missions.map((m,i)=>!!saved[i]),m:{pred:null,ok:false,started:false}};
  const head=h('div',{class:'labhead'},
    h('button',{class:'b p',text:'‹ Change game',onclick:()=>{if(LAB&&LAB.st)LAB.st.destroy();LAB=null;go('home')}}),
    h('div',{},h('span',{class:'tag',text:T.eng}),h('b',{text:T.name,style:'color:#fff;margin-left:6px'})),
    h('div',{class:'dots',id:'dots'}));
  const stageHost=h('div',{class:'stage'});const side=h('aside',{class:'mission',id:'mission'});
  body.append(head,h('div',{class:'labgrid'},stageHost,side));
  LAB.st=mkSandbox(stageHost,T.cfg());
  LAB.st.S.frameHook=S=>{const m=T.missions[LAB.i];if(m&&m.done&&!LAB.m.ok&&LAB.m.started&&m.done(S))completeMission()};
  const first=LAB.done.findIndex(d=>!d);
  startMission(first<0?T.missions.length:first)}
function renderDots(){const d=$('#dots');d.textContent='';const n=LAB.T.missions.length;
  for(let i=0;i<=n;i++)d.append(h('button',{class:'dot'+(i===LAB.i?' now':'')+((i<n&&LAB.done[i])?' ok':''),text:i<n?String(i+1):'✓',title:i<n?LAB.T.missions[i].title:'Your matrix',onclick:()=>startMission(i)}))}
function startMission(i){
  LAB.i=i;LAB.m={pred:null,ok:false,started:false};const T=LAB.T,st=LAB.st,m=T.missions[i];
  st.reset();st.defaults();st.highlight([]);
  if(m){if(m.rules)for(const k in m.rules){const [a,b]=k.split('|');st.setRule(a,b,m.rules[k])}
    if(m.opts)for(const k in m.opts)st.setOpt(k,m.opts[k]);
    if(m.setup)m.setup(st.S);
    st.highlight(m.focus||[]);
    if(!m.predict)LAB.m.started=true}
  st.S.log=[];st.S.ev={};
  renderDots();renderMission();
  if(window.innerWidth<860)$('#mission').scrollIntoView({block:'start',behavior:'smooth'})}
function completeMission(){
  LAB.m.ok=true;LAB.done[LAB.i]=true;store.set(progressKey(LAB.team),LAB.done);LAB.st.S.say('Mission complete.','mc',0);renderDots();renderMission()}
function renderMission(){
  const box=$('#mission');box.textContent='';const T=LAB.T,n=T.missions.length,i=LAB.i,m=T.missions[i];
  if(!m)return renderFinal(box);
  const state=LAB.m,finished=state.ok||LAB.done[i];
  box.append(h('div',{class:'kicker',text:'Mission '+(i+1)+' of '+n}),h('h2',{text:m.title}),h('span',{class:'tag',text:m.term}),h('p',{class:'story',text:m.story}));
  if(m.predict){
    const pq=h('div',{class:'step'},h('div',{class:'stephead'},h('i',{text:'1'}),'Predict first'),h('p',{text:m.predict.q}));
    const opts=h('div',{class:'opts'});
    m.predict.opts.forEach((o,k)=>opts.append(h('button',{class:'opt'+(state.pred===k?(k===m.predict.ans?' right':' wrong'):''),text:o,onclick:()=>{if(state.pred!=null)return;state.pred=k;state.started=true;renderMission()}})));
    pq.append(opts);
    if(state.pred!=null)pq.append(h('p',{class:'fb '+(state.pred===m.predict.ans?'good':'bad'),text:(state.pred===m.predict.ans?'Good call. ':'Not quite. ')+m.predict.why}));
    box.append(pq)}
  const locked=m.predict&&state.pred==null&&!finished;
  box.append(h('div',{class:'step'+(locked?' locked':'')},h('div',{class:'stephead'},h('i',{text:m.predict?'2':'1'}),'Try it'),h('p',{text:m.task}),
    h('div',{class:'status'+(finished?' ok':''),text:finished?'Done.':(locked?'Answer the prediction to unlock.':m.wait)})));
  if(finished)box.append(h('div',{class:'step why'},h('div',{class:'stephead'},h('i',{text:'✓'}),'Why it matters'),h('p',{text:m.why}),h('p',{class:'engine',text:m.engine})));
  box.append(h('div',{class:'ctl'},
    i>0?h('button',{class:'b p',text:'‹ Back',onclick:()=>startMission(i-1)}):null,
    h('button',{class:'b',text:finished?(i<n-1?'Next mission ▶':'Finish ▶'):'Skip this one',style:finished?'':'opacity:.55',onclick:()=>startMission(i+1)}),
    h('button',{class:'b p',text:'Restart mission',onclick:()=>startMission(i)})))}
function renderFinal(box){
  const T=LAB.T;
  box.append(h('div',{class:'kicker',text:'Your matrix'}),h('h2',{text:'Now make it your game'}),
    h('p',{class:'story',text:'Everything you ticked and unticked here is a collision matrix for a game like yours. Open it in the builder, rename the groups to your own objects, and save it as docs/collision-matrix.md.'}));
  const ul=h('ul',{class:'tight'});T.cfg().rules.forEach(r=>ul.append(h('li',{},h('b',{text:r.a+' x '+r.b+(r.on?': tested. ':': not tested. ')}),r.fx)));
  box.append(h('div',{class:'step'},h('div',{class:'stephead'},h('i',{text:'✓'}),'Starting rules for '+T.name),ul));
  box.append(h('div',{class:'ctl'},h('button',{class:'b',text:'Open in the matrix builder',onclick:()=>openPreset(T.preset)}),h('button',{class:'b p',text:'Bug clinic',onclick:()=>{go('ref');refTab('bugs')}})));
  box.append(h('div',{class:'step'},h('div',{class:'stephead'},h('i',{text:'⌘'}),'In your engine'),h('p',{text:T.engNote}),codeEl(T.code)));
  const refs=h('div',{class:'refs'});T.refs.forEach(r=>refs.append(h('a',{target:'_blank',rel:'noopener',href:'https://www.youtube.com/results?search_query='+encodeURIComponent(r[2])},r[0],h('span',{text:r[1]}))));
  box.append(h('div',{class:'step'},h('div',{class:'stephead'},h('i',{text:'▶'}),'Watch real games'),refs,h('p',{class:'note',text:'These open a YouTube search, so you pick the clip. Look for the specific thing named.'})))}
