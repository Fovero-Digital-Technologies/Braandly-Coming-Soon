import { useState, useEffect } from "react";
import type { NextPage } from "next";

import { LottieAnimation } from "react-lottie-tools";
import dynamic from "next/dynamic";
// const LottieAnimation = dynamic(() => import("react-lottie-tools").then((mod:any) => mod.LottieAnimation), {
//   ssr: false
// });
// import codetyping from "../public/animation/codetyping.json";
import SignUp from "../components/Forms/SignUp";
import DefaultLayout from "../components/Layouts/DefaultLayout";

const Home: NextPage = () => {
  //   const dispatch = useDispatch();
  const [codetyping, setCodeTyping] = useState<any>(null);

  useEffect(() => {
    if (codetyping === null) {
      import("../public/animation/codetyping.json").then((data) => {
        // let stringData = JSON.stringify(data)
        setCodeTyping(data);
      });
    }
  }, [codetyping]);

  const tools: string[] = [
    "Brand Management Tools",
    "Brand Workspace Tools",
    "Brand Identity Tools",
    "Assets Collection",
    "Brand Links",
    "Branding Tips",
    "Marketing Tasker",
    "Brand Inpiration",
    "And Many More...",
  ];
  return (
    <DefaultLayout
      title="Braandly is Coming Soon"
      desc="Complete Branding Workflow"
    >
      <div>
        <div className="dark:bg-dark dark:text-light px-4 sm:px-6 md:px-10 py-5">
          <div className="container mx-auto pt-2 md:pt-10 pb-0  lg:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-10 lg:gap-20 pt-5">
              <div className="flex flex-col justify-center lg:col-span-5 gap-10">
                <h1 className="text-3xl md:text-5xl font-bold dark:text-white leading-normal lg:leading-relaxed">
                  We are building a
                  <span className="text-primary dark:text-warning">
                    {" "}
                    complete branding toolset{" "}
                  </span>
                  <span className="underline decoration-primary">
                    just for you!
                  </span>{" "}
                  👍
                </h1>

                <p className="text-2xl leading-loose ">
                  <span className="font-bold underline decoration-primary dark:decoration-warning">
                    Braandly
                  </span>{" "}
                  is the complete branding toolset to help all Businesses,
                  Agencies and Designers build that perfect brand they have
                  always wanted to build.
                </p>

                <div className="w-full flex">
                  <a
                    className="w-full md:w-fit bg-primary hover:bg-primary-hov text-white text-lg dark:bg-warning dark:hover:bg-warning-hov dark:text-dark px-8 py-3 rounded cursor-pointer transition-all duration-300 ease-in-out text-center block"
                    href="#waitlist"
                  >
                    Join Waitlist
                  </a>
                </div>
              </div>
              <div className="flex item-center justify-center lg:col-span-5 overflow-hidden">
                <div className="hidden lg:block">
                  {/* <Lottie options={defaultOptions} width={520}  /> */}
                  {codetyping !== null && (
                    <LottieAnimation
                      animation={codetyping}
                      //   autoPlay
                      loop={true}
                      //   style={{ width: "60px", height: "60px" }}
                      //   justPlayInView
                    />
                  )}
                </div>
                <p className="block lg:hidden text-[200px]">👍</p>
              </div>
            </div>
          </div>

          <div className="container mx-auto  py-10  lg:px-0">
            <div className="mb-14 text-center">
              <p className="text-3xl leading-loose text-primary dark:text-warning italic font-bold">
                {
                  "Creating a brand is not so easy. And creating a great / perfect brand is even more difficult."
                }
              </p>

              <p className="text-3xl leading-loose font-bold">
                Trust me, I know!
              </p>
            </div>
            <p className="text-2xl leading-loose text-center">
              Which is why we have created{" "}
              <span className="font-bold">Braandly</span>
            </p>
            <p className="text-2xl leading-loose mb-8 text-center">
              With tools like:{" "}
            </p>
            <ul className="list-none my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-x-20">
              {tools.map((tool) => (
                <li
                  className="text-lg rounded bg-light px-4 py-3 border border-light-border shadow-sm dark:bg-dark-background dark:text-light hover:shadow-lg hover:transform hover:scale-[1.1] cursor-pointer transition duration-300 ease-in-out"
                  key={tool}
                >
                  ✔️ {tool}
                </li>
              ))}
            </ul>
          </div>

          <div className="py-10  lg:px-0">
            <h2 className="text-2xl md:text-6xl font-bold mb-2 dark:text-white leading-loose text-center">
              And
              <span className="text-primary dark:text-warning">
                {" "}
                Guess What?!
              </span>
            </h2>

            <p className="text-3xl leading-loose italic font-bold text-center">
              {"It's almost here!!!"}
            </p>
          </div>
        </div>
        <SignUp />
      </div>
    </DefaultLayout>
  );
};

export default Home;
