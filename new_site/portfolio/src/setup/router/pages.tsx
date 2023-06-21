import React from 'react';
import Home from '../../pages/Home';
import Projects from '../../pages/Projects';
import Experience from '../../pages/Experience';
import Education from '../../pages/Education';

enum pageNames {
    Home = "Home",
    Projects = "Projects",
    Experience = "Experience",
    Education = "Education"
}

enum pageLinks {
    Home = "/",
    Projects = "/Projects",
    Experience = "/Experience",
    Education = "/Education"
}

export {
    Home,
    Projects,
    Experience,
    Education,
    pageNames,
    pageLinks
}; 