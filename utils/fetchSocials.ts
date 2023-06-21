import { Social } from "@/typings";

export const fetchSocials = async() => {
    
    // TODO: change this when i can actually add to ENV
    // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`)
    const res = await fetch(`http://localhost:3000/api/getSocials`)

    const data = await res.json();
    const socials: Social[] = data.socials;

    // console.log("fetching", Socials)
    return socials;
}