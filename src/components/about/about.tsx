"use client";
import React, { useState } from "react";
import Image from "next/image";
import Img from "../../assets/me/image-portfolio.png";
import ModalCustom from "../ui/Modal";
import { InfoCircleFilled, LinkOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import Button from "../ui/Button";
import Link from "next/link";
import customHook from "./customHook";

const About = () => {
  const { handleImageClick, open, redirect, setOpen } = customHook();

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
            Tenho 23 anos e moro em Maringá. Meu interesse inicial foi em
            programação, começando com C# em 2021, mas migrei para o
            desenvolvimento front-end. Atualmente, estou focado em estudar
            back-end com Java Spring Boot e bancos de dados SQL. Acredito ter
            uma boa base nessas tecnologias, pois estou trabalhando com React e
            TypeScript no front-end e Java Spring Boot no back-end, caminhando
            para me tornar um desenvolvedor full-stack.
          </p>
          <Link
            className="flex justify-center items-center mt-5 "
            href={"https://www.linkedin.com/in/matheus-rafael-7b9b0b1b5/"}
          >
            <Button custom="w-1/3">
              Linkedin
              <LinkOutlined size={24} />
            </Button>
          </Link>
        </div>
      </div>
      <div className="w-full h-3/6 mb-5 flex flex-col justify-center items-center gap-20 lg:flex-row lg:p-15">
        <div className="w-11/12 bg-white shadow-lg dark:bg-primaryBlack p-5 rounded-lg lg:w-3/5">
          <h3 className="text-xl font-bold dark:text-gray-200 opacity-90 text-center">
            Meu Primeiro Portfólio
            <Tooltip title="Clique na imagem para saber mais">
              <InfoCircleFilled className="ml-2" />
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
            />
          </div>
          <ModalCustom
            open={open}
            setOpen={setOpen}
            title="Meu primeiro portfólio"
            text="Esse é meu primeiro portfólio, desenvolvido antes mesmo de eu conseguir meu primeiro emprego, juntamente com projetos feitos na época, foi aonde tudo começou."
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
