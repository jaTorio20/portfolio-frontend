# Portfolio Frontend

Simple React Router + Vite frontend that powers my personal portfolio, blog posts, and featured projects.

## Tech Stack

- React 19 with React Router 7 for routing and data loading
- TypeScript + Vite for fast DX
- Tailwind CSS utilities and a few custom styles in `app/`
- Markdown blog posts stored under `app/posts`

## Getting Started

Install dependencies:

```bash
npm install
```

Run the dev server (Vite + React Router):

```bash
npm run dev
```

Optional mock API (blog/projects data):

```bash
npm run json-server
```

## Available Scripts

- `npm run dev` — local development with hot reload on `http://localhost:5173`
- `npm run build` — production build (server + client bundles)
- `npm run start` — serve the built app with `react-router-serve`
- `npm run typecheck` — run the React Router typegen step + TypeScript
- `npm run json-server` — expose `data/db.json` at `http://localhost:8000`

## Project Structure

- `app/routes` houses all route modules (`home`, `about`, `projects`, `blog`, etc.)
- `app/components` contains reusable UI pieces (`Hero`, `FeaturedProjects`, `PostCard`, etc.)
- `app/posts` stores markdown content that the blog routes render
- `data/db.json` feeds the optional JSON server for local mock data
- `public/` keeps static assets like images and metadata

## Build & Deploy

```bash
npm run build
npm run start
```

Deploy the `build/` output (client + server) to any Node-compatible host or containerize with the provided `Dockerfile`.
