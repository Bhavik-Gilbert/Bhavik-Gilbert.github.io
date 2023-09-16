import React, {useEffect} from 'react';

import  { closeElements } from '../../../../setup/components/displayControls';

function FormInfo() {
  return (
    <div className="overlayInfo" id="info">
      <div className="topRight">
        <div className="file button marginLeft" onClick={(e) => closeElements(["infoOverlay", "info"])}>
          &#10005;
        </div>
      </div>

      <div className="outputInfo">
        <div className="outputInfoMessage">
          <div className='outputInfoSymbol' id="outputSymbol"></div>
          <h4 id="outputMessage"></h4>
        </div>
      </div>
    </div>
  );
}


function FormOutputInfo() {

  return (
    <div className="overlayBackground" id="infoOverlay">
      <FormInfo/>
    </div>   
  );
}

export default FormOutputInfo;