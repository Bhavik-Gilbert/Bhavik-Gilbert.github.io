import React, {useEffect} from 'react';

import { sendMailTo } from '../../../setup/components/mail';
import FormOutputInfo from './infoOverlays/FormOutputInfo';

function ContactForm() {

  return (
    <>
      <form className='textBox' onSubmit={sendMailTo}>
        <input type="text" name="subject" id="subject" placeholder="Subject" />
        <textarea name="message" id="message" placeholder="Message" ></textarea>
        <button className="file button" type="submit" name="Submit" id="sendWebsite">Send</button>

        <br/><br/>

        <p>You can also contact me at bhaviklob@hotmail.com for any enquiries</p>
      </form>
    
      <FormOutputInfo/>
    </>
  );
}

export default ContactForm;