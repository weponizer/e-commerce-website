
// Scroll reveal animations
const revealElements = document.querySelectorAll(
  '.sectionhead, .aboutimage, .aboutcopy, ' +
  '.servicecard, .carebanner, .reviewcard, ' +
  '.reviewsummary, .contactinfo, .mapbox'
);

revealElements.forEach((element, index) => {
  element.classList.add('reveal');

  // Stagger the facility and review cards
  if (element.classList.contains('servicecard') ||
      element.classList.contains('reviewcard')) {
    element.style.transitionDelay =
      (index % 3) * 100 + 'ms';
  }
});

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -35px 0px'
  });

  revealElements.forEach(element => observer.observe(element));
} else {
  revealElements.forEach(element => element.classList.add('visible'));
}
