import React, {useEffect} from 'react';

import { pageNames } from '../../setup/router/pages';
import { toggleClass } from '../../setup/components/changeClass';
import { toggleCapitalise } from '../../setup/components/textEffects';
import { ContactForm } from './components/Subpages'

function Contact() {
  const title = "Contact Me".split("");

  useEffect(() => {
    document.title = 'Contact Me';
  });

  return (
    <div className={pageNames.Contact}>
      <div className="marginBottom">
        {title.map((titleChar: string, titleCharIndex: number) => (
              <div className="h1 byLetter" id={"contactTitle" + titleCharIndex + titleChar} key={"contactTitle" + titleCharIndex + titleChar} 
              onClick={(() => {
                  toggleClass("contactTitle" + titleCharIndex + titleChar, "h1 byLetter", "h1Hold byLetter");
                  toggleCapitalise("contactTitle" + titleCharIndex + titleChar);
              })}>
                  {titleChar}
              </div>
          ))}
      </div>
      
      <ContactForm/>
    </div>
  );
}

export default Contact;