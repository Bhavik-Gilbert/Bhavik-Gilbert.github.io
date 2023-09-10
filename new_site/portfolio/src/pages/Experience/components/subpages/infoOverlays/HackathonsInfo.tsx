import React from 'react';

import  { closeElements } from '../../../../../setup/components/displayControls';

function CodeForGood() {
  return (
    <div className="overlayInfo" id="codeForGood">
      <div className="topRight">
        <div className="file button marginLeft" onClick={(e) => closeElements(["hackathonsOverlay", "codeForGood"])}>
          &#10005;
        </div>
      </div>

      <h1>Code For Good</h1>
      <h5>Nov 2022</h5>
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


function PolygonxEasyA() {
  return (
    <div className="overlayInfo" id="polygonxEasyA">
      <div className="topRight">
        <div className="file button marginLeft" onClick={(e) => closeElements(["hackathonsOverlay", "polygonxEasyA"])}>
          &#10005;
        </div>
      </div>

      <h1>Polygon x Easy A</h1>
      <h5>Oct 2022</h5>
      <h3>- Polygon -</h3>

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


function MetaGlobalHackathon() {
  return (
    <div className="overlayInfo" id="metaGlobalHackathon2022">
      <div className="topRight">
        <div className="file button marginLeft" onClick={(e) => closeElements(["hackathonsOverlay", "metaGlobalHackathon2022"])}>
          &#10005;
        </div>
      </div>

      <h1>Meta Global Hackathon</h1>
      <h5>Sept 2022</h5>
      <h3>- Meta -</h3>

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
    <div className="overlayBackground" id="hackathonsOverlay">
      <CodeForGood/>
      <PolygonxEasyA/>
      <MetaGlobalHackathon/>
    </div>      
  );
}

export default WorkExperienceInfo;