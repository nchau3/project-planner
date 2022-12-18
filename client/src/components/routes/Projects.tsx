import SideNav from '../side-nav/SideNav';

export default function Projects() {
  const navItems = [
    {name: 'Active', route: 'active'},
    {name: 'Completed', route: 'completed'}
  ]

  return (
    <>
      <SideNav items={navItems}/>
      <div className="page-content">
        <h1>Projects</h1>
      </div>
    </>
  )
}