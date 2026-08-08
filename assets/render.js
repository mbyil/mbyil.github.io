/* ==========================================================================
   Renders cards/rows/frames from window.SITE_DATA (see data.js).
   Call these from a small inline <script> placed AFTER data.js but
   BEFORE main.js, so the elements exist before main.js wires up the
   reveal-on-scroll observer and the photo lightbox.
   ========================================================================== */

(function () {
  function pad2(n) { return String(n).padStart(2, '0'); }
  function pad3(n) { return String(n).padStart(3, '0'); }

  function projectCardHTML(p, index, basePath) {
    var tags = p.tags.map(function (t) { return '<span>' + t + '</span>'; }).join('');
    return (
      '<article class="card reveal">' +
        '<a href="' + basePath + p.slug + '.html" style="display:contents;">' +
          '<div class="thumb"><img src="' + p.thumb + '" alt="' + p.thumbAlt + '" loading="lazy"></div>' +
          '<div class="card-body">' +
            '<span class="card-index">PROJECT — ' + pad2(index + 1) + '</span>' +
            '<h3>' + p.title + '</h3>' +
            '<p>' + p.blurb + '</p>' +
            '<div class="card-tags">' + tags + '</div>' +
            '<span class="card-link">View project <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M7 7h10v10"/></svg></span>' +
          '</div>' +
        '</a>' +
      '</article>'
    );
  }

  window.renderProjects = function (containerId, opts) {
    opts = opts || {};
    var basePath = opts.basePath || '';
    var limit = opts.limit;
    var container = document.getElementById(containerId);
    if (!container || !window.SITE_DATA) return;
    var items = window.SITE_DATA.projects.slice(0, limit || window.SITE_DATA.projects.length);
    container.innerHTML = items.map(function (p, i) { return projectCardHTML(p, i, basePath); }).join('');
  };

  function articleRowHTML(a, basePath) {
    var href = basePath + a.slug + '.html';
    return (
      '<div class="article-row">' +
        '<span class="date mono">' + a.dateLabel + '</span>' +
        '<a href="' + href + '" class="title-link article-main">' +
          '<h3>' + a.title + '</h3>' +
          '<p>' + a.excerpt + '</p>' +
          '<span class="meta">' + a.readTime + ' READ — ' + a.category + '</span>' +
        '</a>' +
        '<a href="' + href + '" class="arrow" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>' +
      '</div>'
    );
  }

  window.renderArticles = function (containerId, opts) {
    opts = opts || {};
    var basePath = opts.basePath || '';
    var limit = opts.limit;
    var container = document.getElementById(containerId);
    if (!container || !window.SITE_DATA) return;
    var items = window.SITE_DATA.articles.slice(0, limit || window.SITE_DATA.articles.length);
    container.innerHTML = items.map(function (a) { return articleRowHTML(a, basePath); }).join('');
  };

  function frameHTML(p, i, big) {
    var frameNum = pad3(i + 1);
    return (
      '<div class="frame' + (big ? ' big' : '') + '" data-frame="' + frameNum + '" data-cap="' + p.cap + ' — ' + p.dateLabel + '">' +
        '<img src="' + p.src + '" alt="' + p.alt + '">' +
        '<div class="cap">' + p.cap + '</div>' +
      '</div>'
    );
  }

  window.renderPhotos = function (containerId, opts) {
    opts = opts || {};
    var previewOnly = !!opts.previewOnly;
    var container = document.getElementById(containerId);
    if (!container || !window.SITE_DATA) return;
    var items = previewOnly ? window.SITE_DATA.photos.filter(function (p) { return p.preview; }) : window.SITE_DATA.photos;
    container.innerHTML = items.map(function (p, i) { return frameHTML(p, i, i === 0 && !!p.big); }).join('');
  };
})();
