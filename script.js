/*
  Content configuration
  ---------------------
  Update the arrays below to maintain the portfolio. Add your project objects
  to `projects`; the project section will render them automatically.
*/
const profile = {
  name: 'Suvrojeet Samanta',
  initials: 'SS',
  discipline: 'Civil Engineering',
  institution: 'Heritage Institute of Technology',
  location: 'Kolkata, India',
  batch: '2025—2029',
  email: 'samantasuvrojeet@gmail.com',
  linkedin: 'https://www.linkedin.com/in/suvrojeet-samanta/',
  github: 'https://github.com/SuvrojeetSamanta',
  website: 'https://suvrojeet.me',
};

const copy = {
  heroTitle: 'Building a future with',
  heroEmphasis: 'structure',
  heroTail: 'and intent.',
  heroDescription: 'learning how strong ideas become strong structures.',
  aboutLead: 'I’m interested in the space where people, materials, and ideas meet. Civil engineering gives me a way to understand the built environment, from the forces within a structure to the needs of the people who use it.',
  aboutDetail: 'I’m currently pursuing my B.Tech in civil engineering at Heritage Institute of Technology, as part of the 2025—2029 batch. I’m building a strong base in engineering fundamentals through study, projects, and collaboration.',
  contactTitle: 'Let’s build something',
  contactEmphasis: 'worthwhile.',
  contactDescription: 'Have an idea, an opportunity, or simply want to say hello? I’d love to hear from you.',
};

