import { PageInfo } from "@/typings";

export const fetchPageInfo = async() => {
    
    // TODO: change this when i can actually add to ENV
    // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfos`)
    const res = await fetch(`http://localhost:3000/api/getPageInfo`)

    const data = await res.json()
    const pageInfo: PageInfo = data.pageInfo;

    // console.log("fetching", PageInfos)
    return pageInfo;
}