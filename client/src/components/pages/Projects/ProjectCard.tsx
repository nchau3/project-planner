import { Link } from "react-router-dom";

interface projectCardProps {
  key: number;
  id: number;
  title: string;
  owner: string;
  description: string;
  tasks_total: number;
  tasks_completed: number;
}

export default function ProjectCard(props: projectCardProps) {
  return(
    <li className='project-details'>
      <Link to={`${props.id}`} className="router-link">
        <div className='container'>
          <header>
            <h3>{props.title}</h3>
            <div>Nicholas Chau</div>
          </header>
          <p>{props.description}</p>
          <footer>
            <div>{props.tasks_completed} of {props.tasks_total} tasks completed</div>
            <div>Last Modified: Yesterday</div>
          </footer>
        </div>
      </Link>
    </li>
  )
}