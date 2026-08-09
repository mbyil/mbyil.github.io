// Year
var yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mobile nav
var burger = document.getElementById('burger');
var navLinks = document.getElementById('navLinks');
if (burger && navLinks) {
  burger.addEventListener('click', function () {
    var open = navLinks.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
  });
  navLinks.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      navLinks.classList.remove('open');
      burger.setAttribute('aria-expanded', false);
    });
  });
}

// Active nav link on scroll (only relevant on the homepage, where sections exist)
var sections = document.querySelectorAll('main section[id]');
var navAnchors = document.querySelectorAll('nav.links a[data-nav]');
if (sections.length && navAnchors.length) {
  var navObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        navAnchors.forEach(function (a) { a.classList.remove('active'); });
        var match = document.querySelector('nav.links a[href="#' + entry.target.id + '"]');
        if (match) match.classList.add('active');
      }
    });
  }, { rootMargin: '-45% 0px -45% 0px' });
  sections.forEach(function (s) { navObserver.observe(s); });
}

// Reveal on scroll
var revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(function (el) { revealObserver.observe(el); });
}

// Photo lightbox — works on any page that has .frame elements plus the
// #lightbox markup (see index.html or photography/index.html for the markup).
var frames = Array.from(document.querySelectorAll('.frame'));
var lightbox = document.getElementById('lightbox');
if (frames.length && lightbox) {
  var lbImg = document.getElementById('lbImg');
  var lbCap = document.getElementById('lbCap');
  var current = 0;

  var openLightbox = function (i) {
    current = i;
    var f = frames[current];
    var img = f.querySelector('img');
    lbImg.src = img.src.replace(/\/\d+\/\d+$/, '/1400/1400');
    lbImg.alt = img.alt;
    lbCap.textContent = 'FRAME ' + f.dataset.frame + ' — ' + f.dataset.cap;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  var closeLightbox = function () {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  };
  var step = function (dir) {
    current = (current + dir + frames.length) % frames.length;
    openLightbox(current);
  };

  frames.forEach(function (f, i) { f.addEventListener('click', function () { openLightbox(i); }); });
  var lbClose = document.getElementById('lbClose');
  var lbPrev = document.getElementById('lbPrev');
  var lbNext = document.getElementById('lbNext');
  if (lbClose) lbClose.addEventListener('click', closeLightbox);
  if (lbPrev) lbPrev.addEventListener('click', function () { step(-1); });
  if (lbNext) lbNext.addEventListener('click', function () { step(1); });
  lightbox.addEventListener('click', function (e) { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', function (e) {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') step(-1);
    if (e.key === 'ArrowRight') step(1);
  });
}

// Horizontal scroll carousel — used by the homepage Work section (#workScroll).
// Arrows auto-hide when there isn't enough content to overflow (3 or fewer cards).
(function () {
  var scroller = document.getElementById('workScroll');
  var prevBtn = document.getElementById('workPrev');
  var nextBtn = document.getElementById('workNext');
  if (!scroller || !prevBtn || !nextBtn) return;

  function cardStep() {
    var card = scroller.querySelector('.card');
    var gap = parseFloat(getComputedStyle(scroller).columnGap || getComputedStyle(scroller).gap || 28);
    return card ? card.getBoundingClientRect().width + gap : 320;
  }

  function update() {
    var maxScroll = scroller.scrollWidth - scroller.clientWidth;
    var hasOverflow = maxScroll > 4;
    prevBtn.classList.toggle('is-hidden', !hasOverflow);
    nextBtn.classList.toggle('is-hidden', !hasOverflow);
    prevBtn.disabled = scroller.scrollLeft <= 4;
    nextBtn.disabled = scroller.scrollLeft >= maxScroll - 4;
  }

  prevBtn.addEventListener('click', function () { scroller.scrollBy({ left: -cardStep(), behavior: 'smooth' }); });
  nextBtn.addEventListener('click', function () { scroller.scrollBy({ left: cardStep(), behavior: 'smooth' }); });
  scroller.addEventListener('scroll', update);
  window.addEventListener('resize', update);

  // Run after layout settles (images/fonts can shift widths slightly).
  update();
  window.requestAnimationFrame(update);
  setTimeout(update, 300);
})();
