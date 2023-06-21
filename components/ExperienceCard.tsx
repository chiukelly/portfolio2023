import React from "react";
import {motion} from "framer-motion";
import { Experience } from "@/typings";
import { urlForImage } from "@/sanity/lib/image";

type Props = {
    experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
  <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
  w-[500px] h-[600px] xl:w-[900px] snap-center bg-[hsl(0,1%,15%)] p-10 hover:opacity-100 opacity-40
  cursor-pointer transition-opacity duration-200 overflow-hidden">
    <motion.img
        initial={{
            y:-100,
            opacity: 0,
        }}
        transition={{
            duration:1.2
        }}
        whileInView={{
            opacity: 1, y:0
        }}
        viewport={{
            once: true
        }}
        className="w-20 h-20 bg-white rounded-full xl:w-[110px] xl:h-[110px] object-cover object-center"
        src={urlForImage(experience.companyImage).url()}
    />

    <div className="px-0 md:px-10">
        <h4 className="text-3xl font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{experience.company}</p>
        <div className="flex space-x-2 my-2">
            {/* Tech used */}
            {experience.technologies?.map((technology) => (
                <img 
                key={technology._id}
                className="h-10 w-10 rounded-full"
                src={urlForImage(technology.image).url()} />
            ))
            }
        </div>
        <p className="uppercase py-5 text-gray-300">
             {/* Started work... Ended ... */}
             {new Date(experience.dateStarted).toDateString().split(' ').slice(1).join(' ')} -{" "}
             {experience.isCurrentlyWorkingHere
                ? "Present"
                : new Date(experience.dateEnded).toDateString().split(' ').slice(1).join(' ')}
        </p>

        <ul className="list-disc space-y-2 ml-5 text-sm xl:text-lg h-96">
            {experience.points?.map( (point, i) => (
                <li key={i}>{point}</li>
            ))}
        </ul>
    </div>
  </article>
  );
}

export default ExperienceCard