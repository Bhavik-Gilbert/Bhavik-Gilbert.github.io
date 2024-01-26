import React from 'react';

import  { closeElements } from '../../../../../setup/components/displayControls';

function BPuzzled() {
  return (
    <div className="overlayInfo" id="bpuzzled">
      <div className="topRight">
        <div className="file button marginLeft" onClick={(e) => closeElements(["hackathonsOverlay", "bpuzzled"])}>
          &#10005;
        </div>
      </div>

      <div className="infoHeader">
        <h1>Bloomberg BPuzzled</h1>
        <h5>Jan 2024</h5>
        <h3>- Bloomberg -</h3>
      </div>

      <a href="https://careers.jpmorgan.com/us/en/students/programs/code-for-good" type="submit" target="_blank" rel="noreferrer" className="file button justify-content-center text-center">
          <img className="skeleton fileImage small" src="./images/logos/WebLogo.jpg" alt="Link" loading="lazy"/>
          &nbsp;
          Website
      </a>

      <hr/>

      <p>Created by Bloomberg Engineers, BPuzzled is a competition where contestants use problem solving, creative thinking, and teamwork to solve challenging and intricate puzzles that are logical in nature, similar to those found in escape rooms.</p>

      <hr/>
      <p>Worked in a team of 4 to achieve the joint highest score in the challenge amongst those participating in KCL.</p>
      <img className="skeleton header looseImage" src="./images/general/Bloomberg BPuzzled.png" alt="Bloomberg" loading="lazy"/>
    </div>
  );
}

function CodeForGood() {
  return (
    <div className="overlayInfo" id="codeForGood">
      <div className="topRight">
        <div className="file button marginLeft" onClick={(e) => closeElements(["hackathonsOverlay", "codeForGood"])}>
          &#10005;
        </div>
      </div>

      <div className="infoHeader">
        <h1>Code For Good</h1>
        <h5>Nov 2022</h5>
        <h3>- J.P Morgan Chase & Co -</h3>
      </div>

      <a href="https://careers.jpmorgan.com/us/en/students/programs/code-for-good" type="submit" target="_blank" rel="noreferrer" className="file button justify-content-center text-center">
          <img className="skeleton fileImage small" src="./images/logos/WebLogo.jpg" alt="Link" loading="lazy"/>
          &nbsp;
          Website
      </a>

      <hr/>

      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/python.png" alt="Python" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/SQL.png" alt="SQL" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/javascript.png" alt="Javascript" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/CSS.png" alt="CSS" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/html.png" alt="HTML" loading="lazy"/>
      
      <hr/>

      <h6>Flask | Node | React</h6>

      <hr/>

      <p>Code for Good is an opportunity for university students to brainstorm alongside developing MVPs for twenty-four hours on how nonprofits can solve a challenge that they're facing.</p>

      <ul>
        <li>NGO: DeafBlindUK</li>
        <li>Partially blind friendly social media and events app including:
          <ul>
            <li>Facial recognition login/signup</li>
            <li>Image daltonization</li>
            <li>Inbuilt unlimited image zoom</li>
          </ul>
        </li>
      </ul>
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

      <div className="infoHeader">
        <h1>Polygon x Easy A</h1>
        <h5>Oct 2022</h5>
        <h3>- Polygon -</h3>
      </div>

      <a href="https://www.easya.io/events/polygon-x-easya-hackathon" type="submit" target="_blank" rel="noreferrer" className="file button justify-content-center text-center">
          <img className="skeleton fileImage small" src="./images/logos/WebLogo.jpg" alt="Link" loading="lazy"/>
          &nbsp;
          Website
      </a>

     <hr/>

      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/SQL.png" alt="SQL" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/javascript.png" alt="Javascript" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/CSS.png" alt="CSS" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/html.png" alt="HTML" loading="lazy"/>
      
      <hr/>

      <h6>Node | React</h6>
      
      <hr/>

      <p>Hackathon to demonstrate versatility of blockchain technologies using the Polygon network.</p>

      <ul>
        <li>Crowd funded charity donation application
          <ul>
            <li>Users donate to a given category</li>
            <li>Every quarter, the final pot for each category will be split between the partnered smaller charities from that category</li>
            <li>Helps to prove where money goes as everything is on-chain</li>
            <li>Promotes donating to smaller lesser known charities</li>
          </ul>
        </li>
      </ul>
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

      <div className="infoHeader">
        <h1>Meta Global Hackathon</h1>
        <h5>Sept 2022</h5>
        <h3>- Meta -</h3>
      </div>

      <a href="https://metaglobalhackon2022.splashthat.com/" type="submit" target="_blank" rel="noreferrer" className="file button justify-content-center text-center">
          <img className="skeleton fileImage small" src="./images/logos/WebLogo.jpg" alt="Link" loading="lazy"/>
          &nbsp;
          Website
      </a>

      <hr/>

      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/python.png" alt="Python" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/CSS.png" alt="CSS" loading="lazy"/>
      
      <hr/>

      <ul>
        <li>Top 400 finisher</li>
        <li>Participated in activities such as Coding Challenge, Linux Challenge, Find the Bug Challenge and more</li>
      </ul>
    </div>
  );
}

function WorkExperienceInfo() {
  return (
    <div className="overlayBackground" id="hackathonsOverlay">
      <BPuzzled/>
      <CodeForGood/>
      <PolygonxEasyA/>
      <MetaGlobalHackathon/>
    </div>      
  );
}

export default WorkExperienceInfo;