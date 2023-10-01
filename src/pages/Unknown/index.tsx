import React, {useEffect} from 'react';

import './Unknown.css';
import { toggleClass } from '../../setup/components/changeClass';
import { toggleCapitalise } from '../../setup/components/textEffects';
import { pageNames } from '../../setup/router/pages';

function Unknown() {
  const title = "404".split("");
  const subtitle = "Page Not Found".split("");
  const message1 = "Are you lost?".split("");
  const message2 = "Use the navbar above to navigate to somewhere familiar".split("");
  
  useEffect(() => {
    document.title = 'Page Not Found';
  });

  return (
    <div className={pageNames.Settings}>
      <div className="marginBottom">
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

        <div className="marginTop marginBottom">
          {message1.map((message1Char: string, message1CharIndex: number) => (
              <div className="h3 byLetter marginBottom" id={"message1" + message1CharIndex + message1Char} key={"message1" + message1CharIndex + message1Char} 
              onClick={(() => {
                  toggleClass("message1" + message1CharIndex + message1Char, "h3 byLetter marginBottom", "h3Hold byLetter marginBottom");
                  toggleCapitalise("message1" + message1CharIndex + message1Char);
              })}>
                  {message1Char}
              </div>
          ))}
        </div>
              
        <div className="marginTop marginBottom">
          {message2.map((message2Char: string, message2CharIndex: number) => (
              <div className="h3 byLetter marginBottom" id={"message2" + message2CharIndex + message2Char} key={"message2" + message2CharIndex + message2Char} 
              onClick={(() => {
                  toggleClass("message2" + message2CharIndex + message2Char, "h3 byLetter marginBottom", "h3Hold byLetter marginBottom");
                  toggleCapitalise("message2" + message2CharIndex + message2Char);
              })}>
                  {message2Char}
              </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Unknown;