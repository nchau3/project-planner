import SideNavItem from './SideNavItem';
import '../../styles/component-styles/side-nav/side-nav.scss';

export default function SideNav() {
  return ( 
    <nav>
      <ul>
        <SideNavItem name={'Dashboard'} route={'dashboard'} />
        <SideNavItem name={'Projects'} route={'projects'} />
      </ul>
    </nav>
  );
}