import React from 'react';

import  { closeElements } from '../../../../../setup/components/displayControls';

function JPSoftwareEngineer() {
  return (
    <div className="overlayInfo" id="jpSoftwareEngineer">
      <div className="topRight">
        <div className="file button marginLeft" onClick={(e) => closeElements(["experienceHighlightsOverlay", "jpSoftwareEngineer"])}>
          &#10005;
        </div>
      </div>

      <div className="infoHeader">
        <h1>Software Engineer</h1>
        <h5>Sep 2024 - Current</h5>
        <h3>- J.P Morgan Chase & Co -</h3>
      </div>

      <hr/>

      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/python.png" alt="Python" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/javascript.png" alt="Javascript" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/react.png" alt="React" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/css.png" alt="CSS" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/SQL.png" alt="SQL" loading="lazy"/>

      <hr/>

      <h3>Software Engineer Analyst</h3>
      <h5>Sep 2024 - Current</h5>
      <ul>
        <li>Team Athena Core Devtools</li>
        <li>Full-Stack Development & Data Science</li>
      </ul>
    </div>
  );
}

function JPSoftwareEngineerAnalystIntern() {
  return (
    <div className="overlayInfo" id="jpSoftwareEngineerAnalystIntern">
      <div className="topRight">
        <div className="file button marginLeft" onClick={(e) => closeElements(["experienceHighlightsOverlay", "jpSoftwareEngineerAnalystIntern"])}>
          &#10005;
        </div>
      </div>

      <div className="infoHeader">
        <h1>Software Engineer Analyst Intern</h1>
        <h5>Jun 2023 - Aug 2023</h5>
        <h3>- J.P Morgan Chase & Co -</h3>
      </div>

      <hr/>

      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/python.png" alt="Python" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/SQL.png" alt="SQL" loading="lazy"/>
      
      <hr/>

      <ul>
        <li>Team Athena Market Data</li>
        <li>Full-Stack Development</li>
        <li>Worked on a codebase with over 50 million lines of code</li>
        <li>Implemented unit and integration testing methodologies</li>
      </ul>
    </div>
  );
}


function KCLTeachingAssistant() {
  return (
    <div className="overlayInfo" id="kclTeachingAssistant">
      <div className="topRight">
        <div className="file button marginLeft" onClick={(e) => closeElements(["experienceHighlightsOverlay", "kclTeachingAssistant"])}>
          &#10005;
        </div>
      </div>

      <div className="infoHeader">
        <h1>Graduate Teaching Assistant</h1>
        <h5>Sep 2023 - Current</h5>
        <h3>- King's College London -</h3>
      </div>

      <hr/>

      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/c++.png" alt="C++" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/scala.png" alt="Scala" loading="lazy"/>
      
      <hr/>

      <ul>
        <li>Module: 5CCS2PEP Practical Experiences of Programming</li>
        <li>Taught C++ and Scala with their coding constructs, alongside guiding students through programming exercises.</li>
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

      <div className="infoHeader">
        <h1>Location Camp Manger</h1>
        <h5>Jul 2022 - Aug 2022</h5>
        <h3>- FunTech -</h3>
      </div>

      <a href="https://funtech.co.uk/" type="submit" target="_blank" rel="noreferrer" className="file button justify-content-center text-center">
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
      <JPSoftwareEngineer/>
      <JPSoftwareEngineerAnalystIntern/>
      <KCLTeachingAssistant/>
      <FuntechLocationCampManger/>
    </div>      
  );
}

export default ExperienceHighlightsInfo;