import { Skill } from "@/typings";

export const fetchSkills = async() => {
    
    // TODO: change this when i can actually add to ENV
    // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`)
    const res = await fetch(`http://localhost:3000/api/getSkills`)

    const data = await res.json()
    const skills: Skill[] = data.skills;

    // console.log("fetching", skills)
    return skills;
}