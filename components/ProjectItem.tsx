import * as React from 'react';
import { motion } from 'framer-motion';

export const ProjectItem = () => {
  return (
    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src="https://img.freepik.com/free-psd/artist-room-decorated_23-2148834382.jpg?w=2000&t=st=1664093612~exp=1664094212~hmac=069163bea27168150740850bbf20e59359498cefd2c461dad5383008721aa47c"
        alt=""
        className="w-1/3 min-w-[200px] max-w-screen-sm"
      />
      <div className="space-y-5 sm:space-y-10 px-0 md:px-10 max-w-6xl text-center">
        <h4 className="text-xl sm:text-4xl font-semibold ">Mockup Clone</h4>
        <p className="text-sm sm:text-lg md:text-left">
          Sit amet commodo nulla facilisi nullam vehicula. Posuere morbi leo
          urna molestie at elementum eu facilisis sed. Arcu non odio euismod
          lacinia at quis risus. Duis at tellus at urna condimentum mattis
          pellentesque id nibh. Habitasse platea dictumst vestibulum rhoncus Sit
          amet commodo nulla facilisi nullam vehicula. Posuere morbi leo urna
          molestie at elementum eu facilisis sed. Arcu non odio euismod lacinia
          at quis risus. Duis at tellus at urna condimentum mattis pellentesque
          id nibh. Habitasse platea dictumst vestibulum rhoncus Sit amet commodo
          nulla facilisi nullam vehicula.
        </p>
      </div>
    </div>
  );
};
