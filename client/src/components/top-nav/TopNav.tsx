import TopNavItem from './TopNavItem';
import '../../styles/component-styles/top-nav/top-nav.scss';

export default function TopNav() {

  return(
    <nav className='top-nav'>
      <ul>
        <TopNavItem name='Dashboard' route='dashboard' />
        <TopNavItem name='Projects' route='projects' />
      </ul>
    </nav>
  )
}