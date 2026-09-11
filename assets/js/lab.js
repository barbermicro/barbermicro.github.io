// Autoplaying figure videos: honour reduced-motion settings; click to pause/play.
// Kept in a file (not inline) so the page's Content-Security-Policy can forbid inline scripts.
document.querySelectorAll('video[autoplay]').forEach(function (v) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { v.pause(); v.controls = true; }
  v.addEventListener('click', function () { if (v.paused) { v.play(); } else { v.pause(); } });
});
