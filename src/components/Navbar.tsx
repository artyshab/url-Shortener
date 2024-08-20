import '../design/navbar-design/Navbar.scss';
import { Link } from 'react-router-dom';
import Logo from '../assets/navbar/ab-white.svg';
import Button from './Button';
import Menu from './Menu';


export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="logo">
          <img src={Logo} alt="Logo" />
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
        <Menu className='menu-btn'/>
      </div>
    </div>
  );
}
