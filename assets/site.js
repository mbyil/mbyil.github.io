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
        Include "thumb" (and "thumbAlt") on articles too — that's the small
        image shown in the writing list; it's optional, a row without one
        just skips the thumbnail.

   When you add a new photo, just add an entry to the "photos" array below —
   include "country" so it gets grouped under the right filter tab on
   photography/index.html, and set "best": true if it should also show up
   under the "Best of" tab.

   IMAGE PATHS in SITE_DATA below — read this before switching from the
   placeholder picsum.photos URLs to your own local images. Put your files
   in the images/ folder at the site root (see images/README.md), then
   reference them here WITHOUT a leading slash, e.g. "images/photo.jpg".
   The render functions below resolve that automatically to work correctly
   regardless of where the site is hosted — including a GitHub Pages
   *project* site, which serves from a subfolder rather than the real
   domain root. Full URLs (https://...) are untouched and always work.
   Note: local images only load once the site is actually served (a local
   server or a real deployment) — double-clicking index.html to open it
   directly won't resolve them.
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
      slug: "crypthon",
      title: "Crypthon",
      blurb: "A simple GUI based security tool that uploads the files it encrypts to a cloud platform of your choice automatically. No login no payment, just works.",
      tags: ["Python", "Hybrid Encryption", "Cloud API"],
      thumb: "https://picsum.photos/id/48/600/375",
      thumbAlt: "Crypthon project screenshot"
    }
  ],

  // Newest first — the homepage shows the first 4.
  articles: [
    {
      slug: "the-boring-parts-of-shipping-a-side-project",
      title: "The boring parts of shipping a side project",
      excerpt: "Deployment, monitoring, and the unglamorous 20% of work that decides whether a weekend project survives contact with real users.",
      dateLabel: "JAN 2026",
      readTime: "8 MIN",
      category: "ENGINEERING",
      thumb: "https://picsum.photos/id/110/480/320",
      thumbAlt: "Server room cables, close up"
    },
    {
      slug: "what-shooting-film-taught-me-about-writing-code",
      title: "What shooting film taught me about writing code",
      excerpt: "Thirty-six exposures a roll forces a kind of discipline that's easy to skip when storage is free. Some of it carried over.",
      dateLabel: "NOV 2025",
      readTime: "5 MIN",
      category: "PHOTOGRAPHY",
      thumb: "https://picsum.photos/id/1039/480/320",
      thumbAlt: "Quiet forest path in soft light"
    }
  ],

  // The first 9 with preview:true show on the homepage. Full set shows on photography/index.html.
  // "country" powers the location filter tabs there; "best" is the mixed "Best of" tab —
  // set it on any standout shot regardless of location. A photo can be in both.
  // "dateSort" is "YYYY-MM" and is what groups photos by month within a filtered tab
  // (so a second trip to the same place shows up as its own cluster, not mixed in).
  photos: [
    { cap: "Kizilcahamam, Ankara", country: "Kızılcahamam", dateLabel: "Apr 2026", dateSort: "2026-04", src: "images/photography-images/APRIL-2026-SOGUKSU/DSC_0160.jpg", alt: "Mountain ridge at sunrise", preview: true, big: true, best: true },
    { cap: "Kizilcahamam, Ankara", country: "Kızılcahamam", dateLabel: "Apr 2026", dateSort: "2026-04", src: "images/photography-images/APRIL-2026-SOGUKSU/DSC_0021.JPG", alt: "Road on the left going through a forest" },
    { cap: "Kizilcahamam, Ankara", country: "Kızılcahamam", dateLabel: "Apr 2026", dateSort: "2026-04", src: "images/photography-images/APRIL-2026-SOGUKSU/DSC_0030.JPG", alt: "Greeen mountain side with clear sky" },
    { cap: "Kizilcahamam, Ankara", country: "Kızılcahamam", dateLabel: "Apr 2026", dateSort: "2026-04", src: "images/photography-images/APRIL-2026-SOGUKSU/DSC_0068.JPG", alt: "Mountain photo from another mountain" },
    { cap: "Kizilcahamam, Ankara", country: "Kızılcahamam", dateLabel: "Apr 2026", dateSort: "2026-04", src: "images/photography-images/APRIL-2026-SOGUKSU/DSC_0116.JPG", alt: "Mountain ridge at sunrise" },
    { cap: "Kizilcahamam, Ankara", country: "Kızılcahamam", dateLabel: "Apr 2026", dateSort: "2026-04", src: "images/photography-images/APRIL-2026-SOGUKSU/DSC_0147.JPG", alt: "Mountain ridge at sunrise", preview: true, best:true },
    { cap: "Kizilcahamam, Ankara", country: "Kızılcahamam", dateLabel: "Apr 2026", dateSort: "2026-04", src: "images/photography-images/APRIL-2026-SOGUKSU/DSC_0171.JPG", alt: "Mountain ridge at sunrise" },
    { cap: "Kizilcahamam, Ankara", country: "Kızılcahamam", dateLabel: "Apr 2026", dateSort: "2026-04", src: "images/photography-images/APRIL-2026-SOGUKSU/DSC_0188.JPG", alt: "Mountain ridge at sunrise" },
    { cap: "Kizilcahamam, Ankara", country: "Kızılcahamam", dateLabel: "Apr 2026", dateSort: "2026-04", src: "images/photography-images/APRIL-2026-SOGUKSU/DSC_0199.jpg", alt: "Mountain ridge at sunrise", best: true },

    { cap: "Anitkabir, Ankara", country: "Anıtkabir", dateLabel: "Aug 2025", dateSort: "2025-08", src: "images/photography-images/AUGUST-2025-ANITKABIR/DSC_0130.JPG", alt: "Mountain ridge at sunrise", preview: true, best: true },
    { cap: "Anitkabir, Ankara", country: "Anıtkabir", dateLabel: "Aug 2025", dateSort: "2025-08", src: "images/photography-images/AUGUST-2025-ANITKABIR/DSC_0168.JPG", alt: "Mountain ridge at sunrise" },
    { cap: "Anitkabir, Ankara", country: "Anıtkabir", dateLabel: "Aug 2025", dateSort: "2025-08", src: "images/photography-images/AUGUST-2025-ANITKABIR/DSC_0184.JPG", alt: "Mountain ridge at sunrise" },
    { cap: "Anitkabir, Ankara", country: "Anıtkabir", dateLabel: "Aug 2025", dateSort: "2025-08", src: "images/photography-images/AUGUST-2025-ANITKABIR/DSC_0207.JPG", alt: "Mountain ridge at sunrise" },
    { cap: "Anitkabir, Ankara", country: "Anıtkabir", dateLabel: "Aug 2025", dateSort: "2025-08", src: "images/photography-images/AUGUST-2025-ANITKABIR/DSC_0230.JPG", alt: "Mountain ridge at sunrise" },
    { cap: "Anitkabir, Ankara", country: "Anıtkabir", dateLabel: "Aug 2025", dateSort: "2025-08", src: "images/photography-images/AUGUST-2025-ANITKABIR/DSC_0232.JPG", alt: "Mountain ridge at sunrise" },
    { cap: "Anitkabir, Ankara", country: "Anıtkabir", dateLabel: "Aug 2025", dateSort: "2025-08", src: "images/photography-images/AUGUST-2025-ANITKABIR/DSC_0253.JPG", alt: "Mountain ridge at sunrise" },

    { cap: "Sarikamis, Kars", country: "Sarıkamış", dateLabel: "Jan 2026", dateSort: "2026-01", src: "images/photography-images/JANUARY-2026-SARIKAMIS/DSC_0001.jpg", alt: "Mountain ridge at sunrise" },
    { cap: "Sarikamis, Kars", country: "Sarıkamış", dateLabel: "Jan 2026", dateSort: "2026-01", src: "images/photography-images/JANUARY-2026-SARIKAMIS/DSC_0002.jpg", alt: "Mountain ridge at sunrise" },
    { cap: "Sarikamis, Kars", country: "Sarıkamış", dateLabel: "Jan 2026", dateSort: "2026-01", src: "images/photography-images/JANUARY-2026-SARIKAMIS/DSC_0004.jpg", alt: "Mountain ridge at sunrise" },
    { cap: "Sarikamis, Kars", country: "Sarıkamış", dateLabel: "Jan 2026", dateSort: "2026-01", src: "images/photography-images/JANUARY-2026-SARIKAMIS/DSC_0006.jpg", alt: "Mountain ridge at sunrise" },
    { cap: "Sarikamis, Kars", country: "Sarıkamış", dateLabel: "Jan 2026", dateSort: "2026-01", src: "images/photography-images/JANUARY-2026-SARIKAMIS/DSC_0008.jpg", alt: "Mountain ridge at sunrise" },
    { cap: "Sarikamis, Kars", country: "Sarıkamış", dateLabel: "Jan 2026", dateSort: "2026-01", src: "images/photography-images/JANUARY-2026-SARIKAMIS/DSC_0009.jpg", alt: "Mountain ridge at sunrise" },
    { cap: "Sarikamis, Kars", country: "Sarıkamış", dateLabel: "Jan 2026", dateSort: "2026-01", src: "images/photography-images/JANUARY-2026-SARIKAMIS/DSC_0010.jpg", alt: "Mountain ridge at sunrise" },
    { cap: "Sarikamis, Kars", country: "Sarıkamış", dateLabel: "Jan 2026", dateSort: "2026-01", src: "images/photography-images/JANUARY-2026-SARIKAMIS/DSC_0011.jpg", alt: "Mountain ridge at sunrise" },
    { cap: "Sarikamis, Kars", country: "Sarıkamış", dateLabel: "Jan 2026", dateSort: "2026-01", src: "images/photography-images/JANUARY-2026-SARIKAMIS/DSC_0012.jpg", alt: "Mountain ridge at sunrise" },
    { cap: "Sarikamis, Kars", country: "Sarıkamış", dateLabel: "Jan 2026", dateSort: "2026-01", src: "images/photography-images/JANUARY-2026-SARIKAMIS/DSC_0013.jpg", alt: "Mountain ridge at sunrise", preview: true, best: true },
    { cap: "Sarikamis, Kars", country: "Sarıkamış", dateLabel: "Jan 2026", dateSort: "2026-01", src: "images/photography-images/JANUARY-2026-SARIKAMIS/DSC_0014.jpg", alt: "Mountain ridge at sunrise", preview: true, best: true },

    { cap: "Anitkabir, Ankara", country: "Anıtkabir", dateLabel: "Jul 2025", dateSort: "2025-07", src: "images/photography-images/JULY-2025-ANITKABIR/DSC_0038.JPG", alt: "Mountain ridge at sunrise", preview: true, best: true },

    { cap: "Mudanya, Bursa", country: "Mudanya", dateLabel: "Jun 2025", dateSort: "2025-06", src: "images/photography-images/JUNE-2025-BURSA/DSC_0037.JPG", alt: "Mountain ridge at sunrise" },

    { cap: "Atatürk Köşkü, Yalova", country: "Atatürk Köşkü", dateLabel: "Jun 2025", dateSort: "2025-06", src: "images/photography-images/JUNE-2025-YALOVA/DSC_0005.JPG", alt: "Mountain ridge at sunrise" },
    { cap: "Atatürk Köşkü, Yalova", country: "Atatürk Köşkü", dateLabel: "Jun 2025", dateSort: "2025-06", src: "images/photography-images/JUNE-2025-YALOVA/DSC_0006.JPG", alt: "Mountain ridge at sunrise" },
    { cap: "Atatürk Köşkü, Yalova", country: "Atatürk Köşkü", dateLabel: "Jun 2025", dateSort: "2025-06", src: "images/photography-images/JUNE-2025-YALOVA/DSC_0009.JPG", alt: "Mountain ridge at sunrise" },
    { cap: "Atatürk Köşkü, Yalova", country: "Atatürk Köşkü", dateLabel: "Jun 2025", dateSort: "2025-06", src: "images/photography-images/JUNE-2025-YALOVA/DSC_0014.JPG", alt: "Mountain ridge at sunrise" },
    { cap: "Atatürk Köşkü, Yalova", country: "Atatürk Köşkü", dateLabel: "Jun 2025", dateSort: "2025-06", src: "images/photography-images/JUNE-2025-YALOVA/DSC_0018.JPG", alt: "Mountain ridge at sunrise", preview: true, best: true },
    { cap: "Atatürk Köşkü, Yalova", country: "Atatürk Köşkü", dateLabel: "Jun 2025", dateSort: "2025-06", src: "images/photography-images/JUNE-2025-YALOVA/DSC_0019.JPG", alt: "Mountain ridge at sunrise" },
    { cap: "Atatürk Köşkü, Yalova", country: "Atatürk Köşkü", dateLabel: "Jun 2025", dateSort: "2025-06", src: "images/photography-images/JUNE-2025-YALOVA/DSC_0026.JPG", alt: "Mountain ridge at sunrise" },
    { cap: "Atatürk Köşkü, Yalova", country: "Atatürk Köşkü", dateLabel: "Jun 2025", dateSort: "2025-06", src: "images/photography-images/JUNE-2025-YALOVA/DSC_0032.JPG", alt: "Mountain ridge at sunrise" },
    { cap: "Atatürk Köşkü, Yalova", country: "Atatürk Köşkü", dateLabel: "Jun 2025", dateSort: "2025-06", src: "images/photography-images/JUNE-2025-YALOVA/DSC_0050.JPG", alt: "Mountain ridge at sunrise" },

    { cap: "Eymir Gölü, Ankara", country: "Eymir", dateLabel: "May 2026", dateSort: "2026-05", src: "images/photography-images/MAY-2026-EYMIR/DSC_0019.jpg", alt: "Mountain ridge at sunrise", preview: true, best: true },
    { cap: "Eymir Gölü, Ankara", country: "Eymir", dateLabel: "May 2026", dateSort: "2026-05", src: "images/photography-images/MAY-2026-EYMIR/DSC_0046.JPG", alt: "Mountain ridge at sunrise" },
    { cap: "Eymir Gölü, Ankara", country: "Eymir", dateLabel: "May 2026", dateSort: "2026-05", src: "images/photography-images/MAY-2026-EYMIR/DSC_0047.JPG", alt: "Mountain ridge at sunrise", preview: true, best:true },
    { cap: "Eymir Gölü, Ankara", country: "Eymir", dateLabel: "May 2026", dateSort: "2026-05", src: "images/photography-images/MAY-2026-EYMIR/DSC_0049.JPG", alt: "Mountain ridge at sunrise" },
    { cap: "Eymir Gölü, Ankara", country: "Eymir", dateLabel: "May 2026", dateSort: "2026-05", src: "images/photography-images/MAY-2026-EYMIR/DSC_0077.JPG", alt: "Mountain ridge at sunrise" },
    { cap: "Eymir Gölü, Ankara", country: "Eymir", dateLabel: "May 2026", dateSort: "2026-05", src: "images/photography-images/MAY-2026-EYMIR/DSC_0097.JPG", alt: "Mountain ridge at sunrise" },
    { cap: "Eymir Gölü, Ankara", country: "Eymir", dateLabel: "May 2026", dateSort: "2026-05", src: "images/photography-images/MAY-2026-EYMIR/DSC_0100.JPG", alt: "Mountain ridge at sunrise" },
    { cap: "Eymir Gölü, Ankara", country: "Eymir", dateLabel: "May 2026", dateSort: "2026-05", src: "images/photography-images/MAY-2026-EYMIR/DSC_0106.JPG", alt: "Mountain ridge at sunrise" },
    { cap: "Eymir Gölü, Ankara", country: "Eymir", dateLabel: "May 2026", dateSort: "2026-05", src: "images/photography-images/MAY-2026-EYMIR/DSC_0200.jpg", alt: "Mountain ridge at sunrise" }

    /*
    { cap: "Dolomites, Italy", country: "Italy", dateLabel: "Sep 2025", dateSort: "2025-09", src: "https://picsum.photos/id/1018/900/900", alt: "Mountain ridge at sunrise", preview: true, big: true, best: true },
    { cap: "Lisbon, Portugal", country: "Portugal", dateLabel: "Jul 2025", dateSort: "2025-07", src: "https://picsum.photos/id/1041/500/500", alt: "Coastal cliffs", preview: true, best: true },
    { cap: "Kyoto, Japan", country: "Japan", dateLabel: "Nov 2024", dateSort: "2024-11", src: "https://picsum.photos/id/1039/500/500", alt: "Quiet forest path", preview: true, best: true },
    { cap: "Reykjavik, Iceland", country: "Iceland", dateLabel: "Jun 2025", dateSort: "2025-06", src: "https://picsum.photos/id/1043/500/500", alt: "Waterfall in a green valley", preview: true, best: true },
    { cap: "Marrakech, Morocco", country: "Morocco", dateLabel: "Feb 2025", dateSort: "2025-02", src: "https://picsum.photos/id/1074/500/500", alt: "Desert dunes at golden hour", preview: true, best: true },
    { cap: "Oslo, Norway", country: "Norway", dateLabel: "Oct 2024", dateSort: "2024-10", src: "https://picsum.photos/id/1036/500/500", alt: "Fjord under overcast sky", preview: true, best: true },
    { cap: "Banff, Canada", country: "Canada", dateLabel: "Aug 2024", dateSort: "2024-08", src: "https://picsum.photos/id/1053/500/500", alt: "Alpine lake surrounded by pines", preview: true, best: true },
    { cap: "Santorini, Greece", country: "Greece", dateLabel: "May 2024", dateSort: "2024-05", src: "https://picsum.photos/id/1080/500/500", alt: "Whitewashed village on a cliff", preview: true, best: true },
    { cap: "Patagonia, Chile", country: "Chile", dateLabel: "Mar 2024", dateSort: "2024-03", src: "https://picsum.photos/id/1044/500/500", alt: "Jagged peaks over a glacial lake", preview: true, best: true },
    { cap: "Faroe Islands", country: "Faroe Islands", dateLabel: "Jul 2024", dateSort: "2024-07", src: "https://picsum.photos/id/1016/500/500", alt: "Steep green cliffs meeting the sea" },
    { cap: "Hanoi, Vietnam", country: "Vietnam", dateLabel: "Jan 2024", dateSort: "2024-01", src: "https://picsum.photos/id/1024/500/500", alt: "Narrow street scene at dusk" },
    { cap: "Swiss Alps", country: "Switzerland", dateLabel: "Dec 2023", dateSort: "2023-12", src: "https://picsum.photos/id/1033/500/500", alt: "Snow-covered peaks under a clear sky" },
    { cap: "Big Sur, USA", country: "USA", dateLabel: "Sep 2023", dateSort: "2023-09", src: "https://picsum.photos/id/1047/500/500", alt: "Coastal highway along cliffs" },
    { cap: "Cape Town, South Africa", country: "South Africa", dateLabel: "Jun 2023", dateSort: "2023-06", src: "https://picsum.photos/id/1056/500/500", alt: "Table Mountain over the city" },
    { cap: "Queenstown, New Zealand", country: "New Zealand", dateLabel: "Mar 2023", dateSort: "2023-03", src: "https://picsum.photos/id/1062/500/500", alt: "Lake surrounded by mountains" },
    // Two "revisit" examples so the month-grouping is actually visible in this placeholder
    // data — filter by Italy or Japan to see two separate trips, clustered by month.
    { cap: "Rome, Italy", country: "Italy", dateLabel: "Apr 2022", dateSort: "2022-04", src: "https://picsum.photos/id/1069/500/500", alt: "Ancient ruins under a clear sky" },
    { cap: "Tokyo, Japan", country: "Japan", dateLabel: "Aug 2021", dateSort: "2021-08", src: "https://picsum.photos/id/1071/500/500", alt: "Busy city street at night" }
    */
  ]

};

