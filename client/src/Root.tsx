import { Outlet } from 'react-router-dom';
import TopNav from './components/top-nav/TopNav';
import './styles/root.scss';
import './styles/forms.scss';

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
