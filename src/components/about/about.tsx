"use client";
import React, { useState } from "react";
import Image from "next/image";
import Img from "../../assets/me/image-portfolio.png";
import ModalCustom from "../ui/Modal";
import ButtonCustom from "../ui/Button";
import { InfoCircleFilled } from "@ant-design/icons";
import { Tooltip } from "antd";

const About = () => {
  const [open, setOpen] = useState(false);

  const handleImageClick = () => {
    setOpen(true);
  };

  const redirect = (link: string) => {
    window.open(link, "_blank");
    setOpen(false);
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-gradient-to-r from-gray-200 to-gray-400 dark:bg-gradient-to-r dark:from-black dark:to-gray-800 lg:gap-0">
      <div className="mt-5 flex flex-col w-full items-center justify-center">
        <h1 className="text-3xl text-center font-bold dark:text-gray-200">
          SOBRE MIM
        </h1>
      </div>
      <div className="w-full h-3/6 flex flex-col justify-center items-center lg:flex-row lg:p-20">
        <div className="w-5/6 bg-white shadow-lg dark:bg-primaryBlack p-5 rounded-lg lg:w-3/6">
          <h3 className="text-xl font-bold dark:text-gray-200 opacity-90 text-center">
            Quem sou eu
          </h3>
          <p className="text-base text-gray-700 dark:text-gray-300 mt-4 leading-relaxed">
            Tenho 23 anos e moro em Maringá. Meu interesse inicial foi em
            programação, começando com C# em 2020, mas migrei para o
            desenvolvimento front-end. Atualmente, estou focado em estudar
            back-end com Java Spring Boot e bancos de dados SQL. Acredito ter
            uma boa base nessas tecnologias, pois estou trabalhando com React e
            TypeScript no front-end e Java Spring Boot no back-end, caminhando
            para me tornar um desenvolvedor full-stack.
          </p>
          <div className=" w-full flex justify-center m-1">
            <ButtonCustom
              text="Linkedin"
              custom={"w-2/6 m-2"}
              onClick={() =>
                redirect(
                  "https://www.linkedin.com/in/matheus-rafael-b0aa18259/"
                )
              }
            />
          </div>
        </div>
      </div>
      <div className="w-full h-3/6 mb-5 flex flex-col justify-center items-center gap-20 lg:flex-row lg:p-15">
        <div className="w-11/12 bg-white shadow-lg dark:bg-primaryBlack p-5 rounded-lg lg:w-4/6">
          <h3 className="text-xl font-bold dark:text-gray-200 opacity-90 text-center">
            Meu Primeiro Portfólio
            <Tooltip title="Clique na imagem para saber mais">
              <InfoCircleFilled className="ml-2"/>
            </Tooltip>
          </h3>

          <div
            className="relative cursor-pointer mt-5"
            onClick={handleImageClick}
          >
            <Image
              src={Img}
              alt="Imagem portfólio"
              className="mx-auto shadow-lg rounded-lg"
              layout="responsive"
              width={500}
              height={300}
            />
          </div>
          <ModalCustom
            open={open}
            setOpen={setOpen}
            title="Meu primeiro portfólio"
            text="Esse é meu primeiro portfólio, desenvolvido antes mesmo de eu conseguir meu primeiro emprego, juntamente com projetos projetos feitos na época, foi aonde tudo começou."
            functionCustom={() =>
              redirect("https://gadarkeres.github.io/Portfolio/")
            }
            okText="Abrir"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
