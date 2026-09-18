/* ============================================================
   Standalone Rust Course — Shared JavaScript
   Navigation, mobile menu, lesson progress
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // --- Mobile sidebar toggle ---
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.sidebar-overlay');

  if (menuBtn && sidebar) {
    menuBtn.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      if (overlay) overlay.classList.toggle('visible');
    });

    if (overlay) {
      overlay.addEventListener('click', () => {
        sidebar.classList.remove('open');
        overlay.classList.remove('visible');
      });
    }
  }

  // --- Mark current page in sidebar nav ---
  const currentPath = window.location.pathname;
  document.querySelectorAll('.sidebar-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && currentPath.endsWith(href.replace('./', ''))) {
      link.classList.add('active');
    }
  });

  // --- Keyboard shortcuts ---
  document.addEventListener('keydown', (e) => {
    // Arrow left/right for prev/next lesson
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    if (e.key === 'ArrowLeft') {
      const prev = document.querySelector('.lesson-nav .prev');
      if (prev) window.location.href = prev.href;
    }
    if (e.key === 'ArrowRight') {
      const next = document.querySelector('.lesson-nav .next');
      if (next) window.location.href = next.href;
    }
  });

  // --- Copy buttons on .input-block elements ---
  document.querySelectorAll('.input-block').forEach(block => {
    const btn = document.createElement('button');
    btn.className = 'copy-btn';
    btn.innerHTML = '📋 Copy';
    block.appendChild(btn);

    btn.addEventListener('click', () => {
      const code = block.querySelector('code');
      const text = code ? code.textContent.trim() : block.textContent.trim();
      navigator.clipboard.writeText(text).then(() => {
        btn.innerHTML = '✓ Copied!';
        btn.classList.add('copied');
        setTimeout(() => {
          btn.innerHTML = '📋 Copy';
          btn.classList.remove('copied');
        }, 2000);
      });
    });
  });

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
