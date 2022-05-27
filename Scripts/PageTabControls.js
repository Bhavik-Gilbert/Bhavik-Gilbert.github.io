scrollelements = new Map();
scrollindex = new Map();

size = 3

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
    /*
    scrollelements.forEach (function(value, key) {
        changeelement(value, 0)
    });
    */
}

function nextelement(listname) {
    let list = scrollelements.get(listname);
    let index = scrollindex.get(listname);
    if(list.length > index+size) {
        changeelement(list, ++index)
        scrollindex.set(listname, ++index)
        console.log(scrollindex.get(listname))
    }
}

function previouselement(listname) {
    let list = scrollelements.get(listname);
    let index = scrollindex.get(listname);
    if(index > 0) {
        changeelement(list, --index)
        scrollindex.set(listname, --index)
        console.log(scrollindex.get(listname))
    }
}

function changeelement(list, index) {
    hide(list)

    for(let i=index; i<index+size; i++) {
        let element = document.getElementById(list[i]);
        if(typeof(element) != 'undefined' && element != null){
            element.style.display = "block";
        }
    }
}
