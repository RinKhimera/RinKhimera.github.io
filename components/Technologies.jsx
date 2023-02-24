import Image from "next/image";
import html from "../public/tech/html.png";
import css from "../public/tech/css.png";
import javascript from "../public/tech/javascript.png";
import node from "../public/tech/node.png";
import redux from "../public/tech/redux.png";
import react from "../public/tech/react.png";
import typescript from "../public/tech/typescript.png";
import bootstrap from "../public/tech/bootstrap.png";
import sass from "../public/tech/sass.png";
import tailwind from "../public/tech/tailwind.png";

const technologies = [
  { src: html, alt: "HTML" },
  { src: css, alt: "CSS" },
  { src: javascript, alt: "JavaScript" },
  { src: typescript, alt: "TypeScript" },
  { src: react, alt: "React" },
  { src: redux, alt: "Redux" },
  { src: node, alt: "Node.js" },
  { src: bootstrap, alt: "Bootstrap" },
  { src: sass, alt: "Sass" },
  { src: tailwind, alt: "Tailwind CSS" },
];

const Technologies = () => {
  return (
    <div className="py-5">
      <h3 className="text-5xl py-3 text-rose-600">My stacks</h3>
      <p className="text-md pb-5 leading-8 max text-gray-800 md:text-lg dark:text-slate-200">
        Technologies I am working with
      </p>
      <div className="grid gap-4 grid-cols-4 grid-rows-3 lg:flex">
        {technologies.map((tech) => (
          <Image
            src={tech.src}
            alt={tech.alt}
            key={tech.alt}
            className="h-16 w-16"
          />
        ))}
      </div>
    </div>
  );
};

export default Technologies;
