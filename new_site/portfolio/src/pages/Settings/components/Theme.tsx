import React from 'react';
import useLocalStorage from 'use-local-storage';

import { colourThemes, defaultTheme } from '../../../setup/components/themes';
import { Col, Row } from 'react-bootstrap';

function Theme() {
  const [theme, setTheme] = useLocalStorage<string>('theme', defaultTheme ? colourThemes.Dark : colourThemes.Light);

  return (
    <div className="marginTop marginBottom">
      <h3 className='marginBottom'>Theme</h3>

      <Row>
      {Object.values(colourThemes).map((colourTheme: string) => (
          <Col key={colourTheme} className={"card mx-3" + (theme == colourTheme ? " selected": "")} data-theme={colourTheme} sm="auto" onClick={((e) => {setTheme(colourTheme)})}>
            <img src={"./images/colourThemes/"+ colourTheme + ".png"} alt={colourTheme + " theme"}></img>
            <p>{colourTheme.charAt(0).toUpperCase() + colourTheme.slice(1)} Theme</p>
          </Col>
      ))}
      </Row>
    </div>
  );
}

export default Theme;