/* Shared Pro/Fun switch for the case-study pages.
   Fun is the default; the choice is remembered per visitor and shared
   with the front page through the same localStorage key. */
(function () {
  var toggle = document.querySelector('.cs-mode-toggle');
  if (!toggle) return;
  var labelPro = toggle.querySelector('[data-label="pro"]');
  var labelFun = toggle.querySelector('[data-label="fun"]');
  var isFun = true;
  try { isFun = localStorage.getItem('ep-mode') !== 'pro'; } catch (e) { isFun = true; }

  function paint() {
    document.body.classList.toggle('fun', isFun);
    if (labelPro) labelPro.classList.toggle('active-label', !isFun);
    if (labelFun) labelFun.classList.toggle('active-label', isFun);
    toggle.setAttribute('aria-pressed', isFun ? 'true' : 'false');
  }
  function flip() {
    isFun = !isFun;
    paint();
    try { localStorage.setItem('ep-mode', isFun ? 'fun' : 'pro'); } catch (e) {}
  }
  paint();
  toggle.addEventListener('click', flip);
  toggle.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); flip(); }
  });
})();
