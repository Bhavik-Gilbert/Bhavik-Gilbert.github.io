import React from 'react';

import { pageNames } from '../../setup/router/pages';
import Theme from './components/Theme';

function Settings() {
  return (
    <div className={pageNames.Settings}>
      <h1>Settings</h1>
      <Theme/>
    </div>
  );
}

export default Settings;