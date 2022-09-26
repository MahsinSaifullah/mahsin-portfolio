import * as React from 'react';
import Link from 'next/link';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

import { BackgroundCircle } from './BackgroundCircle';

export const Hero: React.FC = () => {
  const [text, count] = useTypewriter({
    words: [
      'Hi, this is Mahsin Saifullah',
      'I am a Software Engineer',
      'With a keen interest in Frontend',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="min-h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />
      <img
        src="https://media-exp1.licdn.com/dms/image/C4D03AQH280l9CKLAUw/profile-displayphoto-shrink_800_800/0/1642705383565?e=1669248000&v=beta&t=DYPw9YLWJhCp6WEVcggi44e417k9kcKDUyo77N4wNYw"
        alt=""
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
      />
      <div className="z-10">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-4xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
