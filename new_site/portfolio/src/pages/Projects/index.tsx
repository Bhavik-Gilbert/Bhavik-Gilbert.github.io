import React, {useEffect} from 'react';

import { pageNames } from '../../setup/router/pages';
import { toggleClass } from '../../setup/components/changeClass';
import { toggleCapitalise } from '../../setup/components/textEffects';
import { ProjectHighlights, MoreProjects } from './components/subpages/Subpages';

function Projects() {
  const title = "Projects".split("");

  
  useEffect(() => {
    document.title = 'Projects';
  });

  return (
    <div className={pageNames.Projects}>
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

          <ProjectHighlights />
          <br/>
          <MoreProjects />
      </div>
    </div>
  );
}

export default Projects;