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
import { StaticImageData } from "next/image";

export interface TechnologyData {
  title: string;
  text: string;
  img: StaticImageData;
  alt: string;
  porcent: number;
  color: string;
}

export const frontTech: TechnologyData[] = [
  {
    title: "HTML",
    text: "HTML é a base de toda página web. Ele permite criar a estrutura de um site, definindo elementos como títulos, parágrafos, links e imagens.",
    img: html,
    alt: "HTML",
    porcent: 100,
    color:"ED5500",
  },
  {
    title: "CSS",
    text: "CSS é o que dá vida e estilo às páginas web. Com ele, você pode definir cores, fontes, layouts e muito mais, tornando os sites visualmente atraentes.",
    img: css,
    alt: "CSS",
    porcent: 100,
    color: "blue",
  },
  {
    title: "JavaScript",
    text: "JavaScript é a mágica por trás das páginas web interativas. Ele permite adicionar dinamismo, como animaçes, validaçes de formulários e muito mais.",
    img: javascript,
    alt: "JavaScript",
    porcent: 80,
    color: "gold",
  },
  {
    title: "TypeScript",
    text: "TypeScript é uma versão aprimorada do JavaScript, adicionando a segurança dos tipos. Isso ajuda a evitar erros e torna o código mais fácil de manter.",
    img: Ts,
    alt: "TypeScript",
    porcent: 70,
    color: "blue",
  },
  {
    title: "React",
    text: "React é uma biblioteca baseado em javascript que facilita a criação de interfaces de usuário modernas e reativas. Ele torna a construção de componentes reutilizáveis simples e eficiente.",
    img: react,
    alt: "React",
    porcent: 80,
    color: "blue",
  },
  {
    title: "Next.js",
    text: "Next.js é um framework que leva o React a outro nível, oferecendo funcionalidades como renderização no servidor e geração de sites estáticos com facilidade.",
    img: next,
    alt: "Next.js",
    porcent: 70,
    color: "black",
  },
];

export const backTech: TechnologyData[] =[
  {
    title: "Spring Boot",
    text: "Spring Boot simplifica o desenvolvimento de aplicaçes Java. Com ele, você pode criar aplicativos robustos e escaláveis rapidamente, usando como back-end.",
    img: spring,
    alt: "Spring Boot",
    porcent: 50,
    color: "green",
  },
  {
    title: "SQL",
    text: "SQL é uma linguagem de programação orientada a tabelas racionais, com ele pode ler,editar,criar e deletar tabelas ou colunas, e muito mais!",
    img: sql,
    alt: "SQL",
    porcent: 55,
    color: "#74CED1",
  },
  {
    title: "MongoDB",
    text: "MongoDB é um banco de dados NoSQL que facilita o armazenamento e a consulta de grandes volumes de dados, utilizando uma estrutura flexível e orientada a documentos.",
    img: mongo,
    alt: "MongoDB",
    porcent: 0,
    color: "green",
  },
  {
    title: "Node.js",
    text: "Node.js permite usar JavaScript no servidor, possibilitando a construção de aplicaçes de rede rápidas e escaláveis. Ele é ideal para criar APIs e serviços web.",
    img: node,
    alt: "Node.js",
    porcent: 0,
    color: "purple",
  },
  {
    title: "API REST",
    text: "APIs REST são a espinha dorsal da comunicação entre sistemas modernos. Elas permitem que diferentes aplicaçes troquem dados de forma simples e eficiente via HTTP.",
    img: api,
    alt: "API REST",
    porcent: 50,
    color: "blue",
  },
  {
    title: "Docker",
    text: "Docker revoluciona o desenvolvimento ao permitir que você empacote aplicaçes e suas dependências em contêineres. Isso garante que funcionem em qualquer ambiente de forma consistente.",
    img: docker,
    alt: "Docker",
    porcent: 0,
    color: "blue",
  },
]
