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