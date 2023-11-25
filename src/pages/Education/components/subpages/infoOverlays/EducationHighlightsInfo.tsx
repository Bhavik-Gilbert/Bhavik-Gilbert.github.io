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
        <h5>Undegraduate</h5>
        <h3>- King's College London -</h3>
      </div>

      <hr/>

      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/python.png" alt="Python" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/c++.png" alt="C++" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/java.png" alt="Java" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/scala.png" alt="Scala" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/SQL.png" alt="SQL" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/javascript.png" alt="Javascript" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/CSS.png" alt="CSS" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/html.png" alt="HTML" loading="lazy"/>

      <hr/>

      <h6>Django | Javafx | ROS | InfOS</h6>

      <hr/>

      <h6>Average: First (1st) class with honours</h6>

      <br/>

      <h6>Year 2: First (1st) class with honours</h6>
      
      <p>Highlights</p>
      <ul>
        <li>Introduction to Robotics: 95% | 15 credits</li>
        <li>Practical Experiences of Programming: 92% | 15 credits</li>
        <li>Software Engineering Group Project: 87% | 30 credits</li>
        <li>Foundations of Computing 2: 87% | 15 credits</li>
      </ul>

      <br/>

      <h6>Year 1: First (1st) class with honours</h6>
      <p>Highlights</p>
      <ul>
        <li>Foundations of Computing 1: 90% | 15 credits</li>
        <li>Elementary Logic With Applications: 87% | 15 credits</li>
        <li>Data Structures: 80% | 15 credits</li>
        <li>Programming Practice and Applications: 78% | 30 credits</li>
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

      <a href="https://www.islington.media/news/2019-gcse-results" type="submit" target="_blank" className="file button justify-content-center text-center">
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