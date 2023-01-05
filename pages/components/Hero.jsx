import React from "react";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import Image from "next/image";
import deved from "../../public/dev-ed-wave.png";

const Hero = () => {
  return (
    <div>
      <div className="text-center p-10">
        <h2 className=" text-5xl py-2 text-teal-600 font-medium">
          Samuel Pokam
        </h2>
        <h3 className=" text-2xl py-2">Frontend Developer</h3>
        <p className="text-md py-5 leading-8 text-gray-800">
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I am a frontend developer with a
          particular interest in making things simple and automating daily
          tasks.
        </p>
      </div>
      <div className=" text-5xl flex justify-center gap-16 py-3 text-gray-600">
        <AiFillLinkedin />
        <AiFillGithub />
        <AiFillMail />
      </div>
      <div className="relative mx-auto mt-20 bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 overflow-hidden">
        <Image src={deved} fill objectFit="cover" />
      </div>
    </div>
  );
};

export default Hero;
