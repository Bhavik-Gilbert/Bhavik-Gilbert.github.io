scrollelements = new Map();
scrollindex = new Map();

size = 3

if (handheldcheck() && screen.availHeight > screen.availWidth) {
    size = 2;
}

function addcontainer(listname, name) {
    if(!scrollelements.has(listname)) {
        scrollelements.set(listname, []);
        scrollindex.set(listname, 0);
    }
    scrollelements.get(listname).push(name);
}

function hide(list) {
    list.forEach(elem => {
        let element = document.getElementById(elem);
        if(typeof(element) != 'undefined' && element != null){
            element.style.display = "none";
        }
    });
}

function loadcontainers() {
    scrollelements.forEach (function(value, key) {
        hide(value)
        changeelement(value, 0, 0);
    });
}

function nextelement(listname) {
    let list = scrollelements.get(listname);
    let index = scrollindex.get(listname);
    if(list.length > index+size) {
        changeelement(list, index+1, index)
        scrollindex.set(listname, index+1)
    }
}

function previouselement(listname) {
    let list = scrollelements.get(listname);
    let index = scrollindex.get(listname);
    if(index > 0) {
        changeelement(list, index-1, index+2)
        scrollindex.set(listname, index-1)
    }
}

function changeelement(list, index, previousindex) {
    let element = document.getElementById(list[previousindex]);
    if (typeof (element) != 'undefined' && element != null) {
        element.style.display = "none";
    }

    for(let i=index; i<index+size; i++) {
        let element = document.getElementById(list[i]);
        if(typeof(element) != 'undefined' && element != null){
            element.style.display = "block";
        }
    }
}
