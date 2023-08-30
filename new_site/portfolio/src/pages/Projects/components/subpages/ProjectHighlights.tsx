import React from 'react';
import { toggleClass } from '../../../../setup/components/changeClass';
import { toggleCapitalise } from '../../../../setup/components/textEffects';

function ProjectHighlights() {
  const title = "Highlights".split("");
  
  return (
    <div>
      <div className="marginTop marginBottom">
        {title.map((titleChar: string, titleCharIndex: number) => (
            <div className="h3 byLetter marginBottom" id={"pagesTitle" + titleCharIndex + titleChar} key={"pagesTitle" + titleCharIndex + titleChar} 
            onClick={(() => {
                toggleClass("pagesTitle" + titleCharIndex + titleChar, "h3 byLetter marginBottom", "h3Hold byLetter marginBottom");
                toggleCapitalise("pagesTitle" + titleCharIndex + titleChar);
            })}>
                {titleChar}
            </div>
        ))}
      </div>

      <div>
        <div className='highlightBox marginBottom'>
          <img className='highlightBoxImage' src="./images/projects/Greggor Financial Companion/GFC1.png" alt="Greggor Financial Companion"></img>

          <div className='highlightBoxText'>
            <h5>Greggor Financial Companion - Financial Tracker</h5>
            <h6>Django Project</h6>
            <br/>
            <img className="fileImage small" src="./images/techLogos/python.png" alt="Python"></img>
            <img className="fileImage small" src="./images/techLogos/javascript.png" alt="Javascript"></img>
            <img className="fileImage small" src="./images/techLogos/CSS.png" alt="CSS"></img>
            <img className="fileImage small" src="./images/techLogos/html.png" alt="Html"></img>
          </div>
            
        </div>

        <div className='highlightBox marginBottom'>
          <img className='highlightBoxImage' src="./images/projects/ROS Storeageroom Scanner/RSS1.png" alt="Robotic Storeroom Inventory Scanner"></img>

          <div className='highlightBoxText'>
            <h5>Robotic Storeroom Inventory Scanner</h5>
            <h6>ROS Project</h6>
            <h6>SMACH & YOLO</h6>
            <br/>
            <img className="fileImage small" src="./images/techLogos/python.png" alt="Python"></img>
          </div>
            
        </div>

        <div className='highlightBox marginBottom'>
          <img className='highlightBoxImage' src="./images/projects/Facial Recognition/FR2.png" alt="Facial Recognition Login System"></img>

          <div className='highlightBoxText'>
            <h5>Facial Recognition Login System</h5>
            <h6>AI with Database Systems</h6>
            <h6>Tkinter & PIL & CV2 & TensorFlow & MYSQL Connector</h6>
            <br/>
            <img className="fileImage small" src="./images/techLogos/python.png" alt="Python"></img>
            <img className="fileImage small" src="./images/techLogos/SQL.png" alt="SQL"></img>
          </div>
            
        </div>

        <div className='highlightBox marginBottom'>
          <img className='highlightBoxImage' src="./images/projects/Exoplanet/Phase Fold.png" alt="Phase Folding Kepler Exoplanets"></img>

          <div className='highlightBoxText'>
            <h5>Phase Folding Kepler Exoplanets</h5>
            <h6>Data Analysis & Graphical Manipulation </h6>
            <h6>Numpy & Matplotlib</h6>
            <br/>
            <img className="fileImage small" src="./images/techLogos/python.png" alt="Python"></img>
          </div>
            
        </div>
      </div>
    </div>
  );
}

export default ProjectHighlights;