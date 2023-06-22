import React from "react";
import { Skill } from "@/typings";
import { urlForImage } from "@/sanity/lib/image";

type Props = {
    skill: Skill;
    directionLeft?: boolean;
};

function Skill({ skill, directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
        <img
            // TODO: add some animation
            // initial={{
            //     // if on the left, come in from the left
            //     x: directionLeft ? -200 : 200,
            //     opacity: 0
            // }}
            // transition={{ duration: 1}}
            // whileInView={{ opacity: 1, x: 0}}
            src={urlForImage(skill?.image).url()}
            className="rounded-full border border-gray-500 object-cover w-24 h-24 md:h-26 md:w-26 xl:w-30 xl:h-30
            filter group-hover:grayscale transition duration-300 ease-in-out"
        />

        {/* layering effect*/}
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
        group-hover:bg-white w-24 h-24 md:h-26 md:w-26 xl:w-30 xl:h-30 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
                <p className="text-1xl text-black opacity-100 text-center">{skill.title}</p>
            </div>
        </div>
    </div>
  );
}

export default Skill;
