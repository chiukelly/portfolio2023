import React from "react";
import {motion} from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType} from "@/typings";


type Props = {
    skills: SkillType[];
};

function Skills({ skills }: Props) {
  return (
   <motion.div 
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1}}
    transition={{ duration: 1.5 }}
    className="flex space-y-[120px] relative flex-col text-center md:text-left md:space-y-[80px] xl:flex-row max-w-[2000px]
    xl:px-10 min-h-screen justify-center mx-auto items-center">
        <h3 className="headerName">
            skills.
        </h3>

        <div className="grid grid-cols-5 gap-5 font-semibold">
            {/* Half animating left, half right TODO: test, don't have enough rn*/}
            {skills?.slice(0, skills.length / 2).map(skill => (
                <Skill key={skill._id} skill={skill}/>
            ))}
            {skills?.slice(skills.length / 2, skills.length).map(skill => (
                <Skill key={skill._id} skill={skill} directionLeft/>
            ))}

        </div>
    </motion.div>
  );
}

export default Skills;
