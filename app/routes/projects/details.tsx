import type { Route } from "./+types/details";
import type { Project } from "~/types";

export async function clientLoader ({ request, params }: Route.ClientLoaderArgs):Promise<Project>{
  const res = await fetch(`http://localhost:8000/projects/${params.id}`);

  if(!res.ok) throw new Response('Project not found', { status: 404 });

  const project:Project = await res.json();
  return project;
} 

export function HydrateFallback() {
  return <div className="flex justify-center items-center h-32">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
        </div>

}

const ProjectDetailsPage = ({ loaderData }:Route.ComponentProps) => {
  const project = loaderData;
  console.log(project)

  return ( 
    <> Projects Details </>
   );
}
 
export default ProjectDetailsPage;