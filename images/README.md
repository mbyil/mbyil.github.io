Put your real local images here (or in subfolders, e.g. images/projects/, images/photos/).

There are two different places images get referenced on this site, and they need
slightly different path styles:

1. IN assets/site.js (project thumbnails, article thumbnails, photos)
   Write the path WITHOUT a leading slash, relative to the site root:
       thumb: "images/routewise-thumb.jpg"
   site.js loads on pages at different folder depths (the homepage at the root,
   articles/projects/photography pages one level down) and automatically resolves
   this to the correct real URL no matter which page is rendering it, and no matter
   where the site is actually hosted — including a GitHub Pages *project* site
   (https://username.github.io/reponame/), which lives in a subfolder rather than
   the true domain root. You don't need to do anything extra for that case; it's
   handled for you.

2. DIRECTLY IN AN ARTICLE OR PROJECT PAGE (cover image, screenshot gallery)
   These are plain <img> tags in static HTML, not run through site.js, so use an
   ordinary relative path instead — the same pattern the page already uses for its
   own stylesheet link (../assets/styles.css):
       From articles/my-post.html or projects/my-project.html:  ../images/photo.jpg
       From index.html (site root):                              images/photo.jpg

A leading slash (/images/photo.jpg) is NOT recommended anywhere on this site — it
only works correctly if the site is hosted at the true domain root, and breaks on
a GitHub Pages project site without a custom domain attached.

One more thing: local images only load once the site is actually being served — a
local server (`python3 -m http.server` in the site folder, then visit localhost:8000)
or an actual deployment. Double-clicking index.html to open it directly as a file
won't resolve these paths correctly.
