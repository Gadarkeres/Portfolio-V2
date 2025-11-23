"use client";
import { LinkOutlined, DownloadOutlined } from "@ant-design/icons";
import { Tag } from "antd";
import Link from "next/link";
import Button from "../ui/Button";
import ProjectsGrid from "./projetcs";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const textFadeIn = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  const { t } = useTranslation("common");
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume/resume-matheus.pdf";
    link.download = "resume-matheus.pdf";
    link.setAttribute('target', '_blank');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
          {t("about.title")}
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
                {t("about.whoAmI")}
              </motion.h3>

              <motion.p
                className="text-base mt-3 text-gray-700 dark:text-gray-300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={textFadeIn}
              >
                {t("about.intro")}
              </motion.p>

              <motion.ul
                className="mt-3 space-y-2 text-gray-700 dark:text-gray-300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={textFadeIn}
              >
                <li>{t("about.list.item1")}</li>
                <li>{t("about.list.item2")}</li>
                <li>{t("about.list.item3")}</li>
              </motion.ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {t("about.technologies", { returnObjects: true }).map(
                  (tech: string) => (
                    <Tag key={tech} color="geekblue" className="m-0">
                      {tech}
                    </Tag>
                  ),
                )}
              </div>
              <div className="flex flex-col gap-4 mt-4 sm:flex-row">
                <Link
                  className="flex-1"
                  href="https://www.linkedin.com/in/matheus-rafael-b0aa18259/details/projects/"
                  target="_blank"
                >
                  <Button custom="w-full">
                    {t("about.linkedinButton")} <LinkOutlined />
                  </Button>
                </Link>

                <Button custom="flex-1" onClick={handleDownloadResume}>
                  {t("about.downloadResumeButton")} <DownloadOutlined />
                </Button>
              </div>

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
                  {t("about.education")}
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
            {t("about.projectsTitle")}
          </motion.h3>

          <ProjectsGrid />
        </div>
      </div>
    </div>
  );
};

export default About;
