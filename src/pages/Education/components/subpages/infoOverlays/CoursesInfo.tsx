import React from 'react';

import  { closeElements } from '../../../../../setup/components/displayControls';

function CS50X() {
    return (
        <div className="overlayInfo" id="cs50">
            <div className="topRight">
                <div className="file button marginLeft" onClick={(e) => closeElements(["coursesOverlay", "cs50"])}>
                &#10005;
                </div>
            </div>

            <h1>CS50x</h1>
            <h3>- Harvard University -</h3>
            
            <a href="https://certificates.cs50.io/5144cbf9-40a0-49b2-8f32-329c7e7f9b35.pdf?size=letter" type="submit" target="_blank" className="file button justify-content-center text-center">
                <img className="skeleton fileImage small" src="./images/logos/WebLogo.jpg" alt="Link" loading="lazy"/>
                &nbsp;
                Certificate
            </a>

            <hr/>

            <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/python.png" alt="Python" loading="lazy"/>
            <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/c.png" alt="C" loading="lazy"/>
            <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/SQL.png" alt="SQL" loading="lazy"/>
            <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/CSS.png" alt="CSS" loading="lazy"/>
            <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/html.png" alt="HTML" loading="lazy"/>

            <hr/>

            <h6>Flask</h6>

            <hr/>

            <ul>
                <li>10 weeks of lectures</li>
                <li>10 Problem sets</li>
                <li>8 Labs</li>
                <li>1 Final Project</li>
            </ul>
        </div>
    );
}


function JPSoftwareEngineeringVirtualExperience() {
    return (
        <div className="overlayInfo" id="jpSoftwareEngineeringVirtualExperience">
            <div className="topRight">
                <div className="file button marginLeft" onClick={(e) => closeElements(["coursesOverlay", "jpSoftwareEngineeringVirtualExperience"])}>
                &#10005;
                </div>
            </div>

            <h1>Software Engineering</h1>
            <h5>Virtual Experience</h5>
            <h3>- J.P Morgan Chase & Co -</h3>

            <a href="https://insidesherpa.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_JPMorgan%20Chase_znzZkM8qP52Cxx5zK_1641498096553_completion_certificate.pdf" type="submit" target="_blank" className="file button justify-content-center text-center">
                <img className="skeleton fileImage small" src="./images/logos/WebLogo.jpg" alt="Link" loading="lazy"/>
                &nbsp;
                Certificate
            </a>

            <hr/>

            <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/python.png" alt="Python" loading="lazy"/>

            <hr/>
            
            <p>The Forage certification offered a great learning experience, providing a better understanding of the development of fintech services, alongside a deeper dive into web applications and financial analysis.</p>
            <ul>
                <li>Task 1 : Interface with a stock price data feed</li>
                <li>Task 2 : Use JPMorgan Chase frameworks and tools</li>
                <li>Task 3 : Display data visually for traders</li>
            </ul>
        </div>
    );
}


function UniqDigital() {
    return (
        <div className="overlayInfo" id="uniqDigital">
            <div className="topRight">
                <div className="file button marginLeft" onClick={(e) => closeElements(["coursesOverlay", "uniqDigital"])}>
                &#10005;
                </div>
            </div>

            <h1>Uniq Digital</h1>
            <h5>R-Studio Course</h5>
            <h3>- Oxford University -</h3>

            <a href="https://www.uniq.ox.ac.uk/uniqdigital" type="submit" target="_blank" className="file button justify-content-center text-center">
                <img className="skeleton fileImage small" src="./images/logos/WebLogo.jpg" alt="Link" loading="lazy"/>
                &nbsp;
                Website
            </a>

            <hr/>

            <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/R.png" alt="R Studio" loading="lazy"/>

            <hr/>

            <ul>
                <li>An online programme run by Oxford University connecting current students to prospective students</li>
                <li>Focus was on giving us resources to better prepare for the university application process through tasks such as research projects and essay writing</li>
                <li>An optional R-Studio programming course was provided, which gave an in-depth explanation and understanding of the language with a programming test to gauge what we learnt, where I achieved 95/100</li>
            </ul>
        </div>
    );
}


