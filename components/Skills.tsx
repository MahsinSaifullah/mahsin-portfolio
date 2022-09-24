import * as React from 'react';
import { motion } from 'framer-motion';

import { SkillItem } from './SkillItem';

export const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ diration: 1.5 }}
      className="relative flex flex-col text-center md:text-left  max-w-[2000px] 
    xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="sectionTitle">Skills</h3>
      <h3 className="sectionSubtitle">
        Hover over a skill for current proficiency
      </h3>
      <div className="h-24 w-24" />
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-5">
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
      </div>
    </motion.div>
  );
};
