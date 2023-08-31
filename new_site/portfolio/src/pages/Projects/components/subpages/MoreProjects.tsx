import React from 'react';
import { toggleClass } from '../../../../setup/components/changeClass';
import { toggleCapitalise } from '../../../../setup/components/textEffects';

function MoreProjects() {
  const title = "More Projects".split("");
  
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
        <div className="card long m-3">
            <img className="header" src="./images/companyLogos/Oxford.png" alt="Oxford University"></img>
            <h5>Penguin Empire</h5>
            <h6>Social Media Application</h6>
            <br/>
            <h6>Django Project</h6>
            <h6>Three.js</h6>
            <br/>
            <img className="fileImage small" src="./images/techLogos/python.png" alt="Python"></img>
            <img className="fileImage small" src="./images/techLogos/javascript.png" alt="Javascript"></img>
            <img className="fileImage small" src="./images/techLogos/CSS.png" alt="CSS"></img>
            <img className="fileImage small" src="./images/techLogos/html.png" alt="Html"></img>
        </div>

        <div className="card long m-3">
            <img className="header" src="./images/companyLogos/Oxford.png" alt="Oxford University"></img>
            <h5>Minigame Suite</h5>
            <br/>
            <h6>Java GUI</h6>
            {/* <h6>JavaFX & AudioSystem</h6> */}
            <br/>
            <img className="fileImage small" src="./images/techLogos/java.png" alt="Java"></img>
            <img className="fileImage small" src="./images/techLogos/CSS.png" alt="CSS"></img>
        </div>
        
        <div className="card long m-3">
            <img className="header" src="./images/companyLogos/Oxford.png" alt="Oxford University"></img>
            <h5>Ticketing System</h5>
            <br/>
            <h6>Flask Project</h6>
            {/* <h6>Flask & MYSQL Connector</h6> */}
            <br/>
            <img className="fileImage small" src="./images/techLogos/python.png" alt="Python"></img>
            <img className="fileImage small" src="./images/techLogos/SQL.png" alt="SQL"></img>
            <img className="fileImage small" src="./images/techLogos/javascript.png" alt="Javascript"></img>
            <img className="fileImage small" src="./images/techLogos/CSS.png" alt="CSS"></img>
            <img className="fileImage small" src="./images/techLogos/html.png" alt="Html"></img>
        </div>

        <div className="card long m-3">
            <img className="header" src="./images/companyLogos/Oxford.png" alt="Oxford University"></img>
            <h5>Music School Management System</h5>
            <br/>
            <h6>Django Project</h6>
            <h6>5 Contributors</h6>
            <br/>
            <img className="fileImage small" src="./images/techLogos/python.png" alt="Python"></img>
            <img className="fileImage small" src="./images/techLogos/javascript.png" alt="Javascript"></img>
            <img className="fileImage small" src="./images/techLogos/CSS.png" alt="CSS"></img>
            <img className="fileImage small" src="./images/techLogos/html.png" alt="Html"></img>
        </div>

        <div className="card long m-3">
            <img className="header" src="./images/companyLogos/Oxford.png" alt="Oxford University"></img>
            <h5>Typing Speed Test</h5>
            <br/>
            <h6>React Project</h6>
            <br/>
            <img className="fileImage small" src="./images/techLogos/react.png" alt="React"></img>
            <img className="fileImage small" src="./images/techLogos/javascript.png" alt="Javascript"></img>
            <img className="fileImage small" src="./images/techLogos/CSS.png" alt="CSS"></img>
            <img className="fileImage small" src="./images/techLogos/html.png" alt="Html"></img>
        </div>

        <div className="card long m-3">
            <img className="header" src="./images/companyLogos/Oxford.png" alt="Oxford University"></img>
            <h5>Property Viewer Application</h5>
            <br/>
            <h6>Java GUI</h6>
            <h6>4 Contributors</h6>
            <br/>
            <img className="fileImage small" src="./images/techLogos/java.png" alt="Java"></img>
            <img className="fileImage small" src="./images/techLogos/CSS.png" alt="CSS"></img>
        </div>

        <div className="card long m-3">
            <img className="header" src="./images/companyLogos/Oxford.png" alt="Oxford University"></img>
            <h5>Ecosystem Simulator</h5>
            <br/>
            <h6>Java GUI</h6>
            {/* <h6>Concurrent Executors & Swing & JPanel</h6> */}
            <h6>2 Contributors</h6>
            <br/>
            <img className="fileImage small" src="./images/techLogos/java.png" alt="Java"></img>
        </div>

        <div className="card long m-3">
            <img className="header" src="./images/companyLogos/Oxford.png" alt="Oxford University"></img>
            <h5>Photography Booking & Management System</h5>
            <br/>
            <h6>Web Development</h6>
            <br/>
            <img className="fileImage small" src="./images/techLogos/PHP.png" alt="PHP"></img>
            <img className="fileImage small" src="./images/techLogos/SQL.png" alt="SQL"></img>
            <img className="fileImage small" src="./images/techLogos/javascript.png" alt="Javascript"></img>
            <img className="fileImage small" src="./images/techLogos/CSS.png" alt="CSS"></img>
            <img className="fileImage small" src="./images/techLogos/Html.png" alt="Html"></img>
        </div>

        <div className="card long m-3">
            <img className="header" src="./images/companyLogos/Oxford.png" alt="Oxford University"></img>
            <h5>AI Chatbot</h5>
            <br/>
            <h6>Image & Text Data Analysis</h6>
            {/* <h6>Tkinter & PIL & TensorFlow & Numpy & Google Cloud</h6> */}
            <br/>
            <img className="fileImage small" src="./images/techLogos/Python.png" alt="Python"></img>
        </div>

        <div className="card long m-3">
            <img className="header" src="./images/companyLogos/Oxford.png" alt="Oxford University"></img>
            <h5>Pathfinder</h5>
            <br/>
            <h6>A* Pathfinder</h6>
            <br/>
            <img className="fileImage small" src="./images/techLogos/python.png" alt="Python"></img>
        </div>
      </div>
    </div>
  );
}

export default MoreProjects;