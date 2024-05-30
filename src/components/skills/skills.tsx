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
const Skills = () => {
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
          <Technology image={html} alt={'HTML'} porcent={100} color="#ED5500"/>
          <Technology image={css} alt={'CSS'} porcent={100}  color="blue"/>
          <Technology image={javascript} alt={'JAVASCRIPT'} porcent={80} color="gold"/>
          <Technology image={Ts} alt={'TYPESCRIPT'} porcent={70} color="blue"/>
          <Technology image={react} alt={'REACT.JS'} porcent={80} color="blue"/>
          <Technology image={next} alt={'NEXT.JS'} porcent={70} color="black"/>
        </div>
        <div className="w-5/6 bg-white overflow-hidden shadow-lg dark:bg-primaryBlack p-2 rounded-lg lg:w-3/6">
          <h2 className="text-2xl text-center font-bold dark:text-gray-200 mb-5">
            Back-end
          </h2>
          <Technology image={spring} alt={'SPRING BOOT'} porcent={50} backend color="green"/>
          <Technology image={api} alt={'API REST'} porcent={50} backend color="blue"/>
          <Technology image={sql} alt={'SQL'} porcent={55} backend color="#74CED1"/>
          <Technology image={mongo} alt={'MongoDB'} porcent={0} backend color="green"/>
          <Technology image={docker} alt={'Docker'} porcent={0} backend color="blue"/>
          <Technology image={node} alt={'Node'} porcent={0} backend color="purple"/>
        </div>
      </div>
    </section>
  );
};

export default Skills;
