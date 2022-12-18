import { NavLink } from 'react-router-dom';
import '../../styles/component-styles/side-nav/side-nav-item.scss';

interface sideNavProps {
  name: string;
  route: string;
}

export default function SideNavItem(props: sideNavProps) {
  const activeClassNames = "side-nav-link selected";

  return ( 
    <li>
      <NavLink
        to={props.route}
        className={({ isActive }) =>
          isActive ? activeClassNames : "side-nav-link"
        }
      >
          {props.name}
        </ NavLink>
    </li>
  );
}