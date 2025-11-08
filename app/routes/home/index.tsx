import type { Route } from "./+types/index";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portfolio Dev | Welcome" },
    { name: "description", content: "Custom portfolio dev development" },
  ];
}

export default function Home() {

  return (
  <>
    Homepage
  </>
  )
}
