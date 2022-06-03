// creates map for different info lists
const regions = new Map();

// toggles info between opened and closed
function togglefocus(elem, classname, region) {
    if(!regions.has(region)) {
        regions.set(region, new Set());
        regions.get(region).add(elem);
    }
    else if(!regions.get(region).has(elem)) {
        regions.get(region).add(elem);
    }

    regions.get(region).forEach(e => {
        if (e !== elem) {
            document.getElementById(e).className = classname;
        }
    })

    if(classname == document.getElementById(elem).className) {
        document.getElementById(elem).className = classname + "focus";

    }
    else {
        document.getElementById(elem).className = classname;
    }
}

var wait = false;
// displays info box
async function displayinfo(elem, classname, region) {
    togglefocus(elem, classname, region);

    var elementinfo = document.getElementById(elem + "info");

    regions.get(region).forEach(e => {
        if (e !== elem) {
            let einfo = document.getElementById(e+"info")
            if (typeof (einfo) != 'undefined' && einfo != null) {
                if(einfo.style.display != "none") {
                    wait = true;
                    displayanimateout(einfo);
                }
            }
        }
    })

    if(typeof (elementinfo) != 'undefined' && elementinfo != null) {
        if(elementinfo.style.display == "block") {
            displayanimateout(elementinfo);
        }
        else {
            if(wait) {
            await timer(525);
            wait = false;
            }
            displayanimatein(elementinfo);
        }
    }
}

// loading in animation
async function displayanimatein(item) {
    var current = 0;

    item.style.opacity = current.toString();
    item.style.display = "block";

    while (current < 1) {
        current += 0.1;
        item.style.opacity = current.toString();
        await timer(10);
    }
}

// loading out animation
async function displayanimateout(item) {
    var current = 1;

    item.style.opacity = current.toString();

    while (current > 0) {
        current -= 0.1;
        item.style.opacity = current.toString();
        await timer(10);

        if (item.style.opacity < 0) {
            await timer(500);
            item.style.display = "none";
        }
    }        
}