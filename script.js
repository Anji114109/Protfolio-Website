// ------- Starfield -------
const starsContainer = document.getElementById('stars');
const STAR_COUNT = 200;

function addStars() {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  starsContainer.innerHTML = '';

  for (let i = 0; i < STAR_COUNT; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * vw + 'px';
    star.style.top  = Math.random() * vh + 'px';
    const size = Math.random() < 0.75 ? 2 : (Math.random() < 0.9 ? 3 : 1);
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    const duration = 6 + Math.random() * 10;
    star.style.animationDuration = duration + 's';
    star.style.animationDelay = -(Math.random() * duration) + 's';
    starsContainer.appendChild(star);
  }
}
addStars();
window.addEventListener('resize', addStars);

// ------- Reveal animations -------
const sections = document.querySelectorAll('section');
const cards = document.querySelectorAll('.card');

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < triggerBottom) sec.classList.add('show');
  });
  cards.forEach((card, idx) => {
    const top = card.getBoundingClientRect().top;
    if (top < triggerBottom) {
      if (idx % 2 === 0) card.classList.add('slide-left');
      else card.classList.add('slide-right');
    }
  });
}

// ------- Scroll spy -------
function highlightNav() {
  let current = '';
  sections.forEach(sec => {
    const offset = sec.offsetTop - 140;
    if (window.scrollY >= offset) current = sec.id;
  });
  document.querySelectorAll('.nav-links li a').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href').includes(current));
  });
}

// ------- Mobile menu -------
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-links');
if (hamburger) {
  hamburger.addEventListener('click', () => navMenu.classList.toggle('show'));
  document.querySelectorAll('.nav-links li a').forEach(l =>
    l.addEventListener('click', () => navMenu.classList.remove('show'))
  );
}

// ------- Typing Animation -------
const typingText = document.getElementById("typing-text");
const text = "Computer Science and Engineering Student";
let index = 0;
function typeEffect() {
  if (index < text.length) {
    typingText.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}

// ------- Init -------
window.addEventListener('load', () => {
  document.querySelector('.hero').classList.add('show');
  typeEffect();
  revealOnScroll();
  highlightNav();
});
window.addEventListener('scroll', () => {
  revealOnScroll();
  highlightNav();
});
