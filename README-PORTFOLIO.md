SLB Portfolio — Example layouts
=================================

What I added
- `portfolio-grid.html` + `css/portfolio-grid.css` — responsive card grid.
- `portfolio-masonry.html` + `css/portfolio-masonry.css` — CSS columns masonry style.
- `portfolio-hero.html` + `css/portfolio-hero.css` — large hero + small grid.

How to use
1. Put your images in the `images/` folder. Replace the example filenames (photo1.jpg — photo12.jpg, hero.jpg) or update the `src` attributes in the HTML files.
2. Open any of the HTML files in a browser to preview.
3. Fonts are loaded from Google Fonts in each HTML file. To change a font: swap the `<link>` to your chosen Google font and update `font-family` in the corresponding CSS file.

Small edits you might want
- Add captions, links, or modal/lightbox scripts to show larger images.
- Tweak colors in each CSS file's :root variables.

If you want, I can:
- Wire a simple lightbox script and navigation.
- Add a small admin HTML to generate galleries from a list of filenames.
Tailwind CSS (optional)
-----------------------
If you'd like to use Tailwind CSS in this project I added a small starter config and input file. Files added:

- `tailwind.config.js` — Tailwind configuration (content paths + brand color).
- `css/tailwind.css` — Tailwind input file with `@tailwind` directives and a couple of sample components.
- `package.json` — includes convenience scripts to build/watch the Tailwind CSS.

Quick build steps (from the project root):

1. Install dev dependencies:

```powershell
npm install
```

2. Build the CSS once:

```powershell
npm run build:css
```

3. Or during development run the watcher:

```powershell
npm run watch:css
```

After building, include the generated file `css/tailwind.build.css` in your HTML files (for example, add a link in the head):

```html
<link rel="stylesheet" href="css/tailwind.build.css">
```

If you'd like, I can wire Tailwind utility classes into one of the example pages (for instance the grid header), or build the CSS now and add the compiled file to the repo. Tell me which option you prefer.

