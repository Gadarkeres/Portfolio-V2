"use-client";
import React from "react";
import Technology from "./technologies";
// tecnologias
import { frontTech, backTech } from "@/data/tecnologies-text";
import { TechnologyData } from "@/data/tecnologies-text";

const Skills = () => {
  const dataFront: TechnologyData[] = frontTech;
  const dataBack: TechnologyData[] = backTech;
  return (
    <div className="flex flex-col w-full min-h-screen  bg-gradient-to-r from-gray-200 to-gray-400 dark:bg-gradient-to-r dark:from-black dark:to-gray-800">
      <div className="mt-5 flex flex-col w-full items-center justify-center">
        <h1 className="text-3xl text-center font-bold dark:text-gray-200 ">
          H A B I L I D A D E S
        </h1>
        <small className="text-base text-center dark:text-gray-200">
          Clique sobre as imagens das tecnologias para ver mais detalhes
        </small>
      </div>
      <div className="w-full h-3/6 flex flex-col mt-10 justify-center items-center gap-20 lg:flex-row lg:p-20">
        <div className="w-5/6 bg-white overflow-hidden shadow-lg dark:bg-primaryBlack p-2 rounded-lg lg:w-3/6">
          <h2 className="text-2xl text-center font-bold dark:text-gray-200 mb-5">
            Front-end
          </h2>
          {dataFront &&
            dataFront.map((data) => (
              <Technology
                image={data.img}
                alt={data.alt}
                porcent={data.porcent}
                color={data.color}
                key={data.title}
              />
            ))}
        </div>
        <div className="w-5/6 bg-white overflow-hidden shadow-lg dark:bg-primaryBlack p-2 rounded-lg lg:w-3/6">
          <h2 className="text-2xl text-center font-bold dark:text-gray-200 mb-5">
            Back-end
          </h2>
          {dataBack &&
            dataBack.map((data) => (
              <Technology
                image={data.img}
                alt={data.alt}
                porcent={data.porcent}
                color={data.color}
                backend={true}
                key={data.title}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
