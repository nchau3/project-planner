import { Outlet } from 'react-router-dom';
import SideNav from '../../side-nav/SideNav';

//routes
import ProjectsMain from './ProjectsMain';
import NewProject from './NewProject';

export const projectRoutes = {
  path: "projects",
  element: <Projects />,
  children: [
    {
      path: "/projects",
      element: <ProjectsMain />
    },
    {
      path: "new",
      element: <NewProject />
    }
  ]
}

export function Projects() {
  const navItems = [
    {name: 'New Project', route:'new'},
    {name: 'Active', route: 'active'},
    {name: 'Completed', route: 'completed'}
  ];

  return (
    <>
      <SideNav items={navItems}/>
      <div className="page-content">
        <Outlet />
      </div>
    </>
  )
}