import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';
import './styles/index.scss';

//main
import Root from './Root';
import ErrorPage from './components/ErrorPage';

//pages
import Dashboard from './components/pages/Dashboard/Dashboard';
import { projectRoutes } from './components/pages/Projects/Projects';

//routes
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      projectRoutes,
      {
        path: "/dashboard",
        element: <Dashboard />
      }
    ]
  }
]

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);