import { useLoaderData } from "react-router-dom";
import { getProjects } from "../../../util/api";
import ProjectCard from "./ProjectCard";
import { Project } from "../../../../../server/src/models/project";

export function loader(){
  return getProjects();
}

export default function ProjectsRoot() {
  const projects = useLoaderData() as Project[];

  const projectsList = projects.map(project => {
    return (
      <ProjectCard
        title={project.title}
        description={project.description}
      />
    )
  })

  return (
    <>
      <h1>Projects</h1>
      <ul className="project-list">
        {projectsList}
      </ul>
    </>
  )
}