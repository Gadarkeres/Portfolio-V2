import imgPortfolio from "../assets/projects/image-portfolio.png";
import imgCripto from "../assets/projects/cripto-api.png";

export interface projectsData {
  title: string;
  text: string;
  img: any;
  alt: string;
  url: string;
  githubUrl?: string;
}

export const projects: projectsData[] = [
  {
    title: "Portfolio V1",
    text: "Primeiro projeto, antes mesmo de conseguir meu primeiro emprego no mercado de trabalho, juntamente com projetos feitos na evolução.",
    img: imgPortfolio,
    alt: "Meu primeiro portfólio",
    url: "https://gadarkeres.github.io/Portfolio/",
    githubUrl: "https://github.com/Gadarkeres/Portfolio-V2",
  },
  {
    title: "Cripto API paginada",
    text: "Projeto que consome uma api de criptomoedas e monta uma tabela paginada e aceita filtros, desenvolvido com NextJS, utilizando renderização server-side, typescript e tailwind",
    img: imgCripto,
    alt: "Projeto criptomoedas",
    url: "https://cripto-api-five.vercel.app/",
    githubUrl: "https://github.com/Gadarkeres/Cripto-API",
  },
];