/* ==========================================================================
   SITE_DATA — the single source of truth for projects, articles, and photos.

   Both the homepage previews (Work / Writing / Photography sections) and
   the "view all" pages (projects/index.html, articles/index.html,
   photography/index.html) render from this file, so you only ever add a
   new project/article/photo here ONCE.

   The full write-up for an article or project still lives in its own file
   (e.g. articles/my-new-post.html, built from articles/_template.html) —
   this file only holds the short preview info: title, blurb, thumbnail, etc.

   When you add a new article or project:
     1. Copy _template.html in the matching folder and write the full page.
     2. Add a matching entry below with the same "slug" as the filename
        (without .html) so the preview card links to the right page.
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
  photos: [
    { cap: "Dolomites, Italy", dateLabel: "Sep 2025", src: "https://picsum.photos/id/1018/900/900", alt: "Mountain ridge at sunrise", preview: true, big: true },
    { cap: "Lisbon, Portugal", dateLabel: "Jul 2025", src: "https://picsum.photos/id/1041/500/500", alt: "Coastal cliffs", preview: true },
    { cap: "Kyoto, Japan", dateLabel: "Nov 2024", src: "https://picsum.photos/id/1039/500/500", alt: "Quiet forest path", preview: true },
    { cap: "Reykjavik, Iceland", dateLabel: "Jun 2025", src: "https://picsum.photos/id/1043/500/500", alt: "Waterfall in a green valley", preview: true },
    { cap: "Marrakech, Morocco", dateLabel: "Feb 2025", src: "https://picsum.photos/id/1074/500/500", alt: "Desert dunes at golden hour", preview: true },
    { cap: "Oslo, Norway", dateLabel: "Oct 2024", src: "https://picsum.photos/id/1036/500/500", alt: "Fjord under overcast sky", preview: true },
    { cap: "Banff, Canada", dateLabel: "Aug 2024", src: "https://picsum.photos/id/1053/500/500", alt: "Alpine lake surrounded by pines", preview: true },
    { cap: "Santorini, Greece", dateLabel: "May 2024", src: "https://picsum.photos/id/1080/500/500", alt: "Whitewashed village on a cliff", preview: true },
    { cap: "Patagonia, Chile", dateLabel: "Mar 2024", src: "https://picsum.photos/id/1044/500/500", alt: "Jagged peaks over a glacial lake", preview: true },
    { cap: "Faroe Islands", dateLabel: "Jul 2024", src: "https://picsum.photos/id/1016/500/500", alt: "Steep green cliffs meeting the sea" },
    { cap: "Hanoi, Vietnam", dateLabel: "Jan 2024", src: "https://picsum.photos/id/1024/500/500", alt: "Narrow street scene at dusk" },
    { cap: "Swiss Alps", dateLabel: "Dec 2023", src: "https://picsum.photos/id/1033/500/500", alt: "Snow-covered peaks under a clear sky" },
    { cap: "Big Sur, USA", dateLabel: "Sep 2023", src: "https://picsum.photos/id/1047/500/500", alt: "Coastal highway along cliffs" },
    { cap: "Cape Town, South Africa", dateLabel: "Jun 2023", src: "https://picsum.photos/id/1056/500/500", alt: "Table Mountain over the city" },
    { cap: "Queenstown, New Zealand", dateLabel: "Mar 2023", src: "https://picsum.photos/id/1062/500/500", alt: "Lake surrounded by mountains" }
  ]

};
