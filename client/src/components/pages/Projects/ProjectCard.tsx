interface projectCardProps {
  title: string;
  description: string;
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
          <div>10 of 15 tasks completed</div>
          <div>Last Modified: Yesterday</div>
        </footer>
      </div>
    </li>
  )
}