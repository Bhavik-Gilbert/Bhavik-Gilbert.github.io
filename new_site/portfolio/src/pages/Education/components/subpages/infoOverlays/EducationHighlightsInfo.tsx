import React from 'react';

import  { closeElements } from '../../../../../setup/components/displayControls';

function CompsciKCLUndergrad() {
  return (
    <div className="overlayInfo" id="compsciKCLUndergrad">
      <div className="topRight">
        <div className="file button marginLeft" onClick={(e) => closeElements(["educationHighlightsOverlay", "compsciKCLUndergrad"])}>
          &#10005;
        </div>
      </div>

      <h1>Computer Science BSc(Hons)</h1>
      <h5>Undegraduate</h5>
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


function ALevels() {
  return (
    <div className="overlayInfo" id="alevels">
      <div className="topRight">
        <div className="file button marginLeft" onClick={(e) => closeElements(["educationHighlightsOverlay", "alevels"])}>
          &#10005;
        </div>
      </div>

      <h1>A Levels</h1>
      <h5>4 A Levels</h5>
      <h3>- Leyton XI Form College -</h3>

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


function GCSEs() {
  return (
    <div className="overlayInfo" id="gcses">
      <div className="topRight">
        <div className="file button marginLeft" onClick={(e) => closeElements(["educationHighlightsOverlay", "gcses"])}>
          &#10005;
        </div>
      </div>

      <h1>GCSEs</h1>
      <h5>12 GCSEs</h5>
      <h3>- St.Aloysius R.C College -</h3>

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
function EducationHighlightsInfo() {
  return (
    <div className="overlayBackground" id="educationHighlightsOverlay">
      <CompsciKCLUndergrad/>
      <ALevels/>
      <GCSEs/>
    </div>      
  );
}

export default EducationHighlightsInfo;