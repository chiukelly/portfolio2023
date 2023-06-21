// import React from "react";
// import {motion} from "framer-motion";
// import { PageInfo } from "@/typings";
// import { urlForImage } from "@/sanity/lib/image";

// type Props = {
//   pageInfo: PageInfo
// };

// function About({pageInfo}: Props) {
//   // on medium screens and above, left align and make it a row
//   return (
//   <motion.div 
//   initial={{
//     opacity:0
//   }}
//   whileInView={{
//     opacity:1
//   }}
//   transition={{
//     duration:1.5
//   }}
//   className="relative flex flex-col h-screen text-center md:text-left md:flex-row
//   max-w-7xl px-10 justify-evenly mx-auto items-center">
//     <h3 className="headerName">
//         About
//     </h3>
//     <motion.img 
//     initial={{
//         x:-200,
//         opacity: 0,
//     }}
//     transition={{
//         duration: 1.5,
//     }}
//     whileInView={{
//         x:0,
//         opacity: 1
//     }}
//     // can add 'viewport={{once: true}}' if you only want it to slide in once
//     src={urlForImage(pageInfo?.profilePic).url()}
//     className="mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
//     md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
//     />

//     <div className="space-y-10 px-0 md:px-10">
//         <h4 className="text-4xl font-semibold">
//             Welcome.
//         </h4>
//         <p className="text-base">
//             {/* {pageInfo?.backgroundInformation} */}
//         </p>
//     </div>
//   </motion.div>
//   );
// }

// export default About;
