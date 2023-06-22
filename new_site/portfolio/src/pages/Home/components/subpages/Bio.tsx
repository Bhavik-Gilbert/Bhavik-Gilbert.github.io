import React from 'react';

import {bio} from '../constants/constants';
import {changeClass} from '../../../../setup/components/changeClass';

function Bio() {
    const title = "Bhavik Gilbert".split("");
    const subtitle = "Software Developer".split("");
    const bioList = bio.split("\n");

    function toggleClass(elementId: string, class1: string, class2: string) {
        let element = document.getElementById(elementId);
        if (element == null) return;
        let className = class1;
        if (element.className == class1) className = class2;
        changeClass(elementId, className);
    }

    function toggleCapitalise(elementId: string) {
        let element = document.getElementById(elementId);
        if (element == null) return;
        let text = element.innerHTML;
        if (text == text.toUpperCase()) element.innerHTML = text.toLowerCase();
        else {element.innerHTML = text.toUpperCase();}
    }

    return (
        <div className="page">
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

            <div className='bioBox textBox'>
                {bioList.map((bioLine: string, bioLineIndex: number) => (
                    <div key={"bioBox" + bioLineIndex} className={bioLineIndex + 1 != bioList.length ? "mb-5":""}>
                        {bioLine.split(" ").map((bioWord, bioWordIndex: number) => (
                            <div className="bio" id={"bioBox" + bioLineIndex + "bio" + bioWordIndex + bioWord}
                            key={"bioBox" + bioLineIndex + "bio" + bioWordIndex + bioWord} 
                            onClick={(() => {toggleClass("bioBox" + bioLineIndex + "bio" + bioWordIndex + bioWord, "bio", "bioHold")})}>
                                {bioWord}&nbsp;
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            <div className='textBox bioBox py-2 px-0 m-2'>
                <div className="file">
                    <a href="./work/files/CV.pdf" type="submit" target="_blank">
                        <img className="fileImage" src="./images/logos/PDFLogo.png" alt="pdf logo"></img>
                    </a>
                    <br/><br/>
                    CV/Resume
                </div>

                <div className="file">
                    <a href="./work/files/CoverLetter.pdf" type="submit" target="_blank">
                        <img className="fileImage" src="./images/logos/PDFLogo.png" alt="pdf logo"></img>
                    </a>
                    <br/><br/>
                    Cover Letter
                </div>

                <div className="file">
                    <a href="https://www.linkedin.com/in/bhavik-gilbert-2349631a9/" type="submit" target="_blank">
                        <img className="fileImage" src="./images/logos/LinkedInLogo.png" alt="pdf logo"></img>
                    </a>
                    <br/><br/>
                    LinkedIn
                </div>

                <div className="file">
                    <a href="https://github.com/Bhavik-Gilbert?tab=repositories" type="submit" target="_blank">
                        <img className="fileImage" src="./images/logos/GithubLogo.png" alt="pdf logo"></img>
                    </a>
                    <br/><br/>
                    Github
                </div>
            </div>
        </div>
  );
}

export default Bio;