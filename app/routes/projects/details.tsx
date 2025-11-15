import type { Route } from "./+types/details";
import type { Project } from "~/types";
import { LiaArrowLeftSolid, LiaArrowRightSolid } from "react-icons/lia";
import { Link } from "react-router";

export async function clientLoader ({ request, params }: Route.ClientLoaderArgs):Promise<Project>{
  const res = await fetch(`${import.meta.env.VITE_API_URL}/projects/${params.id}`); //for frontend import.meta.env.

  if(!res.ok) throw new Response('Project not found', { status: 404 });

  const project:Project = await res.json();
  return project;
} 

export function HydrateFallback() {
  return (
    <div className="flex justify-center items-center h-32">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
    </div>
  )
}

const ProjectDetailsPage = ({ loaderData }:Route.ComponentProps) => {
  const project = loaderData;

  return ( 
    <>
      <Link to={'/projects'} className="flex items-center
       text-gray-200 hover:text-white mb-6 transition">
        <LiaArrowLeftSolid className="mr-2"/> Back To Projects
      </Link>

      <div className="grid gap-8 md:grid-cols-2 items-start">
        <div>
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full rounded-lg shadow-md"
            />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-200 mb-4">
            {project.title}
          </h1>
          <p className="text-gray-300 text-sm mb-4">
            { new Date(project.date).toLocaleDateString() } : { project.category }
          </p>
          <p className="text-gray-200 mb-6">
            {project.description}
          </p>
          <a href={project.url} 
            target="_blank" 
            className="inline-block text-white border border-gray-200 hover:bg-gray-100 hover:text-gray-900 px-6 py-2 rounded transition-transform hover:-translate-y-1 duration-300">
             
             <div className="flex flex-row items-center">
                <div className="mr-2">
                  View Live Site
                </div>

                <div>
                  <LiaArrowRightSolid/>
                </div>
             </div>
          </a>
        </div>

      </div>
    </>
   );
}
 
export default ProjectDetailsPage;