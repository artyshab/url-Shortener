import Hamburger from "../assets/navbar/hamburger-menu.svg";
import Close from "../assets/navbar/close-menu.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

type MenuProps = {
  className: string;
};

export default function Menu({ className }: MenuProps) {
  const [isOpen, setIsOpen] = useState(true);

  function toggleMenu() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <div className={className}>
     <div className="menu" onClick={toggleMenu}>
      <img src={isOpen ? Hamburger : Close} alt="Menu-Image" />
     </div>
     {isOpen ? "" : (
      <div className="dropdown-menu">
      <ul>
        <li><Link to="/pricing">Pricing</Link></li>
        <li><Link to="/features">Features</Link></li>
        <li><Link to="/resources">Resources</Link></li>
      </ul>
      </div>
     )}
    </div>
  );
}
