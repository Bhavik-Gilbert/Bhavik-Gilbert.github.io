import React, { useEffect } from 'react';

import './Home.css';
import { pageNames } from '../../setup/router/pages';
import { Bio, Welcome, Pages } from './components/subpages/Subpages';


function Home() {
  useEffect(() => {
    document.title = "Bhavik's Portfolio";
  });

  return (
    <div className={pageNames.Home}>
      <div>
        <Welcome/>
      </div>
      <div>
        <Bio/>
      </div>
      <div>
        <Pages/>
      </div>
    </div>
  );
}

export default Home;