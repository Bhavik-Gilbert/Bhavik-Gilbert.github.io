import React from 'react';

import  { closeElements } from '../../../../../setup/components/displayControls';

function JPSoftwareEngineerAnalystIntern() {
  return (
    <div className="overlayInfo" id="jpSoftwareEngineerAnalystIntern">
      <div className="topRight">
        <div className="file button marginLeft" onClick={(e) => closeElements(["experienceHighlightsOverlay", "jpSoftwareEngineerAnalystIntern"])}>
          &#10005;
        </div>
      </div>

      <h1>Software Engineer Analyst Intern</h1>
      <h5>Jun 2023 - Aug 2023</h5>
      <h3>- J.P Morgan Chase & Co -</h3>

      <hr/>

      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/python.png" alt="Python" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/SQL.png" alt="SQL" loading="lazy"/>
      
      <hr/>

      <ul>
        <li>Team Athena Market Data</li>
        <li>Full stack Development</li>
        <li>Worked on a codebase with over 50 million lines of code</li>
        <li>Implemented unit and integration testing methodologies</li>
      </ul>
    </div>
  );
}


function LeytonComputerScienceStudentMentor() {
  return (
    <div className="overlayInfo" id="leytonComputerScienceStudentMentor">
      <div className="topRight">
        <div className="file button marginLeft" onClick={(e) => closeElements(["experienceHighlightsOverlay", "leytonComputerScienceStudentMentor"])}>
          &#10005;
        </div>
      </div>

      <h1>Computer Science Student Mentor</h1>
      <h5>Sep 2021 - Oct 2022</h5>
      <h3>- Leyton Sixth Form College -</h3>

      <a href="https://www.leyton.ac.uk/" type="submit" target="_blank" className="file button justify-content-center text-center">
          <img className="skeleton fileImage small" src="./images/logos/WebLogo.jpg" alt="Link" loading="lazy"/>
          &nbsp;
          Website
      </a>

      <hr/>

      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/python.png" alt="Python" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/csharp.png" alt="C#" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/PHP.png" alt="PHP" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/SQL.png" alt="SQL" loading="lazy"/>
      
      <hr/>

      <h6>Flask | Tkinter | Unity | TensorFlow | Keras </h6>

      <hr/>

      <ul>
        <li>Advised students in all aspects of their coursework on a range of projects using a number of different technologies</li>
        <li>Teaching students how to correctly design and document systems during development</li> 
        <li>Primarily focused on web development and database systems, with other focuses including 3D game development, 2D game development and AI development</li>
      </ul>
    </div>
  );
}


function FuntechLocationCampManger() {
  return (
    <div className="overlayInfo" id="funtechLocationCampManger">
      <div className="topRight">
        <div className="file button marginLeft" onClick={(e) => closeElements(["experienceHighlightsOverlay", "funtechLocationCampManger"])}>
          &#10005;
        </div>
      </div>

      <h1>Location Camp Manger</h1>
      <h5>Jul 2022 - Aug 2022</h5>
      <h3>- FunTech -</h3>

      <a href="https://funtech.co.uk/" type="submit" target="_blank" className="file button justify-content-center text-center">
          <img className="skeleton fileImage small" src="./images/logos/WebLogo.jpg" alt="Link" loading="lazy"/>
          &nbsp;
          Website
      </a>

      <hr/>

      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/python.png" alt="Python" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/c++.png" alt="C++" loading="lazy"/>
      <img className="skeleton fileImage small" src="./images/techLogos/java.png" alt="Java" loading="lazy"/>
      
      <hr/>

      <ul>
        <li>Managed and supported tutors across several on-site locations to cultivate a safe and encouraging environment for learning</li>
        <li>
          Duties:
            <ul>
              <li>Providing technical and IT support across courses</li>
              <li>Maintaining safeguarding standards</li>
              <li>Liaising with tutors and communicating with clients</li>
              <li>Troubleshooting issues of all natures as they came up</li>
            </ul>
        </li>
        <li>
          Courses Managed:
          <ul>
            <li>Funtyper (Touch Typing)</li>
            <li>Roblox Game Development</li>
            <li>Minecraft Mod/Redstone Development</li>
            <li>Lego Robotics</li>
            <li>3D Game Development (Unreal Engine)</li>
            <li>CyberSecurity (Kali Linux)</li>
            <li>Python (Basics/OOP/Pygame Development/Tensorflow AIML)</li>
            <li>Java (Basics)</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}


function ExperienceHighlightsInfo() {
  return (
    <div className="overlayBackground" id="experienceHighlightsOverlay">
      <JPSoftwareEngineerAnalystIntern/>
      <LeytonComputerScienceStudentMentor/>
      <FuntechLocationCampManger/>
    </div>      
  );
}

export default ExperienceHighlightsInfo;