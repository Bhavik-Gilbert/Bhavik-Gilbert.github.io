import React from 'react';
import { toggleClass } from '../../../../setup/components/changeClass';
import { toggleCapitalise } from '../../../../setup/components/textEffects';

function Hackathons() {
  const title = "Hackathons".split("");
  
  return (
    <div className="textBox marginTop cardScrollBox">
      <div className="marginTop marginBottom">
        {title.map((titleChar: string, titleCharIndex: number) => (
            <div className="h3 byLetter marginBottom" id={"pagesTitle" + titleCharIndex + titleChar} key={"pagesTitle" + titleCharIndex + titleChar} 
            onClick={(() => {
                toggleClass("pagesTitle" + titleCharIndex + titleChar, "h3 byLetter marginBottom", "h3Hold byLetter marginBottom");
                toggleCapitalise("pagesTitle" + titleCharIndex + titleChar);
            })}>
                {titleChar}
            </div>
        ))}
      </div>

      <div className="scrollBox">
        <div className="card long m-3">
            <img className="header" src="./images/companyLogos/JPMorgan.jpg" alt="JP"></img>
            <h5>Code For Good</h5>
            <br/>
            <h6>J.P Morgan</h6>
            <h6>Nov 2022</h6>
        </div>

        <div className="card long m-3">
            <img className="header" src="./images/companyLogos/Polygon.jpg" alt="Polygon"></img>
            <h5>Polygon x Easy A</h5>
            <br/>
            <h6>Polygon</h6>
            <h6>Oct 2022</h6>
        </div>

        <div className="card long m-3">
            <img className="header" src="./images/companyLogos/Meta.png" alt="Meta"></img>
            <h5>Meta  Global Hackathon</h5>
            <br/>
            <h6>Meta</h6>
            <h6>Sept 2022</h6>
        </div>
      </div>
    </div>
  );
}

export default Hackathons;