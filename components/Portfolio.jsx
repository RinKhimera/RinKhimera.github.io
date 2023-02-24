import Image from "next/image";
import { useMemo } from "react";

const portfolioItems = [
  {
    id: 1,
    url: "https://rinkhimera.github.io/manage-landing-page/",
    src: "/web1.png",
    alt: "Manage Landing Page",
  },
  {
    id: 2,
    url: "https://rinkhimera.github.io/roman-numeral-converter-v2/",
    src: "/web2.png",
    alt: "Roman Numeral Converter",
  },
  {
    id: 3,
    url: "https://rinkhimera.github.io/quotes-generator/",
    src: "/web3.png",
    alt: "Quotes Generator",
  },
  {
    id: 4,
    url: "https://rinkhimera.github.io/js-calculator-v2.0/",
    src: "/web4.png",
    alt: "JS Calculator",
  },
  {
    id: 5,
    url: "https://rinkhimera.github.io/drum-project/",
    src: "/web5.png",
    alt: "Drum Machine",
  },
  {
    id: 6,
    url: "https://rinkhimera.github.io/digital-business-card/",
    src: "/web6.png",
    alt: "Digital Business Card",
  },
];

const Portfolio = () => {
  const portfolioImages = useMemo(
    () =>
      portfolioItems.map((item) => (
        <div className="basis-1/3 flex-1 overflow-hidden" key={item.id}>
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            <Image
              className="rounded-lg object-cover hover:scale-110 transition duration-300 ease-in-out"
              width={400}
              height={400}
              layout="responsive"
              src={item.src}
              alt={item.alt}
            />
          </a>
        </div>
      )),
    []
  );

  return (
    <div className="pt-8">
      <div>
        <h3 className="text-5xl py-1 text-rose-600">Portfolio</h3>
        <p className="text-md py-2 leading-8 max text-gray-800 md:text-lg dark:text-slate-200">
          In building JavaScript applications, I&apos;m equipped with just the
          right tools, and can absolutely function independently of them to
          deliver fast, resilient solutions optimized for scale — performance
          and scalability are priorities on my radar.
        </p>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        {portfolioImages}
      </div>
    </div>
  );
};

export default Portfolio;
