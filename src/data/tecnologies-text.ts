import Ts from "../assets/technologies/Ts.png"
import html from "../assets/technologies/html.png"
import css from "../assets/technologies/css.png"
import javascript from "../assets/technologies/javascript.png"
import react from "../assets/technologies/react.png"
import next from "../assets/technologies/next.png"
import spring from "../assets/technologies/spring-boot.png"
import api from "../assets/technologies/api.png"
import sql from "../assets/technologies/sql.png"
import mongo from "../assets/technologies/mongodb.png"
import docker from "../assets/technologies/docker.jpg"
import node from "../assets/technologies/node.png"
import tailwind from "../assets/technologies/tailwind.png"
import zod from "../assets/technologies/zod.png"
import { StaticImageData } from "next/image"

export interface TechnologyData {
  title: string
  text: string
  img: StaticImageData
  alt: string
  color: string
  note: string
}

export const frontTech: TechnologyData[] = [
  {
    title: "HTML",
    text: "HTML é a base de toda página web. Ele permite criar a estrutura de um site, definindo elementos como títulos, parágrafos, links e imagens.",
    img: html,
    alt: "HTML",
    color: "ED5500",
    note: "Tecnologia totalmente dominada e uso diário constante e semântico.",
  },
  {
    title: "CSS",
    text: "CSS é o que dá vida e estilo às páginas web. Com ele, você pode definir cores, fontes, layouts e muito mais, tornando os sites visualmente atraentes.",
    img: css,
    alt: "CSS",
    color: "blue",
    note: "Boa base em estilos, layout responsivo e animações.",
  },
  {
    title: "JavaScript",
    text: "JavaScript é a mágica por trás das páginas web interativas. Ele permite adicionar dinamismo, como animaçes, validaçes de formulários e muito mais.",
    img: javascript,
    alt: "JavaScript",
    color: "gold",
    note: "Domínio sólido da linguagem utilizando bibliotecas e frameworks.",
  },
  {
    title: "TypeScript",
    text: "TypeScript é uma versão aprimorada do JavaScript, adicionando a segurança dos tipos. Isso ajuda a evitar erros e torna o código mais fácil de manter.",
    img: Ts,
    alt: "TypeScript",
    color: "blue",
    note: "Uso constante com React e Next, aproveitando os benefícios dos tipos.",
  },
  {
    title: "React",
    text: "React é uma biblioteca baseado em javascript que facilita a criação de interfaces de usuário modernas e reativas. Ele torna a construção de componentes reutilizáveis simples e eficiente.",
    img: react,
    alt: "React",
    color: "blue",
    note: "Forte experiência em projetos reais com componentes, hooks e contextos.",
  },
  {
    title: "Next.js",
    text: "Next.js é um framework que leva o React a outro nível, oferecendo funcionalidades como renderização no servidor e geração de sites estáticos com facilidade.",
    img: next,
    alt: "Next.js",
    color: "black",
    note: "Conhecimento intermediário uso em projetos pessoais e estudo de SSR.",
  },
  {
    title: "Tailwind",
    text: "Tailwind CSS é uma biblioteca de estilos CSS que permite criar estilos a partir de classes, utilizo bastante nos meus projetos pessoais.",
    img: tailwind,
    alt: "Tailwind",
    color: "blue",
    note: "Tailwind CSS é uma biblioteca de estilos CSS que permite criar estilos a partir de classes, utilizo bastante nos meus projetos pessoais.",
  },
  {
    title: "Zod + React Hook Form",
    text: "Zod e React Hook Form ajudam a validar e gerenciar formulários, tornando-os mais seguros e eficientes. Também utilizo bastante na construção de formulários.",
    img: zod,
    alt: "Zod + React Hook Form",
    color: "blue",
    note: "Utilizo de forma padrão e constante em projetos pessoais, Zod e React Hook Form ajudam a validar e gerenciar formulários, tornando-os mais seguros e eficientes.",
  }
]

export const backTech: TechnologyData[] = [
  {
    title: "Spring Boot & Hibernate",
    text: "Spring Boot simplifica o desenvolvimento de aplicaçes Java. Com ele, você pode criar aplicativos robustos e escaláveis rapidamente, usando como back-end.",
    img: spring,
    alt: "Spring Boot & Hibernate",
    color: "green",
    note: "Boa base em APIs REST com autenticação e integração com banco de dados e utilzação profissional.",
  },
  {
    title: "SQL",
    text: "SQL é uma linguagem de programação orientada a tabelas racionais, com ele pode ler,editar,criar e deletar tabelas ou colunas, e muito mais!",
    img: sql,
    alt: "SQL",
    color: "#74CED1",
    note: "Experiência sólida com SQLServer, especialmente em consultas e modelagem.",
  },
  {
    title: "MongoDB",
    text: "MongoDB é um banco de dados NoSQL que facilita o armazenamento e a consulta de grandes volumes de dados, utilizando uma estrutura flexível e orientada a documentos.",
    img: mongo,
    alt: "MongoDB",
    color: "green",
    note: "Ainda não utilizado em projetos, mas presente no roadmap de estudos.",
  },
  {
    title: "Node.js",
    text: "Node.js permite usar JavaScript no servidor, possibilitando a construção de aplicaçes de rede rápidas e escaláveis. Ele é ideal para criar APIs e serviços web.",
    img: node,
    alt: "Node.js",
    color: "purple",
    note: "Início dos estudos usado em projetos simples e aplicações pequenas.",
  },
  {
    title: "API REST",
    text: "APIs REST são a espinha dorsal da comunicação entre sistemas modernos. Elas permitem que diferentes aplicaçes troquem dados de forma simples e eficiente via HTTP.",
    img: api,
    alt: "API REST",
    color: "blue",
    note: "Experiência prática com autenticação JWT, CRUD e integração front-back.",
  },
  {
    title: "Docker",
    text: "Docker revoluciona o desenvolvimento ao permitir que você empacote aplicaçes e suas dependências em contêineres. Isso garante que funcionem em qualquer ambiente de forma consistente.",
    img: docker,
    alt: "Docker",
    color: "blue",
    note: "Conhecimento básico, utilizado para testes e deploys de projetos pessoais.",
  },
]
