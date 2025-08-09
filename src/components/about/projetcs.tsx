import { Card, Button, Row, Col, Badge } from "antd";
import { projects, projectsData } from "@/data/projects";
import NextImage from "next/image";
import { motion } from "framer-motion";

export default function ProjectsGrid() {
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
              title={project.title}
              description={project.text.slice(0, 150) + "..."}
            />
            <div style={{ marginTop: 16, display: "flex", gap: 8 }}>
              <Button type="primary" href={project.url} target="_blank" rel="noopener noreferrer">
                Ver Projeto
              </Button>
              {project.githubUrl && (
                <Button href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  Código Fonte
                </Button>
              )}
            </div>
          </Card>
        );

        const wrapped = project.inProgress ? (
          <Badge.Ribbon text="Em Progresso" color="orange">
            {card}
          </Badge.Ribbon>
        ) : (
          card
        );

        return (
          <Col xs={24} md={12} lg={8} key={project.title}>
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
