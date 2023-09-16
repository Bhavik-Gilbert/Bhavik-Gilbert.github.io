function toggleCapitalise(elementId: string) {
    let element = document.getElementById(elementId);
    if (element == null) return;
    let text = element.innerHTML;
    if (text === text.toUpperCase()) element.innerHTML = text.toLowerCase();
    else {element.innerHTML = text.toUpperCase();}
}

export {toggleCapitalise};