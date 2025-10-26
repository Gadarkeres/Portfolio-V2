import Ts from "../assets/technologies/Ts.png";
import html from "../assets/technologies/html.png";
import css from "../assets/technologies/css.png";
import javascript from "../assets/technologies/javascript.png";
import react from "../assets/technologies/react.png";
import next from "../assets/technologies/next.png";
import spring from "../assets/technologies/spring-boot.png";
import api from "../assets/technologies/api.png";
import sql from "../assets/technologies/sql.png";
import mongo from "../assets/technologies/mongodb.png";
import docker from "../assets/technologies/docker.jpg";
import node from "../assets/technologies/node.png";
import tailwind from "../assets/technologies/tailwind.png";
import zod from "../assets/technologies/zod.png";
import { StaticImageData } from "next/image";

export interface TechnologyData {
  key: string;
  img: StaticImageData;
  alt: string;
  color: string;
}

export const frontTech: TechnologyData[] = [
  {
    key: "html",
    img: html,
    alt: "HTML",
    color: "#ED5500",
  },
  {
    key: "css",
    img: css,
    alt: "CSS",
    color: "blue",
  },
  {
    key: "javascript",
    img: javascript,
    alt: "JavaScript",
    color: "gold",
  },
  {
    key: "typescript",
    img: Ts,
    alt: "TypeScript",
    color: "blue",
  },
  {
    key: "react",
    img: react,
    alt: "React",
    color: "blue",
  },
  {
    key: "nextjs",
    img: next,
    alt: "Next.js",
    color: "black",
  },
  {
    key: "tailwind",
    img: tailwind,
    alt: "Tailwind CSS",
    color: "blue",
  },
  {
    key: "zod",
    img: zod,
    alt: "Zod + React Hook Form",
    color: "blue",
  },
];

export const backTech: TechnologyData[] = [
  {
    key: "spring",
    img: spring,
    alt: "Spring Boot & Hibernate",
    color: "green",
  },
  {
    key: "sql",
    img: sql,
    alt: "SQL",
    color: "#74CED1",
  },
  {
    key: "mongo",
    img: mongo,
    alt: "MongoDB",
    color: "green",
  },
  {
    key: "node",
    img: node,
    alt: "Node.js",
    color: "purple",
  },
  {
    key: "api",
    img: api,
    alt: "API REST",
    color: "blue",
  },
  {
    key: "docker",
    img: docker,
    alt: "Docker",
    color: "blue",
  },
];
