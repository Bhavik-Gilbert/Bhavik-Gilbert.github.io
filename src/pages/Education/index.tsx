import React, {useEffect} from 'react';

import { pageNames } from '../../setup/router/pages';
import { toggleClass } from '../../setup/components/changeClass';
import { toggleCapitalise } from '../../setup/components/textEffects';
import { EducationHighlights, Courses } from './components/subpages/Subpages';

function Education() {
  const title = "Education".split("");

  useEffect(() => {
    document.title = 'Education';
  });

  return (
    <div className={pageNames.Education}>
      <div className="marginBottom">
        {title.map((titleChar: string, titleCharIndex: number) => (
              <div className="h1 byLetter" id={"pagesTitle" + titleCharIndex + titleChar} key={"pagesTitle" + titleCharIndex + titleChar} 
              onClick={(() => {
                  toggleClass("pagesTitle" + titleCharIndex + titleChar, "h1", "h1Hold");
                  toggleCapitalise("pagesTitle" + titleCharIndex + titleChar);
              })}>
                  {titleChar}
              </div>
          ))}

          <EducationHighlights />
          <br/>
          <Courses />
      </div>
    </div>
  );
}

export default Education;