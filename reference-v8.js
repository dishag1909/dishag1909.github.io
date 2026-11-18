intro.hidden=true;
removeEventListener('hashchange',render);
document.querySelector('#motion').style.display='none';
document.querySelector('header').innerHTML='<a class="brand" href="#home">Disha.</a><nav><a href="#home">Home</a><a href="#work">Selected Work</a><a href="#journey">My Journey</a><a href="#contact">Contact</a></nav>';
const groups=[['Editorial Design','arrival','#8f9a63'],['UI / UX Design','privacy','#7b7395'],['AR & Interaction','sparky','#b36b37'],['Brand & Packaging','pack','#3b6787']];
app.innerHTML=`<section id="home" class="ref-hero"><div class="hero-intro"><small>✦ VISUAL COMMUNICATION DESIGNER</small><h1>Hi, I’m Disha.<br><span>I am a</span></h1><div class="flip-card"><i></i><strong id="job-title">Visual Designer</strong></div><div class="hero-actions"><a class="dark-button" href="#contact">Start a project <b>↗</b></a><a href="#work">See my work ↓</a></div></div><img class="ref-portrait" src="/assets/disha-person-only.webp" alt="Disha Agarwal"><span class="hero-stamp">THAT’S ME ↗</span><div class="hero-base"><span>● OPEN TO DESIGN OPPORTUNITIES</span><span>SCROLL TO EXPLORE ↓</span><span>PUNE, INDIA</span></div></section><section id="work" class="door-section"><div class="section-top"><small>DIFFERENT WORLDS. ONE CURIOUS MIND.</small><h2>Magic happens behind the doors.</h2></div><div class="doors">${groups.map((g,i)=>`<button class="door-frame" data-door="${i}" style="--door:${g[2]}"><span class="door-leaf"><span class="door-plaque">${g[0]}</span><span class="door-handle"></span><span class="door-hint">Click to enter</span></span><span class="door-darkness"></span></button>`).join('')}</div><div class="door-caption"><span>FOUR DOORS. MANY POSSIBILITIES.</span><span>PICK A WORLD ↗</span></div><div id="door-room" hidden><button class="back-doors">← Back to the doors</button><div class="room-content"></div></div></section><section id="journey" class="ref-journey"><div class="year-column"><small>MY JOURNEY</small><h2>Let’s go back in time.</h2><div id="journey-year">2026</div><span>2017 - NOW</span></div><div class="history"><article data-year="2026"><small>2026</small><h3>Making work with people.</h3><p>Visual Designer and Design Program Manager Intern at WastuViz. Websites, visual communication and coordinating two design interns.</p><p>Freelance packaging artwork for Trufold.</p></article><article data-year="2026"><small>MAY 2026</small><h3>Design with a purpose.</h3><p>Graphic Design Intern at InAmigos Foundation, creating social communication for awareness and donation campaigns.</p></article><article data-year="2025"><small>2025 / FIRST FREELANCE PROJECT</small><h3>Beginning my design work.</h3><p>I began my freelance design work with Salasar Polymers, developing a brand identity and business card applications for a plastic raw materials trading company.</p></article><article data-year="2023"><small>2023 - PRESENT</small><h3>Visual Communication.</h3><p>Bachelor of Design at MIT World Peace University, Pune. Exploring editorial design, illustration, branding and digital experiences.</p></article><article data-year="2017"><small>2017 - 2019</small><h3>Learning to see.</h3><p>Diploma in Painting, Pracheen Kala Kendra. The beginning of my practice in observation, composition and image-making.</p></article></div></section><section id="contact" class="ref-contact"><small>HAVE SOMETHING IN MIND?</small><h2>Got a project?<br><span>Let’s build it together.</span></h2><a class="light-button" href="mailto:disha.agarwal@mitwpu.edu.in">Let’s talk ↗</a><div class="contact-links"><a href="https://www.behance.net/dishaagarwal34" target="_blank" rel="noopener">Behance ↗</a><a href="/assets/resume.pdf" target="_blank" rel="noopener">Résumé ↗</a></div><footer>© 2026 Disha Agarwal · Visual Designer</footer></section>`;
const room=document.querySelector('#door-room');
document.querySelectorAll('[data-door]').forEach(b=>b.onclick=()=>{b.classList.add('door-open');const i=+b.dataset.door;const ids=i===0?['arrival','kaavad']:i===1?['wastu','privacy']:i===2?['sparky']:['pack','monster'];setTimeout(()=>{room.hidden=false;document.querySelector('.room-content').innerHTML=`<h2>${groups[i][0]}</h2><div class="room-projects">${ids.map(id=>{const p=projects.find(p=>p.id===id);return `<button class="room-project" data-room-project="${id}"><div>${p.img?`<img src="/assets/${id}.webp" alt="${p.name}">`:p.video?'<video autoplay muted loop playsinline src="/assets/sparky.mp4"></video>':`<img src="/assets/${id==='wastu'?'wastu-preview.webp':id==='privacy'?'privacy-cover.webp':'pack-preview.webp'}" alt="${p.name}">`}</div><h3>${p.name} ↗</h3><p>${p.text}</p></button>`}).join('')}</div>`;document.querySelectorAll('[data-room-project]').forEach(x=>x.onclick=()=>openProject(x.dataset.roomProject));decorateProjectPreviews();room.scrollIntoView({behavior:'smooth',block:'start'});},550)});
document.querySelector('.back-doors').onclick=()=>{room.hidden=true;document.querySelectorAll('.door-open').forEach(x=>x.classList.remove('door-open'));document.querySelector('#work').scrollIntoView({behavior:'smooth'})};
document.addEventListener('click',e=>{const a=e.target.closest('a[href^="#"]');if(!a)return;const target=document.querySelector(a.getAttribute('href'));if(target){e.preventDefault();history.replaceState(null,'',a.getAttribute('href'));target.scrollIntoView({behavior:'smooth'});}});
const titles=['Visual Designer','Storyteller','Curious Thinker'];let titleIndex=0;setInterval(()=>{const el=document.querySelector('#job-title');el.animate([{transform:'rotateX(0)',opacity:1},{transform:'rotateX(-80deg)',opacity:0},{transform:'rotateX(0)',opacity:1}],{duration:650});setTimeout(()=>el.textContent=titles[++titleIndex%titles.length],280)},3000);
const yearObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){document.querySelector('#journey-year').textContent=e.target.dataset.year;document.querySelectorAll('.history article').forEach(x=>x.classList.toggle('active',x===e.target));}}),{rootMargin:'-30% 0px -30% 0px',threshold:0});document.querySelectorAll('.history article').forEach(x=>yearObserver.observe(x));
if(location.hash&&document.querySelector(location.hash))setTimeout(()=>document.querySelector(location.hash).scrollIntoView(),100);
// Submission version: final Privacy Lens prototype, tactile books and phone support.
const openBeforeSubmission = openProject;
openProject = function(id) {
  if(id==='privacy') {
    current=projects.find(p=>p.id===id);
    document.querySelector('#modalbody').innerHTML='<p class="eyebrow">UI / UX · INTERACTIVE PROTOTYPE · 40 SCREENS</p><h1>Beyond Allow / Privacy Lens</h1><p>A privacy-permission experience exploring scope, duration, consent receipts and control over sensitive access. Browse every screen using the prototype’s navigation, or interact with its permission controls.</p><a class="pill" href="privacy-lens.html" target="_blank" rel="noopener">Open full interactive prototype ↗</a><iframe class="privacy-demo" src="privacy-lens.html" title="Privacy Lens complete interactive mobile app prototype"></iframe>';
    document.querySelector('#modal').hidden=false;document.body.style.overflow='hidden';return;
  }
  openBeforeSubmission(id);
  if(current.img){let startX;const book=document.querySelector('.book');book.addEventListener('click',event=>{if(event.target.closest('#prev,#next'))event.stopPropagation()});book.addEventListener('touchstart',e=>startX=e.touches[0].clientX,{passive:true});book.addEventListener('touchend',e=>{const dx=e.changedTouches[0].clientX-startX;if(Math.abs(dx)>45)turn(dx<0?1:-1)},{passive:true});}
};
function playPaperTurn() {
  if (!soundEnabled || !audioCtx) return;
  const duration = .29;
  const buffer = audioCtx.createBuffer(1, Math.ceil(audioCtx.sampleRate * duration), audioCtx.sampleRate);
  const samples = buffer.getChannelData(0);
  let previous = 0;
  for (let i = 0; i < samples.length; i++) {
   const t = i / samples.length;
   const noise = Math.random() * 2 - 1;
   const swish = Math.sin(Math.PI * t) ** 2 * .7;
   const settle = Math.exp(-((t - .79) ** 2) / .0016) * .26;
   samples[i] = (noise - previous * .63) * (swish + settle) * .12;
   previous = noise;
  }
  const source = audioCtx.createBufferSource();
  const filter = audioCtx.createBiquadFilter();
  const now = audioCtx.currentTime;
  source.buffer = buffer;
  filter.type = 'bandpass';
  filter.Q.value = .65;
  filter.frequency.setValueAtTime(2700, now);
  filter.frequency.exponentialRampToValueAtTime(1050, now + duration);
  source.connect(filter).connect(audioCtx.destination);
  source.start();
}
let flipping=false;
turn=function(direction){
  if(flipping||!current?.img)return;
  const next=Math.max(0,Math.min(current.pages/2,page+direction));if(next===page)return;
  const spread=document.querySelector('#spread'),old=[...spread.querySelectorAll('img')];
  const source=old[direction>0?old.length-1:0]?.src;
  const wasCover=spread.classList.contains('cover');page=next;paintSpread();
  const leaf=document.createElement('div');leaf.className='turning-leaf '+(direction<0?'backwards':'');
  const image=document.createElement('img');image.src=source;image.alt='Turning paper page';leaf.append(image);spread.append(leaf);
  flipping=true;playPaperTurn();
  const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
  leaf.animate([{transform:'rotateY(0deg)',filter:'brightness(1)'},{transform:`rotateY(${direction>0?-90:90}deg)`,filter:'brightness(.55)',offset:.6},{transform:`rotateY(${direction>0?-180:180}deg)`,filter:'brightness(.8)',opacity:0}],{duration:reduce?100:850,easing:'cubic-bezier(.25,.65,.25,1)',fill:'forwards'}).finished.then(()=>{leaf.remove();flipping=false;});
};
const revealObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('scroll-visible');revealObserver.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.section-top,.doors,.history article,.ref-contact h2').forEach(el=>{el.classList.add('scroll-reveal');revealObserver.observe(el)});
const pageProgress=document.createElement('div');pageProgress.className='page-scroll-progress';document.body.append(pageProgress);
addEventListener('scroll',()=>{const range=document.documentElement.scrollHeight-innerHeight;pageProgress.style.transform=`scaleX(${range>0?scrollY/range:0})`},{passive:true});
// Project-specific interface previews and scroll choreography across every section.
function decorateProjectPreviews(){
 document.querySelectorAll('.room-project:not([data-art-ready])').forEach(card=>{
  card.dataset.artReady='true';const id=card.dataset.roomProject,art=card.firstElementChild;
  if(id==='privacy'){art.classList.add('privacy-thumb');art.innerHTML='<span class="thumb-kicker">BEYOND ALLOW / PRIVACY LENS</span><div class="mini-phone"><div class="phone-speaker"></div><div class="phone-status">9:41 <span>● ▰</span></div><div class="phone-app">Privacy Lens <span>↗</span></div><p class="phone-sub">Your data. Your decision.</p><div class="permission-sheet"><span class="pin-icon">◎</span><h4>Allow Blinkit to access<br>your location?</h4><div class="scope-row"><span>Approximate ✓</span><span>Precise</span></div><div class="nutrition"><span>SCOPE<b>2 km</b></span><span>STORAGE<b>On device</b></span><span>SHARING<b>0 partners</b></span></div><div class="permission-action">Allow While Using App</div><div class="permission-secondary">Allow Once</div><div class="permission-deny">Don’t Allow</div></div></div><span class="thumb-caption">CLARITY BEFORE CONSENT.</span>';}
  if(id==='wastu'){art.classList.add('wastu-thumb');art.innerHTML='<span class="thumb-kicker">WASTUVIZ / IMMERSIVE ARCHITECTURE</span><div class="mini-browser"><div class="browser-toolbar"><i></i><i></i><i></i><span>wastuviz.com</span></div><div class="browser-scene"><img src="/assets/wastu-preview.webp" alt="WastuViz architectural visualization"><div class="browser-nav">WASTUVIZ <span>WORK / STUDIO / CONTACT</span></div><div class="browser-title">Spaces.<br>Reimagined.</div><span class="browser-cta">EXPLORE WASTUVIZ ↗</span></div></div><span class="thumb-caption">A DIGITAL WINDOW INTO SPACE.</span>';}
  if (id === 'arrival' || id === 'kaavad') {
   const cover = art.querySelector('img');
   const book = document.createElement('span');
   book.className = 'zine-book';
   art.classList.add('zine-studio');
   cover.replaceWith(book);
   book.append(cover);
   art.addEventListener('pointermove', event => {
    if (event.pointerType !== 'mouse' || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const bounds = book.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (event.clientX - bounds.left) / bounds.width));
    const y = Math.max(0, Math.min(1, (event.clientY - bounds.top) / bounds.height));
    const distances = [x, 1 - x, y, 1 - y];
    const edge = distances.indexOf(Math.min(...distances));
    book.dataset.litEdge = ['left', 'right', 'top', 'bottom'][edge];
    book.style.setProperty('--edge-position', (edge < 2 ? y : x) * 100 + '%');
   });
   art.addEventListener('pointerleave', () => { delete book.dataset.litEdge; });
  }
  card.classList.add('scroll-reveal');revealObserver.observe(card);
 });
}
new MutationObserver(decorateProjectPreviews).observe(document.querySelector('.room-content'),{childList:true,subtree:true});
document.querySelectorAll('.door-leaf').forEach((door,i)=>{const n=document.createElement('span');n.className='portal-number';n.textContent='0'+(i+1);door.prepend(n);const line=document.createElement('span');line.className='portal-light';door.append(line);});
const motionSections=[...document.querySelectorAll('#home,#work,#journey,#contact')];
let scrollFramePending=false;
function choreographScroll(){scrollFramePending=false;const vh=innerHeight,reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;motionSections.forEach(section=>{const r=section.getBoundingClientRect();const entry=reduce?1:Math.max(0,Math.min(1,(vh-r.top)/(vh*.75)));const exit=reduce?0:Math.max(0,Math.min(1,-r.top/Math.max(vh,r.height*.65)));section.style.setProperty('--entry',entry.toFixed(4));section.style.setProperty('--exit',exit.toFixed(4));});}
addEventListener('scroll',()=>{if(!scrollFramePending){scrollFramePending=true;requestAnimationFrame(choreographScroll)}},{passive:true});addEventListener('resize',choreographScroll);choreographScroll();
// Render arrows as consistent vector icons rather than font/emoji characters.
const arrowPaths={
 '↗':'M5 19 19 5M5 5h14v14',
 '↓':'M12 4v16M5 13l7 7 7-7',
 '↑':'M12 20V4M5 11l7-7 7 7',
 '←':'M20 12H4m7-7-7 7 7 7',
 '→':'M4 12h16m-7-7 7 7-7 7'
};
function replaceArrowIcons(root){
 const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode:n=>n.parentElement&&!n.parentElement.closest('script,style,svg,textarea')&&/[↗↓↑←→]/u.test(n.nodeValue)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT});
 const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
 nodes.forEach(node=>{const fragment=document.createDocumentFragment();node.nodeValue.split(/([↗↓↑←→])/u).forEach(part=>{if(arrowPaths[part]){const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('viewBox','0 0 24 24');svg.setAttribute('class','arrow-icon');svg.setAttribute('aria-hidden','true');svg.setAttribute('focusable','false');const path=document.createElementNS('http://www.w3.org/2000/svg','path');path.setAttribute('d',arrowPaths[part]);svg.append(path);fragment.append(svg);}else fragment.append(document.createTextNode(part));});node.replaceWith(fragment);});
}
replaceArrowIcons(document.body);
new MutationObserver(records=>records.forEach(record=>{if(record.type==='characterData')replaceArrowIcons(record.target.parentNode);else record.addedNodes.forEach(node=>{if(node.nodeType===1&&!node.matches('svg,.arrow-icon'))replaceArrowIcons(node);else if(node.nodeType===3&&/[↗↓↑←→]/u.test(node.nodeValue))replaceArrowIcons(node.parentNode);});})).observe(document.body,{childList:true,subtree:true,characterData:true});

