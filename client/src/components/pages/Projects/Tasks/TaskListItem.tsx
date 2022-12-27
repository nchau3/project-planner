import { useState } from "react";
import { Form } from "react-router-dom";

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
}

export default function TaskListItem(props: taskListItemProps) {
  const [open, setOpen] = useState(false);

  function onClick(): void {
    setOpen(!open);
  };

  return (
    <article className="task-card" onClick={onClick}>
      <header>
        <h3>{props.title}</h3>
        <div className={`status-badge status-badge--status-${props.status}`}>{(props.status).toUpperCase()}</div>
      </header>
      {open && 
      <>
        <ul>
          <li>{props.description}</li>
          <li>Date created: {props.date_created}</li>
        </ul>
        <Form method="patch">
          <button>Mark Completed</button>
        </Form>
      </>
      }
    </article>
  )
}