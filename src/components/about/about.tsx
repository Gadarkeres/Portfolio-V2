"use client";
import { LinkOutlined } from "@ant-design/icons";
import { Tag } from "antd";
import Link from "next/link";
import Button from "../ui/Button";
import ProjectsGrid from "./projetcs";
import { motion } from "framer-motion";

const textFadeIn = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  return (
    <div className="flex flex-col gap-10 w-full min-h-screen bg-gradient-to-r from-gray-200 to-gray-400 dark:bg-gradient-to-r dark:from-black dark:to-gray-800 lg:gap-5">
      <div className="mt-5 flex flex-col w-full items-center justify-center">
        <motion.h1
          className="text-3xl text-center font-bold dark:text-gray-200"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textFadeIn}
        >
          SOBRE MIM
        </motion.h1>
      </div>

      <div className="w-full flex flex-col items-center lg:px-6">
        <div className="w-11/12 max-w-5xl rounded-xl bg-white shadow-lg dark:bg-primaryBlack p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8">
              <motion.h3
                className="text-2xl font-semibold dark:text-gray-100 text-gray-900"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={textFadeIn}
              >
                Quem sou eu
              </motion.h3>

              <motion.p
                className="text-base mt-3 text-gray-700 dark:text-gray-300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={textFadeIn}
              >
                💻 Sou um <b>desenvolvedor Full-Stack</b> com experiência
                prática no desenvolvimento de aplicações web modernas, atuando
                no <b>front-end</b> com <b>React</b> e <b>TypeScript</b> e no{" "}
                <b>back-end</b> com <b>Java</b> e <b>Spring Boot</b>. Possuo
                conhecimento sólido em <b>SQL Server</b>, versionamento com{" "}
                <b>Git</b> e pipelines de <b>CI/CD</b> com <b>Azure DevOps</b>.
              </motion.p>

              <motion.ul
                className="mt-3 space-y-2 text-gray-700 dark:text-gray-300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={textFadeIn}
              >
                <li>
                 Manutenção e evolução de sistemas.
                </li>
                <li>
                  Foco em qualidade, manutenibilidade e experiência do
                  desenvolvedor (DX).
                </li>
                <li>
                  Colaboração e comunicação clara em times multidisciplinares.
                </li>
              </motion.ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "React",
                  "TypeScript",
                  "Zustand",
                  "React Hook Form",
                  "Zod",
                  "Java",
                  "Spring Boot",
                  "SQL Server",
                ].map((t) => (
                  <Tag key={t} color="geekblue" className="m-0">
                    {t}
                  </Tag>
                ))}
              </div>

              <Link
                className="inline-flex mt-6"
                href="https://www.linkedin.com/in/matheus-rafael-b0aa18259/details/projects/"
                target="_blank"
              >
                  <Button custom="w-full md:w-auto">
                    LinkedIn <LinkOutlined />
                  </Button>
              </Link>
            </div>

            <div className="md:col-span-4">
              <motion.div
                className="rounded-lg border border-white/20 dark:border-white/10 bg-gray-50/70 dark:bg-black/30 p-5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={textFadeIn}
              >
                <p className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
                  Graduado em <b>Análise e Desenvolvimento de Sistemas</b>, sou
                  apaixonado por tecnologia e estou sempre em busca de evolução
                  contínua. Atuo com metodologias ágeis (<b>Scrum</b>,{" "}
                  <b>Kanban</b>) e valorizo boas práticas de desenvolvimento
                  como <b>Clean Code</b> e <b>SOLID</b>.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mb-10 flex flex-col items-center lg:px-6">
        <div className="w-11/12 max-w-6xl rounded-xl bg-white dark:bg-primaryBlack shadow-lg p-5">
          <motion.h3
            className="text-2xl font-bold dark:text-gray-200 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textFadeIn}
          >
            Projetos
          </motion.h3>

          <ProjectsGrid />
        </div>
      </div>
    </div>
  );
};

export default About;
