import React from 'react';
import useLocalStorage from 'use-local-storage';

import { colourThemes, defaultTheme } from '../../../setup/components/themes';
import { toggleClass } from '../../../setup/components/changeClass';
import { toggleCapitalise } from '../../../setup/components/textEffects';

function Theme() {
  const title = "Theme".split("");

  const [theme, setTheme] = useLocalStorage<string>('theme', defaultTheme ? colourThemes.originDark : colourThemes.originLight);

  return (
    <div className="textBox cardScrollBox">
      <div className="marginTop marginBottom">
        {title.map((titleChar: string, titleCharIndex: number) => (
              <div className="h3 byLetter marginBottom" id={"themeTitle" + titleCharIndex + titleChar} key={"themeTitle" + titleCharIndex + titleChar} 
              onClick={(() => {
                  toggleClass("themeTitle" + titleCharIndex + titleChar, "h3 byLetter marginBottom", "h3Hold byLetter marginBottom");
                  toggleCapitalise("themeTitle" + titleCharIndex + titleChar);
              })}>
                  {titleChar}
              </div>
          ))}
      </div>

      <div className="scrollBox">
        {Object.values(colourThemes).map((colourTheme: string) => (
            <div key={colourTheme} className={"card large m-3" + (theme == colourTheme ? " selected": " background")} data-theme={colourTheme} onClick={((e) => {setTheme(colourTheme)})}>
              <img className="skeleton header large" src={"./images/colourThemes/"+ colourTheme + ".png"} alt={colourTheme + " theme"}></img>
              <p>{colourTheme.charAt(0).toUpperCase() + colourTheme.slice(1)} Theme</p>
            </div>
        ))}
      </div>
    </div>
  );
}

export default Theme;