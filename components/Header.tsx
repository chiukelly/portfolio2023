import React from "react";
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";
import { Social } from "@/typings";

type Props = {
    socials: Social[]
};

function Header({socials}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
        <motion.div 
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.1
        }}
        animate={{
            // initial position
            x: 0, 
            opacity: 1,
            scale: 1
        }}
        transition={{
            duration: 2
        }}
        className="flex flex-row items-center">
            {/* Social Icons */}
            {socials.map((social) => (
                <SocialIcon 
                key={social._id}
                url={social.url}
                fgColor="#8281A0"
                bgColor="transparent" 
                />
            ))
            }
        </motion.div>

        {/* Click contact icon to move to the bottom of the page */}
        <motion.div 
            onClick={() => (window.location.href = "#contact")}
            initial={{
                x: 500,
                opacity: 0,
                scale: 0.1
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 2
            }}
            className="flex flex-row items-center text-[#8281A0] cursor-pointer">
                {/* Contact Me */}
                <SocialIcon
                    className="cursor-pointer"
                    network="email"
                    fgColor="#8281A0"
                    bgColor="transparent"
                    url="#contact"
                /> 
                {/* hidden: hide from mobile, until medium screen, display the text */}
                <p className="uppercase hidden md:inline-flex text-sm text-[#8281A0]"> 
                    Contact
                </p>
            </motion.div>
    </header>
  );
}

export default Header;
