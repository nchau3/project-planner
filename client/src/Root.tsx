import { Outlet } from 'react-router-dom';
import TopNav from './components/top-nav/TopNav';
import './styles/root.scss';

export default function Root() {
  return (
    <main>
      <TopNav />
      <section id="page-container">
        <Outlet />
      </section>
    </main>
  );
}
