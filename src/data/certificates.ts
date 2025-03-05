import course01 from "../assets/certificates/java-curso-1.png";
import course02 from "../assets/certificates/react-1.png";
import course03 from "../assets/certificates/api-rest-spring.png";
import course04 from "../assets/certificates/projeter-api-rest.png";
import course05 from "../assets/certificates/hibernate.png";
import course06 from "../assets/certificates/react-desafios.png";
import course07 from "../assets/certificates/Stream-java.png";
import course08 from "../assets/certificates/persistencia-de-dados-jpa.png";
import course09 from "../assets/certificates/sql-course.png";
import course10 from "../assets/certificates/controle-excecoes-java-1.png"
import course11 from "../assets/certificates/docker-1.png"
import course12 from "../assets/certificates/documente-teste-api-course-1.png"

export interface CertificateData {
  img: any;
  alt: string;
}

export const certificates: CertificateData[] = [
  {
    img: course01,
    alt: "Curso de Java",
  },
  {
    img: course02,
    alt: "Curso de React",
  },
  {
    img: course06,
    alt: "Desafios de React",
  },
  {
    img: course03,
    alt: "Curso de API REST com Spring Boot",
  },
  {
    img: course04,
    alt: "Projeter API REST",
  },
  {
    img: course05,
    alt: "Curso de Hibernate",
  },
  {
    img: course07,
    alt: "Curso Stream API Java ",
  },
  {
    img: course08,
    alt: "Persistência de dados JPA",
  },
  {
    img: course09,
    alt:"Curso de sql"
  },
  {
    img: course10,
    alt:"Controle e personalize exceções no java"
  },
  {
    img: course11,
    alt:"Curso de Docker"
  },
  {
    img: course12,
    alt:"Teste e documente uma api com swagger"
  },
];
