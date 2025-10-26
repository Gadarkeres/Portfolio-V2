"use client";
import { Tabs, Card } from "antd";
import TechnologyItem from "./TechnologyItem";
import { frontTech, backTech, type TechnologyData } from "@/data/tecnologies-text";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const textFadeIn = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Skills() {
  const { t } = useTranslation("common");
  const dataFront: TechnologyData[] = frontTech;
  const dataBack: TechnologyData[] = backTech;

  return (
    <section className="min-h-screen w-full bg-gradient-to-r from-gray-200 to-gray-400 dark:bg-gradient-to-r dark:from-black dark:to-gray-800">
      <div className="pt-8 flex flex-col items-center">
        <motion.h1
          className="text-3xl font-bold dark:text-gray-200"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textFadeIn}
        >
          {t("skills.title")}
        </motion.h1>

        <motion.small
          className="text-base dark:text-gray-300 pt-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textFadeIn}
        >
          {t("skills.subtitle")}
        </motion.small>
      </div>

      <motion.div
        className="max-w-6xl mx-auto px-4 py-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textFadeIn}
      >
        <Tabs
          defaultActiveKey="front"
          items={[
            {
              key: "front",
              label: t("skills.frontend"),
              children: (
                <Card className="bg-white dark:bg-primaryBlack lg:min-h-[320px]">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2">
                    {dataFront.map((tech) => (
                      <TechnologyItem
                        key={tech.key}
                        image={tech.img}
                        alt={tech.alt}
                        colorItem={tech.color}
                        titleKey={`skills.technologies.${tech.key}.title`}
                        textKey={`skills.technologies.${tech.key}.text`}
                        noteKey={`skills.technologies.${tech.key}.note`}
                      />
                    ))}
                  </div>
                </Card>
              ),
            },
            {
              key: "back",
              label: t("skills.backend"),
              children: (
                <Card className="bg-white dark:bg-primaryBlack lg:min-h-[320px]">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2">
                    {dataBack.map((tech) => (
                      <TechnologyItem
                        key={tech.key}
                        image={tech.img}
                        alt={tech.alt}
                        colorItem={tech.color}
                        titleKey={`skills.technologies.${tech.key}.title`}
                        textKey={`skills.technologies.${tech.key}.text`}
                        noteKey={`skills.technologies.${tech.key}.note`}
                      />
                    ))}
                  </div>
                </Card>
              ),
            },
          ]}
        />
      </motion.div>
    </section>
  );
}
