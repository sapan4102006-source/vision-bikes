const header = document.querySelector('.site-header');
const nav = document.querySelector('.nav');
const toggle = document.querySelector('.menu-toggle');
const year = document.getElementById('year');
const slideA = document.getElementById('hero-slide-a');
const slideB = document.getElementById('hero-slide-b');

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

// Hero slider using only local images if available
(() => {
  const candidates = [
    './portfolio/poster/en.jpg',
    './portfolio/poster/en (1).jpg',
    './portfolio/poster/en (2).jpg',
    './portfolio/poster/2.jpg',
  ];

  const existing = [];
  const checkImage = (src) => new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve({ src, ok: true });
    img.onerror = () => resolve({ src, ok: false });
    img.src = src;
  });

  const init = async () => {
    if (!slideA || !slideB) return;
    const results = await Promise.all(candidates.map(checkImage));
    results.forEach(r => { if (r.ok) existing.push(r.src); });
    if (existing.length === 0) return; // No local images found, keep gradient-only hero

    let i = 0;
    const get = (n) => existing[n % existing.length];
    slideA.style.backgroundImage = `url('${get(0)}')`;
    slideA.classList.add('active');
    if (existing.length > 1) {
      slideB.style.backgroundImage = `url('${get(1)}')`;
      let showA = false;
      setInterval(() => {
        showA = !showA;
        const next = get(++i);
        if (showA) {
          slideA.style.backgroundImage = `url('${next}')`;
          slideA.classList.add('active');
          slideB.classList.remove('active');
        } else {
          slideB.style.backgroundImage = `url('${next}')`;
          slideB.classList.add('active');
          slideA.classList.remove('active');
        }
      }, 5000);
    }
  };
  init();
})();

// Progressive card media: try local images from data-img-candidates, else keep gradient
(() => {
  const mediaEls = document.querySelectorAll('.card-media[data-img-candidates]');
  const tryCandidates = async (el) => {
    const list = (el.getAttribute('data-img-candidates') || '')
      .split(',')
      .map(s => s.trim())
      .filter(Boolean);
    for (const src of list) {
      const ok = await new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = src;
      });
      if (ok) {
        el.style.backgroundImage = `url('${src}')`;
        el.style.backgroundSize = 'cover';
        el.style.backgroundPosition = 'center';
        el.style.filter = 'saturate(1.02)';
        return;
      }
    }
  };
  mediaEls.forEach(el => { tryCandidates(el); });
})();

