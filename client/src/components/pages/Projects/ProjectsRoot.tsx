import { useLoaderData } from "react-router-dom";
import { getProjects } from "../../../util/api";
import ProjectCard from "./ProjectCard";

export function loader(){
  return getProjects();
}

export default function ProjectsRoot() {
  const projects = useLoaderData() as any[];
  
  const projectsList = projects.map(project => {
    return (
      <ProjectCard
        key={project.id}
        id={project.id}
        title={project.title}
        owner={`${project.first_name} ${project.last_name}`}
        description={project.description}
        tasks_total={project.tasks_total}
        tasks_completed={project.tasks_completed}
      />
    )
  })

  return (
    <>
    <div className="page-header">
      <h1>Projects</h1>
    </div>
      <ul className="project-list">
        {projectsList}
      </ul>
    </>
  )
}