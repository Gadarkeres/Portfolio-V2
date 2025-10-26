"use client";
import { Card, Button, Row, Col, Badge } from "antd";
import { projects, projectsData } from "@/data/projects";
import NextImage from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function ProjectsGrid() {
  const { t } = useTranslation("common");

  return (
    <Row gutter={[24, 24]} style={{ marginTop: 20 }}>
      {projects.map((project: projectsData, index) => {
        const card = (
          <Card
            hoverable
            style={{ minHeight: "400px", overflow: "visible" }}
            cover={
              <NextImage
                src={project.img}
                alt={project.alt}
                width={400}
                height={200}
              />
            }
          >
            <Card.Meta
              title={t(project.titleKey as any)}
              description={t(project.textKey as any)}
            />
            <div style={{ marginTop: 16, display: "flex", gap: 8 }}>
              <Button
                type="primary"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("about.projects.viewProject")}
              </Button>
              {project.githubUrl && (
                <Button
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("about.projects.sourceCode")}
                </Button>
              )}
            </div>
          </Card>
        );

        const wrapped = project.inProgress ? (
          <Badge.Ribbon text={t("about.projects.inProgress")} color="orange">
            {card}
          </Badge.Ribbon>
        ) : (
          card
        );

        return (
          <Col xs={24} md={12} lg={8} key={project.titleKey}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
              style={{ overflow: "visible" }}
            >
              {wrapped}
            </motion.div>
          </Col>
        );
      })}
    </Row>
  );
}
