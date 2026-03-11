/* =============================================
   scroll.js — Scroll Progress, Nav Highlight
   BlenderStart Beginner Guide
   ============================================= */

(function () {
  const progressBar = document.getElementById('progressBar');
  const navbar      = document.getElementById('navbar');
  const navLinks    = document.querySelectorAll('.nav-links a');
  const sections    = document.querySelectorAll('section[id]');

  // ── Scroll progress bar ──
  function updateProgress() {
    const scrolled = window.scrollY;
    const total    = document.body.scrollHeight - window.innerHeight;
    const pct      = total > 0 ? (scrolled / total) * 100 : 0;
    if (progressBar) progressBar.style.width = pct + '%';
  }

  // ── Navbar scrolled class ──
  function updateNavbar() {
    if (!navbar) return;
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  // ── Active nav link ──
  function updateActiveLink() {
    let current = '';
    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - 130) {
        current = section.id;
      }
    });
    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  // ── Smooth scroll for nav links ──
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Close mobile menu if open
        const nl = document.getElementById('navLinks');
        if (nl) nl.classList.remove('open');
      }
    });
  });

  // ── Hamburger toggle ──
  const hamburger = document.getElementById('hamburger');
  const navLinksEl = document.getElementById('navLinks');
  if (hamburger && navLinksEl) {
    hamburger.addEventListener('click', () => {
      navLinksEl.classList.toggle('open');
    });
  }

  // ── Bind all scroll listeners ──
  window.addEventListener('scroll', () => {
    updateProgress();
    updateNavbar();
    updateActiveLink();
  }, { passive: true });

  // Run once on load
  updateNavbar();
  updateActiveLink();
})();
