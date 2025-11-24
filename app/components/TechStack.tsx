import type { Stack } from "~/types";

type TechStackProps = {
stacks: Stack[];
}

const TechStack = ({ stacks }:TechStackProps) => {
  const grouped = {
  Frontend: stacks.filter(s => s.stack === "Frontend"),
  Backend: stacks.filter(s => s.stack === "Backend"),
  Tools: stacks.filter(s => s.stack === "Tools"),
};


  return ( 
      <section className="max-w-6xl mx-auto px-2 ">
        <h2 className="text-2xl font-bold text-white">
          Tech Stack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> 

            {/* FRONTEND */}
            {grouped.Frontend.length > 0 && (
            <ul className="space-y-3 my-4">
              <li className="">
                <h2 className="font-bold text-lg mx-5 ">Frontend</h2>
                {grouped.Frontend.map(stack => (
                  <div key={stack.id} className="flex items-center rounded-md m-3 p-2 tech-hover-shadow-card hover:-translate-y-1 duration-300">
                    <img className="w-12 h-12 border rounded border-gray-700 p-1 tech-stack-shadow-card" src={stack.link || stack.image || "/images/no-image.png"} />
                    <div className="mx-3">
                      <span className="text-lg">{stack.title}</span>
                      <p className="text-sm text-gray-400">{stack.description}</p>
                    </div>
                  </div>
                ))}
              </li>
            </ul>
            )}

            {/* BACKEND */}
            {grouped.Backend.length > 0 && (
            <ul className="space-y-3 my-4">
              <li>
                <h2 className="font-bold text-lg mx-5">Backend</h2>
                {grouped.Backend.map(stack => (
                  <div key={stack.id} className="flex items-center rounded-md m-3 p-2 tech-hover-shadow-card hover:-translate-y-1 duration-300">
                    <img className="w-12 h-12 border rounded border-gray-700 p-1 tech-stack-shadow-card" src={stack.link || stack.image || "/images/no-image.png"} />
                    <div className="mx-3">
                      <span className="text-lg">{stack.title}</span>
                      <p className="text-sm text-gray-400">{stack.description}</p>
                    </div>
                  </div>
                ))}
              </li>
            </ul>
            )}

            {/* TOOLS */}
            {grouped.Tools.length > 0 && (
            <ul className="space-y-3 my-4">
              <li>
                <h2 className="font-bold text-lg mx-5">Tools</h2>
                {grouped.Tools.map(stack => (
                  <div key={stack.id} className="flex items-center rounded-md m-3 p-2 tech-hover-shadow-card hover:-translate-y-1 duration-300">
                    <img className="w-12 h-12 border rounded border-gray-700 p-1 tech-stack-shadow-card" src={stack.link || stack.image || "/images/no-image.png"} />
                    <div className="mx-3">
                      <span className="text-lg">{stack.title}</span>
                      <p className="text-sm text-gray-400">{stack.description}</p>
                    </div>
                  </div>
                ))}
              </li>
            </ul>
            )}




        </div>
      </section>
   );
}
 
export default TechStack;
