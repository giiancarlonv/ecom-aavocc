import React, { useState } from 'react';
import logo from '../assets/logos/logo.webp';
import cart from '../assets/icons/cart-shopping-solid.svg';
import search from '../assets/icons/magnifying-glass-solid.svg';
import { Link, Outlet, useLocation, } from 'react-router-dom'

export const Header = (props) => {
  const screen = window.innerWidth;
  const [isClicked, setIsClicked] = useState(false);
  const seachInput = () =>{
    setIsClicked(e => !e);
  }
  
  const isActive = useLocation();
  return (
    <>
    <header>
      <div className='header-logo'>
        <Link to='/ecom-aavocc/'><img src={logo} alt="aavocc logo" />
        </Link>
        
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
        <li className={isActive.pathname === '/ecom-aavocc/' ? 'active' : ''} ><Link to='/ecom-aavocc/' >Popular</Link></li>
        <li className={isActive.pathname === '/ecom-aavocc/mens' ? 'active' : ''}><Link to='ecom-aavocc/mens'>men</Link></li>
        <li className={isActive.pathname === '/ecom-aavocc/womens' ? 'active' : ''}><Link to='ecom-aavocc/womens'>women</Link></li>
        <li className={isActive.pathname === '/ecom-aavocc/others' ? 'active' : ''}><Link to='ecom-aavocc/others '>others</Link></li>
        </ul>
      </nav>
    </header>
    <Outlet />
    </>

  )
}