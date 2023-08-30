import React, {useEffect} from 'react';

import { pageNames } from '../../setup/router/pages';
import { toggleClass } from '../../setup/components/changeClass';
import { toggleCapitalise } from '../../setup/components/textEffects';

function Contact() {
  const title = "Contact Me".split("");

  useEffect(() => {
    document.title = 'Contact Me';
  });

  return (
    <div className={pageNames.Contact}>
      <div className="marginBottom">
        {title.map((titleChar: string, titleCharIndex: number) => (
              <div className="h1 byLetter" id={"pagesTitle" + titleCharIndex + titleChar} key={"pagesTitle" + titleCharIndex + titleChar} 
              onClick={(() => {
                  toggleClass("pagesTitle" + titleCharIndex + titleChar, "h1 byLetter", "h1Hold byLetter");
                  toggleCapitalise("pagesTitle" + titleCharIndex + titleChar);
              })}>
                  {titleChar}
              </div>
          ))}
      </div>
      
    </div>
  );
}

export default Contact;