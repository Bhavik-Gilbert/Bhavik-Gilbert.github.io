import React from 'react';

import ExperienceHighlightsInfo from './infoOverlays/ExperienceHighlightsInfo';
import  { openElements } from '../../../../setup/components/displayControls';
import { toggleClass } from '../../../../setup/components/changeClass';
import { toggleCapitalise } from '../../../../setup/components/textEffects';

function ExperienceHighlights() {
  const title = "Highlights".split("");
  
  return (
    <>
      <div className="marginTop marginBottom">
        <div className="marginTop marginBottom">
          {title.map((titleChar: string, titleCharIndex: number) => (
              <div className="h3 byLetter marginBottom" id={"experienceHighlightsTitle" + titleCharIndex + titleChar} key={"experienceHighlightsTitle" + titleCharIndex + titleChar} 
              onClick={(() => {
                  toggleClass("experienceHighlightsTitle" + titleCharIndex + titleChar, "h3", "h3Hold");
                  toggleCapitalise("experienceHighlightsTitle" + titleCharIndex + titleChar);
              })}>
                  {titleChar}
              </div>
          ))}
        </div>

        <div>
          <div className="highlightBox marginBottom" onClick={(e) => openElements(["experienceHighlightsOverlay", "jpSoftwareEngineerAnalystIntern"])}>
            <img className="skeleton highlightBoxImage" src="./images/companyLogos/JPMorganChase.jpg" alt="JPMC" loading="lazy"/>

            <div className="highlightBoxText">
              <h5>Software Engineer Analyst Intern</h5>
              <br/>
              <h6>J.P Morgan Chase & Co</h6>
              <h6>Jun 2023 - Aug 2023</h6>
            </div>
            
            <div className="file button bottomRight">
              More Info
            </div>
          </div>
          
          <div className="highlightBox marginBottom" onClick={(e) => openElements(["experienceHighlightsOverlay", "kclTeachingAssistant"])}>
            <img className="skeleton highlightBoxImage" src="./images/companyLogos/KCL.jpg" alt="KCL" loading="lazy"/>

            <div className="highlightBoxText">
              <h5>Graduate Teaching Assistant</h5>
              <br/>
              <h6>King's College London</h6>
              <h6>Sep 2023 - Current</h6>
            </div>

            <div className="file button bottomRight">
              More Info
            </div>
          </div>

          <div className="highlightBox" onClick={(e) => openElements(["experienceHighlightsOverlay", "funtechLocationCampManger"])}>
            <img className="skeleton highlightBoxImage" src="./images/companyLogos/Funtech.png" alt="FunTech" loading="lazy"/>

            <div className="highlightBoxText">
              <h5>Location Camp Manger</h5>
              <br/>
              <h6>FunTech</h6>
              <h6>Jul 2022 - Aug 2022</h6>
            </div>

            <div className="file button bottomRight">
              More Info
            </div>
          </div>
        </div>
      </div>

      <ExperienceHighlightsInfo/>
    </>
  );
}

export default ExperienceHighlights;