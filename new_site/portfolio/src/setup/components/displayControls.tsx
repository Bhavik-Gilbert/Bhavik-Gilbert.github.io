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

export {
    openElements, 
    closeElements
};