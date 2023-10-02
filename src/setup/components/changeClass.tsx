function changeClass(elementId: string, newClass: string) {
    let element = document.getElementById(elementId);
    if (element == null || typeof (element) == 'undefined') return false;
    element.className = newClass;
    return true;
}

function toggleClass(elementId: string, className1: string, className2: string) {
    let element = document.getElementById(elementId);
    if (element == null) return false;

    let classList1 = className1.split(" ")
    let classList2 = className2.split(" ")
    let classList = classList1;
    let elementClassList = element!.className.split(" ")

    if (classList1.every(className => elementClassList.includes(className))) classList = classList2;
    classList1.forEach((classList1Class) => element!.classList.remove(classList1Class))
    classList2.forEach((classList2Class) => element!.classList.remove(classList2Class))
    classList.forEach((classListClass) => element!.classList.add(classListClass))

    return true
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