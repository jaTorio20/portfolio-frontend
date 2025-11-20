import type { Project } from "~/types";
import { Link } from "react-router";

const ProjectCard = ({ project }: {project:Project}) => {
  return ( 
    <Link to={`/projects/${project.documentId}`} className="block transform transition duration-300 hover:scale-[1.02]">
      <div className="shadow-card bg-gray-900 border border-gray-700 rounded-lg overflow-hidden shadow-sm transition hover:shadow-md">
        <img src={project.image} alt={ project.title } 
          className="w-full h-40 object-cover"
        />
        <div className="p-5">
          <h3 className="text-3xl font-semibold text-white mb-1">
            {project.title}
          </h3>
          <p className="text-sm text-gray-200 mb-2">
            {project.description}
          </p>

          <ul className="flex flex-wrap my-6 gap-2 text-xs text-gray-300">
              {project.stack.map((p) => (
                <li key={p} className='px-2 py-0.5 border rounded-md border-gray-700 text-gray-200 transform'>
                  {p}
                </li>
              ))}  
          </ul>

          <div className="flex justify-between items-center text-sm text-gray-400">
            <span>{project.category}</span>
            <span>{ new Date(project.date).toLocaleDateString() }</span>
          </div>
        </div>
      </div>
    </Link>
   );
}
 
export default ProjectCard;