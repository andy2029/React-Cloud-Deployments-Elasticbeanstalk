import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import './styles.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="signup">Signup</Link></li>
          <li><Link to="signin">Signin</Link></li>
          <li><Link to="profile">Profile</Link></li>
          <li><Link to="specials">Specials</Link></li>
          <li><Link to="plan">Meal Planner</Link></li>

        </ul>
      </nav>
    </header>
  );
}

export default Header;
