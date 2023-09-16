import React from 'react';

import  { closeElements } from '../../../../../setup/components/displayControls';

function PenguinEmpire() {
  return (
    <div className="overlayInfo" id="penguinEmpire">
      <div className="topRight">
        <div className="file button marginLeft" onClick={(e) => closeElements(["moreProjectsOverlay", "penguinEmpire"])}>
          &#10005;
        </div>
      </div>

      <h1>Penguin Empire</h1>
      <h5>Social Media Application</h5>
      <h3>- Django Project -</h3>
      
      <a href="https://github.com/Bhavik-Gilbert/Empire-Penguin" type="submit" target="_blank" className="file button justify-content-center text-center">
          <img className="skeleton fileImage small" src="./images/logos/GithubLogo.png" alt="Github" loading="lazy"/>
          &nbsp;
          Repository
      </a>
      <a href="https://penguinempire.pythonanywhere.com/" type="submit" target="_blank" className="file button justify-content-center text-center">
          <img className="skeleton fileImage small" src="./images/logos/WebLogo.jpg" alt="Link" loading="lazy"/>
          &nbsp;
          Live Site
      </a>

      <hr/>

      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/python.png" alt="Python" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/Javascript.png" alt="Javascript" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/CSS.png" alt="CSS" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/html.png" alt="HTML" loading="lazy"/>

      <hr/>

      <h6>Django | Three.js</h6>

      <hr/>

      <p>Social media application where users can post text and images while having fun interactions with virtual 2d and 3d penguins throughout the site.</p>

      <ul>
        <li>Incorporates a full suite of automated unit tests</li>
      </ul>
    </div>
  );
}


function MinigameSuite() {
  return (
    <div className="overlayInfo" id="minigameSuite">
      <div className="topRight">
        <div className="file button marginLeft" onClick={(e) => closeElements(["moreProjectsOverlay", "minigameSuite"])}>
          &#10005;
        </div>
      </div>

      <h1>Minigame Suite</h1>
      <h3>- Java GUI -</h3>

      <a href="https://github.com/Bhavik-Gilbert/Minigame-Suite" type="submit" target="_blank" className="file button justify-content-center text-center">
          <img className="skeleton fileImage small" src="./images/logos/GithubLogo.png" alt="Github" loading="lazy"/>
          &nbsp;
          Repository
      </a>

      <hr/>

      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/java.png" alt="Java" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/CSS.png" alt="CSS" loading="lazy"/>

      <hr/>

      <h6>JavaFX | AudioSystem</h6>

      <hr/>

      <p>Bundle of mini-games built using javafx and java</p>
      
      <ul>
        <li>Games included:
          <ul>
            <li>Checkers</li> 
            <li>Chess</li> 
            <li>Snakes and Ladders</li> 
            <li>BlackJack</li> 
            <li>Connect4</li>
          </ul>
        </li>
        <li>Display is flexible and will adjust to the size of the display being used</li>
        <li>Added features including:
          <ul>
            <li>In game timer</li>
            <li>Sound system to add sound effects and music</li>
          </ul>
        </li>
        <li>Users can choose to change tracks or mute the music/sfx alongside adjusting the volume level</li>
      </ul>    
    </div>
  );
}


