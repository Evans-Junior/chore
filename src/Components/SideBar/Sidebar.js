import React from 'react'
import './sidebar.css'
import {Link} from 'react-router-dom'
export default function 

() {
  return (
    <div>
    <section id="sidebar">
    <a href="#" className="brand">
        <i className='bx bxs-smile'></i>
        <span className="text">My-Chores</span>
    </a>
    <ul className="side-menu top">
        <li className="active">
            <a className='tabs' href="#">
                <i className='bx bxs-dashboard' ></i>
                <span className="text">Dashboard</span>
            </a>
        </li>
        <li>
            <a className='tabs' href="#">
                <i className='bx bxs-doughnut-chart' ></i>
                <span className="text">Analytics</span>
            </a>
        </li>
    </ul>
    <ul class="side-menu">
        <li>
            <a className='tabs' href="#">
                <i className='bx bxs-cog' ></i>
                <span className="text">Settings</span>
            </a>
        </li>
        <li>
            <a href="#" className="logout">
                <i className='bx bxs-log-out-circle' ></i>
                <Link to='/login' className="text">Logout</Link>
            </a>
        </li>
    </ul>
</section>
    </div>
  )
}
