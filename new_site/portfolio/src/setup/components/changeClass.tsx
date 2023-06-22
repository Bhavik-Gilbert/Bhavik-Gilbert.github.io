function changeClass(elementId: string, newClass: string) {
    let element = document.getElementById(elementId);
    if (element == null) return;
    element.className = newClass;
}

export {changeClass};