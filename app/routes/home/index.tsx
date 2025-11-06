import type { Route } from "./+types/index";
import Hero from "~/components/Hero";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portfolio Dev | Welcome" },
    { name: "description", content: "Custom portfolio dev development" },
  ];
}

export default function Home() {

  return (
  <section>
    <Hero/>
  </section>
  )
}
