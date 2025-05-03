"use client";
import { InfoCircleFilled, LinkOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import Link from "next/link";
import Button from "../ui/Button";
import Carroussel from "./carroussel";

const About = () => {
  return (
    <div className="flex flex-col gap-10 w-full min-h-screen bg-gradient-to-r from-gray-200 to-gray-400 dark:bg-gradient-to-r dark:from-black dark:to-gray-800 lg:gap-0">
      <div className="mt-5 flex flex-col w-full items-center justify-center">
        <h1 className="text-3xl text-center font-bold dark:text-gray-200">
          SOBRE MIM
        </h1>
      </div>
      <div className="w-full h-3/6 flex flex-col justify-center items-center lg:flex-row lg:p-6">
        <div className="w-5/6 bg-white shadow-lg dark:bg-primaryBlack p-5 rounded-lg lg:w-3/6">
          <h3 className="text-xl font-bold dark:text-gray-200 opacity-90 text-center">
            Quem sou eu
          </h3>
          <p className="text-base text-gray-700 dark:text-gray-300 mt-4 leading-relaxed">
            Tenho 24 anos, sou um desenvolvedor Full-Stack com experiência
            em React e TypeScript no front-end e em Java e Spring Boot no back-end. Estou
            sempre buscando aprender novas tecnologias e melhorar minhas
            habilidades, portanto, estou sempre aberto a novos desafios e
            oportunidades.
          </p>
          <Link
            className="flex justify-center items-center mt-5 "
            href={"https://www.linkedin.com/in/matheus-rafael-b0aa18259/"}
            target="_blank"
          >
            <Button custom="w-1/2 lg:w-1/3">
              Linkedin
              <LinkOutlined size={24} />
            </Button>
          </Link>
        </div>
      </div>
      <div className="w-full h-3/6 mb-5 flex flex-col justify-center items-center gap-20 lg:flex-row lg:p-15">
        <div className="w-11/12 bg-white shadow-lg dark:bg-primaryBlack p-5 rounded-lg lg:w-3/5">
          <h3 className="text-xl font-bold dark:text-gray-200 opacity-90 text-center">
            Projetos
            <Tooltip title="Clique na imagem para saber mais">
              <InfoCircleFilled className="ml-2" />
            </Tooltip>
          </h3>

          <Carroussel />
        </div>
      </div>
    </div>
  );
};

export default About;
