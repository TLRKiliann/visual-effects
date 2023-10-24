import React from 'react'
import hack from '/images/koala_tree.png';

export default function NavBar() {
  return (
    <div className="container--header">
      <span className='img--span'>
        <img src={hack} width="100%" height="100%" alt="hack the planet" />
      </span>
      <nav>
        <ul>
          <li>
            <a href="#">
              Home
            </a>
          </li>
          <li>
            <a href="#">
              Shop
            </a>
          </li>
          <li>
            <a href="#">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
