import React from 'react';

import  { closeElements } from '../../../../../setup/components/displayControls';

function ExpediaCareerDiscoveryProgram() {
  return (
    <div className="overlayInfo" id="expediaCareerDiscoveryProgram">
      <div className="topRight">
        <div className="file button marginLeft" onClick={(e) => closeElements(["experiencesOverlay", "expediaCareerDiscoveryProgram"])}>
          &#10005;
        </div>
      </div>

      <div className="infoHeader">
        <h1>Expedia Career Discovery Program</h1>
        <h5>Jul 2022</h5>
        <h3>- Expedia -</h3>
      </div>

      <hr/>

      <ul>
        <li>The Expedia Career Discovery Program is a great opportunity for students and is designed for underrepresented identities in tech to learn core career & technology skills</li>
        <li>As part of the program, you'll also get the chance to connect with our current Graduates and hear more about their own career journeys at Expedia Group</li>
      </ul>
    </div>
  );
}


function InternshipExperienceUK2022() {
  return (
    <div className="overlayInfo" id="internshipExperienceUK2022">
      <div className="topRight">
        <div className="file button marginLeft" onClick={(e) => closeElements(["experiencesOverlay", "internshipExperienceUK2022"])}>
          &#10005;
        </div>
      </div>

      <div className="infoHeader">
        <h1>Internship Experience UK 2022: On Demand - Technology</h1>
        <h5>Jun 2022 - Jul 2022</h5>
        <h3>- Bright Network -</h3>
      </div>

      <a href="./files/certificates/InternshipExperienceUK2022OnDemandTechnology.pdf" type="submit" target="_blank" className="file button justify-content-center text-center">
          <img className="skeleton fileImage small" src="./images/logos/PDFLogo.png" alt="PDF" loading="lazy"/>
          &nbsp;
          Certificate
      </a>
      <a href="https://www.brightnetwork.co.uk/certificates/internship-experience-uk-2022-_c8rvgnjonx89kf/" type="submit" target="_blank" rel="noreferrer" className="file button justify-content-center text-center">
          <img className="skeleton fileImage small" src="./images/logos/WebLogo.jpg" alt="Link" loading="lazy"/>
          &nbsp;
          Web Certificate
      </a>
      
      <hr/>

      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/python.png" alt="Python" loading="lazy"/>

      <hr/>

      <ul>
        <li>Technology Pathway</li>
        <li>Worked on projects such as an A-Star pathfinding algorithm task set by Amazon, based on the usage of sorting robots in their delivery warehouses</li>
      </ul> 
    </div>
  );
}


function JPSpringInsightintoSoftwareEngineering() {
  return (
    <div className="overlayInfo" id="jpSpringInsightintoSoftwareEngineering">
      <div className="topRight">
        <div className="file button marginLeft" onClick={(e) => closeElements(["experiencesOverlay", "jpSpringInsightintoSoftwareEngineering"])}>
          &#10005;
        </div>
      </div>

      <div className="infoHeader">
        <h1>Spring Insight into Software Engineering</h1>
        <h5>Apr 2022</h5>
        <h3>- J.P Morgan Chase & Co -</h3>
      </div>

      <hr/>

      <ul>
        <li>Learnt about the different career pathways that JPMorgan offer, alongside some of the technologies implemented and day-to-day workings of the firm</li>
        <li>Talks and activities included: 
          <ul>
            <li>Empathy within development</li>
            <li>Code quality and reliability</li>
            <li>UX design</li>
            <li>Efficient problem solving</li>
            <li>Cyber security</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}


function ConsultingWorkExperiencewithDeloitte() {
  return (
    <div className="overlayInfo" id="consultingWorkExperiencewithDeloitte">
      <div className="topRight">
        <div className="file button marginLeft" onClick={(e) => closeElements(["experiencesOverlay", "consultingWorkExperiencewithDeloitte"])}>
          &#10005;
        </div>
      </div>

      <div className="infoHeader">
        <h1>Consulting Work Experience with Deloitte</h1>
        <h5>Aug 2021</h5>
        <h3>- Springpod -</h3>
      </div>

      <a href="./files/certificates/ConsultingWorkExperiencewithDeloitte.pdf" type="submit" target="_blank" className="file button justify-content-center text-center">
          <img className="skeleton fileImage small" src="./images/logos/PDFLogo.png" alt="PDF" loading="lazy"/>
          &nbsp;
          Certificate
      </a>

      <hr/>

      <ul>
        <li>A sound understanding of the inner workings and concepts related to technology, and the ability to identify the skills needed to pursue a career in this sector</li>
        <li>The ability to successfully apply knowledge of the technology sector by completing quizzes, interactive exercises and activities</li>
        <li>Meaningful interaction with industry professionals through live webinars</li>
        <li>A better understanding of the career pathways within technology</li>
        <li>Knowledge of key employability and transferable skills, as well as a sound awareness of employer expectations</li>
      </ul>
    </div>
  );
}


function TechnologyVirtualWorkExperience() {
  return (
    <div className="overlayInfo" id="technologyVirtualWorkExperience">
      <div className="topRight">
        <div className="file button marginLeft" onClick={(e) => closeElements(["experiencesOverlay", "technologyVirtualWorkExperience"])}>
          &#10005;
        </div>
      </div>

      <div className="infoHeader">
        <h1>Technology Virtual Work Experience</h1>
        <h5>Apr 2021</h5>
        <h3>- Springpod -</h3>
      </div>

      <a href="./files/certificates/TechnologyVirtualWorkExperienceSpringpod.pdf" type="submit" target="_blank" className="file button justify-content-center text-center">
          <img className="skeleton fileImage small" src="./images/logos/PDFLogo.png" alt="PDF" loading="lazy"/>
          &nbsp;
          Certificate
      </a>

      <hr/>

      <ul>
        <li>A sound understanding of the inner workings and concepts related to technology, and the ability to identify the skills needed to pursue a career in this sector</li>
        <li>The ability to successfully apply knowledge of the technology sector by completing quizzes, interactive exercises and activities</li>
        <li>Meaningful interaction with industry professionals through live webinars</li>
        <li>A better understanding of the career pathways within technology</li>
        <li>Knowledge of key employability and transferable skills, as well as a sound awareness of employer expectations</li>
      </ul>
    </div>
  );
}


function ExperiencesInfo() {
  return (
    <div className="overlayBackground" id="experiencesOverlay">
      <ExpediaCareerDiscoveryProgram/>
      <InternshipExperienceUK2022/>
      <JPSpringInsightintoSoftwareEngineering/>
      <ConsultingWorkExperiencewithDeloitte/>
      <TechnologyVirtualWorkExperience/>
    </div>      
  );
}

export default ExperiencesInfo;