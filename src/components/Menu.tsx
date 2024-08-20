import Hamburger from "../assets/navbar/hamburger-menu.svg";
import Close from "../assets/navbar/close-menu.svg";
import HamburgerBlue from "../assets/navbar/hamburger-menu-blue.svg";
import CloseBlue from "../assets/navbar/close-square-blue.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

type MenuProps = {
  className: string;
  image: boolean;
  setIsDropdownActive: (active: boolean) => void;
};

export default function Menu({ className, image, setIsDropdownActive }: MenuProps) {
  const [isOpen, setIsOpen] = useState(true);

  function toggleMenu() {
    setIsOpen((prevState) => {
      const newState = !prevState;
      setIsDropdownActive(!newState);  // If newState is false, dropdown is active
      return newState;
    });
  }

  return (
    <div className={className}>
     <div className="menu" onClick={toggleMenu}>
      <img src={image ? (isOpen ? HamburgerBlue : CloseBlue) : (isOpen ? Hamburger : Close)} alt="Menu-Image" />
     </div>
     {!isOpen && (
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
