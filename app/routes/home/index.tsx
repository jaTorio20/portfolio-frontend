import type { Route } from "./+types/index";
import FeaturedProjects from "~/components/FeaturedProjects";
import type { Project } from "~/types";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portfolio Dev | Welcome" },
    { name: "description", content: "Custom portfolio dev development" },
  ];
}

export async function loader({ request }: Route.LoaderArgs): Promise<{projects:Project[]}>{
  const res = await fetch(`${import.meta.env.VITE_API_URL}/projects`);
  const data = await res.json();

  return {projects: data}
}

const HomePage = ({ loaderData }:Route.ComponentProps) => {

  const { projects } = loaderData;

  return (
  <>
    <FeaturedProjects projects={projects} count={6}/>
  </>
  )
}

export default HomePage;
