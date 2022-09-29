import React, { useState } from 'react';
// import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import RippledLogo2x from "../../src/pictureImport/RippledLogo2x.png"

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          {/* EPIC */}
          <img src={RippledLogo2x} alt="" sx={{width:"50px"}}/>
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
              to='/about'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              About
            </Link>
          </li>

          <li className='nav-item'>
            <Link
              to='/curriculum'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Curriculum
            </Link>
          </li>

          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/projects'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Projects <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>

          
          
          <li className='nav-item'>
            <Link
              to='/faqs'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              FAQs
            </Link>
          </li>
         
          {/* <li>
            <Link
              to='/faqs'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              FAQs
            </Link>
          </li> */}
        </ul>
        {/* <Button /> */}
      </nav>
    </>
  );
}

export default Navbar;