import { Project } from "@/typings";

export const fetchProjects = async() => {
    
    // TODO: change this when i can actually add to ENV
    // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`)
    const res = await fetch(`http://localhost:3000/api/getProjects`)

    const data = await res.json()
    const projects: Project[] = data.projects;

    // console.log("fetching", Projects)
    return projects;
}