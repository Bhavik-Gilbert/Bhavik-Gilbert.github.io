import Home from '../../pages/Home';
import Projects from '../../pages/Projects';
import Experience from '../../pages/Experience';
import Education from '../../pages/Education';
import Contact from '../../pages/Contact';
import Unknown from '../../pages/Unknown';

const enum pageNames {
    Home = "Home",
    Projects = "Projects",
    Experience = "Experience",
    Education = "Education",
    Settings = "Settings",
    Contact = "Contact",
    Unknown = "Unknown"
}

const enum pageLinks {
    Home = "/",
    Projects = "/Projects",
    Experience = "/Experience",
    Education = "/Education",
    Contact = "/Contact",
    Unknown = "/404"
}

export {
    Home,
    Projects,
    Experience,
    Education,
    Contact,
    Unknown,
    pageNames,
    pageLinks
}; 