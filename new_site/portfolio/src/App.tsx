import React, {useEffect} from 'react';
import useLocalStorage from 'use-local-storage'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Router from './setup/router/router';
import Navbar from './components/Navbar';

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  return (
    <div className="App" data-theme={theme}>
      <Navbar />
      <Router /> 
    </div>
  );
}

export default App;
