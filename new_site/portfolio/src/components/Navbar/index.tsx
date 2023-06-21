import React from 'react';
import { NavLink } from "react-router-dom";
import useLocalStorage from 'use-local-storage'

import './navbar.css';
import * as NavbarComponents from './components';
import { pageNames, pageLinks } from '../../setup/router/pages';

let initialText = new Map<string, string>([
    [pageNames.Home, "&#127968;"],
    [pageNames.Projects, "&#128188;"],
    [pageNames.Experience, "&#128218;"],
    [pageNames.Education, "&#128221;"]
]);

function Navbar() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const toggleTheme = () => {
    const newTheme = theme == 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <div className="Navbar">
      <div className="navLinks d-flex justify-content-center" >
            <NavLink to={pageLinks.Home} id={pageNames.Home} onMouseOver={(() => NavbarComponents.changeText(pageNames.Home))} onMouseOut={ ((e) => NavbarComponents.revertText(pageNames.Home, initialText.get(pageNames.Home)!))}>&#127968;</NavLink>
            <NavLink to={pageLinks.Projects} id={pageNames.Projects} onMouseOver={(() => NavbarComponents.changeText(pageNames.Projects))} onMouseOut={ ((e) => NavbarComponents.revertText(pageNames.Projects, initialText.get(pageNames.Projects)!))}>&#128188;</NavLink>
            <NavLink to={pageLinks.Experience} id={pageNames.Experience} onMouseOver={(() => NavbarComponents.changeText(pageNames.Experience))} onMouseOut={ ((e) => NavbarComponents.revertText(pageNames.Experience, initialText.get(pageNames.Experience)!))}>&#128218;</NavLink>
            <NavLink to={pageLinks.Education} id={pageNames.Education} onMouseOver={(() => NavbarComponents.changeText(pageNames.Education))} onMouseOut={ ((e) => NavbarComponents.revertText(pageNames.Education, initialText.get(pageNames.Education)!))}>&#128221;</NavLink>
      </div>

      <div className="controls d-flex justify-content-end">
          <button onClick={toggleTheme}>
            hi
          </button>
      </div>
    </div>
  );
}

export default Navbar;