import { Experience } from "@/typings";

export const fetchExperiences = async() => {
    
    // TODO: change this when i can actually add to ENV
    // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`)
    const res = await fetch(`http://localhost:3000/api/getExperience`)

    const data = await res.json()
    const experiences: Experience[] = data.experiences;

    // console.log("fetching", Experiences)
    return experiences;
}