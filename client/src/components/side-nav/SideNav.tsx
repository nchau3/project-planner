import SideNavItem from './SideNavItem';
import '../../styles/component-styles/side-nav/side-nav.scss';

type sideNavItems = {
  name: string,
  route: string
}

interface sideNavProps {
  items: sideNavItems[];
}

export default function SideNav(props: sideNavProps) {
  const navList = props.items.map(item => {
    return(
      <SideNavItem key={item.name} name={item.name} route={item.route} />
    )
  })

  return ( 
    <nav className='side-nav'>
      <ul>
        {navList}
      </ul>
    </nav>
  );
}