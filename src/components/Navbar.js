import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  const onMouseEnter = () => {
    if (window.innerWidth > 960) {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth > 960) {
      setDropdown(false);
    }
  };


  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            FoodHub
            <i class='fas fa-utensils' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>

            <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                Products <i className='fas fa-caret-down' />
              </Link>
              {dropdown && (
                <ul className='dropdown-menu'>
                  {/* Add your drop-down menu items here */}
                  <li>
                    <Link to='/Category1' className='dropdown-link' onClick={closeMobileMenu}>
                      Category 1
                    </Link>
                  </li>
                  <li>
                    <Link to='/Category2' className='dropdown-link' onClick={closeMobileMenu}>
                      Category 2
                    </Link>
                  </li>
                  <li>
                    <Link to='/Category3' className='dropdown-link' onClick={closeMobileMenu}>
                      Category 3
                    </Link>
                  </li>
                  <li>
                    <Link to='/Category4' className='dropdown-link' onClick={closeMobileMenu}>
                      Category 4
                    </Link>
                  </li>

                </ul>
              )}
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
