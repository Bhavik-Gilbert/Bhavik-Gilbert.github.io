import React, {useEffect} from 'react';

import ExperiencesInfo from './infoOverlays/ExperiencesInfo';
import  { openElements } from '../../../../setup/components/displayControls';
import { toggleClass, toggleCollapsible } from '../../../../setup/components/changeClass';
import { toggleCapitalise } from '../../../../setup/components/textEffects';
import { collapseEventListeners } from '../../../../setup/components/eventListeners';

function Experiences() {
  const title = "Experiences".split("");

  useEffect(() => {
    collapseEventListeners(["experiencesScrollBox"]);
  }, []);
  
  return (
    <>
        <div className="textBox marginTop cardScrollBox">
            <div className="marginTop marginBottom">
                {title.map((titleChar: string, titleCharIndex: number) => (
                    <div className="h3 byLetter marginBottom" id={"experiencesTitle" + titleCharIndex + titleChar} key={"experiencesTitle" + titleCharIndex + titleChar} 
                    onClick={(() => {
                        toggleClass("experiencesTitle" + titleCharIndex + titleChar, "h3", "h3Hold");
                        toggleCapitalise("experiencesTitle" + titleCharIndex + titleChar);
                    })}>
                        {titleChar}
                    </div>
                ))}
            </div>
            
            <div className="file button marginBottom" id="experiencesScrollBoxCollapseButton" onClick={(e) => toggleCollapsible("experiencesScrollBox", "scrollBox")}>
                Expand
            </div>

            <div className="scrollBox" id="experiencesScrollBox">
                <div className="card long m-3" onClick={(e) => openElements(["experiencesOverlay", "expediaCareerDiscoveryProgram"])}>
                    <img className="skeleton header" src="./images/companyLogos/Expedia.jpg" alt="Expedia" loading="lazy"/>
                    <h5>Expedia Career Discovery Program</h5>
                    <br/>
                    <h6>Expedia</h6>
                    <h6>Jul 2022</h6>
                    <br/>
                    <div className="file button marginTop">
                        More Info
                    </div>
                </div>

                <div className="card long m-3" onClick={(e) => openElements(["experiencesOverlay", "internshipExperienceUK2022"])}>
                    <img className="skeleton header" src="./images/companyLogos/BrightNetwork.jpg" alt="BrightNetwork" loading="lazy"/>
                    <h5>Internship Experience UK 2022: On Demand - Technology</h5>
                    <br/>
                    <h6>Bright Network</h6>
                    <h6>Jun 2022 - Jul 2022</h6>
                    <br/>
                    <div className="file button marginTop">
                        More Info
                    </div>
                </div>

                <div className="card long m-3" onClick={(e) => openElements(["experiencesOverlay", "jpSpringInsightintoSoftwareEngineering"])}>
                    <img className="skeleton header" src="./images/companyLogos/JPMorganChase.jpg" alt="JPMC" loading="lazy"/>
                    <h5>Spring Insight into Software Engineering</h5>
                    <br/>
                    <h6>J.P Morgan Chase & Co</h6>
                    <h6>Apr 2022</h6>
                    <br/>
                    <div className="file button marginTop">
                        More Info
                    </div>
                </div>

                <div className="card long m-3" onClick={(e) => openElements(["experiencesOverlay", "consultingWorkExperiencewithDeloitte"])}>
                    <img className="skeleton header" src="./images/companyLogos/Deloitte.webp" alt="Deloitte" loading="lazy"/>
                    <h5>Consulting Work Experience with Deloitte</h5>
                    <br/>
                    <h6>Springpod</h6>
                    <h6>Aug 2021</h6>
                    <br/>
                    <div className="file button marginTop">
                        More Info
                    </div>
                </div>

                <div className="card long m-3" onClick={(e) => openElements(["experiencesOverlay", "technologyVirtualWorkExperience"])}>
                    <img className="skeleton header" src="./images/companyLogos/Springpod.png" alt="Springpod" loading="lazy"/>
                    <h5>Technology Virtual Work Experience</h5>
                    <br/>
                    <h6>Springpod</h6>
                    <h6>Apr 2021</h6>
                    <br/>
                    <div className="file button marginTop">
                        More Info
                    </div>
                </div>
            </div>
        </div>

        <ExperiencesInfo/>
    </>
  );
}

export default Experiences;