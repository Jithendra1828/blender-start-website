/* =============================================
   tabs.js — Shortcut Panel Tab Switching
   BlenderStart Beginner Guide
   ============================================= */

(function () {
  const tabBtns = document.querySelectorAll('.tab-btn');

  tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const tabName = btn.dataset.tab;

      // Deactivate all tabs and panels
      tabBtns.forEach((b) => b.classList.remove('active'));
      document.querySelectorAll('.shortcut-panel').forEach((p) => {
        p.classList.remove('active');
      });

      // Activate clicked tab and matching panel
      btn.classList.add('active');
      const panel = document.getElementById('panel-' + tabName);
      if (panel) panel.classList.add('active');
    });
  });
})();
