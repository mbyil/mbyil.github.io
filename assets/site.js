/* ==========================================================================
   SITE_DATA + render functions, in one file to keep the number of scripts
   the browser has to fetch (and wait on) before content appears as small
   as possible.

   ── EDIT BELOW: SITE_DATA ──────────────────────────────────────────────
   This is the single source of truth for projects, articles, and photos.
   Both the homepage previews (Work / Writing / Photography sections) and
   the "view all" pages (projects/index.html, articles/index.html,
   photography/index.html) render from this object, so you only ever add
   a new project/article/photo here ONCE.

   The full write-up for an article or project still lives in its own file
   (e.g. articles/my-new-post.html, built from articles/_template.html) —
   this file only holds the short preview info: title, blurb, thumbnail, etc.

   When you add a new article or project:
     1. Copy _template.html in the matching folder and write the full page.
     2. Add a matching entry below with the same "slug" as the filename
        (without .html) so the preview card links to the right page.

   When you add a new photo, just add an entry to the "photos" array below —
   include "country" so it gets grouped under the right filter tab on
   photography/index.html, and set "best": true if it should also show up
   under the "Best of" tab.
   ========================================================================== */

window.SITE_DATA = {

  projects: [
    {
      slug: "routewise",
      title: "Routewise",
      blurb: "A trip-planning tool that turns a rough list of places into an optimized day-by-day route, built to replace my own spreadsheet habit.",
      tags: ["React", "Node", "Maps API"],
      thumb: "https://picsum.photos/id/180/600/375",
      thumbAlt: "Routewise project screenshot"
    },
    {
      slug: "ledgerline",
      title: "Ledgerline",
      blurb: "A lightweight expense tracker with a CLI-first workflow, built because every app I tried wanted me to open a browser to log a coffee.",
      tags: ["Python", "SQLite", "CLI"],
      thumb: "https://picsum.photos/id/119/600/375",
      thumbAlt: "Ledgerline project screenshot"
    },
    {
      slug: "contact-sheet",
      title: "Contact Sheet",
      blurb: "An open-source gallery generator that turns a folder of RAW exports into a static, fast-loading photo site.",
      tags: ["Static Site", "Image Pipeline"],
      thumb: "https://picsum.photos/id/48/600/375",
      thumbAlt: "Contact Sheet project screenshot"
    }
  ],

  // Newest first — the homepage shows the first 4.
  articles: [
    {
      slug: "why-i-stopped-trusting-my-own-code-reviews",
      title: "Why I stopped trusting my own code reviews",
      excerpt: "A look at the review habits that felt thorough but were quietly missing the same category of bug, every time.",
      dateLabel: "MAR 2026",
      readTime: "6 MIN",
      category: "ENGINEERING"
    },
    {
      slug: "the-boring-parts-of-shipping-a-side-project",
      title: "The boring parts of shipping a side project",
      excerpt: "Deployment, monitoring, and the unglamorous 20% of work that decides whether a weekend project survives contact with real users.",
      dateLabel: "JAN 2026",
      readTime: "8 MIN",
      category: "ENGINEERING"
    },
    {
      slug: "what-shooting-film-taught-me-about-writing-code",
      title: "What shooting film taught me about writing code",
      excerpt: "Thirty-six exposures a roll forces a kind of discipline that's easy to skip when storage is free. Some of it carried over.",
      dateLabel: "NOV 2025",
      readTime: "5 MIN",
      category: "PHOTOGRAPHY"
    },
    {
      slug: "a-field-guide-to-reading-other-peoples-systems",
      title: "A field guide to reading other people's systems",
      excerpt: "Notes on getting oriented in an unfamiliar codebase quickly, without waiting for someone to explain it to you.",
      dateLabel: "SEP 2025",
      readTime: "7 MIN",
      category: "ENGINEERING"
    }
  ],

  // The first 9 with preview:true show on the homepage. Full set shows on photography/index.html.
  // "country" powers the location filter tabs there; "best" is the mixed "Best of" tab —
  // set it on any standout shot regardless of location. A photo can be in both.
  photos: [
    { cap: "Dolomites, Italy", country: "Italy", dateLabel: "Sep 2025", src: "https://picsum.photos/id/1018/900/900", alt: "Mountain ridge at sunrise", preview: true, big: true, best: true },
    { cap: "Lisbon, Portugal", country: "Portugal", dateLabel: "Jul 2025", src: "https://picsum.photos/id/1041/500/500", alt: "Coastal cliffs", preview: true, best: true },
    { cap: "Kyoto, Japan", country: "Japan", dateLabel: "Nov 2024", src: "https://picsum.photos/id/1039/500/500", alt: "Quiet forest path", preview: true, best: true },
    { cap: "Reykjavik, Iceland", country: "Iceland", dateLabel: "Jun 2025", src: "https://picsum.photos/id/1043/500/500", alt: "Waterfall in a green valley", preview: true, best: true },
    { cap: "Marrakech, Morocco", country: "Morocco", dateLabel: "Feb 2025", src: "https://picsum.photos/id/1074/500/500", alt: "Desert dunes at golden hour", preview: true, best: true },
    { cap: "Oslo, Norway", country: "Norway", dateLabel: "Oct 2024", src: "https://picsum.photos/id/1036/500/500", alt: "Fjord under overcast sky", preview: true, best: true },
    { cap: "Banff, Canada", country: "Canada", dateLabel: "Aug 2024", src: "https://picsum.photos/id/1053/500/500", alt: "Alpine lake surrounded by pines", preview: true, best: true },
    { cap: "Santorini, Greece", country: "Greece", dateLabel: "May 2024", src: "https://picsum.photos/id/1080/500/500", alt: "Whitewashed village on a cliff", preview: true, best: true },
    { cap: "Patagonia, Chile", country: "Chile", dateLabel: "Mar 2024", src: "https://picsum.photos/id/1044/500/500", alt: "Jagged peaks over a glacial lake", preview: true, best: true },
    { cap: "Faroe Islands", country: "Faroe Islands", dateLabel: "Jul 2024", src: "https://picsum.photos/id/1016/500/500", alt: "Steep green cliffs meeting the sea" },
    { cap: "Hanoi, Vietnam", country: "Vietnam", dateLabel: "Jan 2024", src: "https://picsum.photos/id/1024/500/500", alt: "Narrow street scene at dusk" },
    { cap: "Swiss Alps", country: "Switzerland", dateLabel: "Dec 2023", src: "https://picsum.photos/id/1033/500/500", alt: "Snow-covered peaks under a clear sky" },
    { cap: "Big Sur, USA", country: "USA", dateLabel: "Sep 2023", src: "https://picsum.photos/id/1047/500/500", alt: "Coastal highway along cliffs" },
    { cap: "Cape Town, South Africa", country: "South Africa", dateLabel: "Jun 2023", src: "https://picsum.photos/id/1056/500/500", alt: "Table Mountain over the city" },
    { cap: "Queenstown, New Zealand", country: "New Zealand", dateLabel: "Mar 2023", src: "https://picsum.photos/id/1062/500/500", alt: "Lake surrounded by mountains" }
  ]

};

