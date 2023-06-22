import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
        {/* Click contact icon to move to the bottom of the page */}
        <motion.div 
            onClick={() => (window.location.href = "#contact")}
            initial={{
                x: 0,
                opacity: 0,
            }}
            animate={{
                x: 10,
                opacity: 2,
            }}
            transition={{
                duration: 1.5
            }}
            className="flex flex-row items-center text-[#8281A0] cursor-pointer">
                {/* Contact Me */}
                {/* hidden: hide from mobile, until medium screen, display the text */}
                <p className="hidden md:inline-flex text-sm text-gray-300 hover:text-[#8281A0]"> 
                    contact
                </p>
            </motion.div>
    </header>
  );
}

export default Header;
