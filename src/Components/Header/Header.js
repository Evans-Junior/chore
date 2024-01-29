import React from 'react'

export default function Header() {
  return (
    <div>
    <nav>
      <div class="nav__logo"><a href="#">Learning</a></div>
      <ul class="nav__links">
        <li class="link"><a href="#">Home</a></li>
        <li class="link"><a href="#">About Us</a></li>
        <li class="link"><a href="#">Services</a></li>
        <li class="link"><a href="#">Courses</a></li>
        <li class="link"><a href="#">Blog</a></li>
        <li class="link"><a href="#" class="nav__btn">Register</a></li>
      </ul>
    </nav>
    </div>
  )
}
