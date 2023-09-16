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

export {
    openElements, 
    closeElements,
    displayMessage,
};