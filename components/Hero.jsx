import React from "react";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import Image from "next/image";
import profilePic from "../public/profilepic.png";

const Hero = () => {
  return (
    <div>
      <div className="text-center p-10">
        <h2 className="text-5xl py-2 text-rose-600 font-medium md:text-6xl">
          Samuel Pokam
        </h2>
        <h3 className="text-2xl py-2 md:text-3xl dark:text-slate-50">
          Frontend Developer
        </h3>
        <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-slate-200">
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16 text-gray-600 dark:text-slate-300">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/samuel-pokam/"
        >
          <AiFillLinkedin />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/RinKhimera"
        >
          <AiFillGithub />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:dixiades@gmail.com"
        >
          <AiFillMail />
        </a>
      </div>
      <div className="relative mx-auto mt-20 bg-gradient-to-b from-rose-600 rounded-full w-80 h-80 overflow-hidden">
        <Image src={profilePic} fill style={{ objectFit: "cover" }} />
      </div>
    </div>
  );
};

export default Hero;
