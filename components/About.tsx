import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ diration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-lg md:text-2xl">
        About
      </h3>
      <div className="flex items-center flex-col md:flex-row sm:mt-32 mt-52">
        <motion.img
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          src="https://scontent-man2-1.xx.fbcdn.net/v/t39.30808-6/242900312_4619191044759194_847597598509582898_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=LYbJMdKUv3QAX_vuwyd&tn=vPvK-zY5vUEg9y3s&_nc_ht=scontent-man2-1.xx&oh=00_AT-sW2eIC-PLERWmZJjwTN0Kl9ODoQyKed6r6MpeL6FETQ&oe=6333BF8D"
          alt=""
          className="mb-5 md:mb-0 flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover md:rounded-lg md:w-72 md:h-96 xl:w-[400px] xl:h-[500px]"
        />
        <div className="flex flex-col space-y-5 px-0 md:px-10">
          <h4 className="text-xl md:text-4xl font-semibold">
            Here is a{' '}
            <span className="underline decoration-[#F7ABBA]/50">little</span>{' '}
            bit about me
          </h4>
          <p className="text-xs sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu
            cursus euismod quis viverra nibh cras. Id donec ultrices tincidunt
            arcu non sodales. Mauris in aliquam sem fringilla ut morbi.
            Convallis a cras semper auctor. Sed arcu non odio euismod lacinia at
            quis. Posuere ac ut consequat semper viverra nam libero. Euismod
            quis viverra nibh cras pulvinar mattis. Ac ut consequat semper
            viverra nam libero justo laoreet sit. Ornare lectus sit amet est
            placerat in egestas. Morbi quis commodo odio aenean sed adipiscing.
            Non diam phasellus vestibulum lorem sed. Sit amet commodo nulla
            facilisi nullam vehicula. Posuere morbi leo urna molestie at
            elementum eu facilisis sed. Arcu non odio euismod lacinia at quis
            risus. Duis at tellus at urna condimentum mattis pellentesque id
            nibh. Habitasse platea dictumst vestibulum rhoncus est. Congue eu
            consequat ac felis donec et odio. Scelerisque eu ultrices vitae
            auctor eu augue ut lectus. Euismod nisi porta lorem mollis aliquam
            ut. Maecenas accumsan lacus vel facilisis. At urna condimentum
            mattis pellentesque id nibh tortor. Justo donec enim diam vulputate
            ut pharetra sit.
          </p>
        </div>
      </div>
    </motion.div>
  );
};
