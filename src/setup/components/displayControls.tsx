import { timer } from './timer';
import { changeClass } from './changeClass';
import { checkOverflow } from './checks';

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

function collapseButtonVisible(collapsibleElement: HTMLElement, buttonElement: HTMLElement) {
    if (checkOverflow(collapsibleElement)) {
        buttonElement.classList.remove("invisible");
    }
    else {
        buttonElement.classList.add("invisible");
    }
}

// creates map for different info lists
let regions = new Map<string, Set<string>>();
let openingRegions = new Map<string, boolean>();
// adds element to region
function addRegionElement(elementId: string, region: string) {
    if(!regions.has(region)) {
        regions.set(region, new Set());
        openingRegions.set(region, false);
        regions.get(region)!.add(elementId);
    }
    else if(!regions.get(region)!.has(elementId)) {
        regions.get(region)!.add(elementId);
    }
}

// displays info box
async function displayInfo(elementId: string, region: string, selectElement: boolean) {
    addRegionElement(elementId, region);

    let infoElement = document.getElementById(elementId + "info");
    let waitElementLeave = false;
    let elementIsOpen = false;

    // forces wait if other info element is still opening
    while (openingRegions.get(region)) await timer(50);

    regions.get(region)!.forEach(regionElementId => {
        let regionInfoElement = document.getElementById(regionElementId + "info")
        if (typeof (regionInfoElement) != 'undefined' && regionInfoElement != null) {
            if(regionInfoElement.style.maxHeight === "1000vh") {
                regionInfoElement.style.maxHeight = "0";
                regionInfoElement.style.opacity = "0";       
                waitElementLeave = true;
                if (regionElementId === elementId) elementIsOpen = true;
                let regionSelectorElement = document.getElementById(regionElementId);
                if (typeof (regionInfoElement) != 'undefined' && regionInfoElement != null) {
                    changeClass(regionElementId, regionSelectorElement!.className.replace(" infoSelector", ""));
                }
            }
        }
    })

    if(typeof (infoElement) == 'undefined' || infoElement == null) return;

    if(infoElement.style.maxHeight !== "1000vh" && !elementIsOpen) {
        let selectorElement = document.getElementById(elementId);
        if (typeof (selectorElement) != 'undefined' && selectorElement != null) {
            changeClass(elementId, selectorElement!.className + " infoSelector");
        }
        if ( waitElementLeave ) {
            openingRegions.set(region, true);
            await timer(600);
        }
        waitElementLeave = false;
        infoElement.style.maxHeight = "1000vh";
        infoElement.style.opacity = "1";
        openingRegions.set(region, false);
    }
}


export {
    openElements, 
    closeElements,
    displayMessage,
    collapseButtonVisible,
    displayInfo
};