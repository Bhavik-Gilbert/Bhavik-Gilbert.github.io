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

      <div className="infoHeader">
        <h1>Computer Science BSc(Hons)</h1>
        <h5>First class (1:1) with honours</h5>
        <h3>- King's College London -</h3>
      </div>

      <hr/>

      <h6>Associateship of King's College London</h6>

      <a href="./files/certificates/AKC SEM1 2021-22 Digital Dean's Commendation.pdf" type="submit" target="_blank" className="file button justify-content-center text-center">
          <img className="skeleton fileImage small" src="./images/logos/PDFLogo.png" alt="PDF" loading="lazy"/>
          &nbsp;
          Dean's Commendation 21-22 Sem 1
      </a>

      <a href="./files/certificates/AKC SEM2 2021-22 Digital Dean's Commendation.pdf" type="submit" target="_blank" className="file button justify-content-center text-center">
          <img className="skeleton fileImage small" src="./images/logos/PDFLogo.png" alt="PDF" loading="lazy"/>
          &nbsp;
          Dean's Commendation 21-22 Sem 2
      </a>
      <a href="./files/certificates/AKC SEM1 2023-24 Digital Dean's Commendation.pdf" type="submit" target="_blank" className="file button justify-content-center text-center">
          <img className="skeleton fileImage small" src="./images/logos/PDFLogo.png" alt="PDF" loading="lazy"/>
          &nbsp;
          Dean's Commendation 23-24 Sem 1
      </a>

      <a href="./files/certificates/AKC SEM2 2023-24 Digital Dean's Commendation.pdf" type="submit" target="_blank" className="file button justify-content-center text-center">
          <img className="skeleton fileImage small" src="./images/logos/PDFLogo.png" alt="PDF" loading="lazy"/>
          &nbsp;
          Dean's Commendation 23-24 Sem 2
      </a>
      <hr/>

      <h6>Dissertation: Web interface to interact with the TIAGo robot - Controller</h6>
      <h6>Grade: First class (1:1) | 84%</h6>
    
      <br/>
      <h6>Abstract</h6>
      <p>
        To the best of my knowledge, currently, there are not many accessible, simple, and reliable ways
        to interact with robots developed using the Robot Operating System (ROS). From what I’ve
        seen, most existing methods require either knowledge of how to create packages in the Robot
        Operating System (ROS), how to interact with topics in the command line using the Robot
        Operating System (ROS), or access to a physical controller, which may be prone to problems
        such as joy-con drift or an unstable Bluetooth connection.
        <br/>
        This project aims to create an easy to use, reliable and quickly accessible web interface to
        control and interact with a robot developed using the Robot Operating System (ROS). This
        would allow users to control their robot with a more accessible device such as a smartphone
        or laptop, connected over a more stable LAN connection, with a friendlier web interface. This
        project will focus on developing the platform for a single model of robot, TIAGo, which could
        then be easily expanded upon to work for other kinds of robots developed using the Robot
        Operating System (ROS).
      </p>

      <a href="./files/projects/Bhavik Gilbert Final Year Project Web interface to interact with the TIAGo robot - Controller.pdf" type="submit" target="_blank" className="file button justify-content-center text-center">
          <img className="skeleton fileImage small" src="./images/logos/PDFLogo.png" alt="PDF" loading="lazy"/>
          &nbsp;
          Research Paper
      </a>

      <hr/>


      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/python.png" alt="Python" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/c++.png" alt="C++" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/java.png" alt="Java" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/scala.png" alt="Scala" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/SQL.png" alt="SQL" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/javascript.png" alt="Javascript" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/CSS.png" alt="CSS" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/html.png" alt="HTML" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/react.png" alt="React" loading="lazy"/>

      <hr/>
      
      <h6>Django | Flask | React | Javafx | ROS | InfOS</h6>

      <hr/>
      
      <br/>
      <h6>Year 3: First class (1:1)</h6>
      
      <p>Highlights</p>
      <ul>
        <li>6CCS3PRJ Individual Project (Dissertation): 84% | 30 credits</li>
        <li>6CCS3OME Optimization Methods: 77% | 15 credits</li>
        <li>7CCSMSDV Introduction to Data Visualisation: 76% | 15 credits</li>
        <li>6CCS3HCI Human-Computer Interaction: 76% | 15 credits</li>
      </ul>

      <br/>

      <h6>Year 2: First class (1:1)</h6>
      
      <p>Highlights</p>
      <ul>
        <li>5CCS2ITR Introduction to Robotics: 95% | 15 credits</li>
        <li>5CCS2PEP Practical Experiences of Programming: 92% | 15 credits</li>
        <li>5CCS2SEG Software Engineering Group Project: 87% | 30 credits</li>
        <li>5CCS2FC2 Foundations of Computing 2: 87% | 15 credits</li>
      </ul>

      <br/>

      <h6>Year 1: First class (1:1)</h6>
      <p>Highlights</p>
      <ul>
        <li>4CCS1FC1 Foundations of Computing 1: 90% | 15 credits</li>
        <li>4CCS1ELA Elementary Logic With Applications: 87% | 15 credits</li>
        <li>4CCS1DST Data Structures: 80% | 15 credits</li>
        <li>4CCS1PPA Programming Practice and Applications: 78% | 30 credits</li>
      </ul>
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

      <div className="infoHeader">
        <h1>A Levels</h1>
        <h5>4 A Levels</h5>
        <h3>- Leyton XI Form College -</h3>
      </div>

      <hr/>

      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/python.png" alt="Python" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/csharp.png" alt="C#" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/php.png" alt="PHP" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/SQL.png" alt="SQL" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/javascript.png" alt="Javascript" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/CSS.png" alt="CSS" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/html.png" alt="HTML" loading="lazy"/>

      <hr/>
      
      <h6>2 A*-A</h6>
      <h6>236 UCAS Tariff Points</h6>

      <br/>

      <h6>Mathematics: A</h6>
      <h6>Physics: A</h6>
      <h6>Economics: B</h6>
      <h6>Computer Science: B</h6>
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

      <div className="infoHeader">
        <h1>GCSEs</h1>
        <h5>12 GCSEs</h5>
        <h3>- St.Aloysius R.C College -</h3>
      </div>

      <a href="https://www.islington.media/news/2019-gcse-results" type="submit" target="_blank" rel="noreferrer" className="file button justify-content-center text-center">
          <img className="skeleton fileImage small" src="./images/logos/WebLogo.jpg" alt="Link" loading="lazy"/>
          &nbsp;
          Islington News Article
      </a>
      
      <hr/>

      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/python.png" alt="Python" loading="lazy"/>

      <hr/>

      
      <h6>9 A*-A Equivalents</h6>

      <br/>

      <h6>Geography: 9 (A*)</h6>
      <h6>Mathematics: 8 (A*)</h6>
      <h6>Biology: 8 (A*)</h6>
      <h6>Chemistry: 8 (A*)</h6>
      <h6>English Literature: 8 (A*)</h6>
      <h6>Computer Science: 7 (A)</h6>
      <h6>Physics: 7 (A)</h6>
      <h6>Religion: 7 (A)</h6>
      <h6>Business: 7 (A)</h6>
      <h6>Further Mathematics: B</h6>
      <h6>English Language: 6 (B)</h6>
      <h6>Spanish: 4 (C)</h6>
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