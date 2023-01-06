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
        <h3 className="text-5xl py-1 text-rose-600">Portfolio</h3>
        <p className="text-md py-2 leading-8 max text-gray-800 md:text-lg dark:text-slate-200">
          In building JavaScript applications, I'm equipped with just the right
          tools, and can absolutely function independently of them to deliver
          fast, resilient solutions optimized for scale — performance and
          scalabilty are priorities on my radar.
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