/* ── DO NOT EDIT BELOW: render functions ──────────────────────────────── */
(function () {
  function pad2(n) { return String(n).padStart(2, '0'); }
  function pad3(n) { return String(n).padStart(3, '0'); }

  // Resolves local image paths correctly no matter where the site is
  // deployed — including a GitHub Pages *project* site, which is served
  // from a subfolder (https://user.github.io/reponame/) rather than the
  // real domain root. A root-absolute path like "/images/x.jpg" would
  // ignore that subfolder and 404. Instead, this reads the actual URL this
  // script (site.js) was loaded from and derives the site's real root from
  // it, so it works whether the site sits at a domain root, a GitHub Pages
  // project subfolder, or a custom domain — no configuration needed.
  //
  // In SITE_DATA below, write local image paths WITHOUT a leading slash,
  // e.g. "images/my-photo.jpg" (relative to the site root). Full URLs
  // (https://...) are left untouched and always work as-is.
  var SITE_ROOT = (function () {
    var script = document.currentScript;
    if (script && script.src) {
      return script.src.replace(/assets\/site\.js(\?.*)?$/, '');
    }
    return '';
  })();

  function resolveImg(path) {
    if (!path) return path;
    if (/^(https?:)?\/\//.test(path) || path.indexOf('data:') === 0) return path;
    return SITE_ROOT + path.replace(/^\/+/, '');
  }

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
          '<div class="thumb"><img src="' + resolveImg(p.thumb) + '" alt="' + p.thumbAlt + '" ' + loadAttrs(index, 3) + '></div>' +
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

  function articleRowHTML(a, index, basePath) {
    var href = basePath + a.slug + '.html';
    var thumbHtml = a.thumb
      ? '<div class="thumb"><img src="' + resolveImg(a.thumb) + '" alt="' + (a.thumbAlt || '') + '" ' + loadAttrs(index, 2) + '></div>'
      : '';
    return (
      '<div class="article-row">' +
        thumbHtml +
        '<a href="' + href + '" class="title-link article-main">' +
          '<span class="date mono">' + a.dateLabel + '</span>' +
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
    container.innerHTML = items.map(function (a, i) { return articleRowHTML(a, i, basePath); }).join('');
  };

  function frameHTML(p, i, big) {
    var frameNum = pad3(i + 1);
    return (
      '<div class="frame' + (big ? ' big' : '') + '" data-frame="' + frameNum + '" data-cap="' + p.cap + ' — ' + p.dateLabel + '" data-country="' + (p.country || '') + '" data-best="' + (!!p.best) + '">' +
        '<img src="' + resolveImg(p.src) + '" alt="' + p.alt + '" ' + loadAttrs(i, 4) + '>' +
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
    container.innerHTML = '<div class="contact-sheet">' +
      items.map(function (p, i) { return frameHTML(p, i, i === 0 && !!p.big); }).join('') +
      '</div>';
  };

  // Filter tabs — "All", "Best of" (photos with best:true), then one tab per
  // distinct country found in the data. "All" shows the original single grid
  // (shooting order, with the featured big tile); every other tab re-renders
  // the matching photos grouped by month, so a place you've visited more than
  // once shows up as separate clusters instead of blending together.
  function monthGroups(items) {
    var sorted = items.slice().sort(function (a, b) {
      return (b.dateSort || '').localeCompare(a.dateSort || '');
    });
    var groups = [];
    var lastKey = null;
    sorted.forEach(function (p) {
      var key = p.dateSort || p.dateLabel;
      if (key !== lastKey) {
        groups.push({ label: p.dateLabel, items: [] });
        lastKey = key;
      }
      groups[groups.length - 1].items.push(p);
    });
    return groups;
  }

  window.renderPhotoFilters = function (tabsId, galleryId) {
    var tabsContainer = document.getElementById(tabsId);
    var gallery = document.getElementById(galleryId);
    if (!tabsContainer || !gallery || !window.SITE_DATA) return;
    var allPhotos = window.SITE_DATA.photos;

    var seen = {};
    var countries = [];
    allPhotos.forEach(function (p) {
      if (p.country && !seen[p.country]) { seen[p.country] = true; countries.push(p.country); }
    });
    countries.sort();

    var tabs = ['All', 'Best of'].concat(countries);
    tabsContainer.innerHTML = tabs.map(function (t, i) {
      return '<button class="filter-btn' + (i === 0 ? ' active' : '') + '" data-filter="' + t + '">' + t + '</button>';
    }).join('');

    function applyFilter(filter) {
      if (filter === 'All') {
        window.renderPhotos(galleryId, { previewOnly: false });
        return;
      }
      if (filter === 'Best of') {
        // Same square-tile layout as the country tabs, just no date grouping.
        var bestItems = allPhotos.filter(function (p) { return !!p.best; });
        gallery.innerHTML = '<div class="contact-sheet-group">' +
          bestItems.map(function (p, i) { return frameHTML(p, i, false); }).join('') +
          '</div>';
        return;
      }
      // Country tab — grouped by month, so a place visited more than once
      // shows up as separate clusters instead of blending together.
      var items = allPhotos.filter(function (p) { return p.country === filter; });
      var groups = monthGroups(items);
      var idx = 0;
      gallery.innerHTML = groups.map(function (group) {
        var frames = group.items.map(function (p) {
          var html = frameHTML(p, idx, false);
          idx++;
          return html;
        }).join('');
        return '<div class="photo-date-divider">' + group.label.toUpperCase() + '</div>' +
               '<div class="contact-sheet-group">' + frames + '</div>';
      }).join('');
    }

    tabsContainer.addEventListener('click', function (e) {
      var btn = e.target.closest('.filter-btn');
      if (!btn) return;
      tabsContainer.querySelectorAll('.filter-btn').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      applyFilter(btn.dataset.filter);
    });
  };
})();
