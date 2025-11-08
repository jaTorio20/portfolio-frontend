import type { Route } from "./+types/index"; //file named index inside projects folder
import type { Project } from "~/types"; //it points to app folder the ~
import ProjectCard from "~/components/ProjectCard";

export async function loader({request,}: Route.LoaderArgs):Promise<{projects: Project[]}>{ //request in Typescript we used Route.LoaderArgs for its type in fetching data
  const res = await fetch('http://localhost:8000/projects'); //:Promise<any> its just optional react router already knows loader function
  const data = await res.json();  //:Promise<{projects: Project[]}> setting up types them import Project

  return { projects: data } //named it projects based on api endpoint name for readability
}

const ProjectsPage = ({ loaderData }: Route.ComponentProps) => {
  const { projects } = loaderData as {projects: Project[]}; // { projects } comes from returned object in async function loader
  console.log( projects )

  return ( 
    <>
      <h2 className="text-3xl text-white font-bold mb-8">
        Projects
      </h2>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id}/>
        ))}
      </div>
    </>
   );
}
 
export default ProjectsPage;