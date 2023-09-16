import React, {useEffect} from 'react';

import  { closeElements } from '../../../../setup/components/displayControls';

function FormInfo() {
  return (
    <div className="overlayInfo outputInfoBackground" id="info">
      <div className="topRight">
        <div className="file button marginLeft" onClick={(e) => closeElements(["infoOverlay", "info"])}>
          &#10005;
        </div>
      </div>

      <div className="outputInfoBox">
        <div className="outputInfo">
          <div className='outputInfoSymbol' id="outputSymbol"></div>
          <h4 className="outputInfoMessage" id="outputMessage"></h4>
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