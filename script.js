const header = document.querySelector('.site-header');
const nav = document.querySelector('.nav');
const toggle = document.querySelector('.menu-toggle');
const year = document.getElementById('year');

if (year) year.textContent = new Date().getFullYear();

// Header shadow on scroll
let lastY = 0;
const onScroll = () => {
  const y = window.scrollY || document.documentElement.scrollTop;
  if (y > 8 && !header.classList.contains('elevated')) {
    header.classList.add('elevated');
    header.style.boxShadow = '0 10px 20px rgba(0,0,0,.35)';
  } else if (y <= 8 && header.classList.contains('elevated')) {
    header.classList.remove('elevated');
    header.style.boxShadow = 'none';
  }
  lastY = y;
};
window.addEventListener('scroll', onScroll, { passive: true });

// Mobile nav toggle
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
  // Close nav when clicking a link
  nav.addEventListener('click', (e) => {
    const t = e.target;
    if (t && t.tagName === 'A') {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// Smooth scroll for same-page links
document.addEventListener('click', (e) => {
  const target = e.target;
  if (!(target instanceof Element)) return;
  if (target.matches('a[href^="#"]')) {
    const id = target.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', `#${id}`);
    }
  }
});

