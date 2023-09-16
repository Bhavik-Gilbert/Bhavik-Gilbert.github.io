import { triggerAsyncId } from 'async_hooks';
import React, {useEffect} from 'react';

function sendMailTo(event: React.FormEvent) {
    event.preventDefault()
    const email = "bhaviklob@hotmail.com";

    const subjectElement = document.getElementById("subject") as HTMLInputElement
    const messageElement = document.getElementById("message") as HTMLInputElement

    if (subjectElement == null || messageElement == null) {
        window.alert("Error getting subject and message");
        return false;
    }
    
    const subject = subjectElement.value
    const message = messageElement.value

    if (message.length == 0) {
        window.alert("Input a message to continue");
        return false;
    }

    const output = "mailto:" + email + 
                   "?subject=" + subject + 
                   "&body=" + message;
    window.location.href = output;

    window.alert("MailTo opened successfully");

    (document.getElementById("subject") as HTMLInputElement).value = "";
    (document.getElementById("message") as HTMLInputElement).value = "";

    return true;
  }

  export {
    sendMailTo
  }