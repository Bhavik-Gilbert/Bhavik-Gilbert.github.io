import React, {useEffect} from 'react';

import { pageNames } from '../../setup/router/pages';

function Experience() {
  useEffect(() => {
    document.title = 'Experience';
  });

  return (
    <div className={pageNames.Experience}>
      Experience
    </div>
  );
}

export default Experience;