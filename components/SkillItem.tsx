import * as React from 'react';
import { motion } from 'framer-motion';

interface SkillItemProps {
  animateFromLeft?: boolean;
}

export const SkillItem: React.FC<SkillItemProps> = ({ animateFromLeft }) => {
  return (
    <motion.div
      initial={{ x: animateFromLeft ? -200 : 200, opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="group relative flex cursor-pointer"
    >
      <img
        src="https://reactjs.org/logo-og.png"
        alt=""
        className="rounded-full border border-gray-500 object-cover h-20 w-20 sm:h-28 sm:w-28   
        filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div
        className="absolute opacity-0 group-hover:opacity-80 
      transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 sm:h-28 sm:w-28  rounded-full z-0"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl md:text-3xl font-bold text-black opacity-100">
            90%
          </p>
        </div>
      </div>
    </motion.div>
  );
};
