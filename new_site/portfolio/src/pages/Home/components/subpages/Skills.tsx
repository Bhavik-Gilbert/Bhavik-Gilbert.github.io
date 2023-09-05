import React from 'react';
import Marquee from "react-fast-marquee";
import { toggleClass } from '../../../../setup/components/changeClass';
import { toggleCapitalise } from '../../../../setup/components/textEffects';

function Skills() {
  const title = "Skills".split("");
  
  return (
    <div className='bioBox textBox'>
      <div>
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

      <Marquee direction="right" className="marginTop" pauseOnHover={true}>
        <img className="fileImage medium marginLeft" src="./images/techLogos/python.png" alt="Python"/> 
        <img className="fileImage medium marginLeft" src="./images/techLogos/c.png" alt="C"/> 
        <img className="fileImage medium marginLeft" src="./images/techLogos/c++.png" alt="C++"/> 
        <img className="fileImage medium marginLeft" src="./images/techLogos/csharp.png" alt="C#"/> 
        <img className="fileImage medium marginLeft" src="./images/techLogos/CSS.png" alt="CSS"/> 
        <img className="fileImage medium marginLeft" src="./images/techLogos/html.png" alt="Html"/> 
        <img className="fileImage medium marginLeft" src="./images/techLogos/java.png" alt="Java"/> 
        <img className="fileImage medium marginLeft" src="./images/techLogos/javascript.png" alt="Javascript"/> 
        <img className="fileImage medium marginLeft" src="./images/techLogos/php.png" alt="PHP"/> 
        <img className="fileImage medium marginLeft" src="./images/techLogos/react.png" alt="React"/> 
        <img className="fileImage medium marginLeft" src="./images/techLogos/scala.png" alt="Scala"/> 
        <img className="fileImage medium marginLeft" src="./images/techLogos/SQL.png" alt="SQL"/> 
      </Marquee>
    </div>
  );
}

export default Skills;