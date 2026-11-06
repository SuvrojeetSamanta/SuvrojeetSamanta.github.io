const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.primary-nav');
const navLinks = Array.from(document.querySelectorAll('.primary-nav a'));
const sections = Array.from(document.querySelectorAll('main section[id]'));
const yearNode = document.getElementById('current-year');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isExpanded));
    menuToggle.setAttribute('aria-label', isExpanded ? 'Open navigation menu' : 'Close navigation menu');
    nav.classList.toggle('is-open');
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation menu');
      nav.classList.remove('is-open');
    });
  });
}

const updateActiveLink = (id) => {
  navLinks.forEach((link) => {
    const isActive = link.getAttribute('href') === `#${id}`;
    link.classList.toggle('active', isActive);
    if (isActive) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });
};

if ('IntersectionObserver' in window && sections.length > 0) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          updateActiveLink(entry.target.id);
        }
      });
    },
    { rootMargin: '-40% 0px -45% 0px', threshold: 0.1 }
  );

  sections.forEach((section) => sectionObserver.observe(section));

  if (!prefersReducedMotion) {
    const revealTargets = document.querySelectorAll('[data-reveal]');
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    revealTargets.forEach((target) => revealObserver.observe(target));
  } else {
    document.querySelectorAll('[data-reveal]').forEach((target) => {
      target.classList.add('revealed');
    });
  }
} else {
  document.querySelectorAll('[data-reveal]').forEach((target) => {
    target.classList.add('revealed');
  });
}
