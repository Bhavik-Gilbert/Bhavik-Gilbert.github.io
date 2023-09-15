import React from 'react';

import  { closeElements } from '../../../../../setup/components/displayControls';

function KPlusMentorKCL() {
  return (
    <div className="overlayInfo" id="k+MentorKCL">
      <div className="topRight">
        <div className="file button marginLeft" onClick={(e) => closeElements(["workExperienceOverlay", "k+MentorKCL"])}>
          &#10005;
        </div>
      </div>

      <h1>K+ Mentor</h1>
      <h5>Jan 2022 - Dec 2022</h5>
      <h3>- King's College London -</h3>

      <a href="https://kplus.london/maths-computer-science/" type="submit" target="_blank" className="file button justify-content-center text-center">
          <img className="skeleton fileImage small " src="./images/logos/WebLogo.jpg" alt="Link" loading="lazy"/>
          &nbsp;
          Website
      </a>

      <hr/>

      <ul>
        <li>Maths & Computer Science Subject Stream</li>
      </ul>
    </div>
  );
}


function FuntechComputerScienceTeacher() {
  return (
    <div className="overlayInfo" id="funtechComputerScienceTeacher">
      <div className="topRight">
        <div className="file button marginLeft" onClick={(e) => closeElements(["workExperienceOverlay", "funtechComputerScienceTeacher"])}>
          &#10005;
        </div>
      </div>

      <h1>Computer Science Teacher</h1>
      <h5>Jul 2021 - Aug 2021</h5>
      <h3>- Funtech -</h3>

      <a href="https://funtech.co.uk/" type="submit" target="_blank" className="file button justify-content-center text-center">
          <img className="skeleton fileImage small" src="./images/logos/WebLogo.jpg" alt="Link" loading="lazy"/>
          &nbsp;
          Website
      </a>
      
      <hr/>

      <img className="skeleton fileImage small marginRight" src="./images/techLogos/python.png" alt="Python" loading="lazy"/>
      <img className="skeleton fileImage small marginRight" src="./images/techLogos/c++.png" alt="C++" loading="lazy"/>
      
      <hr/>
      
      <h6>Tkinter | Google Vision | NumPy | PIL | Tensorflow</h6>

      <hr/>

      <ul>
        <li>
          Taught students topics across many different areas of computer science including:
          <ul>
            <li>AI and Machine Learning (Tensorflow)</li>
            <li>Cyber Security (Kali Linux)</li>
            <li>3D Game Development (Unreal Engine 4)</li>
            <li>Lego Robotics</li>
            <li>Python (OOP)</li>
          </ul>
        </li>
        <li>Engaged and managed students to ensure they enjoyed themselves and learned effectively</li>
        <li>Answering any queries or problems that the clients may have</li>
      </ul>
    </div>
  );
}


function WorkExperienceInfo() {
  return (
    <div className="overlayBackground" id="workExperienceOverlay">
      <FuntechComputerScienceTeacher/>
      <KPlusMentorKCL/>
    </div>      
  );
}

export default WorkExperienceInfo;