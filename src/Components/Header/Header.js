import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header({ isLoggedIn }) {
  return (
    <div>
      <nav>
        <div className="nav__logo"><a href="#">Learning</a></div>
        <ul className="nav__links">
          <li className="link"><a href="#">Home</a></li>
          <li className="link"><a href="#">About Us</a></li>
          <li className="link"><a href="#">Services</a></li>
          <li className="link"><a href="#">Courses</a></li>
          <li className="link"><a href="#">Blog</a></li>
          {isLoggedIn ? (
            <li className="link"><Link to="/user-profile"><i className="fa fa-user"></i></Link></li>
          ) : (
            <li className="link"><Link to="#" className="nav__btn">Register</Link></li>
          )}
        </ul>
      </nav>
    </div>
  );
}
