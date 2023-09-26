import Image from "next/image";
import { Inter } from "next/font/google";

// import images
import avatar from "../../public/avatar-photo.jpg";
import design from "../../public/design.png";
import code from "../../public/code.png";
import consulting from "../../public/consulting.png";
import menu from "../../public/menu.png";
import slider from "../../public/slider.png";
import tours from "../../public/tours.png";
import tabs from "../../public/tabs.png";

// import react-icons
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";

// import hooks
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-800 dark:text-slate-200">
        <section className="min-h-screen">
          <nav className="flex justify-between py-10">
            <h1 className="text-xl font-burtons">Aji Bimantoro Portfolio</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  className="cursor-pointer"
                  onClick={() => setDarkMode(!darkMode)}
                />
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1k2bDNaEHoRHRfc2aw_gIW3ufYitfRNSw/view?usp=drive_link"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white py-2 px-4 rounded-md ml-8"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl lg:text-7xl">
              Aji Bimantoro
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">
              Developer and Designer.
            </h3>
            <p className="text-lg py-5 leading-8 text-gray-800 max-w-xl mx-auto md:text-xl dark:text-gray-400">
              Freelancer providing services for programming and design content
              needs. Join me down below and let's get cracking!
            </p>
            <div className="flex justify-center gap-16 text-5xl py-3 text-gray-600">
              <a href="https://www.instagram.com/bimo_sullivan/">
                <AiFillInstagram />
              </a>
              <a href="https://www.linkedin.com/in/ajibimantoro">
                <AiFillLinkedin className="cursor-pointer" />
              </a>
              <a href="https://www.facebook.com/BimoBeutik">
                <AiFillFacebook />
              </a>
            </div>
            <div className="mt-20 mx-auto relative flex justify-center ">
              <Image
                src={avatar}
                className="rounded-full w-80 h-80 md:w-96 md:h-96"
              />
            </div>
          </div>
        </section>

        {/* section 2 */}
        <section>
          <div>
            <h3 className="text-3xl py-1">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
              Since the beginning of my journey as a freelance developer, I've
              done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups</span> and
              collaborated with talanted people to create digital product for
              both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              I offer from a wide range of services, including programming and
              teaching.
            </p>
          </div>

          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image
                src={design}
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-teal-500 ">
                Beautiful Designs
              </h3>
              <p className="py-2 dark:text-gray-400">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} className="mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-teal-500">
                Code your dream project
              </h3>
              <p className="py-2 dark:text-gray-400">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image
                src={consulting}
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-teal-500">
                Consulting
              </h3>
              <p className="py-2 dark:text-gray-400">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
          </div>
        </section>

        {/* section 3 */}
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1  ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 ">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={tours}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={slider}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={menu}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover fill-white"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={tabs}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
