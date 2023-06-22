import React from "react";
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { PageInfo } from "@/typings";
import { urlForImage } from "@/sanity/lib/image";
import { motion } from "framer-motion";

type Props = {
  pageInfo: PageInfo;
};

function Hero({pageInfo}: Props) {
  const [text, count] = useTypewriter({
    words: [ 
        "Software Engineer", 
        "Dancer",
        "Baker",
        "Cat lover",
    ],
    loop: true,
    // milliseconds
    delaySpeed: 2000,
  })
  return (
  <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden font-mono">
   {/* TOOD: change to Image from nextJS */}
   {/* Terminal background design */}
    <div className="w-4/5 h-4/5 bg-[hsl(0,1%,15%)] text-white rounded-md overflow-hidden">
        <div className=" flex bg-[hsl(0,1%,29%)] px-2 py-2">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-300"></div>
            <div className="w-3 h-3 rounded-full bg-[#FEE191]"></div>
            <div className="w-3 h-3 rounded-full bg-[#B0D8A4]"></div>
          </div>
          <div className="flex flex-grow justify-center">
            <div className="text-xs text-gray-300 mr-12"> kellychiu -bash </div>
          </div>
        </div>
        <div className="p-4">
          <div className="flex">
            <span className="text-[#B0D8A4]">Kellys-Macbook-Air:~ kellychiu$</span>
            <span className="ml-1"> 
              <span>{text}</span>
              <Cursor cursorColor="text-gray-600" />
            </span>
          </div>
        </div>

        {/* ABOUT ME */}
        <motion.div 
        initial={{ opacity:0 }}
        whileInView={{ opacity:1 }}
        transition={{ duration:1.5 }}
        className="relative flex flex-col h-screen text-center md:text-left md:flex-row
        max-w-7xl justify-evenly mx-auto items-center">
          <motion.img
          initial={{
              x:-200,
              opacity: 0,
          }}
          transition={{ duration: 2,}}
          whileInView={{
              x:0,
              opacity: 1
          }}
          // can add 'viewport={{once: true}}' if you only want it to slide in once
          src={urlForImage(pageInfo?.profilePic).url()}
          className="mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
          md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] grayscale"
          />

          <div className="space-y-10 px-0 md:px-10">
              <h4 className="text-5xl">
                  Hello, World!
              </h4>
              <p className="text-base">
                  {pageInfo?.backgroundInformation}
              </p>
          </div>
      </motion.div>
      </div>
     
  </div>
  );
}

export default Hero