import React, {useEffect} from 'react';

import { displayMessage } from './displayControls';

const elementIds = ["infoOverlay", "info"]
const messageElementId = "outputMessage"
const symbolElementId = "outputSymbol"

function sendMailTo(event: React.FormEvent) {
    event.preventDefault()
    const email = "bhaviklob@hotmail.com";

    const subjectElement = document.getElementById("subject") as HTMLInputElement
    const messageElement = document.getElementById("message") as HTMLInputElement

    if (subjectElement == null || messageElement == null) {
        let outputSymbol = "&#x274C;"
        let outputMessage = "Error getting subject and message";
        displayMessage(elementIds, messageElementId, outputMessage, symbolElementId, outputSymbol);
        return false;
    }
    
    const subject = subjectElement.value
    const message = messageElement.value

    if (message.length == 0) {
        let outputSymbol = "&#x26A0;"
        let outputMessage = "Input a message to continue";
        displayMessage(elementIds, messageElementId, outputMessage, symbolElementId, outputSymbol);
        return false;
    }

    const output = "mailto:" + email + 
                   "?subject=" + subject + 
                   "&body=" + message;
    window.location.href = output;

    let outputSymbol = " &#x2705;"
    let outputMessage = "MailTo opened successfully";
    displayMessage(elementIds, messageElementId, outputMessage, symbolElementId, outputSymbol);

    (document.getElementById("subject") as HTMLInputElement).value = "";
    (document.getElementById("message") as HTMLInputElement).value = "";

    return true;
  }

  export {
    sendMailTo
  }