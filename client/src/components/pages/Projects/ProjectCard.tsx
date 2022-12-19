export default function ProjectCard() {
  return(
    <li className='project-details'>
      <div className='container'>
        <header>
          <h3>Project Title</h3>
          <div>Nicholas Chau</div>
        </header>
        <p>A short description of the project.</p>
        <footer>
          <div>10 of 15 tasks completed</div>
          <div>Last Modified: Yesterday</div>
        </footer>
      </div>
    </li>
  )
}