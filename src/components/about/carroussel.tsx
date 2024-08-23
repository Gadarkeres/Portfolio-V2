import { projects, projectsData } from "@/data/projects";
import { Carousel } from "antd";
import Image from "next/image";
import { useState } from "react";
import ModalCustom from "../ui/Modal";

function Carroussel() {
  const data = projects;

  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<projectsData>();

  const handleImageClick = (project: projectsData) => {
    setSelectedProject(project);
    setOpen(true);
  };

  return (
    <div className="relative cursor-pointer mt-5">
      <Carousel
        className="w-full h-3/4 lg:w-full relative"
        infinite={true}
        autoplay={true}
      >
        {data.map((project) => (
          <div key={project.title}>
            <Image
              src={project.img}
              alt={project.alt}
              onClick={() => handleImageClick(project)}
            />
          </div>
        ))}
      </Carousel>

      {selectedProject && (
        <ModalCustom
          text={selectedProject.text}
          open={open}
          okText={"Abrir"}
          setOpen={setOpen}
          title={selectedProject.title}
          functionCustom={() => window.open(selectedProject.url, "_blank")}
        />
      )}
    </div>
  );
}

export default Carroussel;
