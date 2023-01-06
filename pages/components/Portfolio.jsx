import Image from "next/image";
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import web6 from "../../public/web6.png";

const Portfolio = () => {
  return (
    <section>
      <div>
        <h3 className="text-3xl py-1">Portfolio</h3>
        <p className="text-md py-2 leading-8 max text-gray-800 dark:text-slate-200">
          I create successful responsive websites that are fast, easy to use,
          and built with best practices. The main area of my expertise is
          front-end development, React.js | Next.js, Tailwind CSS | Bootstrap,
          JavaScript, building small and medium web apps, custom plugins,
          features, animations, and coding interactive layouts.
        </p>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className="basis-1/3 flex-1 ">
          <Image
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            src={web1}
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            src={web2}
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            src={web3}
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            src={web4}
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            src={web5}
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            src={web6}
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
