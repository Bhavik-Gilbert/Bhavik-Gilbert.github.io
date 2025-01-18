import React from 'react';

import ProjectHighlightsInfo from './infoOverlays/ProjectHighlightsInfo';
import  { openElements } from '../../../../setup/components/displayControls';
import { toggleClass } from '../../../../setup/components/changeClass';
import { toggleCapitalise } from '../../../../setup/components/textEffects';

function ProjectHighlights() {
  const title = "Highlights".split("");
  
  return (
    <>
      <div className="marginTop marginBottom">
        {title.map((titleChar: string, titleCharIndex: number) => (
            <div className="h3 byLetter marginBottom" id={"projectHighlightsTitle" + titleCharIndex + titleChar} key={"projectHighlightsTitle" + titleCharIndex + titleChar} 
            onClick={(() => {
                toggleClass("projectHighlightsTitle" + titleCharIndex + titleChar, "h3", "h3Hold");
                toggleCapitalise("projectHighlightsTitle" + titleCharIndex + titleChar);
            })}>
                {titleChar}
            </div>
        ))}
      </div>

      <div>
      <div className="highlightBox marginBottom" onClick={(e) => openElements(["projectHighlightsOverlay", "webInterfaceControlRobot"])}>
          <img className="skeleton highlightBoxImage" src="./images/projects/ROS Robot Web Controller/ROSController1.gif" alt="Control ROS Robot" loading="lazy"/>

          <div className="highlightBoxText">
            <h5>Web Interface To Control ROS Robot</h5>
            <h6>ROS & Flask & React Project</h6>
            <br/>
            <img className="skeleton fileImage small marginRight" src="./images/techLogos/python.png" alt="Python" loading="lazy"/>
            <img className="skeleton fileImage small marginRight" src="./images/techLogos/javascript.png" alt="Javascript" loading="lazy"/>
            <img className="skeleton fileImage small marginRight" src="./images/techLogos/CSS.png" alt="CSS" loading="lazy"/>
            <img className="skeleton fileImage small marginRight" src="./images/techLogos/react.png" alt="React" loading="lazy"/>

            <div className="file button bottomRight">
              More Info
            </div>
          </div>
        </div>

        <div className="highlightBox marginBottom" onClick={(e) => openElements(["projectHighlightsOverlay", "greggorFinancialCompanion"])}>
          <img className="skeleton highlightBoxImage" src="./images/projects/Greggor Financial Companion/GFC1.png" alt="Greggor Financial Companion" loading="lazy"/>

          <div className="highlightBoxText">
            <h5>Greggor Financial Companion - Financial Tracker</h5>
            <h6>Django Project</h6>
            <h6>7 Collaborators</h6>
            <br/>
            <img className="skeleton fileImage small marginRight" src="./images/techLogos/python.png" alt="Python" loading="lazy"/>
            <img className="skeleton fileImage small marginRight" src="./images/techLogos/javascript.png" alt="Javascript" loading="lazy"/>
            <img className="skeleton fileImage small marginRight" src="./images/techLogos/CSS.png" alt="CSS" loading="lazy"/>
            <img className="skeleton fileImage small marginRight" src="./images/techLogos/html.png" alt="HTML" loading="lazy"/>

            <div className="file button bottomRight">
              More Info
            </div>
          </div>
        </div>

        <div className="highlightBox marginBottom" onClick={(e) => openElements(["projectHighlightsOverlay", "roboticStoreroomInventoryScanner"])}>
          <img className="skeleton highlightBoxImage" src="./images/projects/ROS Storageroom Scanner/RSS1.png" alt="Robotic Storeroom Inventory Scanner" loading="lazy"/>

          <div className="highlightBoxText">
            <h5>Robotic Storeroom Inventory Scanner</h5>
            <h6>ROS Project</h6>
            <br/>
            <img className="skeleton fileImage small marginRight" src="./images/techLogos/python.png" alt="Python" loading="lazy"/>
          </div>
            
          <div className="file button bottomRight">
            More Info
          </div>
        </div>

        <div className="highlightBox marginBottom" onClick={(e) => openElements(["projectHighlightsOverlay", "facialRecognitionLoginSystem"])}>
          <img className="skeleton highlightBoxImage" src="./images/projects/Facial Recognition/FR2.png" alt="Facial Recognition Login System" loading="lazy"/>

          <div className="highlightBoxText">
            <h5>Facial Recognition Login System</h5>
            <h6>AI with Database Systems</h6>
            <br/>
            <img className="skeleton fileImage small marginRight" src="./images/techLogos/python.png" alt="Python" loading="lazy"/>
            <img className="skeleton fileImage small marginRight" src="./images/techLogos/SQL.png" alt="SQL" loading="lazy"/>
          </div>

          <div className="file button bottomRight">
            More Info
          </div>
        </div>

        <div className="highlightBox marginBottom" onClick={(e) => openElements(["projectHighlightsOverlay", "phaseFoldingKeplerExoplanets"])}>
          <img className="skeleton highlightBoxImage" src="./images/projects/Exoplanet/PF1.png" alt="Phase Folding Kepler Exoplanets" loading="lazy"/>

          <div className="highlightBoxText">
            <h5>Phase Folding Kepler Exoplanet Luminosity</h5>
            <h6>Data Analysis & Graphical Manipulation </h6>
            <br/>
            <img className="skeleton fileImage small marginRight" src="./images/techLogos/python.png" alt="Python" loading="lazy"/>
          </div>
          
          <div className="file button bottomRight">
            More Info
          </div> 
        </div>
      </div>

      <ProjectHighlightsInfo/>
    </>
  );
}

export default ProjectHighlights;