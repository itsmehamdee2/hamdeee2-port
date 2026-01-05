import { Github, Link2 } from "lucide-react";
import React from "react";
import { projects } from "../../data";
function Projects() {
  return (
    <section id="project" className="bg-violet-100 text-[#6441a5]">
      <div className="container py-10 relative mx-auto">
        <div className="flex items-center pt-20 justify-center">
          <h2 className="text-3xl md:flex-1 md:text-left md:px-10  md:text-5xl uppercase">
            Featured Projects
          </h2>
        </div>
        <div className="flex items-center my-7 justify-center">
          <p className="text-lg   pt-20 text-justify mx-4 font-light">
            Here are some of my projects that i'ved done while honing my skills
            and knowledge in Coding, Each project was was carefully crafted with
            attention and details and user experience
          </p>
        </div>
        <div className="">
          <div className="container   mx-auto gap-5 max-sm:scale-95 max-md:scale-97 grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
            {projects.map((project, key) => (
              <div
                key={key}
                className="group bg-black/30 border mx-5 shadow-[7px_7px_0_white]  rounded-lg overflow-hidden card-hover"
              >
                <div className="h-38 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2  mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 border bg-violet-100 shadow-[3px_3px_0_#6441a5]  text-xs font-medium rounded-full bg-secondary/90 text-secondary-foreground"
                      >
                        {" "}
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div>
                    <h3 className="text-xl text-muted uppercase font-semibold mb-1">
                      {project.title}
                    </h3>
                    <p className="text-viollet-100 text-justify text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-3">
                        <a
                          href={project.demoUrl}
                          target="blank"
                          className="px-2 py-1 border flex gap-1 items-center bg-violet-100 shadow-[3px_3px_0_#6441a5]  text-xs font-medium rounded-full bg-secondary/90 text-secondary-foreground"
                        >
                          <Link2 size={20} />
                          VIEW THE LINK
                        </a>
                        <a
                          href={project.githubUrl}
                          target="blank"
                          className="px-2 py-1  flex gap-1 items-center bg-violet-100 shadow-[3px_3px_0_#6441a5]  text-xs font-medium rounded-full bg-secondary/90 text-secondary-foreground"
                        >
                          <Github size={20} />
                          VIEW ON MY GITHUB
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
