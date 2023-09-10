import React from 'react';

import  { closeElements } from '../../../../../setup/components/displayControls';

function KPlusMentorKCL() {
  return (
    <div className="overlayInfo" id="k+MentorKCL">
      <div className="topRight">
        <div className="file button marginLeft" onClick={(e) => closeElements(["workExperienceOverlay", "k+MentorKCL"])}>
          &#10005;
        </div>
      </div>

      <h1>K+ Mentor</h1>
      <h5>Jan 2022 - Dec 2022</h5>
      <h3>- King's College London -</h3>

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


function FuntechComputerScienceTeacher() {
  return (
    <div className="overlayInfo" id="funtechComputerScienceTeacher">
      <div className="topRight">
        <div className="file button marginLeft" onClick={(e) => closeElements(["workExperienceOverlay", "funtechComputerScienceTeacher"])}>
          &#10005;
        </div>
      </div>

      <h1>Computer Science Teacher</h1>
      <h5>Jul 2021 - Aug 2021</h5>
      <h3>- Funtech -</h3>

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


function WorkExperienceInfo() {
  return (
    <div className="overlayBackground" id="workExperienceOverlay">
      <FuntechComputerScienceTeacher/>
      <KPlusMentorKCL/>
    </div>      
  );
}

export default WorkExperienceInfo;