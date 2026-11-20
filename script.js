const menuButton=document.querySelector('.menu-btn');const nav=document.querySelector('.nav');
menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.textContent=open?'×':'☰';});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton.textContent='☰';menuButton.setAttribute('aria-expanded','false');}));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const topButton=document.querySelector('.to-top');window.addEventListener('scroll',()=>topButton.classList.toggle('show',window.scrollY>600));topButton.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
