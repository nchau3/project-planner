import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { getProject } from "../../../util/api";

export function loader({ params }: LoaderFunctionArgs) {
  const id = (params.project_id!)
  return getProject(id);
}

export default function SingleProject() {
  const project = useLoaderData() as any;

  return (
    <div>
      <h1>{project.title}</h1>
      <h3>{project.description}</h3>
      <p>{project.tasks_completed} of {project.tasks_total} tasks completed</p>
      <p>Date Created: {project.date_created}</p>
    </div>
  )
}