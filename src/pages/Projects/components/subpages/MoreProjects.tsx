import React from 'react';

import MoreProjectsInfo from './infoOverlays/MoreProjectsInfo';
import  { openElements } from '../../../../setup/components/displayControls';
import { toggleClass } from '../../../../setup/components/changeClass';
import { toggleCapitalise } from '../../../../setup/components/textEffects';

function MoreProjects() {
  const title = "More Projects".split("");
  
  return (
    <>
        <div className="textBox cardScrollBox">
            <div className="marginTop marginBottom">
                {title.map((titleChar: string, titleCharIndex: number) => (
                    <div className="h3 byLetter marginBottom" id={"moreProjectsTitle" + titleCharIndex + titleChar} key={"moreProjectsTitle" + titleCharIndex + titleChar} 
                    onClick={(() => {
                        toggleClass("moreProjectsTitle" + titleCharIndex + titleChar, "h3 byLetter marginBottom", "h3Hold byLetter marginBottom");
                        toggleCapitalise("moreProjectsTitle" + titleCharIndex + titleChar);
                    })}>
                        {titleChar}
                    </div>
                ))}
            </div>

            <div className="scrollBox">
                <div className="card long m-3">
                    <img className="skeleton header" src="./images/projects/Penguin Empire/PE1.png" alt="Penguin Empire" loading="lazy"/>
                    <h5>Penguin Empire</h5>
                    <h6>Social Media Application</h6>
                    <br/>
                    <h6>Django Project</h6>
                    <br/>
                    <img className="skeleton fileImage small" src="./images/techLogos/python.png" alt="Python" loading="lazy"/>
                    <img className="skeleton fileImage small" src="./images/techLogos/javascript.png" alt="Javascript" loading="lazy"/>
                    <img className="skeleton fileImage small" src="./images/techLogos/CSS.png" alt="CSS" loading="lazy"/>
                    <img className="skeleton fileImage small" src="./images/techLogos/html.png" alt="Html" loading="lazy"/>

                    <div className="file button marginTop" onClick={(e) => openElements(["moreProjectsOverlay", "penguinEmpire"])}>
                        More Info
                    </div>
                </div>

                <div className="card long m-3">
                    <img className="skeleton header" src="./images/projects/Minigame Suite/MGS1.png" alt="Minigame Suite" loading="lazy"/>
                    <h5>Minigame Suite</h5>
                    <br/>
                    <h6>Java GUI</h6>
                    {/* <h6>JavaFX & AudioSystem</h6> */}
                    <br/>
                    <img className="skeleton fileImage small" src="./images/techLogos/java.png" alt="Java" loading="lazy"/>
                    <img className="skeleton fileImage small" src="./images/techLogos/CSS.png" alt="CSS" loading="lazy"/>

                    <div className="file button marginTop" onClick={(e) => openElements(["moreProjectsOverlay", "minigameSuite"])}>
                        More Info
                    </div>
                </div>
                
                <div className="card long m-3">
                    <img className="skeleton header" src="./images/projects/Ticketing System/TS1.png" alt="Ticketing System" loading="lazy"/>
                    <h5>Ticketing System</h5>
                    <br/>
                    <h6>Flask Project</h6>
                    <br/>
                    <img className="skeleton fileImage small" src="./images/techLogos/python.png" alt="Python" loading="lazy"/>
                    <img className="skeleton fileImage small" src="./images/techLogos/SQL.png" alt="SQL" loading="lazy"/>
                    <img className="skeleton fileImage small" src="./images/techLogos/javascript.png" alt="Javascript" loading="lazy"/>
                    <img className="skeleton fileImage small" src="./images/techLogos/CSS.png" alt="CSS" loading="lazy"/>
                    <img className="skeleton fileImage small" src="./images/techLogos/html.png" alt="Html" loading="lazy"/>

                    <div className="file button marginTop" onClick={(e) => openElements(["moreProjectsOverlay", "ticketingSystem"])}>
                        More Info
                    </div>
                </div>

                <div className="card long m-3">
                    <img className="skeleton header" src="./images/projects/Music School Management System/MSMS1.png" alt="Music School Management System" loading="lazy"/>
                    <h5>Music School Management System</h5>
                    <br/>
                    <h6>Django Project</h6>
                    <h6>4 Collaborators</h6>
                    <br/>
                    <img className="skeleton fileImage small" src="./images/techLogos/python.png" alt="Python" loading="lazy"/>
                    <img className="skeleton fileImage small" src="./images/techLogos/javascript.png" alt="Javascript" loading="lazy"/>
                    <img className="skeleton fileImage small" src="./images/techLogos/CSS.png" alt="CSS" loading="lazy"/>
                    <img className="skeleton fileImage small" src="./images/techLogos/html.png" alt="Html" loading="lazy"/>

                    <div className="file button marginTop" onClick={(e) => openElements(["moreProjectsOverlay", "musicSchoolManagementSystem"])}>
                        More Info
                    </div>
                </div>

                <div className="card long m-3">
                    <img className="skeleton header" src="./images/projects/Typing Speed Test/TST1.png" alt="Typing Speed Test" loading="lazy"/>
                    <h5>Typing Speed Test</h5>
                    <br/>
                    <h6>React Project</h6>
                    <br/>
                    <img className="skeleton fileImage small" src="./images/techLogos/javascript.png" alt="Javascript" loading="lazy"/>
                    <img className="skeleton fileImage small" src="./images/techLogos/CSS.png" alt="CSS" loading="lazy"/>
                    <img className="skeleton fileImage small" src="./images/techLogos/html.png" alt="Html" loading="lazy"/>

                    <div className="file button marginTop" onClick={(e) => openElements(["moreProjectsOverlay", "typingSpeedTest"])}>
                        More Info
                    </div>
                </div>

                <div className="card long m-3">
                    <img className="skeleton header" src="./images/projects/Property Viewer/PV1.png" alt="Property Viewer" loading="lazy"/>
                    <h5>Property Viewer</h5>
                    <br/>
                    <h6>Java GUI</h6>
                    <h6>3 Collaborators</h6>
                    <br/>
                    <img className="skeleton fileImage small" src="./images/techLogos/java.png" alt="Java" loading="lazy"/>
                    <img className="skeleton fileImage small" src="./images/techLogos/CSS.png" alt="CSS" loading="lazy"/>

                    <div className="file button marginTop" onClick={(e) => openElements(["moreProjectsOverlay", "propertyViewer"])}>
                        More Info
                    </div>
                </div>

                <div className="card long m-3">
                    <img className="skeleton header" src="./images/projects/Ecosystem/ES1.png" alt="Ecosystem Simulator" loading="lazy"/>
                    <h5>Ecosystem Simulator</h5>
                    <br/>
                    <h6>Java GUI</h6>
                    <h6>1 Collaborator</h6>
                    <br/>
                    <img className="skeleton fileImage small" src="./images/techLogos/java.png" alt="Java" loading="lazy"/>
                    <br/>
                    <div className="file button marginTop" onClick={(e) => openElements(["moreProjectsOverlay", "ecosystemSimulator"])}>
                        More Info
                    </div>
                </div>

                <div className="card long m-3">
                    <img className="skeleton header" src="./images/projects/Photography Booking System/BS1.png" alt="Photography Booking System" loading="lazy"/>
                    <h5>Photography Booking & Management System</h5>
                    <br/>
                    <h6>Web Development</h6>
                    <br/>
                    <img className="skeleton fileImage small" src="./images/techLogos/PHP.png" alt="PHP" loading="lazy"/>
                    <img className="skeleton fileImage small" src="./images/techLogos/SQL.png" alt="SQL" loading="lazy"/>
                    <img className="skeleton fileImage small" src="./images/techLogos/javascript.png" alt="Javascript" loading="lazy"/>
                    <img className="skeleton fileImage small" src="./images/techLogos/CSS.png" alt="CSS" loading="lazy"/>
                    <img className="skeleton fileImage small" src="./images/techLogos/Html.png" alt="Html" loading="lazy"/>

                    <div className="file button marginTop" onClick={(e) => openElements(["moreProjectsOverlay", "photographyBooking&ManagementSystem"])}>
                        More Info
                    </div>
                </div>

                <div className="card long m-3">
                    <img className="skeleton header" src="./images/projects/Projects.png" alt="Projects" loading="lazy"/>
                    <h5>AI Chatbot</h5>
                    <br/>
                    <h6>Image & Text Data Analysis</h6>
                    <br/>
                    <img className="skeleton fileImage small" src="./images/techLogos/Python.png" alt="Python" loading="lazy"/>
                    <br/>
                    <div className="file button marginTop" onClick={(e) => openElements(["moreProjectsOverlay", "aiChatbot"])}>
                        More Info
                    </div>
                </div>

                <div className="card long m-3">
                    <img className="skeleton header" src="./images/projects/Projects.png" alt="Projects" loading="lazy"/>
                    <h5>Pathfinder</h5>
                    <br/>
                    <h6>A* Pathfinder</h6>
                    <br/>
                    <img className="skeleton fileImage small" src="./images/techLogos/python.png" alt="Python" loading="lazy"/>
                    <br/>
                    <div className="file button marginTop" onClick={(e) => openElements(["moreProjectsOverlay", "pathfinder"])}>
                        More Info
                    </div>
                </div>
            </div>
        </div>

        <MoreProjectsInfo/>
    </>
  );
}

export default MoreProjects;