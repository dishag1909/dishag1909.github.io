// Full-screen scroll transitions between each major chapter.
const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
const animatedSections=[...document.querySelectorAll('#home,#work,#journey,#contact')];
let motionTick=false;
function updateChapterMotion(){motionTick=false;const vh=innerHeight;animatedSections.forEach(section=>{const r=section.getBoundingClientRect();const enter=reducedMotion?1:Math.max(0,Math.min(1,(vh-r.top)/(vh*.85)));const leave=reducedMotion?0:Math.max(0,Math.min(1,-r.top/Math.max(vh,r.height)));section.style.setProperty('--scene-enter',enter.toFixed(4));section.style.setProperty('--scene-leave',leave.toFixed(4));});}
addEventListener('scroll',()=>{if(!motionTick){motionTick=true;requestAnimationFrame(updateChapterMotion)}},{passive:true});addEventListener('resize',updateChapterMotion);updateChapterMotion();
if(!reducedMotion&&!sessionStorage.getItem('disha-intro-credit')){
 const opening=document.createElement('div');opening.className='portfolio-opening';opening.setAttribute('aria-label','Disha Agarwal portfolio introduction');opening.innerHTML='<div class="opening-light" aria-hidden="true"></div><div class="opening-scan" aria-hidden="true"></div><div class="opening-word">'+[...'Disha Agarwal'].map((c,i)=>`<span style="--letter:${i}">${c===' '?'&nbsp;':c}</span>`).join('')+'</div><p>Visual communication designer</p><button type="button">Skip opening</button>';
 document.body.append(opening);const previousOverflow=document.body.style.overflow;document.body.style.overflow='hidden';let finished=false;function endOpening(){if(finished)return;finished=true;sessionStorage.setItem('disha-intro-credit','1');opening.classList.add('opening-exit');document.body.style.overflow=previousOverflow;setTimeout(()=>opening.remove(),1100);}opening.querySelector('button').onclick=endOpening;setTimeout(endOpening,4500);
}
