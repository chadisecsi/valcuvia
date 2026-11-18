// Valcuvia site - piccolo script di supporto
document.addEventListener('DOMContentLoaded', function () {
  // Evidenzia il link attivo in base alla pagina corrente
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === path) {
      link.classList.add('active');
    }
  });

  // Smooth scroll per i link interni con #
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
