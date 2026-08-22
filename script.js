(function () {
  'use strict';

  var navToggle = document.querySelector('.nav__toggle');
  var menuWrap = document.querySelector('.nav__menu-wrap');
  if (navToggle && menuWrap) {
    navToggle.addEventListener('click', function () {
      var open = menuWrap.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    menuWrap.querySelectorAll('.menu a, .nav__cta').forEach(function (a) {
      a.addEventListener('click', function () { menuWrap.classList.remove('is-open'); navToggle.setAttribute('aria-expanded', 'false'); });
    });
  }

  var thread = document.querySelector('.thread__progress');
  if (thread) {
    var update = function () {
      var h = document.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      var ratio = max > 0 ? h.scrollTop / max : 0;
      thread.style.height = (ratio * 100) + '%';
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
  }

  var reveals = document.querySelectorAll('.reveal');
  if (reveals.length && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el, i) { el.style.transitionDelay = (Math.min(i, 6) * 60) + 'ms'; io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  }

  document.querySelectorAll('.faq__item').forEach(function (item) {
    var q = item.querySelector('.faq__q');
    if (!q) return;
    q.addEventListener('click', function () {
      var open = item.hasAttribute('open');
      document.querySelectorAll('.faq__item[open]').forEach(function (other) { if (other !== item) other.removeAttribute('open'); });
      if (open) { item.removeAttribute('open'); } else { item.setAttribute('open', ''); }
    });
  });

  var yearEl = document.querySelector('[data-year]');
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }
})();
