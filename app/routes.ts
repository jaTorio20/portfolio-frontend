import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
  layout('./routes/layouts/home.tsx', [index("routes/home/index.tsx")]),
  // index("routes/home/index.tsx"),

  layout('./routes/layouts/main.tsx', [ //below are the child routes of main.tsx
    route('about', './routes/about/index.tsx'),
    // route('about/self', './routes/about/self.tsx'),
    route('contact', './routes/contact/index.tsx'),

    route('projects', './routes/projects/index.tsx'),
    route('projects/:id', './routes/projects/details.tsx'),

    route('blog', './routes/blog/index.tsx'),
  ]),

] satisfies RouteConfig;
