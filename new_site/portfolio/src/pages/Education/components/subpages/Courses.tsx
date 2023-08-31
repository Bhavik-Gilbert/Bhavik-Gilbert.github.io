import React from 'react';
import { toggleClass } from '../../../../setup/components/changeClass';
import { toggleCapitalise } from '../../../../setup/components/textEffects';

function Courses() {
  const title = "Courses".split("");
  
  return (
    <>
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
            <img className="header" src="./images/companyLogos/Harvard.png" alt="Harvard University"></img>
            <h5>CS50x</h5>
            <br/>
            <h6>Harvard University</h6>
        </div>

        <div className="card long m-3">
            <img className="header" src="./images/companyLogos/JPMorganChase.jpg" alt="JPMC"></img>
            <h5>Software Engineering Virtual Experience</h5>
            <br/>
            <h6>J.P Morgan Chase & Co</h6>
        </div>

        <div className="card long m-3">
            <img className="header" src="./images/companyLogos/Oxford.png" alt="Oxford University"></img>
            <h5>Uniq Digital</h5>
            <h6>R-Studio Course</h6>
            <br/>
            <h6>Oxford University</h6>
        </div>

        <div className="card long m-3">
            <img className="header" src="./images/companyLogos/OpenLearn.jpg" alt="OpenLearn University"></img>
            <h5>Design Thinking</h5>
            <br/>
            <h6>OpenLearn University</h6>
        </div>

        <div className="card long m-3">
            <img className="header" src="./images/companyLogos/OpenLearn.jpg" alt="OpenLearn University"></img>
            <h5>An Introduction to Software Development</h5>
            <br/>
            <h6>OpenLearn University</h6>
        </div>

        <div className="card long m-3">
            <img className="header" src="./images/companyLogos/OpenLearn.jpg" alt="OpenLearn University"></img>
            <h5>Technological Innovation: A Resource-Based View</h5>
            <br/>
            <h6>OpenLearn University</h6>
        </div>

        <div className="card long m-3">
            <img className="header" src="./images/companyLogos/OpenLearn.jpg" alt="OpenLearn University"></img>
            <h5>Computers and Computer Systems</h5>
            <br/>
            <h6>OpenLearn University</h6>
        </div>
      </div>
    </>
  );
}

export default Courses;