import Head from "next/head";
import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Technologies from "../components/Technologies";
import Portfolio from "../components/Portfolio";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Samuel Pokam</title>
        <meta
          name="description"
          content="Portfolio website bootstrapped with Next.js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-slate-50 px-10 pb-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-burtons dark:text-slate-100">
            devbyRinKhimera
          </h1>
          <ul className="flex items-center">
            <li>
              {darkMode === true ? (
                <BsSunFill
                  className="cursor-pointer text-2xl text-slate-100"
                  onClick={() => setDarkMode(!darkMode)}
                />
              ) : (
                <BsFillMoonStarsFill
                  className="cursor-pointer text-2xl"
                  onClick={() => setDarkMode(!darkMode)}
                />
              )}
            </li>
            <li>
              <a
                className="bg-gradient-to-r from-rose-600 to-orange-500 text-white px-4 py-2 rounded-lg ml-8"
                href="/resume.pdf"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <Hero />
        <Services />
        <Technologies />
        <Portfolio />
      </main>
    </div>
  );
}
