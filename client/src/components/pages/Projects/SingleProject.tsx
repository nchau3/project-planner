import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { getProject } from "../../../util/api";
import TaskList from "./Tasks/TaskList";
import TaskCard from "./Tasks/TaskListItem";

export function loader({ params }: LoaderFunctionArgs) {
  const id = (params.project_id!)
  return getProject(id);
}

interface singleProject {
  title: string;
  description: string;
  tasks_completed: number;
  tasks_total: number;
  date_created: string;
  tasks: [];
}

export default function SingleProject() {
  const project = useLoaderData() as singleProject;
  
  return (
    <div>
      <h1>{project.title}</h1>
      <h3>{project.description}</h3>
      <ul>
        <li>{project.tasks_completed} of {project.tasks_total} tasks completed</li>
        <li>Date Created: {project.date_created}</li>
      </ul>
      <TaskList tasks={project.tasks} />
    </div>
  )
}