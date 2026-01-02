
import { useState } from "react";
import type { Route } from "./+types/index"; //file named index inside projects folder
import type { Project, StrapiProject, StrapiResponse } from "~/types"; //it points to app folder the ~
import ProjectCard from "~/components/ProjectCard";
import Pagination from "~/components/Pagination";
import { AnimatePresence, motion } from "framer-motion";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portfolio Dev | Projects" },
    { name: "description", content: "Personal project portfolio" },
  ];
}

export function headers({}: Route.HeadersArgs) {
  return {
    "Cache-Control": "public, max-age=300, s-maxage=300, stale-while-revalidate=600",
  };
}

export async function loader({request,}: Route.LoaderArgs):Promise<{projects: Project[]}>{ //request in Typescript we used Route.LoaderArgs for its type in fetching data
  // Optimize: use populate=image instead of populate=* for better performance
  const res = await fetch(`${import.meta.env.VITE_API_URL}/projects?populate=image`);
  
  if(!res.ok) throw new Error('Failed to fetch data');
  
  const json:StrapiResponse<StrapiProject> = await res.json();  //:Promise<{projects: Project[]}> setting up types them import Project

  const projects = json.data.map((item) => ({
    id: item.id,
    documentId: item.documentId,
    title: item.title,
    description: item.description,
    image: item.image?.url ? `${item.image.url}` : //you dont need ${import.meta.env. VITE_STRAPI_URL} if you already set up image uploader in cloudinary
    `/images/no-image.png`,
    url: item.url,
    date: item.date,
    category: item.category,
    featured: item.featured,
    stack: item.stack
  }));

  return { projects } //named it projects based on api endpoint name for readability
}

const ProjectsPage = ({ loaderData }: Route.ComponentProps) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1); //default page is page 1
  const projectsPerPage = 10;

  const { projects } = loaderData as {projects: Project[]}; // { projects } comes from returned object in async function loader
  // console.log( projects )

  // Get unique categories
  const categories = ['All', ...new Set(projects.map((project) => project.category))];
  
  //Filter project based on the category
  const filteredProjects = selectedCategory === 'All' ? projects : projects.filter((project) => project.category === selectedCategory)

  // Calculate total pages
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  //Get current pages projects
  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirst, indexOfLast);

  return ( 
    <>
      <h2 className="text-3xl text-white font-bold mb-8">
        Projects
      </h2>

      <div className="flex flex-wrap gap-2 mb-8">
       { categories.map((category) => (
        <button key={category} onClick={() => {
          setSelectedCategory(category);
          setCurrentPage(1);
        }}
        className={ `px-3 py-1 rounded text-sm cursor-pointer ${selectedCategory
          === category ? 'bg-gray-900 border-b-gray-900 text-white' 
          : 'border border-gray-700 text-gray-200 hover:bg-gray-900 transform'
        }` }
        >
          { category }
        </button>
       )) }
      </div>

       
      {/* <div className="grid gap-6 sm:grid-cols-2">
        {currentProjects.map((project) => (
          <ProjectCard project={project} key={project.id}/>
        ))}
      </div> */}
      <AnimatePresence mode="wait">
        <motion.div layout className="grid gap-6 sm:grid-cols-2">
          {currentProjects.map((project) => (
            <motion.div key={project.id} layout>
             <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      <Pagination 
        totalPages={totalPages} 
        currentPage={currentPage} 
        onPageChange={setCurrentPage}/>
    </>
   );
}
 
export default ProjectsPage;