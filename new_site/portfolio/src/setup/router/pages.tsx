import React from 'react';
import Home from '../../pages/Home';
import Projects from '../../pages/Projects';
import Experience from '../../pages/Experience';
import Education from '../../pages/Education';
import Settings from '../../pages/Settings';

const enum pageNames {
    Home = "Home",
    Projects = "Projects",
    Experience = "Experience",
    Education = "Education",
    Settings = "Settings"
}

const enum pageLinks {
    Home = "/",
    Projects = "/Projects",
    Experience = "/Experience",
    Education = "/Education",
    Settings = "Settings"
}

export {
    Home,
    Projects,
    Experience,
    Education,
    Settings,
    pageNames,
    pageLinks
}; 