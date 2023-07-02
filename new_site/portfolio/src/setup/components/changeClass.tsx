import { timer } from './timer';
function changeClass(elementId: string, newClass: string) {
    let element = document.getElementById(elementId);
    if (element == null) return;
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
const regions = new Map<string, Set<string>>();
let waitElementLeave = false;

// toggles info between opened and closed
function toggleFocus(elementName: string, region: string) {
    if(!regions.has(region)) {
        regions.set(region, new Set());
        regions.get(region)!.add(elementName);
    }
    else if(!regions.get(region)!.has(elementName)) {
        regions.get(region)!.add(elementName);
    }
}

// displays info box
async function displayInfo(elementName: string, region: string) {
    toggleFocus(elementName, region)
    var elementInfo = document.getElementById(elementName + "info");

    regions.get(region)!.forEach(regionElementName => {
        if (regionElementName !== elementName) {
            let elementInfo = document.getElementById(regionElementName + "info")
            if (typeof (elementInfo) != 'undefined' && elementInfo != null) {
                if(elementInfo.style.maxHeight == "1000vh") {
                    elementInfo.style.maxHeight = "0";
                    elementInfo.style.opacity = "0";       
                    waitElementLeave = true;             
                }
            }
        }
    })

    if(typeof (elementInfo) != 'undefined' && elementInfo != null) {
        if(elementInfo.style.maxHeight == "1000vh") {
            elementInfo.style.maxHeight = "0";
            elementInfo.style.opacity = "0";
        }
        else {
            regions.forEach((regionElementName) => {
                let regentElementInfo = document.getElementById(regionElementName + "info");
                if (typeof (regentElementInfo) == 'undefined' || regentElementInfo == null) return
                while (regentElementInfo!.style.opacity != "0") {
                    continue;
                }
            });
            if ( waitElementLeave ) {
                await timer(700);
                console.log("wait");
            }
            waitElementLeave = false;
            elementInfo.style.maxHeight = "1000vh";
            elementInfo.style.opacity = "1";

        }
    }
}

export {
    changeClass, 
    toggleClass,
    displayInfo
};