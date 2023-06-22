import React, { useEffect } from 'react';

import './Settings.css';
import { pageNames } from '../../setup/router/pages';
import Theme from './components/Theme';

function Settings() {
  useEffect(() => {
    document.title = 'Settings';
  });

  return (
    <div className={pageNames.Settings}>
      <h1>Settings</h1>
      <Theme/>
    </div>
  );
}

export default Settings;