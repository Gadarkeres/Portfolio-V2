import React from "react";
import Technology from "./technologies";
const Skills = () => {
  return (
    <section className="flex flex-col w-full min-h-screen bg-gray-200 dark:bg-black">
      <div className="mt-5">
        <h1 className="text-3xl text-center font-bold dark:text-gray-200">
          HABILIDADES
        </h1>
      </div>
      <div className="w-full h-3/6 flex flex-col mt-10 justify-center items-center gap-20 ">
        <div className="w-5/6 bg-white overflow-hidden dark:bg-primaryBlack p-2 rounded-sm">
          <h2 className="text-2xl text-center font-bold dark:text-gray-200 mb-5">
            Front-end
          </h2>
          <Technology text="HTML" porcent={100} />
          <Technology text="CSS" porcent={100} />
          <Technology text="JavaScript" porcent={80} />
          <Technology text="React.js" porcent={80} />
          <Technology text="Next.js" porcent={60} />
          <Technology text="TypeScript" porcent={70} />
        </div>
        <div className="w-5/6 bg-white overflow-hidden  dark:bg-primaryBlack p-2 rounded-sm">
          <h2 className="text-2xl text-center font-bold dark:text-gray-200 mb-5">
            Back-end
          </h2>
          <Technology text="Spring boot" porcent={80} backend />
          <Technology text="API REST" porcent={80} backend />
          <Technology text="SQL" porcent={70} backend />
        </div>
      </div>
    </section>
  );
};

export default Skills;
