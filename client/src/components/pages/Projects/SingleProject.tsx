import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { getProject } from "../../../util/api";
import TaskList from "./Tasks/TaskList";

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
  tasks: any[];
}

export default function SingleProject() {
  const project = useLoaderData() as singleProject;

  const ongoingTasks = project.tasks.filter(task => task.status !== "completed");
  const completedTasks = project.tasks.filter(task => task.status === "completed");
  
  return (
    <div>
      <div className="page-header page-header-details">
        <h1>{project.title}</h1>
        <h3>{project.description}</h3>
        <ul>
          <li>{project.tasks_completed} of {project.tasks_total} tasks completed</li>
          <li>Date Created: {project.date_created}</li>
        </ul>
      </div>
      <h3>Ongoing Tasks</h3>
      <TaskList tasks={ongoingTasks} />
      <h3>Completed Tasks</h3>
      <TaskList tasks={completedTasks} />
    </div>
  )
}