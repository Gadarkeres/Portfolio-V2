import course01 from "../assets/certificates/java-curso-1.png";
import course02 from "../assets/certificates/react-1.png";
import course03 from "../assets/certificates/api-rest-spring.png";
import course04 from "../assets/certificates/projeter-api-rest.png";
import course05 from "../assets/certificates/hibernate.png";
import course06 from "../assets/certificates/react-desafios.png";
import course07 from "../assets/certificates/Stream-java.png";

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
    alt: "Stream API Java",
  }
];
