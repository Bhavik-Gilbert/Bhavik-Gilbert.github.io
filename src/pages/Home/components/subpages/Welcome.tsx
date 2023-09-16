import React from 'react';

import {toggleClass} from '../../../../setup/components/changeClass';
import {toggleCapitalise} from '../../../../setup/components/textEffects';

function Bio() {
    const title = "Bhavik Gilbert".split("");
    const subtitle = "Software Developer".split("");
    const welcome = "Welcome to my portfolio".split("");


    return (
        <>
            <div>
                {title.map((titleChar: string, titleCharIndex: number) => (
                        <div className="title" id={"title" + titleCharIndex + titleChar} key={"title" + titleCharIndex + titleChar} 
                        onClick={(() => {
                            toggleClass("title" + titleCharIndex + titleChar, "title", "titleHold");
                            toggleCapitalise("title" + titleCharIndex + titleChar);
                        })}>
                            {titleChar}
                        </div>
                ))}
                
                <div className="subtitleBox">
                {subtitle.map((subtitleChar: string, subtitleCharIndex: number) => (
                        <div className="subtitle" id={"title" + subtitleCharIndex + subtitleChar} key={"title" + subtitleCharIndex + subtitleChar} 
                        onClick={(() => {
                            toggleClass("title" + subtitleCharIndex + subtitleChar, "subtitle", "subtitleHold");
                            toggleCapitalise("title" + subtitleCharIndex + subtitleChar);
                        })}>
                            {subtitleChar}
                        </div>
                ))}
                </div>

                <a href="./files/resume/CV.pdf" type="submit" target="_blank" className="file button my-2">
                    <img className="skeleton fileImage small" src="./images/logos/PDFLogo.png" alt="PDF" loading="lazy"/>
                    <br/><br/>
                    CV/Resume
                </a>

                <a href="./files/resume/CoverLetter.pdf" type="submit" target="_blank" className="file button my-2">
                    <img className="skeleton fileImage small" src="./images/logos/PDFLogo.png" alt="PDF" loading="lazy"/>
                    <br/><br/>
                    Cover Letter
                </a>

                <a href="https://www.linkedin.com/in/bhavik-gilbert-2349631a9/" type="submit" target="_blank" rel="noreferrer" className="file button my-2">
                    <img className="skeleton fileImage small" src="./images/logos/LinkedInLogo.png" alt="LinkedIn" loading="lazy"/>
                    <br/><br/>
                    LinkedIn
                </a>

                <a href="https://github.com/Bhavik-Gilbert?tab=repositories" type="submit" target="_blank" rel="noreferrer" className="file button my-2">
                    <img className="skeleton fileImage small" src="./images/logos/GithubLogo.png" alt="Github" loading="lazy"/>
                    <br/><br/>
                    Github
                </a>
            </div>
            
            <div className="marginTop">
                {welcome.map((welcomeChar: string, welcomeCharIndex: number) => (
                        <div className="h1 byLetter" id={"welcome" + welcomeCharIndex + welcomeChar} key={"welcome" + welcomeCharIndex + welcomeChar} 
                        onClick={(() => {
                            toggleClass("welcome" + welcomeCharIndex + welcomeChar, "h1 byLetter", "h1Hold byLetter");
                            toggleCapitalise("welcome" + welcomeCharIndex + welcomeChar);
                        })}>
                            {welcomeChar}
                        </div>
                ))}
            </div>
        </>
  );
}

export default Bio;