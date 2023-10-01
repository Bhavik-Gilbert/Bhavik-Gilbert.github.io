import { timer } from './timer';

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

function toggleCollapsible(collapsibleElementId: string, expandClass: string) {
    let collapsibleElement = document.getElementById(collapsibleElementId);
    if (collapsibleElement == null) return false;

    collapsibleElement.classList.toggle(expandClass);

    let buttonElementId = collapsibleElementId + "CollapseButton"
    let buttonElement = document.getElementById(buttonElementId);
    if (buttonElement == null) return false;
    
    if (collapsibleElement!.className.includes(expandClass)) buttonElement.innerHTML = "Expand";
    else buttonElement.innerHTML = "Collapse";
}

function collapseEventListeners(collapsibleElementIds: string[]) {
    collapsibleElementIds.forEach(collapsibleElementId => {
        let collapsibleElement = document.getElementById(collapsibleElementId);
        if (collapsibleElement == null) return;

        let buttonElementId = collapsibleElementId + "CollapseButton";
        let buttonElement = document.getElementById(buttonElementId);
        if (buttonElement == null) return;

        window.addEventListener("load", (event) => collapseButtonVisible(collapsibleElement!, buttonElement!))
        window.addEventListener("resize", async (event) => 
        {
            // forces wait for resize to complete
            await timer(500);
            collapseButtonVisible(collapsibleElement!, buttonElement!)
        }, true) 
    });
}

function collapseButtonVisible(collapsibleElement: HTMLElement, buttonElement: HTMLElement) {
    if (checkOverflow(collapsibleElement)) {
        buttonElement.classList.remove("invisible");
    }
    else {
        buttonElement.classList.add("invisible");
    }
}

function checkOverflow(element: HTMLElement)
{
    if (element == null) return true;

    let curOverflow = element.style.overflow;

    if (!curOverflow || curOverflow === "visible")
    element.style.overflow = "hidden";

    let isOverflowing = element.clientWidth < element.scrollWidth 
        || element.clientHeight < element.scrollHeight;

        element.style.overflow = curOverflow;

    return isOverflowing;
}


export {
    openElements, 
    closeElements,
    displayMessage,
    toggleCollapsible,
    collapseEventListeners
};