const navigation = [
  { label: 'Profile', href: '#about' },
  { label: 'Strengths', href: '#skills' },
  { label: 'Focus', href: '#focus' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
];

const pageSections = [
  { id: 'about', number: '01', label: 'Profile', title: 'Learning how the world', emphasis: 'fits together.' },
  { id: 'skills', number: '02', label: 'Strengths', title: 'Foundations I’m', emphasis: 'developing.' },
  { id: 'focus', number: '03', label: 'Current focus', title: 'Learning with', emphasis: 'direction.' },
  { id: 'projects', number: '04', label: 'Projects', title: 'Your work,', emphasis: 'well presented.' },
  { id: 'journey', number: '05', label: 'The journey', title: 'Currently under', emphasis: 'construction.' },
  { id: 'contact', number: '06', label: 'Contact', title: 'Let’s build something', emphasis: 'worthwhile.' },
];

const focusAreas = [
  { icon: 'layers', label: 'Core foundations', detail: 'Developing a strong base in mechanics, materials, surveying, and engineering mathematics.' },
  { icon: 'compass', label: 'Built environment', detail: 'Learning how structures, infrastructure, and public spaces work together in real places.' },
  { icon: 'ruler', label: 'Practical thinking', detail: 'Turning observations into clear questions, useful documentation, and better design decisions.' },
];

const academicSnapshot = [
  { value: '01', label: 'Year of study' },
  { value: '04', label: 'Year degree path' },
  { value: 'KOL', label: 'Study location' },
];

const strengths = [
  { number: '01', label: 'Engineering fundamentals' },
  { number: '02', label: 'Analytical problem-solving' },
  { number: '03', label: 'Design & visual thinking' },
  { number: '04', label: 'Structural & built-environment thinking' },
  { number: '05', label: 'Clear communication' },
  { number: '06', label: 'Curious collaboration' },
];

const projects = [
  /*
  {
    title: 'Project title',
    description: 'A short description of the work and the problem it addresses.',
    meta: 'Category · Tools · Year',
    href: '#',
    action: 'View project',
  },
  */
];

const journey = [
  { year: profile.batch, title: profile.institution, description: `B.Tech in ${profile.discipline} · ${profile.location}` },
  { year: 'NOW', title: 'Building the base', description: 'Strengthening civil engineering fundamentals, discovering interests, and learning through practical thinking.' },
  { year: 'NEXT', title: 'Finding meaningful problems', description: 'Exploring how civil engineering can create safer, more sustainable, and more thoughtful places.' },
];

const contactLinks = [
  { label: 'LinkedIn', href: profile.linkedin },
  { label: 'GitHub', href: profile.github },
];

const icon = (name, className = 'icon') => `<svg class="${className}" aria-hidden="true"><use href="#icon-${name}"></use></svg>`;
const sectionHeading = (section, compact = false) => `
  <div class="section-heading${compact ? ' compact' : ''}">
    <p class="section-number">${section.number} / ${section.label}</p>
    <h2>${section.title} <em>${section.emphasis}</em></h2>
  </div>
`;

const renderNavigation = () => {
  document.querySelector('#brand-name').textContent = profile.name;
  document.querySelector('#nav-list').innerHTML = [
    ...navigation.map((item) => `<li><a href="${item.href}">${item.label}</a></li>`),
    `<li><a class="nav-cta" href="#contact">Let’s connect ${icon('arrow-up-right')}</a></li>`,
  ].join('');
};

const renderHero = () => {
  document.querySelector('#hero-copy').innerHTML = `
    <p class="eyebrow"><span class="eyebrow-line"></span> ${profile.discipline} student · ${profile.location.split(',')[0]}</p>
    <h1>${copy.heroTitle} <em>${copy.heroEmphasis}</em> ${copy.heroTail}</h1>
    <p class="lead">Hi, I’m ${profile.name.split(' ')[0]} — a B.Tech ${profile.discipline} student at ${profile.institution}, ${profile.location}, ${copy.heroDescription}</p>
    <div class="hero-actions">
      <a class="btn btn-primary" href="#about">Explore my profile ${icon('arrow-down')}</a>
      <a class="text-link" href="mailto:${profile.email}">Email me ${icon('arrow-up-right')}</a>
    </div>
    <div class="hero-note"><span class="status-dot"></span> Currently pursuing B.Tech · ${profile.batch}</div>
  `;
  document.querySelector('#hero-visual').innerHTML = `
    <div class="blueprint-grid"></div>
    <div class="hero-stamp">EST.<br /><strong>2025</strong></div>
    <div class="profile-card">
      <div class="profile-card-top"><span class="card-label">Field notes / 01</span>${icon('spark', 'card-symbol')}</div>
      <div class="monogram">S<span>S</span></div>
      <div><p class="profile-title">${profile.name.split(' ')[0]}<br />${profile.name.split(' ').slice(1).join(' ')}</p><p class="profile-subtitle">${profile.discipline}<br />student</p></div>
      <div class="profile-card-footer"><span>HITK · KOLKATA</span><span>BATCH 2025—29</span></div>
    </div>
  `;
};

const renderAbout = () => {
  document.querySelector('#about-content').innerHTML = `
    ${sectionHeading(pageSections[0])}
    <div class="about-grid">
      <p class="large-copy">${copy.aboutLead}</p>
      <div class="about-details"><p>${copy.aboutDetail}</p><a class="arrow-link" href="${profile.linkedin}" target="_blank" rel="noreferrer">More on LinkedIn ${icon('arrow-up-right')}</a></div>
    </div>
  `;
};

const renderStrengths = () => {
  document.querySelector('#skills-content').innerHTML = `
    ${sectionHeading(pageSections[1], true)}
    <ul class="tag-grid" aria-label="Strengths">${strengths.map((item) => `<li><span>${item.number}</span>${item.label}</li>`).join('')}</ul>
  `;
};

const renderFocus = () => {
  document.querySelector('#focus-content').innerHTML = `
    <div class="focus-intro">
      <div>${sectionHeading(pageSections[2], true)}</div>
      <div class="snapshot" aria-label="Academic snapshot">${academicSnapshot.map((item) => `<div class="snapshot-item"><strong>${item.value}</strong><span>${item.label}</span></div>`).join('')}</div>
    </div>
    <div class="focus-grid">${focusAreas.map((item, index) => `<article class="focus-card"><div class="focus-card-top"><span class="focus-index">0${index + 1}</span>${icon(item.icon, 'focus-icon')}</div><h3>${item.label}</h3><p>${item.detail}</p></article>`).join('')}</div>
  `;
};

const renderProjects = () => {
  const projectMarkup = projects.length
    ? projects.map((project, index) => `<article class="card"><div class="card-index">${String(index + 1).padStart(2, '0')}</div><h3>${project.title}</h3><p>${project.description}</p><p class="card-meta">${project.meta}</p>${project.href ? `<a href="${project.href}" target="_blank" rel="noreferrer">${project.action || 'View project'} ${icon('arrow-up-right')}</a>` : ''}</article>`).join('')
    : `<div class="projects-empty"><div class="empty-icon">${icon('spark')}</div><h3>Your projects will appear here.</h3><p>Add project objects to the <code>projects</code> array in <code>script.js</code> and this section will update automatically.</p></div>`;
  document.querySelector('#projects-content').innerHTML = `${sectionHeading(pageSections[2])}<div class="cards${projects.length ? '' : ' cards-empty'}">${projectMarkup}</div>`;
};

const renderJourney = () => {
  document.querySelector('#journey-content').innerHTML = `${sectionHeading(pageSections[3], true)}<div class="timeline" role="list">${journey.map((item) => `<article class="timeline-item" role="listitem"><span class="timeline-year">${item.year}</span><h3>${item.title}</h3><p>${item.description}</p></article>`).join('')}</div>`;
};

const renderContact = () => {
  document.querySelector('#contact-content').innerHTML = `<div class="contact-grid"><div><p class="section-number">${pageSections[5].number} / ${pageSections[5].label}</p><h2>${copy.contactTitle} <em>${copy.contactEmphasis}</em></h2></div><div><p>${copy.contactDescription}</p><a class="email-link" href="mailto:${profile.email}">${profile.email} ${icon('arrow-up-right')}</a></div></div><ul class="contact-links">${contactLinks.map((item) => `<li><a href="${item.href}" target="_blank" rel="noreferrer">${item.label} ${icon('arrow-up-right')}</a></li>`).join('')}</ul>`;
};

const renderFooter = () => {
  document.querySelector('#footer-content').innerHTML = `<p>© <span id="current-year">${new Date().getFullYear()}</span> ${profile.name}</p><p class="footer-note">${profile.discipline} student · ${profile.location.split(',')[0]} ${icon('spark')}</p><a href="#top">Back to top ${icon('arrow-up')}</a>`;
};

renderNavigation();
renderHero();
renderAbout();
renderStrengths();
renderFocus();
renderProjects();
renderJourney();
renderContact();
renderFooter();

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.primary-nav');
const navLinks = Array.from(document.querySelectorAll('.primary-nav a'));
const sections = Array.from(document.querySelectorAll('main section[id]'));
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const setScrollProgress = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  document.documentElement.style.setProperty('--scroll-progress', `${scrollable ? (window.scrollY / scrollable) * 100 : 0}%`);
};

