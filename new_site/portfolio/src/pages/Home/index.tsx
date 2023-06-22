import React, {useEffect} from 'react';

import './Home.css';
import { pageNames } from '../../setup/router/pages';
import Bio from './components/subpages/Bio';


function Home() {
  useEffect(() => {
    document.title = 'Home';
  });

  return (
    <div className={pageNames.Home}>
      <Bio/>
    </div>
  );
}

export default Home;