import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header({ isLoggedIn,action }) {
  return (
    <div>
      <nav>
        <div className="nav__logo"><a href="#">My-Chores</a></div>
        <ul className="nav__links">
          <li className="link"><Link className='tabs' to=''>Home</Link></li>
          <li className="link"><Link className='tabs' to='/leadersboard'>Leaderboard</Link></li>
          <li className="link"><Link className='tabs' to='/about'>About</Link></li>
          <li className="link"><Link className='tabs' to='/contact'>Contact</Link></li>
          <li className="link"><Link to="/user-profile"><i className="fa fa-user"></i></Link></li>

          {isLoggedIn ? (
            <li className="link"><Link to="#" className="nav__btn">{action}</Link></li>

          ) : (
            <li className="link"><Link to="/login" className="nav__btn">Log Out</Link></li>

          )}
        </ul>
      </nav>
    </div>
  );
}
