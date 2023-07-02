import { timer } from './timer';
function changeClass(elementId: string, newClass: string) {
    let element = document.getElementById(elementId);
    if (element == null || typeof (element) == 'undefined') return;
    element.className = newClass;
}

function toggleClass(elementId: string, class1: string, class2: string) {
    let element = document.getElementById(elementId);
    if (element == null) return;
    let className = class1;
    if (element.className == class1) className = class2;
    changeClass(elementId, className);
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
            if(regionInfoElement.style.maxHeight == "1000vh") {
                regionInfoElement.style.maxHeight = "0";
                regionInfoElement.style.opacity = "0";       
                waitElementLeave = true;
                if (regionElementId == elementId) elementIsOpen = true;
                let regionSelectorElement = document.getElementById(regionElementId);
                if (typeof (regionInfoElement) != 'undefined' && regionInfoElement != null) {
                    changeClass(regionElementId, regionSelectorElement!.className.replace(" infoSelector", ""));
                }
            }
        }
    })

    if(typeof (infoElement) == 'undefined' || infoElement == null) return;

    if(infoElement.style.maxHeight != "1000vh" && !elementIsOpen) {
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
    changeClass, 
    toggleClass,
    displayInfo
};