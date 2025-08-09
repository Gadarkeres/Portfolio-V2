import imgPortfolio from "../assets/projects/portfolio.png";
import imgCripto from "../assets/projects/cripto-api.png";
import imgFontrak from "../assets/projects/fintrak.png";

export interface projectsData {
  title: string;
  text: string;
  img: any;
  alt: string;
  url: string;
  githubUrl?: string;
  inProgress?: boolean;
}

export const projects: projectsData[] = [
  {
    title: "Fintrak",
    text: "Projeto para gerenciamento de financas pessoais, com cadastro de despesas, gráficos, usuario e login, desenvolvido com React e Typescript com Nest JS.",
    url: "https://fintrak-web-dev.vercel.app/dashboard",
    githubUrl: "https://github.com/Gadarkeres/fintrak-web",
    alt: "Projeto Fintrak",
    img: imgFontrak,
    inProgress: true,
  },
  {
    title: "Cripto API paginada",
    text: "Projeto que consome uma api de criptomoedas e monta uma tabela paginada e aceita filtros, desenvolvido com NextJS, utilizando renderização server-side, typescript e tailwind",
    img: imgCripto,
    alt: "Projeto criptomoedas",
    url: "https://cripto-api-five.vercel.app/",
    githubUrl: "https://github.com/Gadarkeres/Cripto-API",
  },
  {
    title: "Portfolio V1",
    text: "Primeiro projeto, antes mesmo de conseguir meu primeiro emprego no mercado de trabalho, juntamente com projetos feitos na evolução.",
    img: imgPortfolio,
    alt: "Meu primeiro portfólio",
    url: "https://gadarkeres.github.io/Portfolio/",
    githubUrl: "https://github.com/Gadarkeres/Portfolio-V2",
  },
];
