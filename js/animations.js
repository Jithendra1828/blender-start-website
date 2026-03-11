/* =============================================
   animations.js — Scroll Reveal Observer
   BlenderStart Beginner Guide
   ============================================= */

(function () {
  // ── Intersection Observer for .reveal elements ──
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Optionally unobserve after reveal for performance
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  document.querySelectorAll('.reveal').forEach((el) => {
    revealObserver.observe(el);
  });

  // ── Animated counter for stat numbers ──
  function animateCounter(el, target, suffix) {
    const duration = 1200;
    const start = performance.now();
    const startVal = 0;

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(startVal + (target - startVal) * eased);
      el.textContent = current + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }

  const statObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const numEl = entry.target.querySelector('.stat-num');
          if (!numEl) return;
          const raw     = numEl.textContent.trim();
          const suffix  = raw.replace(/[0-9]/g, '');
          const target  = parseInt(raw.replace(/[^0-9]/g, ''), 10);
          if (!isNaN(target)) animateCounter(numEl, target, suffix);
          statObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll('.stat-item').forEach((el) => {
    statObserver.observe(el);
  });
})();
