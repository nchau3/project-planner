import ProjectDetails from "./ProjectDetails";

export default function ProjectsRoot() {
  return (
    <>
      <h1>My Projects</h1>
      <ul className="project-list">
        <ProjectDetails />
      </ul>
    </>
  )
}