import React, {useEffect} from 'react';

import { pageNames } from '../../setup/router/pages';
import { toggleClass } from '../../setup/components/changeClass';
import { toggleCapitalise } from '../../setup/components/textEffects';
import { ExperienceHighlights, WorkExperience } from './components/subpages/Subpages';

function Experience() {
  const title = "Work Experience".split("");
  
  useEffect(() => {
    document.title = "Work Experience";
  });

  return (
    <div className={pageNames.Experience}>
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

          <ExperienceHighlights />
          <br/>
          <WorkExperience />
      </div>
    </div>
  );
}

export default Experience;