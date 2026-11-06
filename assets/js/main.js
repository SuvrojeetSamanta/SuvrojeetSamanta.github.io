const navToggle = document.querySelector(".nav-toggle");
const menu = document.querySelector(".menu");
const navLinks = document.querySelectorAll('.menu a[href^="#"]');
const sections = document.querySelectorAll("main section[id]");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (navToggle && menu) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    navToggle.setAttribute("aria-label", expanded ? "Open menu" : "Close menu");
    menu.classList.toggle("open");
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const targetId = link.getAttribute("href")?.replace("#", "");
    if (targetId) {
      activateLink(targetId);
    }
    if (!menu || !navToggle) return;
    menu.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open menu");
  });
});

const activateLink = (id) => {
  navLinks.forEach((link) => {
    const active = link.getAttribute("href") === `#${id}`;
    link.classList.toggle("active", active);
    if (active) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
};

const updateActiveByScroll = () => {
  let current = sections[0]?.id;
  const offset = 140;

  sections.forEach((section) => {
    const top = section.getBoundingClientRect().top + window.scrollY;
    if (window.scrollY + offset >= top) {
      current = section.id;
    }
  });

  if (current) {
    activateLink(current);
  }
};

window.addEventListener("scroll", updateActiveByScroll, { passive: true });
window.addEventListener("hashchange", () => {
  const id = window.location.hash.slice(1);
  if (id) activateLink(id);
});

if (window.location.hash) {
  const initialId = window.location.hash.slice(1);
  activateLink(initialId);
} else {
  updateActiveByScroll();
}

const revealItems = document.querySelectorAll(".reveal");
if (!reducedMotion) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}

const currentYear = document.getElementById("current-year");
if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}