function OUDesignThinking() {
    return (
        <div className="overlayInfo" id="ouDesignThinking">
            <div className="topRight">
                <div className="file button marginLeft" onClick={(e) => closeElements(["coursesOverlay", "ouDesignThinking"])}>
                &#10005;
                </div>
            </div>

            <h1>Design Thinking</h1>
            <h3>- OpenLearn University -</h3>

            <a href="./files/courses/Design Thinking U101_1_statement.pdf" type="submit" target="_blank" className="file button justify-content-center text-center">
                <img className="skeleton fileImage small" src="./images/logos/PDFLogo.png" alt="PDF" loading="lazy"/>
                &nbsp;
                Certificate
            </a>

            <hr/>

            <p>An adapted extract from the Open University course U101Design thinking: creativity for the 21st century.</p>
        </div>
    );
}


function OUIntroductiontoSoftwareDevelopment() {
    return (
        <div className="overlayInfo" id="ouIntroductiontoSoftwareDevelopment">
            <div className="topRight">
                <div className="file button marginLeft" onClick={(e) => closeElements(["coursesOverlay", "ouIntroductiontoSoftwareDevelopment"])}>
                &#10005;
                </div>
            </div>

            <h1>Introduction to Software Development</h1>
            <h3>- OpenLearn University -</h3>

            <a href="./files/courses/An Introduction to Software Development M813_1_statement.pdf" type="submit" target="_blank" className="file button justify-content-center text-center">
                <img className="skeleton fileImage small" src="./images/logos/PDFLogo.png" alt="PDF" loading="lazy"/>
                &nbsp;
                Certificate
            </a>

            <hr/>

            <p>An adapted extract from the Open University course M813 Software development.</p>
        </div>
    );
}


function OUTechnologicalInnovation() {
    return (
        <div className="overlayInfo" id="ouTechnologicalInnovation">
            <div className="topRight">
                <div className="file button marginLeft" onClick={(e) => closeElements(["coursesOverlay", "ouTechnologicalInnovation"])}>
                &#10005;
                </div>
            </div>

            <h1>Technological Innovation</h1>
            <h5>A Resource-Based View</h5>
            <h3>- OpenLearn University -</h3>

            <a href="./files/courses/Technological Innovation a Resource-Based T849_1_statement.pdf" type="submit" target="_blank" className="file button justify-content-center text-center">
                <img className="skeleton fileImage small" src="./images/logos/PDFLogo.png" alt="PDF" loading="lazy"/>
                &nbsp;
                Certificate
            </a>

            <hr/>

            <p>An adapted extract from the Open University course T849 Strategic capabilities for technological innovation.</p>
        </div>
    );
}


function OUComputersandComputerSystems() {
    return (
        <div className="overlayInfo" id="ouComputersandComputerSystems">
            <div className="topRight">
                <div className="file button marginLeft" onClick={(e) => closeElements(["coursesOverlay", "ouComputersandComputerSystems"])}>
                &#10005;
                </div>
            </div>

            <h1>Computers and Computer Systems</h1>
            <h3>- OpenLearn University -</h3>

            <a href="./files/courses/Computers and Computer Systems T224_1_statement.pdf" type="submit" target="_blank" className="file button justify-content-center text-center">
                <img className="skeleton fileImage small" src="./images/logos/PDFLogo.png" alt="PDF" loading="lazy"/>
                &nbsp;
                Certificate
            </a>

            <hr/>

            <p>A sample of level 2 study in Computing & IT.</p>
        </div>
    );
}
function CoursesInfo() {
  return (
    <div className="overlayBackground" id="coursesOverlay">
        <CS50X/>
        <JPSoftwareEngineeringVirtualExperience/>
        <UniqDigital/>
        <OUDesignThinking/>
        <OUIntroductiontoSoftwareDevelopment/>
        <OUTechnologicalInnovation/>
        <OUComputersandComputerSystems/>
    </div>
  );
}

export default CoursesInfo;