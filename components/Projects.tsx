import React from "react";
import {motion} from "framer-motion";
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
            Projects
        </h3>

        {/* Projects */}
        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x 
        snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#B0D8A4]">
            {projects?.map((project, i) => (
                <div key={project._id} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5
                items-center justify-center p-20 md:p-44 h-screen">
                    {/* <motion.img 
                    // TODO: fix size of image
                        className="h-40 w-40"
                        initial={{ 
                            y:-300,
                            opacity:0, 
                        }}
                        whileInView={{ opacity:1, y:0 }}
                        transition={{ duration:1.5 }}
                        viewport={{ once: true }}
                        src={urlForImage(project?.image).url()}
                    /> */}
                    
                    <div className="space-y-1 px-0 md:px-10 max-w-6xl"> 
                        <h4 className="text-4xl font-semibold text-center">
                            <span>
                                {i+1} of {projects.length}:
                            </span> {" "}
                            {project?.title}
                        </h4>

                        {/* Tech Used */}
                        <div className="flex items-center space-x-2 justify-center"> 
                            {project?.technologies.map(technology => (
                                <img 
                                    className="h-10 w-10"
                                    key={technology._id} 
                                    src={urlForImage(technology.image).url()}
                                />
                            ))}
                        </div>
                        
                        {/* <p className="text-lg text-center md:text-left"> */}
                        <ul className="list-disc ml-5 text-sm xl:text-lg h-96">
                            {project.points?.map( (point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>

                        {/* </p> */}
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}

export default Projects;
