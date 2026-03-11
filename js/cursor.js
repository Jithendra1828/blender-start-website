/* =============================================
   cursor.js — Custom Cursor Behaviour
   BlenderStart Beginner Guide
   ============================================= */

(function () {
  const cursor = document.getElementById('cursor');
  const trail  = document.getElementById('cursorTrail');
  if (!cursor || !trail) return;

  let mouseX = 0, mouseY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top  = mouseY + 'px';
    setTimeout(() => {
      trail.style.left = mouseX + 'px';
      trail.style.top  = mouseY + 'px';
    }, 90);
  });

  // Grow cursor on interactive elements
  const interactors = 'a, button, .sc-card, .syl-card, .mouse-card, .save-card, .mode-card, .step, .env-zone';
  document.querySelectorAll(interactors).forEach((el) => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(2.5)';
      cursor.style.opacity   = '0.7';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      cursor.style.opacity   = '1';
    });
  });

  // Hide cursor when leaving window
  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
    trail.style.opacity  = '0';
  });
  document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
    trail.style.opacity  = '1';
  });
})();
