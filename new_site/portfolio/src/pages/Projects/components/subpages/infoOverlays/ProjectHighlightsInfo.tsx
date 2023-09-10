import React from 'react';

import  { closeElements } from '../../../../../setup/components/displayControls';

function GreggorFinancialCompanion() {
  return (
    <div className="overlayInfo" id="greggorFinancialCompanion">
      <div className="topRight">
        <div className="file button marginLeft" onClick={(e) => closeElements(["projectHighlightsOverlay", "greggorFinancialCompanion"])}>
          &#10005;
        </div>
      </div>

      <h1>Greggor Financial Companion</h1><h3>Financial Tracker</h3>
      <h3>- Django Project -</h3>
      
      <a href="https://www.linkedin.com/in/bhavik-gilbert-2349631a9/" type="submit" target="_blank" className="file">
          <img className="skeleton fileImage small button" src="./images/logos/LinkedInLogo.png" alt="LinkedIn" loading="lazy"/>
      </a>
      <a href="https://github.com/Bhavik-Gilbert?tab=repositories" type="submit" target="_blank" className="file">
          <img className="skeleton fileImage button small" src="./images/logos/GithubLogo.png" alt="Github" loading="lazy"/>
      </a>

      <hr/>
    </div>
  );
}


function RoboticStoreroomInventoryScanner() {
  return (
    <div className="overlayInfo" id="roboticStoreroomInventoryScanner">
      <div className="topRight">
        <div className="file button marginLeft" onClick={(e) => closeElements(["projectHighlightsOverlay", "roboticStoreroomInventoryScanner"])}>
          &#10005;
        </div>
      </div>

      <h1>Robotic Storeroom Inventory Scanner</h1>
      <h3>- ROS Project -</h3>

      <a href="https://www.linkedin.com/in/bhavik-gilbert-2349631a9/" type="submit" target="_blank" className="file">
          <img className="skeleton fileImage small button" src="./images/logos/LinkedInLogo.png" alt="LinkedIn" loading="lazy"/>
      </a>
      <a href="https://github.com/Bhavik-Gilbert?tab=repositories" type="submit" target="_blank" className="file">
          <img className="skeleton fileImage button small" src="./images/logos/GithubLogo.png" alt="Github" loading="lazy"/>
      </a>

      <hr/>
    </div>
  );
}


function FacialRecognitionLoginSystem() {
  return (
    <div className="overlayInfo" id="facialRecognitionLoginSystem">
      <div className="topRight">
        <div className="file button marginLeft" onClick={(e) => closeElements(["projectHighlightsOverlay", "facialRecognitionLoginSystem"])}>
          &#10005;
        </div>
      </div>

      <h1>Facial Recognition Login System</h1>
      <h3>- AI with Database Systems -</h3>

      <a href="https://www.linkedin.com/in/bhavik-gilbert-2349631a9/" type="submit" target="_blank" className="file">
          <img className="skeleton fileImage small button" src="./images/logos/LinkedInLogo.png" alt="LinkedIn" loading="lazy"/>
      </a>
      <a href="https://github.com/Bhavik-Gilbert?tab=repositories" type="submit" target="_blank" className="file">
          <img className="skeleton fileImage button small" src="./images/logos/GithubLogo.png" alt="Github" loading="lazy"/>
      </a>

      <hr/>
    </div>
  );
}


function PhaseFoldingKeplerExoplanets() {
  return (
    <div className="overlayInfo" id="phaseFoldingKeplerExoplanets">
      <div className="topRight">
        <div className="file button marginLeft" onClick={(e) => closeElements(["projectHighlightsOverlay", "phaseFoldingKeplerExoplanets"])}>
          &#10005;
        </div>
      </div>

      <h1>Phase Folding Kepler Exoplanets</h1>
      <h3>- Data Analysis & Graphical Manipulation -</h3>

      <a href="https://www.linkedin.com/in/bhavik-gilbert-2349631a9/" type="submit" target="_blank" className="file">
          <img className="skeleton fileImage small button" src="./images/logos/LinkedInLogo.png" alt="LinkedIn" loading="lazy"/>
      </a>
      <a href="https://github.com/Bhavik-Gilbert?tab=repositories" type="submit" target="_blank" className="file">
          <img className="skeleton fileImage button small" src="./images/logos/GithubLogo.png" alt="Github" loading="lazy"/>
      </a>

      <hr/>
    </div>
  );
}


function ProjectHighlightsInfo() {
  return (
    <div className="overlayBackground" id="projectHighlightsOverlay">
      <GreggorFinancialCompanion/>
      <RoboticStoreroomInventoryScanner/>
      <FacialRecognitionLoginSystem/>
      <PhaseFoldingKeplerExoplanets/>
    </div>
  );
}

export default ProjectHighlightsInfo