/**
 * Ensure the Clustrmaps-injected globe is targeted for centering.
 * The script injects a div or iframe after the clstr_globe script; we mark it so CSS can style it.
 */
(function () {
  var wrap = document.querySelector('.visitor-map-inner');
  if (!wrap) return;

  function markGlobe() {
    var script = document.getElementById('clstr_globe');
    if (!script) return;
    var next = script.nextElementSibling;
    if (next && !next.classList.contains('visitor-map-globe')) {
      next.classList.add('visitor-map-globe');
    }
  }

  markGlobe();
  setTimeout(markGlobe, 500);
  setTimeout(markGlobe, 2000);
})();
