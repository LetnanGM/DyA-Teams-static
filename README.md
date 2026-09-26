# DyA-Teams & Grow Student

## Table of Contents

- [About](#about)
- [Built With](#built-with)
- [Getting Started](#getting_started)
  - [Prerequisites](#prerequisites)
  - [Installing](#installing)
- [Usage](#usage)
- [Deployment](#deployment)

## About <a name = "about"></a>

What's DyA? DyA are not a brand comercial, not a company and not a CV, DyA is "name" representation of Teams.

This site is the static portfolio for the DyA team — built and maintained by SMK TKJ students.

## Built With <a name = "built-with"></a>

- [Vite](https://vitejs.dev/) — build tool & dev server
- [Vituum](https://vituum.dev/) + [Nunjucks](https://mozilla.github.io/nunjucks/) — template engine (components, macros, layout inheritance)
- [Bootstrap 5](https://getbootstrap.com/) — UI framework
- [HTMX](https://htmx.org/) — the contact form's dynamic behavior, no full page reload
- [Font Awesome](https://fontawesome.com/) — icons

## Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites <a name = "prerequisites"></a>

You'll need [Node.js](https://nodejs.org/) (v18 or newer recommended) and npm installed.

```
node -v
npm -v
```

### Installing <a name = "installing"></a>

Clone the repository:

```
git clone https://github.com/LetnanGM/DyA-Teams-static.git
cd DyA-Teams-static
```

Install the dependencies:

```
npm install
```

Start the dev server:

```
npm run dev
```

The site will be running at `http://localhost:5000`.

> A `Makefile` is also included as a shortcut: `make dev`, `make build`, `make install`, `make preview`.

## Usage <a name = "usage"></a>

- Page content and team/project data live in `src/data/` (`site.js`, `team.js`, `project.js`) — edit these to update copy without touching the templates.
- Reusable UI pieces are in `src/templates/components/` (included from `index.njk`) and `src/templates/macros/` (called with `{% import %}`).
- The base HTML skeleton is `src/templates/layout/layout.njk`; page templates `{% extends %}` it.
- Styles are in `src/static/scss/`, compiled via Vite/Sass.

To build a production-ready bundle:

```
npm run build
```

Output goes to `dist/`. Preview the production build locally with:

```
npm run preview
```

## Deployment <a name = "deployment"></a>

_Not yet configured — the project currently runs locally only. Deployment instructions (e.g. GitHub Pages, Vercel, or Netlify) will be added here once set up._
