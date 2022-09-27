import * as React from 'react';
import { motion } from 'framer-motion';

import { ExperienceCard } from './ExperienceCard';

export const WorkExperience: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ diration: 1.5 }}
      className="min-h-screen flex relative  flex-col text-left md:flex-row 
    max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <div className="sectionTitle">Experience</div>
      <div
        className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory 
      scrollbar-track-gray-400/20 scrollbar-thumb-[#F7ABBA]/80 scrollbar-thin"
      >
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
};
