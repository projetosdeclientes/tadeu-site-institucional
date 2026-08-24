(function () {
  'use strict';

  // Ano no rodapé
  var ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Barra de progresso
  var progress = document.getElementById('progress');
  function updateProgress() {
    if (!progress) return;
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    var pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
    progress.style.width = pct + '%';
  }
  if (!reduced && progress) {
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    updateProgress();
  }

  // Reveal (todas as variantes + stagger)
  var targets = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-mask, .stagger');
  if (!reduced && 'IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    targets.forEach(function (el) { obs.observe(el); });
  } else {
    targets.forEach(function (el) { el.classList.add('in'); });
  }

  // Fio condutor progressivo (como-funciona)
  var track = document.getElementById('cfTrack');
  var fill = document.getElementById('cfFill');
  function updateFill() {
    if (!track || !fill) return;
    var r = track.getBoundingClientRect();
    var vh = window.innerHeight;
    var total = r.height;
    var progressed = Math.min(Math.max(vh * 0.5 - r.top, 0), total);
    fill.style.height = progressed + 'px';
  }
  if (!reduced && track) {
    window.addEventListener('scroll', updateFill, { passive: true });
    window.addEventListener('resize', updateFill);
    updateFill();
  }
})();