function TicketingSystem() {
  return (
    <div className="overlayInfo" id="ticketingSystem">
      <div className="topRight">
        <div className="file button marginLeft" onClick={(e) => closeElements(["moreProjectsOverlay", "ticketingSystem"])}>
          &#10005;
        </div>
      </div>

      <h1>Ticketing System</h1>
      <h3>- Flask Project -</h3>

      <a href="https://github.com/Bhavik-Gilbert/Ticketing-System" type="submit" target="_blank" className="file button justify-content-center text-center">
          <img className="skeleton fileImage small" src="./images/logos/GithubLogo.png" alt="Github" loading="lazy"/>
          &nbsp;
          Repository
      </a>
      <a href="https://bhavikgilbert.pythonanywhere.com/" type="submit" target="_blank" className="file button justify-content-center text-center">
          <img className="skeleton fileImage small" src="./images/logos/WebLogo.jpg" alt="Link" loading="lazy"/>
          &nbsp;
          Live Site
      </a>

      <hr/>

      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/python.png" alt="Python" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/SQL.png" alt="SQL" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/CSS.png" alt="CSS" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/javascript.png" alt="Javascript" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/html.png" alt="HTML" loading="lazy"/>

      <hr/>

      <h6>Flask | MYSQL Connector</h6>

      <hr/>

      <p>The development of a task ticketing system between groups and projects. Uses the flask and mysql-connector libraries to run the site communicate with a database to store all system information</p>
      
      <ul>
        <li>Users can manage and run groups and projects</li>
        <li>Managers are able to:
          <ul>
            <li>Create new tickets</li>
            <li>Delete owned groups and projects</li>
            <li>Invite and remove users from owned groups and projects</li>
            <li>Transfer management of owned groups and projects </li>
          </ul>
        </li>
        <li>General users can start, drop and finish tickets available in the projects they're in</li>
      </ul>
    </div>
  );
}


function MusicSchoolManagementSystem() {
  return (
    <div className="overlayInfo" id="musicSchoolManagementSystem">
      <div className="topRight">
        <div className="file button marginLeft" onClick={(e) => closeElements(["moreProjectsOverlay", "musicSchoolManagementSystem"])}>
          &#10005;
        </div>
      </div>

      <h1>Music School Management System</h1>
      <h3>- Django Project -</h3>

      <hr/>

      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/python.png" alt="Python" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/javascript.png" alt="Javascript" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/CSS.png" alt="CSS" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/html.png" alt="HTML" loading="lazy"/>

      <hr/>

      <h6>Django</h6>

      <hr/>

      <h6>4 Collaborators</h6>

      <hr/>

      <p>Platform for music schools to manage their bookings</p>
      <ul>
        <li>Incorporates a full suite of automated unit tests</li>
      </ul>

      <br/>

      <p>Admins can:</p>
      <ul>
        <li>Login</li>
        <li>Create new admin and teacher accounts</li>
        <li>View all bookings</li>
        <li>Confirm or cancel any bookings</li>
      </ul>

      <br/>
      
      <p>Teachers can:</p>
      <ul>
        <li>Login</li>
        <li>View their lessons</li>
        <li>Cancel their lessons</li>
      </ul>

      <p>Parents can:</p>
      <ul>
        <li>Login/Signup</li>
        <li>Add child accounts</li>
        <li>Make a booking for any of their children</li>
        <li>View their children's lessons</li>
      </ul>

      <p>Students can:</p>
      <ul>
        <li>Login</li>
        <li>View their lessons</li>
      </ul>
    </div>
  );
}


function TypingSpeedTest() {
  return (
    <div className="overlayInfo" id="typingSpeedTest">
      <div className="topRight">
        <div className="file button marginLeft" onClick={(e) => closeElements(["moreProjectsOverlay", "typingSpeedTest"])}>
          &#10005;
        </div>
      </div>

      <h1>Typing Speed Test</h1>
      <h3>- React Project -</h3>

      <a href="https://github.com/Bhavik-Gilbert/SpeedTyping" type="submit" target="_blank" className="file button justify-content-center text-center">
          <img className="skeleton fileImage small" src="./images/logos/GithubLogo.png" alt="Github" loading="lazy"/>
          &nbsp;
          Repository
      </a>
      <a href="https://typingtestspeed.netlify.app/" type="submit" target="_blank" className="file button justify-content-center text-center">
          <img className="skeleton fileImage small" src="./images/logos/WebLogo.jpg" alt="Link" loading="lazy"/>
          &nbsp;
          Live Site
      </a>

      <hr/>

      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/javascript.png" alt="Javascript" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/CSS.png" alt="CSS" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/html.png" alt="HTML" loading="lazy"/>

      <hr/>

      <h6>React | Node</h6>

      <hr/>

      <p>Typing speed test web application.</p>
      <ul>
        <li>Runs for inputted timeframe</li>
        <li>Colour feedback on current word for errors</li>
        <li>Results include:</li>
        <ul>
          <li>Words Per Minute</li>
          <li>Maximum Words Per Minute</li>
          <li>Characters Per Minute</li>
          <li>Accuracy</li>
        </ul>
      </ul>
    </div>
  );
}


