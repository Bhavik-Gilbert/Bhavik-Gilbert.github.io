import React from 'react';

import EducationHighlightsInfo from './infoOverlays/EducationHighlightsInfo';
import  { openElements } from '../../../../setup/components/displayControls';
import { toggleClass } from '../../../../setup/components/changeClass';
import { toggleCapitalise } from '../../../../setup/components/textEffects';

function EducationHighlights() {
  const title = "Core Education".split("");
  
  return (
    <>
      <div className="marginTop marginBottom">
        <div className="marginBottom">
          {title.map((titleChar: string, titleCharIndex: number) => (
              <div className="h3 byLetter marginBottom" id={"educationHighlightsTitle" + titleCharIndex + titleChar} key={"educationHighlightsTitle" + titleCharIndex + titleChar} 
              onClick={(() => {
                  toggleClass("educationHighlightsTitle" + titleCharIndex + titleChar, "h3", "h3Hold");
                  toggleCapitalise("educationHighlightsTitle" + titleCharIndex + titleChar);
              })}>
                  {titleChar}
              </div>
          ))}
        </div>

        <div>
          <div className="highlightBox marginBottom" onClick={(e) => openElements(["educationHighlightsOverlay", "compsciKCLUndergrad"])}>
            <img className="skeleton highlightBoxImage" src="./images/companyLogos/KCL.jpg" alt="KCL" loading="lazy"/>

            <div className="highlightBoxText">
              <h5>Computer Science BSc(Hons)</h5>
              <h6>Undegraduate</h6>
              <br/>
              <h6>King's College London</h6>
              <h6>Sep 2021 - May 2024</h6>
            </div>

            <div className="file button bottomRight">
              More Info
            </div>
          </div>
          
          <div className="highlightBox marginBottom" onClick={(e) => openElements(["educationHighlightsOverlay", "alevels"])}>
            <img className="skeleton highlightBoxImage" src="./images/companyLogos/LeytonXIFormCollege.png" alt="Leyton XI Form College" loading="lazy"/>

            <div className="highlightBoxText">
              <h5>A Levels</h5>
              <h5>4 A Levels</h5>
              <br/>
              <h6>Leyton Sixth Form College</h6>
              <h6>Sep 2019 - May 2021</h6>
            </div>

            <div className="file button bottomRight mt-3">
              More Info
            </div>
          </div>

          <div className="highlightBox" onClick={(e) => openElements(["educationHighlightsOverlay", "gcses"])}>
            <img className="skeleton highlightBoxImage" src="./images/companyLogos/StAloy.jpg" alt="St Aloysius R.C College" loading="lazy"/>

            <div className="highlightBoxText">
              <h5>GCSEs</h5>
              <h6>12 GCSEs</h6>
              <br/>
              <h6>St.Aloysius R.C College</h6>
              <h6>Sep 2014 - Jun 2019</h6>
            </div>

            <div className="file button bottomRight">
              More Info
            </div>
          </div>
        </div>
      </div>

      <EducationHighlightsInfo/>
    </>
  );
}

export default EducationHighlights;