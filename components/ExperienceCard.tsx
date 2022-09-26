import * as React from 'react';
import { motion } from 'framer-motion';

export const ExperienceCard = () => {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] md:w-[600px] snap-center bg-[#292929] 
    p-10 hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-200 overflow-hidden md:mt-52 mt-24"
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="h-32 w-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://www.globalcosmeticsnews.com/wp-content/uploads/2021/09/THG-logo.jpg"
        alt=""
      />
      <div className="px-0 md:px-10 ">
        <h4 className="text-xl md:text-4xl  font-light">Software Engineer</h4>
        <p className="font-bold text-lg md:text-2xl mt-1">The Hut Group</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.worldvectorlogo.com/logos/typescript-2.svg"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://reactjs.org/logo-og.png"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1200px-GraphQL_Logo.svg.png"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://miro.medium.com/max/300/1*R4c8lHBHuH5qyqOtZb3h-w.png"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
            alt=""
          />
        </div>
        <p className="uppercase py-3 md:py-5 text-gray-300">
          Sept 2020 - present
        </p>
        <ul className="list-disc space-y-2 md:space-y-4 ml-5 text-lg">
          <li>this are my experiences</li>
          <li>this are my experiences</li>
          <li>this are my experiences</li>
          <li>this are my experiences</li>
          <li>this are my experiences</li>
        </ul>
      </div>
    </article>
  );
};
