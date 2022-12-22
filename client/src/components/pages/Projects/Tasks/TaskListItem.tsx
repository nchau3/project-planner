export interface taskListItemProps {
  title: string;
  description: string;
  priority: number;
  status: "pending" | "in progress" | "completed";
  date_created: string;
  date_due: string;
  date_started: string;
}

export default function TaskListItem(props: taskListItemProps) {
  return (
    <article className="task-card">
      <h3>{props.title}</h3>
      <ul>
        <li>{props.description}</li>
        <li>{props.status}</li>
        <li>Date created: {props.date_created}</li>
      </ul>
    </article>
  )
}