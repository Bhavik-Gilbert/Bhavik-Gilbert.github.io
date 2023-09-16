import React from 'react';
import { NavLink } from "react-router-dom";

import './navbar.css';
import * as NavbarComponents from './components/textChanger';
import { pageNames, pageLinks } from '../../setup/router/pages';

function Navbar() {
  return (
    <div className="physicalNavbar">
      <div className="Navbar">
        <div className="navLinks d-flex justify-content-center">
              <NavLink to={pageLinks.Home} id={pageNames.Home} onMouseOver={(() => NavbarComponents.changeText(pageNames.Home))} onMouseOut={ ((e) => NavbarComponents.revertText(pageNames.Home, "&#127968;"))}>&#127968;</NavLink>
              <NavLink to={pageLinks.Projects} id={pageNames.Projects} onMouseOver={(() => NavbarComponents.changeText(pageNames.Projects))} onMouseOut={ ((e) => NavbarComponents.revertText(pageNames.Projects, "&#128187;"))}>&#128187;</NavLink>
              <NavLink to={pageLinks.Experience} id={pageNames.Experience} onMouseOver={(() => NavbarComponents.changeText(pageNames.Experience))} onMouseOut={ ((e) => NavbarComponents.revertText(pageNames.Experience, "&#128188;"))}>&#128188;</NavLink>
              <NavLink to={pageLinks.Education} id={pageNames.Education} onMouseOver={(() => NavbarComponents.changeText(pageNames.Education))} onMouseOut={ ((e) => NavbarComponents.revertText(pageNames.Education, "&#128218;"))}>&#128218;</NavLink>
              <NavLink to={pageLinks.Contact} id={pageNames.Contact} onMouseOver={(() => NavbarComponents.changeText(pageNames.Contact))} onMouseOut={ ((e) => NavbarComponents.revertText(pageNames.Contact, "&#128221;"))}>&#128221;</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;