import imgPortfolio from "../assets/projects/portfolio.png";
import imgCripto from "../assets/projects/cripto-api.png";
import imgFintrak from "../assets/projects/fintrak.png";

export interface projectsData {
  titleKey: string;
  textKey: string;
  img: any;
  alt: string;
  url: string;
  githubUrl?: string;
  inProgress?: boolean;
}

export const projects: projectsData[] = [
  {
    titleKey: "about.projects.fintrak.title",
    textKey: "about.projects.fintrak.text",
    url: "https://fintrak-web-dev.vercel.app/dashboard",
    githubUrl: "https://github.com/Gadarkeres/fintrak-web",
    alt: "Projeto Fintrak",
    img: imgFintrak,
    inProgress: true,
  },
  {
    titleKey: "about.projects.cripto.title",
    textKey: "about.projects.cripto.text",
    img: imgCripto,
    alt: "Projeto Cripto API",
    url: "https://cripto-api-five.vercel.app/",
    githubUrl: "https://github.com/Gadarkeres/Cripto-API",
  },
  {
    titleKey: "about.projects.portfolio.title",
    textKey: "about.projects.portfolio.text",
    img: imgPortfolio,
    alt: "Portfolio V1",
    url: "https://gadarkeres.github.io/Portfolio/",
    githubUrl: "https://github.com/Gadarkeres/Portfolio-V2",
  },
];
