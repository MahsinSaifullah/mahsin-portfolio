import * as React from 'react';
import { ProjectItem } from './ProjectItem';
import { motion } from 'framer-motion';

export const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ diration: 1.5 }}
      className="min-h-screen relative flex overflow-hidden 
    flex-col text-left max-w-full justify-center mx-auto items-center z-0"
    >
      <h3 className="sectionTitle">Projects</h3>
      <div className="h-24 w-24" />
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thumb-[#F7ABBA]/80 scrollbar-thin">
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7ABBA]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};
