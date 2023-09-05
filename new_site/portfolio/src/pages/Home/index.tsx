import React, { useEffect } from 'react';

import './Home.css';
import { pageNames } from '../../setup/router/pages';
import { Bio, Welcome, Pages, Skills } from './components/subpages/Subpages';


function Home() {
  useEffect(() => {
    document.title = "Bhavik's Portfolio";
  });

  return (
    <div className={pageNames.Home}>
      <Welcome/>
      <Bio/>
      <Skills/>
      <Pages/>
    </div>
  );
}

export default Home;