function PropertyViewer() {
  return (
    <div className="overlayInfo" id="propertyViewer">
      <div className="topRight">
        <div className="file button marginLeft" onClick={(e) => closeElements(["moreProjectsOverlay", "propertyViewer"])}>
          &#10005;
        </div>
      </div>

      <h1>Property Viewer</h1>
      <h3>- Java GUI -</h3>

      <a href="./files/projects/PropertyViewerReport.pdf" type="submit" target="_blank" className="file button justify-content-center text-center">
          <img className="skeleton fileImage small" src="./images/logos/PDFLogo.png" alt="PDF" loading="lazy"/>
          &nbsp;
          Report
      </a>

      <hr/>

      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/java.png" alt="Java" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/CSS.png" alt="CSS" loading="lazy"/>

      <hr/>

      <h6>JavaFx | WebView</h6>

      <hr/>

      <h6>3 Collaborators</h6>
      <ul>
        <li><a href="https://www.linkedin.com/in/ninapeire/" className="link" target="_blank">Nina Peire</a></li>
        <li><a href="https://www.linkedin.com/in/lavish-k-9749ab209//" className="link" target="_blank">Lavish Kamal Kumar</a></li>
        <li><a href="https://heman-s.github.io/index.html" className="link" target="_blank">Heman Seegolam</a></li>
      </ul>

      <hr/>

      <p>TO BE ADDED</p>
    </div>
  );
}


function EcosystemSimulator() {
  return (
    <div className="overlayInfo" id="ecosystemSimulator">
      <div className="topRight">
        <div className="file button marginLeft" onClick={(e) => closeElements(["moreProjectsOverlay", "ecosystemSimulator"])}>
          &#10005;
        </div>
      </div>

      <h1>Ecosystem Simulator</h1>
      <h3>- Java GUI -</h3>

      <a href="https://github.com/Bhavik-Gilbert/Predator-Prey-Simulation" type="submit" target="_blank" className="file button justify-content-center text-center">
          <img className="skeleton fileImage small" src="./images/logos/GithubLogo.png" alt="Github" loading="lazy"/>
          &nbsp;
          Repository
      </a>
      <a href="./files/projects/PredatorPreySimulationReport.pdf" type="submit" target="_blank" className="file button justify-content-center text-center">
          <img className="skeleton fileImage small" src="./images/logos/PDFLogo.png" alt="PDF" loading="lazy"/>
          &nbsp;
          Report
      </a>

      <hr/>

      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/Java.png" alt="Java" loading="lazy"/>

      <hr/>

      <h6>Concurrent Executors | Swing | JPanel</h6>

      <hr/>

      <h6>1 Collaborator</h6>
      <ul>
        <li><a href="https://heman-s.github.io/index.html" className="link" target="_blank">Heman Seegolam</a></li>
      </ul>

      <hr/>

      <p>A predator-prey simulation on how animals and plants interact amongst one another alongside how other external factors affect those interactions. The simulation is run in steps, each step being half a day.</p>

      <br/>

      <p>Organisms:</p>
      <ul>
        <li>Dodos</li>
        <li>Wolves</li>
        <li>Humans</li>
        <li>Pigs</li>
        <li>Monkeys</li>
        <li>Plants</li>
      </ul>

      <br/>

      <p>Animal Actions (multiple can occur per step):</p>
      <ul>
        <li>Eat</li>
        <li>Sleep</li>
        <li>Breed</li>
        <li>Die</li>
      </ul>

      <br/>

      <p>External Factors:</p>
      <ul>
        <li>Weather</li>
        <li>Disease</li>
        <li>Day Night Cycle</li>
      </ul>

      <br/>

      <p>Features:</p>
      <ul>
        <li>Single step increment</li>
        <li>Auto step runner</li>
        <li>Day counter/ Step counter</li>
        <li>Organism counter (per organism)</li>
        <li>Optional fixing of external factors</li>
        <li>Organism visibility toggle (organism still act when not visible)</li>
      </ul>
    </div>
  );
}


