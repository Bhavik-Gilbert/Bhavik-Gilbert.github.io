import Home from '../../pages/Home';
import Projects from '../../pages/Projects';
import Experience from '../../pages/Experience';
import Education from '../../pages/Education';
import Contact from '../../pages/Contact';

const enum pageNames {
    Home = "Home",
    Projects = "Projects",
    Experience = "Experience",
    Education = "Education",
    Settings = "Settings",
    Contact = "Contact"
}

const enum pageLinks {
    Home = "/",
    Projects = "/Projects",
    Experience = "/Experience",
    Education = "/Education",
    Contact = "Contact"
}

export {
    Home,
    Projects,
    Experience,
    Education,
    Contact,
    pageNames,
    pageLinks
}; 