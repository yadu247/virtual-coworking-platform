import Logo from '../Logo';
import { NavLink } from 'react-router-dom';
import Button from '../Button';

import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Logo />
        <div className="navbar-items">
          <NavLink className="navbar-item">Who It's For</NavLink>
          <NavLink className="navbar-item">About</NavLink>
          <NavLink className="navbar-item">FAQ</NavLink>
          <NavLink className="navbar-item">Blog</NavLink>
          <NavLink className="navbar-item">
            <i class="fa-solid fa-user"></i>
          </NavLink>
        </div>
        <div className="navbar-button">
          <Button text="Start Your Free Trial" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
