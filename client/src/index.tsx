import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/index.scss';

//main
import Root from './Root';
import ErrorPage from './components/ErrorPage';

//pages
import Projects from './components/routes/Projects';
import Dashboard from './components/routes/Dashboard';

//routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "projects",
        element: <Projects />
      },
      {
        path: "dashboard",
        element: <Dashboard />
      }
    ]
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);