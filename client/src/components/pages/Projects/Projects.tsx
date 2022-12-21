import { Outlet, RouteObject } from 'react-router-dom';

//components
import SideNav from '../../side-nav/SideNav';

//styles
import '../../../styles/component-styles/projects.scss';

//routes
import ProjectsRoot, { loader as projectsLoader } from './ProjectsRoot';
import NewProject, { action as newProjectAction } from './NewProject';
import SingleProject, { loader as singleProjectLoader } from './SingleProject';

export const projectRoutes: RouteObject = {
  path: "projects",
  element: <Projects />,
  children: [
    {
      path: "/projects",
      element: <ProjectsRoot />,
      loader: projectsLoader
    },
    {
      path: "new",
      element: <NewProject />,
      action: newProjectAction
    },
    {
      path: "/projects/:project_id",
      element: <SingleProject />,
      loader: singleProjectLoader
    }
  ]
}

export default function Projects() {
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