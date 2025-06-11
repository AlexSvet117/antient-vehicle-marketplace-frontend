import { NavLink } from 'react-router';
import './NavButton.css';

function NavButton({ to, text }) {
  return (
    <>
      <NavLink
        // className='text-decoration-none btn btn-outline-dark btn-sm m-2'
        to={to}
        className={({ isActive }) => `${isActive ? 'active' : 'non-active'}`}
      >
        {text}
      </NavLink>
    </>
  );
}

export default NavButton;