setScrollProgress();
window.addEventListener('scroll', setScrollProgress, { passive: true });

if (!prefersReducedMotion && window.matchMedia('(pointer: fine)').matches) {
  const heroVisual = document.querySelector('.hero-visual');
  const profileCard = document.querySelector('.profile-card');
  const interactiveCards = Array.from(document.querySelectorAll('.focus-card, .projects-empty'));
  const pointerTargets = [
    ...(heroVisual && profileCard ? [{ container: heroVisual, target: profileCard, strength: 8 }] : []),
    ...interactiveCards.map((card) => ({ container: card, target: card, strength: 7 })),
  ];

  const resetTilt = (target) => {
    target.style.setProperty('--tilt-x', '0deg');
    target.style.setProperty('--tilt-y', '0deg');
    target.style.setProperty('--glow-x', '50%');
    target.style.setProperty('--glow-y', '50%');
  };

  const bindTilt = ({ container, target, strength }) => {
    let frame = 0;
    let nextX = 0;
    let nextY = 0;
    container.addEventListener('pointermove', (event) => {
      const bounds = container.getBoundingClientRect();
      nextX = (event.clientX - bounds.left) / bounds.width - 0.5;
      nextY = (event.clientY - bounds.top) / bounds.height - 0.5;
      if (!frame) {
        frame = requestAnimationFrame(() => {
          target.style.setProperty('--tilt-x', `${nextY * -strength}deg`);
          target.style.setProperty('--tilt-y', `${nextX * strength}deg`);
          target.style.setProperty('--glow-x', `${(nextX + 0.5) * 100}%`);
          target.style.setProperty('--glow-y', `${(nextY + 0.5) * 100}%`);
          frame = 0;
        });
      }
    });
    container.addEventListener('pointerleave', () => {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      resetTilt(target);
    });
  };

  pointerTargets.forEach(bindTilt);

  if (heroVisual && profileCard) {
    profileCard.addEventListener('pointerenter', () => profileCard.style.setProperty('--lift', '-8px'));
    profileCard.addEventListener('pointerleave', () => profileCard.style.setProperty('--lift', '0px'));
  }
}

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isExpanded));
    menuToggle.setAttribute('aria-label', isExpanded ? 'Open navigation menu' : 'Close navigation menu');
    nav.classList.toggle('is-open');
  });
  navLinks.forEach((link) => link.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation menu');
    nav.classList.remove('is-open');
  }));
}

const updateActiveLink = (id) => navLinks.forEach((link) => {
  const active = link.getAttribute('href') === `#${id}`;
  link.classList.toggle('active', active);
  active ? link.setAttribute('aria-current', 'page') : link.removeAttribute('aria-current');
});

if ('IntersectionObserver' in window && sections.length) {
  const sectionObserver = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && updateActiveLink(entry.target.id)), { rootMargin: '-40% 0px -45% 0px', threshold: 0.1 });
  sections.forEach((section) => sectionObserver.observe(section));
  const revealTargets = document.querySelectorAll('[data-reveal]');
  if (prefersReducedMotion) revealTargets.forEach((target) => target.classList.add('revealed'));
  else {
    const revealObserver = new IntersectionObserver((entries, observer) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    revealTargets.forEach((target) => revealObserver.observe(target));
  }
} else document.querySelectorAll('[data-reveal]').forEach((target) => target.classList.add('revealed'));
