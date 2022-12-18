import { Outlet } from 'react-router-dom';
import SideNav from './components/side-nav/SideNav';
import './styles/root.scss';

export default function Root() {
  return (
    <main>
      <SideNav />
      <div id="page-container">
        <Outlet />
      </div>
    </main>
  );
}
