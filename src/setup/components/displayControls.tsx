import { toggleClass } from './changeClass';

function openElements(elementIds: string[]) {
    elementIds.forEach(elementId => {
        let element = document.getElementById(elementId);
        if (element == null) return;
        element!.style.display = "block"
    })
}

function closeElements(elementIds: string[]) {
    elementIds.forEach(elementId => {
        let element = document.getElementById(elementId);
        if (element == null) return;
        element!.style.display = "none"
    })
}

function displayMessage(elementIds: string[], messageElementId: string, message: string, symbolElementId: string = "", symbol: string = "") {
    let messageElement = document.getElementById(messageElementId);
    let symbolElement = document.getElementById(symbolElementId);
    if (messageElement == null) return;
    if (symbolElementId != null) symbolElement!.innerHTML = symbol;
    messageElement.innerHTML = message;
    openElements(elementIds)
}

function toggleCollapsible(collapsibleElementId: string, expandClass: string, collapseClass: string) {
    if (toggleClass(collapsibleElementId, expandClass, collapseClass)) {
        let buttonElementId = collapsibleElementId + "CollapseButton"
        let buttonElement = document.getElementById(buttonElementId);
        if (buttonElement == null) return false;
        
        let collapsibleElement = document.getElementById(collapsibleElementId);
        if (collapsibleElement!.className == expandClass) buttonElement.innerHTML = "Expand";
        else if (collapsibleElement!.className == collapseClass) buttonElement.innerHTML = "Collapse";
    }
}


export {
    openElements, 
    closeElements,
    displayMessage,
    toggleCollapsible
};