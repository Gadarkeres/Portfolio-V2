import { Card, Button, Row, Col } from "antd";
import { projects, projectsData } from "@/data/projects";
import NextImage from "next/image";
export default function ProjectsGrid() {
  return (
    <Row gutter={[24, 24]} style={{ marginTop: 20 }}>
      {projects.map((project: projectsData, index) => (
        <Col xs={24} md={12} lg={8} key={index}>
          <Card
            hoverable
            cover={
              <NextImage
                src={project.img}
                alt={project.alt}
                width={400}
                height={200}
                style={{ objectFit: "cover", width: "100%", height: 200 }}
              />
            }
            style={{ height: "100%" }}
          >
            <Card.Meta
              title={project.title}
              description={project.text.slice(0, 100) + "..."}
            />
            <div style={{ marginTop: 16, display: "flex", gap: 8 }}>
              <Button
                type="primary"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Projeto
              </Button>
              {project.url && (
                <Button
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Código Fonte
                </Button>
              )}
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
