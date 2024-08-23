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
    text: "Primeiro projeto, antes mesmo de conseguir meu primeiro emprego no mercado de trabalho, juntamente com projetos feitos na evolução, foi aonde tudo comecou.",
    img: require("../assets/projects/image-portfolio.png"),
    alt: "Meu primeiro portfólio",
    url: "https://gadarkeres.github.io/Portfolio/",
  },
  {
    title: "Cripto API paginada",
    text: "Projeto que consome uma api de criptomoedas e monta uma tabela paginada e aceita filtros, desenvolvido com NextJS, utilizando renderização server-side, typescript e tailwind.",
    img: require("../assets/projects/cripto-api.png"),
    alt: "Projeto criptomoedas",
    url: "https://cripto-api-five.vercel.app/",
  },
];