// Studio lighting, portrait colour reveal, and door descriptions.
{
 const root = document.documentElement;
 const header = document.querySelector('header');
 const nav = header.querySelector('nav');
 const links = [...nav.querySelectorAll('a')];
 const toggle = document.createElement('button');
 toggle.className = 'studio-cord';
 toggle.type = 'button';
 toggle.innerHTML = '<span class="cord-assembly" aria-hidden="true"><span class="cord-line"></span><span class="cord-weight"></span></span><span class="cord-hint" aria-hidden="true">Pull me</span>';
 toggle.setAttribute('aria-label', 'Dark mode');
 header.append(toggle);

 const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
 const light = document.createElement('div');
 light.className = 'studio-ambient';
 light.setAttribute('aria-hidden','true');
 document.body.prepend(light);
 function setDark(dark) {
  root.dataset.studio = dark ? 'night' : 'day';
  toggle.setAttribute('aria-pressed', String(dark));
 }
 setDark(false);
 try { setDark(localStorage.getItem('portfolio-studio') === 'night'); } catch {}
 let pulling = false;
 toggle.addEventListener('click', () => {
  if (pulling) return;
  pulling = true;
  const dark = root.dataset.studio !== 'night';
  const change = () => {
   setDark(dark);
   try { localStorage.setItem('portfolio-studio', dark ? 'night' : 'day'); } catch {}
  };
  if (reducedMotion.matches) {
   change();
   pulling = false;
   return;
  }
  toggle.classList.add('cord-pulled');
  root.classList.add(dark ? 'studio-dimming' : 'studio-warming');
  setTimeout(change, 165);
  setTimeout(() => {
   toggle.classList.remove('cord-pulled');
   root.classList.remove('studio-dimming', 'studio-warming');
   pulling = false;
  }, 730);
 });

 let lightFrame = 0;
 let pointerX = .57;
 let pointerY = .38;
 function updateStudioLight() {
  lightFrame = 0;
  const scrollRange = Math.max(1, document.documentElement.scrollHeight - innerHeight);
  const progress = Math.max(0, Math.min(1, scrollY / scrollRange));
  light.style.setProperty('--light-x', (22 + pointerX * 56) + '%');
  light.style.setProperty('--light-y', (23 + pointerY * 38 - progress * 8) + '%');
  light.style.setProperty('--light-hue', 27 + progress * 35 + pointerX * 7);
 }
 function queueStudioLight() {
  if (!lightFrame && root.dataset.studio === 'night' && !reducedMotion.matches) {
   lightFrame = requestAnimationFrame(updateStudioLight);
  }
 }
 addEventListener('pointermove', event => {
  pointerX = event.clientX / innerWidth;
  pointerY = event.clientY / innerHeight;
  queueStudioLight();
 }, {passive:true});
 addEventListener('scroll', queueStudioLight, {passive:true});

 const sections = links.map(link => document.querySelector(link.hash));
 function syncNav() {
  const index = sections.findLastIndex(section => section.getBoundingClientRect().top <= innerHeight * .34);
  const atEnd = innerHeight + scrollY >= document.documentElement.scrollHeight - 4;
  const active = links[atEnd ? links.length - 1 : Math.max(0, index)];
  links.forEach(link => link === active ? link.setAttribute('aria-current', 'location') : link.removeAttribute('aria-current'));
 }
 addEventListener('scroll', syncNav, {passive:true});
 addEventListener('resize', syncNav);
 syncNav();

 const portrait = document.querySelector('.ref-portrait');
 const stage = document.createElement('div');
 stage.className = 'portrait-stage';
 portrait.replaceWith(stage);
 portrait.className = 'portrait-mono';
 const colour = portrait.cloneNode();
 colour.className = 'portrait-colour';
 colour.alt = '';
 colour.setAttribute('aria-hidden', 'true');
 stage.append(portrait, colour);
 function revealColour(event) {
  const bounds = stage.getBoundingClientRect();
  stage.style.setProperty('--portrait-x', event.clientX - bounds.left + 'px');
  stage.style.setProperty('--portrait-y', event.clientY - bounds.top + 'px');
  stage.classList.add('colour-on');
 }
 stage.addEventListener('pointermove', revealColour);
 stage.addEventListener('pointerdown', revealColour);
 for (const event of ['pointerleave','pointercancel','pointerup']) {
  stage.addEventListener(event, e => {
   if (event !== 'pointerup' || e.pointerType !== 'mouse') stage.classList.remove('colour-on');
  });
 }

 const gallery = document.querySelector('.doors');
 const descriptions = ['Two printed zines, from cover to final spread.', 'A live architecture website and an interactive privacy app.', 'Sparky brings a packaging character to life in AR.', 'Packaging identities, artwork and finished mockups.'];
 gallery.querySelectorAll('[data-door]').forEach((door, i) => {
  door.querySelector('.door-hint').textContent = descriptions[i];
 });
}
