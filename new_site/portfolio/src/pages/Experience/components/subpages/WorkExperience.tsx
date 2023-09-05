import React from 'react';
import { toggleClass } from '../../../../setup/components/changeClass';
import { toggleCapitalise } from '../../../../setup/components/textEffects';

function WorkExperience() {
  const title = "Work".split("");
  
  return (
    <div className="textBox marginTop cardScrollBox">
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

      <div className="scrollBox">
        <div className="card long m-3">
            <img className="header" src="./images/companyLogos/JPMorganChase.jpg" alt="JPMC"></img>
            <h5>Software Engineer Analyst Intern</h5>
            <br/>
            <h6>J.P Morgan Chase</h6>
            <h6>Jun 2023 - Aug 2023</h6>
        </div>

        <div className="card long m-3">
            <img className="header" src="./images/companyLogos/LeytonXIFormCollege.png" alt="Leyton XI Form College"></img>
            <h5>Computer Science Student Mentor</h5>
            <br/>
            <h6>Leyton Sixth Form College</h6>
            <h6>Sep 2021 - Oct 2022</h6>
        </div>

        <div className="card long m-3">
            <img className="header" src="./images/companyLogos/KCL.jpg" alt="KCL"></img>
            <h5>K+ Mentor</h5>
            <br/>
            <h6>King's College London</h6>
            <h6>Jan 2022 - Dec 2022</h6>
        </div>

        <div className="card long m-3">
            <img className="header" src="./images/companyLogos/Funtech.png" alt="FunTech"></img>
            <h5>Location Camp Manger</h5>
            <br/>
            <h6>FunTech</h6>
            <h6>Jul 2022 - Aug 2022</h6>
        </div>

        <div className="card long m-3">
            <img className="header" src="./images/companyLogos/Funtech.png" alt="FunTech"></img>
            <h5>Computer Science Teacher</h5>
            <br/>
            <h6>FunTech</h6>
            <h6>Jul 2021 - Aug 2021</h6>
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;