function PhotographyBookingManagementSystem() {
  return (
    <div className="overlayInfo" id="photographyBooking&ManagementSystem">
      <div className="topRight">
        <div className="file button marginLeft" onClick={(e) => closeElements(["moreProjectsOverlay", "photographyBooking&ManagementSystem"])}>
          &#10005;
        </div>
      </div>

      <h1>Booking & Management System</h1>
      <h5>Photographer Booking Website</h5>
      <h3>- Web Development -</h3>

      <a href="https://github.com/Bhavik-Gilbert/Booking-System" type="submit" target="_blank" className="file button justify-content-center text-center">
          <img className="skeleton fileImage small" src="./images/logos/GithubLogo.png" alt="Github" loading="lazy"/>
          &nbsp;
          Repository
      </a>
      <a href="http://bhavik-portfolio.epizy.com/Photography%20Booking%20System/Home.php" type="submit" target="_blank" className="file button justify-content-center text-center">
          <img className="skeleton fileImage small" src="./images/logos/WebLogo.jpg" alt="Link" loading="lazy"/>
          &nbsp;
          Live Site
      </a>

      <hr/>

      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/php.png" alt="PHP" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/SQL.png" alt="SQL" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/javascript.png" alt="Javascript" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/CSS.png" alt="CSS" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/html.png" alt="HTML" loading="lazy"/>

      <hr/>

      <p>TO BE ADDED</p>

    </div>
  );
}


function AIChatbot() {
  return (
    <div className="overlayInfo" id="aiChatbot">
      <div className="topRight">
        <div className="file button marginLeft" onClick={(e) => closeElements(["moreProjectsOverlay", "aiChatbot"])}>
          &#10005;
        </div>
      </div>

      <h1>AI Chatbot</h1>
      <h3>- Image & Text Data Analysis -</h3>

      <a href="https://github.com/Bhavik-Gilbert/AI-Chatbot" type="submit" target="_blank" className="file button justify-content-center text-center">
          <img className="skeleton fileImage small" src="./images/logos/GithubLogo.png" alt="Github" loading="lazy"/>
          &nbsp;
          Repository
      </a>

      <hr/>

      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/python.png" alt="Python" loading="lazy"/>

      <hr/>

      <h6>Tkinter | PIL | TensorFlow | Numpy | Google Cloud</h6>

      <hr/>

      <p>TO BE ADDED</p>
    </div>
  );
}


function Pathfinder() {
  return (
    <div className="overlayInfo" id="pathfinder">
      <div className="topRight">
        <div className="file button marginLeft" onClick={(e) => closeElements(["moreProjectsOverlay", "pathfinder"])}>
          &#10005;
        </div>
      </div>

      <h1>Pathfinder</h1>
      <h3>- A* Pathfinder -</h3>

      <a href="https://github.com/Bhavik-Gilbert/A-Star_Pathfinder" type="submit" target="_blank" className="file button justify-content-center text-center">
          <img className="skeleton fileImage small" src="./images/logos/GithubLogo.png" alt="Github" loading="lazy"/>
          &nbsp;
          Repository
      </a>

      <hr/>

      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/python.png" alt="Python" loading="lazy"/>

      <hr/>

      <p>TO BE ADDED</p>
    </div>
  );
}


function MoreProjectsInfo() {
  return (
    <div className="overlayBackground" id="moreProjectsOverlay">
      <PenguinEmpire/>
      <MinigameSuite/>
      <TicketingSystem/>
      <MusicSchoolManagementSystem/>
      <TypingSpeedTest/>
      <PropertyViewer/>
      <EcosystemSimulator/>
      <PhotographyBookingManagementSystem/>
      <AIChatbot/>
      <Pathfinder/>
    </div>
  );
}

export default MoreProjectsInfo;