import React from 'react';

import CoursesInfo from './infoOverlays/CoursesInfo';
import  { openElements } from '../../../../setup/components/displayControls';
import { toggleClass } from '../../../../setup/components/changeClass';
import { toggleCapitalise } from '../../../../setup/components/textEffects';

function Courses() {
  const title = "Courses".split("");
  
  return (
    <>
        <div className="textBox marginTop cardScrollBox">
        <div className="marginTop marginBottom">
            {title.map((titleChar: string, titleCharIndex: number) => (
                <div className="h3 byLetter marginBottom" id={"coursesTitle" + titleCharIndex + titleChar} key={"coursesTitle" + titleCharIndex + titleChar} 
                onClick={(() => {
                    toggleClass("coursesTitle" + titleCharIndex + titleChar, "h3 byLetter marginBottom", "h3Hold byLetter marginBottom");
                    toggleCapitalise("coursesTitle" + titleCharIndex + titleChar);
                })}>
                    {titleChar}
                </div>
            ))}
        </div>

        <div className="scrollBox">
            <div className="card long m-3">
                <img className="skeleton header" src="./images/companyLogos/Harvard.png" alt="Harvard University" loading="lazy"/>
                <h5>CS50x</h5>
                <br/>
                <h6>Harvard University</h6>
                <div className="file button marginTop" onClick={(e) => openElements(["coursesOverlay", "cs50"])}>
                    More Info
                </div>
            </div>

            <div className="card long m-3">
                <img className="skeleton header" src="./images/companyLogos/JPMorganChase.jpg" alt="JPMC" loading="lazy"/>
                <h5>Software Engineering Virtual Experience</h5>
                <br/>
                <h6>J.P Morgan Chase & Co</h6>
                <div className="file button marginTop" onClick={(e) => openElements(["coursesOverlay", "jpSoftwareEngineeringVirtualExperience"])}>
                    More Info
                </div>
            </div>

            <div className="card long m-3">
                <img className="skeleton header" src="./images/companyLogos/Oxford.png" alt="Oxford University" loading="lazy"/>
                <h5>Uniq Digital</h5>
                <h6>R-Studio Course</h6>
                <br/>
                <h6>Oxford University</h6>
                <div className="file button marginTop" onClick={(e) => openElements(["coursesOverlay", "uniqDigital"])}>
                    More Info
                </div>
            </div>

            <div className="card long m-3">
                <img className="skeleton header" src="./images/companyLogos/OpenLearn.jpg" alt="OpenLearn University" loading="lazy"/>
                <h5>Design Thinking</h5>
                <br/>
                <h6>OpenLearn University</h6>
                <div className="file button marginTop" onClick={(e) => openElements(["coursesOverlay", "ouDesignThinking"])}>
                    More Info
                </div>
            </div>

            <div className="card long m-3">
                <img className="skeleton header" src="./images/companyLogos/OpenLearn.jpg" alt="OpenLearn University" loading="lazy"/>
                <h5>An Introduction to Software Development</h5>
                <br/>
                <h6>OpenLearn University</h6>
                <div className="file button marginTop" onClick={(e) => openElements(["coursesOverlay", "ouIntroductiontoSoftwareDevelopment"])}>
                    More Info
                </div>
            </div>

            <div className="card long m-3">
                <img className="skeleton header" src="./images/companyLogos/OpenLearn.jpg" alt="OpenLearn University" loading="lazy"/>
                <h5>Technological Innovation: A Resource-Based View</h5>
                <br/>
                <h6>OpenLearn University</h6>
                <div className="file button marginTop" onClick={(e) => openElements(["coursesOverlay", "ouTechnologicalInnovation"])}>
                    More Info
                </div>
            </div>

            <div className="card long m-3">
                <img className="skeleton header" src="./images/companyLogos/OpenLearn.jpg" alt="OpenLearn University" loading="lazy"/>
                <h5>Computers and Computer Systems</h5>
                <br/>
                <h6>OpenLearn University</h6>
                <div className="file button marginTop" onClick={(e) => openElements(["coursesOverlay", "ouComputersandComputerSystems"])}>
                    More Info
                </div>
            </div>
        </div>
        </div>

        <CoursesInfo/>
    </>
  );
}

export default Courses;