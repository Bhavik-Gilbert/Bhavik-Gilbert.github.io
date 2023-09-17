import React from 'react';

import { toggleClass } from '../../../setup/components/changeClass';
import { toggleCapitalise } from '../../../setup/components/textEffects';
import { sendMailTo } from '../../../setup/components/mail';
import FormOutputInfo from './infoOverlays/FormOutputInfo';

function ContactForm() {
  const contactFormTitle = "Email".split("");

  return (
    <>
      <form className='textBox'>

        <div className="mb-3">
          {contactFormTitle.map((contactFormTitleChar: string, contactFormTitleCharIndex: number) => (
              <div className="h3 byLetter" id={"bioTitle" + contactFormTitleCharIndex + contactFormTitleChar} key={"bioTitle" + contactFormTitleCharIndex + contactFormTitleChar} 
              onClick={(() => {
                  toggleClass("bioTitle" + contactFormTitleCharIndex + contactFormTitleChar, "h3 byLetter", "h3Hold byLetter");
                  toggleCapitalise("bioTitle" + contactFormTitleCharIndex + contactFormTitleChar);
              })}>
                  {contactFormTitleChar}
              </div>
          ))}
        </div>
        <input type="text" name="subject" id="subject" placeholder="Subject" />
        <textarea name="message" id="message" placeholder="Message" ></textarea>
        <button className="file button" type="submit" name="Submit" id="sendMailTo" onClick={sendMailTo}>Send</button>

        <br/><br/>

        <p>You can also contact me at bhaviklob@hotmail.com for any enquiries</p>
      </form>
    
      <FormOutputInfo/>
    </>
  );
}

export default ContactForm;