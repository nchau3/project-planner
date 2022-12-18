import { NavLink } from 'react-router-dom';
import '../../styles/component-styles/top-nav/top-nav-item.scss';

interface topNavProps {
  name: string;
  route: string;
}

export default function TopNavItem(props: topNavProps) {
  return ( 
    <li>
      <NavLink
        to={props.route}
        className='top-nav-link'
        >
        {props.name}
      </ NavLink>
  </li>
  );
}