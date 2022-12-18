import SideNav from '../../side-nav/SideNav';

export default function Dashboard() {
  const navItems = [
    {name: 'My Profile', route: 'profile'},
    {name: 'Settings', route: 'settings'}
  ]

  return (
    <>
      <SideNav items={navItems}/>
      <div className="page-content">
        <h1>Dashboard</h1>
      </div>
    </>
  )
}