import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import './styles/root.scss';

export default function Root() {
  return (
    <main>
      <NavBar />
      <div id="page-container">
        <Outlet />
      </div>
    </main>
  );
}
