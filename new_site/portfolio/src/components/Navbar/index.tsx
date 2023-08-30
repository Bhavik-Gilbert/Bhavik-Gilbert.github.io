import React from 'react';
import { NavLink } from "react-router-dom";

import './navbar.css';
import * as NavbarComponents from './components/textChanger';
import { pageNames, pageLinks } from '../../setup/router/pages';

const initialText = new Map<string, string>([
    [pageNames.Home, "&#127968;"],
    [pageNames.Projects, "&#128187;"],
    [pageNames.Experience, "&#128188;"],
    [pageNames.Education, "&#128218;"],
    [pageNames.Contact, "&#128221;"],
    [pageNames.Settings, "&#9881;"]
]);

function Navbar() {
  return (
    <div className="Navbar">
      <div className="navLinks d-flex justify-content-center">
            <NavLink to={pageLinks.Home} id={pageNames.Home} onMouseOver={(() => NavbarComponents.changeText(pageNames.Home))} onMouseOut={ ((e) => NavbarComponents.revertText(pageNames.Home, initialText.get(pageNames.Home)!))}>&#127968;</NavLink>
            <NavLink to={pageLinks.Projects} id={pageNames.Projects} onMouseOver={(() => NavbarComponents.changeText(pageNames.Projects))} onMouseOut={ ((e) => NavbarComponents.revertText(pageNames.Projects, initialText.get(pageNames.Projects)!))}>&#128187;</NavLink>
            <NavLink to={pageLinks.Experience} id={pageNames.Experience} onMouseOver={(() => NavbarComponents.changeText(pageNames.Experience))} onMouseOut={ ((e) => NavbarComponents.revertText(pageNames.Experience, initialText.get(pageNames.Experience)!))}>&#128188;</NavLink>
            <NavLink to={pageLinks.Education} id={pageNames.Education} onMouseOver={(() => NavbarComponents.changeText(pageNames.Education))} onMouseOut={ ((e) => NavbarComponents.revertText(pageNames.Education, initialText.get(pageNames.Education)!))}>&#128218;</NavLink>
            <NavLink to={pageLinks.Contact} id={pageNames.Contact} onMouseOver={(() => NavbarComponents.changeText(pageNames.Contact))} onMouseOut={ ((e) => NavbarComponents.revertText(pageNames.Contact, initialText.get(pageNames.Contact)!))}>&#128221;</NavLink>
            <NavLink to={pageLinks.Settings} id={pageNames.Settings} onMouseOver={(() => NavbarComponents.changeText(pageNames.Settings))} onMouseOut={ ((e) => NavbarComponents.revertText(pageNames.Settings, initialText.get(pageNames.Settings)!))}>&#9881;</NavLink>
      </div>
    </div>
  );
}

export default Navbar;