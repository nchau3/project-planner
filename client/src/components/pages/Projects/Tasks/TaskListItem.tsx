import { useState } from "react";

export interface taskListItemProps {
  id: string;
  key: string;
  title: string;
  description: string;
  priority: number;
  status: "pending" | "in progress" | "completed";
  date_created: string;
  date_due: string;
  date_started: string;
  onSubmit: Function;
}

export default function TaskListItem(props: taskListItemProps) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("");

  function onClick(): void {
    setOpen(!open);
  };

  return (
    <article className="task-card">
      <header onClick={onClick}>
        <h3>{props.title}</h3>
        <div className={`status-badge status-badge--status-${props.status === 'in progress' ? 'in-progress' : props.status}`}>{(props.status).toUpperCase()}</div>
      </header>
      {open && 
      <>
        <ul>
          <li>{props.description}</li>
          <li>Date created: {props.date_created}</li>
        </ul>
          <select name="task-status" form="status-form" onChange={e => setStatus(e.target.value)}>
            <option value="" hidden>--Change task status--</option>
            <option value="pending">Pending</option>
            <option value="in progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        <form id="status-form" onSubmit={e => {
          e.preventDefault();
          props.onSubmit(props.id, status);
        }} >
          <button type="submit">Submit</button>
        </form>
      </>
      }
    </article>
  )
}