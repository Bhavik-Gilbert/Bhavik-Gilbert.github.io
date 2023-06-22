import React, {useEffect} from 'react';
import useLocalStorage from 'use-local-storage'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import './components/Containers/containers.css'
import './components/Containers/imageBoxes.css'
import './components/Containers/cards.css';
import './components/Containers/textbox.css';
import Router from './setup/router/router';
import Navbar from './components/Navbar';
import { colourThemes, defaultTheme } from './setup/components/themes';

function App() {
  const [theme, setTheme] = useLocalStorage('theme', defaultTheme ? colourThemes.Dark : colourThemes.Light);

  return (
    <div className="App" data-theme={theme}>
      <Navbar />
      <div className="d-flex justify-content-center text-center">
        <Router /> 
      </div>
    </div>
  );
}

export default App;
