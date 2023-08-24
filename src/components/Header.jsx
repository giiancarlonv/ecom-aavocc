import React from 'react';
import logo from '../assets/logos/logo.webp';

export const Header = () => {
  return (
    <header>
      <div className='header-logo'>
        <img src={logo} alt="aavocc logo" />
        <div className='my-account'>
          <span>My Account</span>
          <div>
            <span>0</span> Cart
          </div>
          <input type="text" /><button>Q</button>
        </div>
      </div>

      <nav>
        <ul>
          <li>Latest</li>
          <li>Popular</li>
          <li>man</li>
          <li>woman</li>
          <li>kids</li>
        </ul>
      </nav>
    </header>
  )
}
