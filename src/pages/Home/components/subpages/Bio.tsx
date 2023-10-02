import React from 'react';

import {bio} from '../constants/constants';
import {toggleClass} from '../../../../setup/components/changeClass';
import {toggleCapitalise} from '../../../../setup/components/textEffects';

function Bio() {
    const title = "About".split("");
    const bioList = bio.split("\n");

    return (
        <div className='bioBox textBox'>
            <div className="mb-3">
                {title.map((titleChar: string, titleCharIndex: number) => (
                    <div className="h3 byLetter" id={"bioTitle" + titleCharIndex + titleChar} key={"bioTitle" + titleCharIndex + titleChar} 
                    onClick={(() => {
                        toggleClass("bioTitle" + titleCharIndex + titleChar, "h3", "h3Hold");
                        toggleCapitalise("bioTitle" + titleCharIndex + titleChar);
                    })}>
                        {titleChar}
                    </div>
                ))}
            </div>
            
            {bioList.map((bioLine: string, bioLineIndex: number) => (
                <div key={"bioBox" + bioLineIndex} className={bioLineIndex + 1 !== bioList.length ? "mb-5":""}>
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
  );
}

export default Bio;