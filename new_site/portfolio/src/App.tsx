import React, {useEffect} from 'react';
import useLocalStorage from 'use-local-storage'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './css/App.css';
import Router from './setup/router/router';
import Navbar from './components/Navbar';
import Background from './components/Background';
import { colourThemes, defaultTheme } from './setup/components/themes';

function App() {
  const [theme] = useLocalStorage('theme', defaultTheme ? colourThemes.Dark : colourThemes.Light);
  
  return (
    <>
    <div className="App" data-theme={theme}>
      <Background />
      <Navbar />
      <div className="d-flex justify-content-center text-center">
        <Router /> 
      </div>
    </div>
    </>
  );
}

export default App;
