import React, {useEffect} from 'react';

import CoursesInfo from './infoOverlays/CoursesInfo';
import  { openElements } from '../../../../setup/components/displayControls';
import { toggleClass, toggleCollapsible } from '../../../../setup/components/changeClass';
import { toggleCapitalise } from '../../../../setup/components/textEffects';
import { collapseEventListeners } from '../../../../setup/components/eventListeners';

function Courses() {
  const title = "Courses".split("");

  useEffect(() => {
    collapseEventListeners(["coursesScrollBox"]);
  }, []);
  
  return (
    <>
        <div className="textBox marginTop cardScrollBox">
        <div className="marginTop marginBottom">
            {title.map((titleChar: string, titleCharIndex: number) => (
                <div className="h3 byLetter marginBottom" id={"coursesTitle" + titleCharIndex + titleChar} key={"coursesTitle" + titleCharIndex + titleChar} 
                onClick={(() => {
                    toggleClass("coursesTitle" + titleCharIndex + titleChar, "h3", "h3Hold");
                    toggleCapitalise("coursesTitle" + titleCharIndex + titleChar);
                })}>
                    {titleChar}
                </div>
            ))}
        </div>

        <div className="file button marginBottom" id="coursesScrollBoxCollapseButton" onClick={(e) => toggleCollapsible("coursesScrollBox", "scrollBox")}>
            Expand
        </div>

        <div className="scrollBox" id="coursesScrollBox">
            <div className="card long m-3" onClick={(e) => openElements(["coursesOverlay", "cs50"])}>
                <img className="skeleton header" src="./images/companyLogos/Harvard.png" alt="Harvard University" loading="lazy"/>
                <h5>CS50x</h5>
                <br/>
                <h6>Harvard University</h6>
                <br/>
                <div className="file button marginTop">
                    More Info
                </div>
            </div>

            <div className="card long m-3" onClick={(e) => openElements(["coursesOverlay", "jpSoftwareEngineeringVirtualExperience"])}>
                <img className="skeleton header" src="./images/companyLogos/JPMorganChase.jpg" alt="JPMC" loading="lazy"/>
                <h5>Software Engineering Virtual Experience</h5>
                <br/>
                <h6>J.P Morgan Chase & Co</h6>
                <br/>
                <div className="file button marginTop">
                    More Info
                </div>
            </div>

            <div className="card long m-3" onClick={(e) => openElements(["coursesOverlay", "uniqDigital"])}>
                <img className="skeleton header" src="./images/companyLogos/Oxford.png" alt="Oxford University" loading="lazy"/>
                <h5>Uniq Digital</h5>
                <h6>R-Studio Course</h6>
                <br/>
                <h6>Oxford University</h6>
                <br/>
                <div className="file button marginTop">
                    More Info
                </div>
            </div>

            <div className="card long m-3" onClick={(e) => openElements(["coursesOverlay", "ouDesignThinking"])}>
                <img className="skeleton header" src="./images/companyLogos/OpenLearn.jpg" alt="OpenLearn University" loading="lazy"/>
                <h5>Design Thinking</h5>
                <br/>
                <h6>OpenLearn University</h6>
                <br/>
                <div className="file button marginTop">
                    More Info
                </div>
            </div>

            <div className="card long m-3" onClick={(e) => openElements(["coursesOverlay", "ouIntroductiontoSoftwareDevelopment"])}>
                <img className="skeleton header" src="./images/companyLogos/OpenLearn.jpg" alt="OpenLearn University" loading="lazy"/>
                <h5>An Introduction to Software Development</h5>
                <br/>
                <h6>OpenLearn University</h6>
                <br/>
                <div className="file button marginTop">
                    More Info
                </div>
            </div>

            <div className="card long m-3" onClick={(e) => openElements(["coursesOverlay", "ouTechnologicalInnovation"])}>
                <img className="skeleton header" src="./images/companyLogos/OpenLearn.jpg" alt="OpenLearn University" loading="lazy"/>
                <h5>Technological Innovation: A Resource-Based View</h5>
                <br/>
                <h6>OpenLearn University</h6>
                <br/>
                <div className="file button marginTop">
                    More Info
                </div>
            </div>

            <div className="card long m-3" onClick={(e) => openElements(["coursesOverlay", "ouComputersandComputerSystems"])}>
                <img className="skeleton header" src="./images/companyLogos/OpenLearn.jpg" alt="OpenLearn University" loading="lazy"/>
                <h5>Computers and Computer Systems</h5>
                <br/>
                <h6>OpenLearn University</h6>
                <br/>
                <div className="file button marginTop">
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