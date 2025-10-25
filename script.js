
function toggleNav(){
  const btn=document.querySelector('.nav-toggle');
  const menu=document.getElementById('nav-menu');
  const open=menu.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
}

function book(e){
  e.preventDefault();
  const data=Object.fromEntries(new FormData(e.target).entries());
  alert(`Searching tours for ${data.location} on ${data.date} for ${data.pax} passenger(s).`);
  return false;
}

function subscribe(e){
  e.preventDefault();
  const email=document.getElementById('email').value.trim();
  if(!email){return false}
  alert(`Thanks! We'll email deals to ${email}.`);
  e.target.reset();
  return false;
}

function openModal(title){
  const d=document.getElementById('modal');
  document.getElementById('modal-title').textContent=title;
  document.getElementById('modal-tour').value=title;
  d.showModal();
}
function closeModal(){
  document.getElementById('modal').close();
}
function bookNow(e){
  e.preventDefault();
  const name=document.getElementById('modal-tour').value;
  alert(`Booking requested for: ${name}`);
  closeModal();
  return false;
}

// Simple reviews carousel accessibility
let current=0;
function goSlide(i){
  const slides=[...document.querySelectorAll('.slide')];
  const dots=[...document.querySelectorAll('.dot')];
  slides[current].removeAttribute('data-active');
  dots[current].setAttribute('aria-selected','false');
  current=i%slides.length;
  slides[current].setAttribute('data-active','');
  dots[current].setAttribute('aria-selected','true');
}
setInterval(()=>{goSlide((current+1)%3)},6000);

document.getElementById('year').textContent=new Date().getFullYear();
