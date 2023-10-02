import React from 'react';
import Marquee from "react-fast-marquee";
import { toggleClass } from '../../../../setup/components/changeClass';
import { toggleCapitalise } from '../../../../setup/components/textEffects';

function Skills() {
  const title = "Skills".split("");
  
  return (
    <div className="bioBox textBox" style={{paddingLeft: 0, paddingRight: 0}}>
      <div>
        {title.map((titleChar: string, titleCharIndex: number) => (
            <div className="h3 byLetter marginBottom" id={"skillsTitle" + titleCharIndex + titleChar} key={"skillsTitle" + titleCharIndex + titleChar} 
            onClick={(() => {
                toggleClass("skillsTitle" + titleCharIndex + titleChar, "h3", "h3Hold");
                toggleCapitalise("skillsTitle" + titleCharIndex + titleChar);
            })}>
                {titleChar}
            </div>
        ))}
      </div>

      <Marquee direction="right" className="marginTop" pauseOnHover={true}>
        <img className="skeleton fileImage medium marginLeft" src="./images/techLogos/python.png" alt="Python" loading="lazy"/> 
        <img className="skeleton fileImage medium marginLeft" src="./images/techLogos/c.png" alt="C" loading="lazy"/> 
        <img className="skeleton fileImage medium marginLeft" src="./images/techLogos/c++.png" alt="C++" loading="lazy"/> 
        <img className="skeleton fileImage medium marginLeft" src="./images/techLogos/csharp.png" alt="C#" loading="lazy"/> 
        <img className="skeleton fileImage medium marginLeft" src="./images/techLogos/CSS.png" alt="CSS" loading="lazy"/> 
        <img className="skeleton fileImage medium marginLeft" src="./images/techLogos/html.png" alt="Html" loading="lazy"/> 
        <img className="skeleton fileImage medium marginLeft" src="./images/techLogos/java.png" alt="Java" loading="lazy"/> 
        <img className="skeleton fileImage medium marginLeft" src="./images/techLogos/javascript.png" alt="Javascript" loading="lazy"/> 
        <img className="skeleton fileImage medium marginLeft" src="./images/techLogos/php.png" alt="PHP" loading="lazy"/> 
        <img className="skeleton fileImage medium marginLeft" src="./images/techLogos/react.png" alt="React" loading="lazy"/> 
        <img className="skeleton fileImage medium marginLeft" src="./images/techLogos/scala.png" alt="Scala" loading="lazy"/> 
        <img className="skeleton fileImage medium marginLeft" src="./images/techLogos/SQL.png" alt="SQL" loading="lazy"/> 
      </Marquee>
    </div>
  );
}

export default Skills;