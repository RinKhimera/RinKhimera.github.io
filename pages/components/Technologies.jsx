import Image from "next/image";
import html from "../../public/tech/html.png";
import css from "../../public/tech/css.png";
import javascript from "../../public/tech/javascript.png";
import node from "../../public/tech/node.png";
import redux from "../../public/tech/redux.png";
import react from "../../public/tech/react.png";
import typescript from "../../public/tech/typescript.png";
import bootstrap from "../../public/tech/bootstrap.png";
import sass from "../../public/tech/sass.png";
import tailwind from "../../public/tech/tailwind.png";

const Technologies = () => {
  return (
    <div className="py-5">
      <h3 className="text-5xl py-3 text-rose-600">What I use</h3>
      <p className="text-md pb-5 leading-8 max text-gray-800 md:text-lg dark:text-slate-200">
        Technologies I am working with
      </p>
      <div className=" grid gap-4 grid-cols-4 grid-rows-3 lg:flex">
        <Image src={html} className="h-16 w-16" />
        <Image src={css} className="h-16 w-16" />
        <Image src={javascript} className="h-16 w-16" />
        <Image src={typescript} className="h-16 w-16" />
        <Image src={react} className="h-16 w-16" />
        <Image src={redux} className="h-16 w-16" />
        <Image src={node} className="h-16 w-16" />
        <Image src={bootstrap} className="h-16 w-16" />
        <Image src={sass} className="h-16 w-16" />
        <Image src={tailwind} className="h-14 w-14" />
      </div>
    </div>
  );
};

export default Technologies;
