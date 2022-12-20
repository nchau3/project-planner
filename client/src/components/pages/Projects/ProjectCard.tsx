interface projectCardProps {
  title: string;
  owner: string;
  description: string;
  tasks_total: number;
  tasks_completed: number;
}

export default function ProjectCard(props: projectCardProps) {
  return(
    <li className='project-details'>
      <div className='container'>
        <header>
          <h3>{props.title}</h3>
          <div>Nicholas Chau</div>
        </header>
        <p>{props.description}</p>
        <footer>
          <div>{props.tasks_completed} of {props.tasks_total} completed</div>
          <div>Last Modified: Yesterday</div>
        </footer>
      </div>
    </li>
  )
}