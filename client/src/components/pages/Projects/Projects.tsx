import { Outlet, RouteObject } from 'react-router-dom';

//components
import SideNav from '../../side-nav/SideNav';

//routes
import ProjectsRoot from './ProjectsRoot';
import NewProject from './NewProject';

//styles
import '../../../styles/component-styles/projects.scss';

export const projectRoutes: RouteObject = {
  path: "projects",
  element: <Projects />,
  children: [
    {
      path: "/projects",
      element: <ProjectsRoot />
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