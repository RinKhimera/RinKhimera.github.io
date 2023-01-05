import React from "react";

const Services = () => {
  return (
    <div>
      <h2 className="text-3xl py-10 text-center">Services I offer</h2>
      <div className="flex justify-center text-center gap-20">
        <div>
          <h3 className=" text-2xl py-2">Design & Development</h3>
          <p className="text-md py-2 leading-8 max-w-xl text-gray-800">
            I create successful responsive websites that are fast, easy to use,
            and built with best practices. The main area of my expertise is
            front-end development, React.js | Next.js, Tailwind CSS | Bootstrap,
            JavaScript, building small and medium web apps, custom plugins,
            features, animations, and coding interactive layouts.
          </p>
        </div>
        <div>
          <h3 className=" text-2xl py-2">Building Applications</h3>
          <p className="text-md py-2 leading-8 max-w-xl text-gray-800 w-auto">
            In building JavaScript applications, I'm equipped with just the
            right tools, and can absolutely function independently of them to
            deliver fast, resilient solutions optimized performance and
            scalabilty are priorities on my radar. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
