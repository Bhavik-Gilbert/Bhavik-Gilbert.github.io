import React from 'react';
import { toggleClass } from '../../../../setup/components/changeClass';
import { toggleCapitalise } from '../../../../setup/components/textEffects';

function ExperienceHighlights() {
  const title = "Highlights".split("");
  
  return (
    <div className="marginTop marginBottom">
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
          <img className='highlightBoxImage' src="./images/companyLogos/JPMorganChase.jpg" alt="JPMC"></img>

          <div className='highlightBoxText'>
            <h5>Software Engineer Analyst Intern</h5>
            <br/>
            <h6>J.P Morgan Chase</h6>
            <h6>Jun 2023 - Aug 2023</h6>
          </div>
            
        </div>
        
        <div className='highlightBox marginBottom'>
          <img className='highlightBoxImage' src="./images/companyLogos/LeytonXIFormCollege.png" alt="Leyton XI Form College"></img>

          <div className='highlightBoxText'>
            <h5>Computer Science Student Mentor</h5>
            <br/>
            <h6>Leyton Sixth Form College</h6>
            <h6>Sep 2021 - Oct 2022</h6>
          </div>
        </div>

        <div className='highlightBox'>
          <img className='highlightBoxImage' src="./images/companyLogos/Funtech.png" alt="FunTech"></img>

          <div className='highlightBoxText'>
            <h5>Location Camp Manger</h5>
            <br/>
            <h6>FunTech</h6>
            <h6>Jul 2022 - Aug 2022</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceHighlights;