scrollelements = new Map();
scrollindex = new Map();

size = 3

function checksize() {
    let oldSize = size;

    size = Math.floor($(window).width() / 400);
    if (size < 1) size = 1;

    return oldSize == size;
}

checksize();

function addDot(listname, count, active) {
    let element = document.getElementById(listname + "dots");
    if (!element) return

    let newDot = document.createElement('SPAN');
    newDot.className = "dot";
    newDot.id = count;
    newDot.setAttribute("onclick", "jumpelement('" + listname + "'," + count + ")");
    if(active) newDot.className += " active"
    element.appendChild(newDot);
}

function changeActiveDot(listname, index) {
    let dots = document.getElementById(listname + "dots");
    let list = scrollelements.get(listname);

    for(let i=0; i < Math.ceil(list.length/size); i++) {
        dots.children[i].className = dots.children[i].className.replace(" active", "");
        if(i >= Math.floor(index/size) &&  i <= index/size) dots.children[i].className += " active";
    }
}

function deleteDots(listname) {
    let dots = document.getElementById(listname + "dots");

    while(dots.children.length > 0) dots.children[0].remove()
}

function replaceDots(listname, list) {
    deleteDots(listname);

    for(let i=0; i < list.length; i++) {
        if(i == 0) addDot(listname, 0, true);
        else if(i % size == 0) addDot(listname, i, false);
    }
}

function addcontainer(listname, name) {
    if(!scrollelements.has(listname)) {
        scrollelements.set(listname, []);
        scrollindex.set(listname, 0);
    }
    scrollelements.get(listname).push(name);

    if(scrollelements.get(listname).length - 1 == 0) addDot(listname, 0, true);
    else if((scrollelements.get(listname).length - 1) % size == 0) addDot(listname, (scrollelements.get(listname).length - 1), false);
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
            if (size < value.length) nextelem.style.opacity = 1;
            else nextelem.style.opacity = 0;
        }

        scrollindex.set(key, 0);

        if (size < value.length) replaceDots(key, value)
        else deleteDots(key);
    });
}

function jumpelement(listname, targetindex) {
    let currentindex = scrollindex.get(listname);
    let difference = targetindex - currentindex;

    while (difference != 0) {
        if (difference > 0) {
            nextelement(listname);
            difference -= 1
        }
        else if(difference < 0 ) {
            previouselement(listname);
            difference += 1
        }
    }
    
    changeActiveDot(listname, targetindex)
}

function nextelement(listname) {
    let list = scrollelements.get(listname);
    let index = scrollindex.get(listname);
    if(list.length > index+size) {
        changeelement(list, index+1, index)
        scrollindex.set(listname, index+1)

        if(scrollindex.get(listname) > list.length) scrollindex.set(listname, index)
    }

    changeActiveDot(listname, scrollindex.get(listname));

    if (scrollindex.get(listname) >= list.length-size) {
        let element = document.getElementById('next' + listname);
        if (typeof (element) != 'undefined' && element != null) {
            element.style.opacity = 0;
        }
    }

    let element = document.getElementById('previous' + listname);
    if (typeof (element) != 'undefined' && element != null) {
        if (list.length > size) element.style.opacity = 1;
    }
}

function previouselement(listname) {
    let list = scrollelements.get(listname);
    let index = scrollindex.get(listname);
    if(index > 0) {
        changeelement(list, index-1, index+size-1)
        scrollindex.set(listname, index-1)

        if(scrollindex.get(listname) < 0) scrollindex.set(listname, index)
    }

    changeActiveDot(listname, scrollindex.get(listname));

    if (scrollindex.get(listname) <= 0) {
        let element = document.getElementById('previous' + listname);
        if (typeof (element) != 'undefined' && element != null) {
            element.style.opacity = 0;
        }
    }

    let element = document.getElementById('next' + listname);
    if (typeof (element) != 'undefined' && element != null) {
        if (list.length > size) element.style.opacity = 1;
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

addEventListener("resize", (event) => {
    if (!checksize()) loadcontainers();
});

screen.orientation.addEventListener("change", function (e) {
    if (!checksize()) loadcontainers();
});