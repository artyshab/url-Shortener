import '../design/navbar-design/Navbar.scss';
import { Link } from 'react-router-dom';
import LogoWhite from '../assets/navbar/logo-protools-white.svg';
import LogoBlue from '../assets/navbar/logo-protools-darkblue.svg';
import Button from './Button';
import Menu from './Menu';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [fixed, setFixed] = useState(false);
  const [image, setImage] = useState(false);
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;

    function handleScroll() {
      const currentScroll = window.scrollY;

      if (currentScroll >= 100) {
        setFixed(true);
        setImage(true);
      } else {
        setFixed(false);
        setImage(false);
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`navbar-container ${fixed || isDropdownActive ? 'fixed' : ''}`}>
      <div className="navbar-wrapper">
        <div className="logo">
          <img src={image || isDropdownActive ? LogoBlue : LogoWhite} alt="Logo" />
          <ul>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/resources">Resources</Link></li>
          </ul>
        </div>
        <div className="buttons">
            <Button title='Login' name='btn1'/>
            <Button title='Signup' name='btn'/>
        </div>
        <Menu className='menu-btn' image={image || isDropdownActive} setIsDropdownActive={setIsDropdownActive} />
      </div>
    </div>
  );
}
