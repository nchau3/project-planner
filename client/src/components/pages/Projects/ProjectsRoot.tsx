import ProjectCard from "./ProjectCard";

export default function ProjectsRoot() {
  return (
    <>
      <h1>Projects</h1>
      <ul className="project-list">
        <ProjectCard />
      </ul>
    </>
  )
}