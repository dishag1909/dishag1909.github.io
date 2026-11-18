// Open the selected door, travel through it, then reveal its project room.
let doorTravelRunning=false;
const projectRoom=document.querySelector('#door-room');
const roomBack=document.querySelector('.back-doors');
document.querySelectorAll('[data-door]').forEach(door=>{
 const showProjects=door.onclick;
 door.onclick=()=>{
  if(doorTravelRunning)return;doorTravelRunning=true;
  const bounds=door.getBoundingClientRect();
  const overlay=document.createElement('div');overlay.className='door-travel-overlay';overlay.setAttribute('aria-hidden','true');
  const travellingDoor=door.cloneNode(true);travellingDoor.removeAttribute('data-door');travellingDoor.removeAttribute('tabindex');travellingDoor.classList.remove('door-open');
  Object.assign(travellingDoor.style,{position:'absolute',left:bounds.left+'px',top:bounds.top+'px',width:bounds.width+'px',height:bounds.height+'px',maxWidth:'none',margin:'0',transformOrigin:'50% 50%',translate:'none',transform:'none'});
  overlay.append(travellingDoor);document.body.append(overlay);
  projectRoom.classList.add('room-active');projectRoom.classList.remove('room-entered');document.body.style.overflow='hidden';
  showProjects();
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  requestAnimationFrame(()=>travellingDoor.classList.add('door-open'));
  const scale=Math.max(innerWidth/bounds.width,innerHeight/bounds.height)*1.65;
  const x=innerWidth/2-(bounds.left+bounds.width/2),y=innerHeight/2-(bounds.top+bounds.height/2);
  const travel=travellingDoor.animate([{transform:'translate(0,0) scale(1)'},{transform:'translate(0,0) scale(1)',offset:.2},{transform:`translate(${x}px,${y}px) scale(${scale})`}],{duration:reduced?150:1550,easing:'cubic-bezier(.65,0,.25,1)',fill:'forwards'});
  travel.finished.then(()=>{
   projectRoom.hidden=false;projectRoom.scrollTop=0;projectRoom.classList.add('room-entered');
   overlay.animate([{opacity:1},{opacity:0}],{duration:reduced?50:400,fill:'forwards'}).finished.then(()=>{overlay.remove();doorTravelRunning=false});
  });
 };
});
const leaveRoom=roomBack.onclick;
roomBack.onclick=()=>{projectRoom.classList.remove('room-active','room-entered');document.body.style.overflow='';leaveRoom();};
const closeBeforeRoom=close;
close=function(){closeBeforeRoom();if(projectRoom.classList.contains('room-active')&&!projectRoom.hidden)document.body.style.overflow='hidden';};
document.querySelector('#modal .close').onclick=close;
addEventListener('keydown',e=>{if(e.key==='Escape'&&projectRoom.classList.contains('room-active')&&!projectRoom.hidden)document.body.style.overflow='hidden';});
