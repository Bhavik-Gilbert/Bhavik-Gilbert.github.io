scrollelements = new Map();
scrollindex = new Map();

size = 3

function checksize() {
    if (handheldcheck() && screen.availHeight > screen.availWidth) {
        size = 2;
    }
    else {
        size = 3;
    }
}

checksize();

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

        let prevelem = document.getElementById('previous' + key);
        if (typeof (prevelem) != 'undefined' && prevelem != null) {
            prevelem.style.opacity = 0;
        }

        let nextelem = document.getElementById('next' + key);
        if (typeof (nextelem) != 'undefined' && nextelem != null) {
            nextelem.style.opacity = 1;
        }

        scrollindex.set(key, 0);
    });
}

function nextelement(listname) {
    let list = scrollelements.get(listname);
    let index = scrollindex.get(listname);
    if(list.length > index+size) {
        changeelement(list, index+1, index)
        scrollindex.set(listname, index+1)
    }

    if (scrollindex.get(listname) >= list.length-size) {
        let element = document.getElementById('next' + listname);
        if (typeof (element) != 'undefined' && element != null) {
            element.style.opacity = 0;
        }
    }

    let element = document.getElementById('previous' + listname);
    if (typeof (element) != 'undefined' && element != null) {
        element.style.opacity = 1;
    }
}

function previouselement(listname) {
    let list = scrollelements.get(listname);
    let index = scrollindex.get(listname);
    if(index > 0) {
        changeelement(list, index-1, index+size-1)
        scrollindex.set(listname, index-1)
    }
    if (scrollindex.get(listname) <= 0) {
        let element = document.getElementById('previous' + listname);
        if (typeof (element) != 'undefined' && element != null) {
            element.style.opacity = 0;
        }
    }

    let element = document.getElementById('next' + listname);
    if (typeof (element) != 'undefined' && element != null) {
        element.style.opacity = 1;
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

screen.orientation.addEventListener("change", function (e) {
    checksize();
    loadcontainers();

});