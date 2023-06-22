import React, {useEffect} from 'react';

import { pageNames } from '../../setup/router/pages';

function Projects() {
  useEffect(() => {
    document.title = 'Projects';
  });

  return (
    <div className={pageNames.Projects}>
      Projects
    </div>
  );
}

export default Projects;