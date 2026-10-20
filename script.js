/**
 * Canvasa — Coming Soon Landing Page
 * Safe vanilla script: dynamic year, top-scroll handler, subtle desktop tilt
 */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Copyright Year
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear().toString();
  }

  // 2. Safe Logo Click: Smoothly scroll to top without directory navigation
  const logoLink = document.querySelector('.header-logo-link');
  if (logoLink) {
    logoLink.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (history.replaceState) {
        history.replaceState(null, '', window.location.pathname + window.location.search);
      }
    });
  }

  // 3. Subtle Desktop Tilt for the Geometric Canvas Card
  const card = document.getElementById('canvasCard');
  if (card && window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)').matches) {
    let rId = null;

    card.addEventListener('mousemove', (e) => {
      if (rId) cancelAnimationFrame(rId);
      rId = requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(1000px) rotateX(${(-y * 6).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg)`;
      });
    });

    card.addEventListener('mouseleave', () => {
      if (rId) cancelAnimationFrame(rId);
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    });
  }
});
