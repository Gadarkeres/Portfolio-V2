import imgPortfolio from "../assets/projects/image-portfolio.png";
import imgCripto from "../assets/projects/cripto-api.png";

export interface projectsData {
  title: string;
  text: string;
  img: any;
  alt: string;
  url: string;
}

export const projects: projectsData[] = [
  {
    title: "Portfolio V1",
    text: "Primeiro projeto...",
    img: imgPortfolio,
    alt: "Meu primeiro portfólio",
    url: "https://gadarkeres.github.io/Portfolio/",
  },
  {
    title: "Cripto API paginada",
    text: "Projeto que consome uma API...",
    img: imgCripto,
    alt: "Projeto criptomoedas",
    url: "https://cripto-api-five.vercel.app/",
  },
];