/* ── DO NOT EDIT BELOW: render functions ──────────────────────────────── */
(function () {
  function pad2(n) { return String(n).padStart(2, '0'); }
  function pad3(n) { return String(n).padStart(3, '0'); }

  // First few items of anything rendered are likely above the fold, so they
  // load eagerly (and the very first gets fetchpriority="high"); everything
  // after that is lazy so it doesn't compete for bandwidth on page load.
  function loadAttrs(index, eagerCount) {
    if (index === 0) return 'loading="eager" fetchpriority="high"';
    if (index < eagerCount) return 'loading="eager"';
    return 'loading="lazy"';
  }

  function projectCardHTML(p, index, basePath) {
    var tags = p.tags.map(function (t) { return '<span>' + t + '</span>'; }).join('');
    return (
      '<article class="card reveal">' +
        '<a href="' + basePath + p.slug + '.html" style="display:contents;">' +
          '<div class="thumb"><img src="' + p.thumb + '" alt="' + p.thumbAlt + '" ' + loadAttrs(index, 3) + '></div>' +
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
      '<div class="frame' + (big ? ' big' : '') + '" data-frame="' + frameNum + '" data-cap="' + p.cap + ' — ' + p.dateLabel + '" data-country="' + (p.country || '') + '" data-best="' + (!!p.best) + '">' +
        '<img src="' + p.src + '" alt="' + p.alt + '" ' + loadAttrs(i, 4) + '>' +
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

  // Filter tabs — "All", "Best of" (photos with best:true), then one tab per
  // distinct country found in the data. Filtering just shows/hides frames
  // already in the DOM, so the lightbox (which reads the frame list once on
  // load) keeps working normally no matter which tab is active.
  window.renderPhotoFilters = function (tabsId, galleryId) {
    var tabsContainer = document.getElementById(tabsId);
    if (!tabsContainer || !window.SITE_DATA) return;

    var seen = {};
    var countries = [];
    window.SITE_DATA.photos.forEach(function (p) {
      if (p.country && !seen[p.country]) { seen[p.country] = true; countries.push(p.country); }
    });
    countries.sort();

    var tabs = ['All', 'Best of'].concat(countries);
    tabsContainer.innerHTML = tabs.map(function (t, i) {
      return '<button class="filter-btn' + (i === 0 ? ' active' : '') + '" data-filter="' + t + '">' + t + '</button>';
    }).join('');

    tabsContainer.addEventListener('click', function (e) {
      var btn = e.target.closest('.filter-btn');
      if (!btn) return;
      tabsContainer.querySelectorAll('.filter-btn').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');

      var filter = btn.dataset.filter;
      var gallery = document.getElementById(galleryId);
      if (!gallery) return;
      gallery.querySelectorAll('.frame').forEach(function (f) {
        var show = filter === 'All' ||
          (filter === 'Best of' && f.dataset.best === 'true') ||
          f.dataset.country === filter;
        f.classList.toggle('frame-hidden', !show);
      });
    });
  };
})();
