import React, {useEffect} from 'react';

import { pageNames } from '../../setup/router/pages';

function Education() {
  useEffect(() => {
    document.title = 'Education';
  });

  return (
    <div className={pageNames.Education}>
      Education
    </div>
  );
}

export default Education;