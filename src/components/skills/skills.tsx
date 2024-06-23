
'use-client'
import React from "react";
import Technology from "./technologies";
// tecnologias
import Ts from "../../assets/technologies/Ts.png";
import html from "../../assets/technologies/html.png"
import css from "../../assets/technologies/css.png"
import javascript from "../../assets/technologies/javascript.png"
import react from "../../assets/technologies/react.png"
import next from "../../assets/technologies/next.png"
import spring from "../../assets/technologies/spring-boot.png"
import api from "../../assets/technologies/api.png"
import sql from "../../assets/technologies/sql.png"
import mongo from "../../assets/technologies/mongodb.png"
import docker from "../../assets/technologies/docker.jpg"
import node from '../../assets/technologies/node.png'
import { tecnologiatext } from "@/data/tecnologies-text";


const Skills = () => {
  const data = tecnologiatext;
  return (
    <section className="flex flex-col w-full min-h-screen bg-gray-200 dark:bg-black">
      <div className="mt-5 flex flex-col w-full items-center justify-center ">
        <h1 className="text-3xl text-center font-bold dark:text-gray-200">
          H A B I L I D A D E S
        </h1>
        <small className="text-base text-center dark:text-gray-200">
          Passe o mouse sobre cada imagem para ver o nome da tecnologia
        </small>
      </div>
      <div className="w-full h-3/6 flex flex-col mt-10 justify-center items-center gap-20 lg:flex-row lg:p-20">
        <div className="w-5/6 bg-white overflow-hidden shadow-lg dark:bg-primaryBlack p-2 rounded-lg lg:w-3/6">
          <h2 className="text-2xl text-center font-bold dark:text-gray-200 mb-5">
            Front-end
          </h2>
          <Technology image={html} alt={'HTML'} porcent={100} color="#ED5500" title={data.html.title} text={data.html.text} />
          <Technology image={css} alt={'CSS'} porcent={100}  color="blue" title={data.css.title} text={data.css.text}/>
          <Technology image={javascript} alt={'JAVASCRIPT'} porcent={80} color="gold" title={data.javascript.title} text={data.javascript.text}/>
          <Technology image={Ts} alt={'TYPESCRIPT'} porcent={70} color="blue" title={data.typescript.title} text={data.typescript.text} />
          <Technology image={react} alt={'REACT.JS'} porcent={80} color="blue" title={data.react.title} text={data.react.text}/>
          <Technology image={next} alt={'NEXT.JS'} porcent={70} color="black" title={data.nextjs.title} text={data.nextjs.text}/>
        </div>
        <div className="w-5/6 bg-white overflow-hidden shadow-lg dark:bg-primaryBlack p-2 rounded-lg lg:w-3/6">
          <h2 className="text-2xl text-center font-bold dark:text-gray-200 mb-5">
            Back-end
          </h2>
          <Technology image={spring} alt={'SPRING BOOT'} porcent={50} backend color="green" title={data.springboot.title} text={data.springboot.text}/>
          <Technology image={api} alt={'API REST'} porcent={50} backend color="blue" title={data.api.title} text={data.api.text}/>
          <Technology image={sql} alt={'SQL'} porcent={55} backend color="#74CED1" title={data.sqlserver.title} text={data.sqlserver.text}/>
          <Technology image={mongo} alt={'MongoDB'} porcent={0} backend color="green" title={data.mongodb.title} text={data.mongodb.text}/>
          <Technology image={docker} alt={'Docker'} porcent={0} backend color="blue" title={data.docker.title} text={data.docker.text}/>
          <Technology image={node} alt={'Node'} porcent={0} backend color="purple" title={data.nodejs.title} text={data.nodejs.text}/>
        </div>
      </div>
      {/* <div className="w-full flex items-center justify-center p-5 bg-red-400">
        <div className="flex flex-col w-full">
          <h1 className="text-2xl text-center font-bold dark:text-gray-200 mb-5">Primeiro Portfólio</h1>
          <div></div>
          <div></div>
        </div>
      </div> */}

    </section>
  );
};

export default Skills;
