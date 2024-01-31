import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header({ isLoggedIn,title }) {
  return (
    <div>
      <nav>
        <div className="nav__logo"><a href="#">My-Chores</a></div>
        <ul className="nav__links">
          <li className="link"><Link className='tabs' to=''>Home</Link></li>
          <li className="link"><Link className='tabs' to=''>Leaderboard</Link></li>
          <li className="link"><Link className='tabs' to=''>About</Link></li>
          <li className="link"><Link className='tabs' to=''>Contact</Link></li>
          {isLoggedIn ? (
            <li className="link"><Link to="/user-profile"><i className="fa fa-user"></i></Link></li>
          ) : (
            <li className="link"><Link to="/signup" className="nav__btn">{title}</Link></li>
          )}
        </ul>
      </nav>
    </div>
  );
}
