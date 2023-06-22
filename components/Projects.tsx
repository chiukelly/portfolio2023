import React from "react";
import { Project } from "@/typings";
import { urlForImage } from "@/sanity/lib/image";

type Props = {
    projects: Project[];
};

function Projects({ projects }: Props) {
  return ( 
    // need relative to this parent, or else it would be relative to the screen
    // 'PROJECTS' would be always at the top of the screen
    <div className="flex relative overflow-hidden flex-col text-left md:flex-row
    max-w-full h-screen justify-evenly mx-auto items-center z-0 bg-[hsl(0,1%,15%)] ">
        <h3 className="headerName">
            projects.
        </h3>

        {/* Projects */}
        <div className="relative w-full flex overflow-x-scroll snap-x mt-3 overflow-y-hidden
        snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#B0D8A4]">
            {projects?.map((project, i) => (
                <div key={project._id} className="w-screen flex-shrink-0 snap-center flex flex-col
                items-center justify-center p-20 md:p-44 h-screen">
                    
                    <div className="space-y-5 px-0 md:px-10 max-w-6xl"> 
                        <h4 className="text-4xl font-semibold text-gray-300">
                            <span>
                                {i+1} of {projects.length}:
                            </span> {" "}
                            {project?.title}
                        </h4>

                        {/* Tech Used */}
                        <div className="flex items-center space-x-2"> 
                            {project?.technologies.map(technology => (
                                <img 
                                    className="h-10 w-10"
                                    key={technology._id} 
                                    src={urlForImage(technology.image).url()}
                                />
                            ))}
                        </div>
                        
                        {/* <p className="text-lg text-center md:text-left"> */}
                        <ul className="list-disc ml-5 text-md xl:text-lg h-54 text-gray-300">
                            {project.points?.map( (point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>

                        {/* Source code & Demo */}
                        <div className="flex space-x-5">
                            <a href={project.linkToBuild} className="text-center items-center w-32 p-2 rounded-full hover:bg-[#B0D8A4] text-black bg-gray-300 whitespace-nowrap"> Code </a>
                            <a href={project.demo} className="text-center items-center w-32 p-2 rounded-full hover:bg-[#B0D8A4] text-black bg-gray-300 whitespace-nowrap"> Demo </a>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    </div>
  );
}

export default Projects;
