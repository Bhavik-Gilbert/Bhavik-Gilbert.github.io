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
    checkOverflow
}