function changeClass(elementId: string, newClass: string) {
    let element = document.getElementById(elementId);
    if (element == null || typeof (element) == 'undefined') return false;
    element.className = newClass;
    return true;
}

function toggleClass(elementId: string, class1: string, class2: string) {
    let element = document.getElementById(elementId);
    if (element == null) return false;
    let className = class1;
    if (element.className === class1) className = class2;
    return changeClass(elementId, className);
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

export {
    changeClass, 
    toggleClass,
    toggleCollapsible
};