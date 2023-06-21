import React, {useEffect} from 'react';
import useLocalStorage from 'use-local-storage'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import './components/Containers/containers.css'
import './components/Information/cards.css';
import Router from './setup/router/router';
import Navbar from './components/Navbar';
import { colourThemes, defaultTheme } from './setup/generics/themes';

function App() {
  const [theme, setTheme] = useLocalStorage('theme', defaultTheme ? colourThemes.Dark : colourThemes.Light);

  return (
    <div className="App" data-theme={theme}>
      <Navbar />
      <div className="d-flex justify-content-center">
        <Router /> 
      </div>
    </div>
  );
}

export default App;
