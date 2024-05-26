import React, { useEffect, useState } from 'react';
import navlogo from '../Assest/logo.png';
import '../navbar/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const openNewPage = () => {
    window.open('/login', '_blank');
  };

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // Scroll down
      setIsScrollingUp(false);
    } else {
      // Scroll up
      setIsScrollingUp(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${isScrollingUp ? 'show' : 'hide'}`}>
      <div className='navlogo'>
        <img src={navlogo} alt="Logo" className='navLogoImg' />
      </div>

      <ul className='nav-menu'>
        <li className='nav-item'>
          Services
          <hr className='nav-hr' />
        </li>
        <li className='nav-item'>
          Info
          <hr className='nav-hr' />
        </li>
        <li className='nav-item'>
          About Us
          <hr className='nav-hr' />
        </li>
        <li className='nav-item'>
          Postcards
          <hr className='nav-hr' />
        </li>
      </ul>
      <Link to='/login' > <button id='login-signup' onClick={openNewPage}>Login</button> </Link>

      <button className='download'>Download</button>
    </nav>
  );
}

export default Navbar;
