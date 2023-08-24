import React, { useState } from 'react';
import logo from '../assets/logos/logo.webp';
import cart from '../assets/icons/cart-shopping-solid.svg';
import search from '../assets/icons/magnifying-glass-solid.svg';

export const Header = () => {
  const screen = window.innerWidth;
  const [isClicked, setIsClicked] = useState(false);
  const seachInput = () =>{
    setIsClicked(e => !e);
  }
  return (
    <header>
      <div className='header-logo'>
        <img src={logo} alt="aavocc logo" />
        <div>
          
          <div className='my-account'>
            <div className={`search-bar ${isClicked || screen >= 500 ? '' : 'not'}`}>
              <input type="text" placeholder='Search...' />
            </div>
            <button onClick={seachInput}>  
              <img src={search} alt="search" />
            </button>
            <div className='cart'>
              <span>0</span>
              <button>
                <img src={cart} alt="cart" />
              </button>
            </div>
          </div>
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
