 // loads menus onto page
 $(function () {
    $("#header").load("Entity/menu.html");
    $("#footer").load("Entity/footer.html");
});

// sets current colour theme from memory
if (localStorage.getItem("theme") == "false") {
    document.documentElement.setAttribute("data-theme", "light");
}
else {
    document.documentElement.setAttribute("data-theme", "dark");
}

// loads page after page is downloaded
// removes loading gif
function removeloader()  {
    var loader = document.getElementById("loader");

    window.addEventListener("load", function () {
        setTimeout(function () {
            loader.style.opacity = "0";
            setTimeout(function () {
                loader.style.display = "none";   
            }, 500);
        }, 1000);
    });
}

// checks if handheld device
function handheldcheck() {
    let check = false;
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        check = true;
    }
    else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        check = true
    }
    return check;
}

function setuph1main(text) {
    for (let i = 0; i < text.length; i++) {
        var letter = document.createElement("div");
        if (handheldcheck() && text[i] == " ") {
            letter.innerHTML = "_";
            letter.id = "_" + i;
            letter.onclick = function () { toggleh1main("_"+ i); };
        }
        else {
            letter.innerHTML = text[i];
            letter.id = text[i] + i;
            letter.onclick = function () { toggleh1main(text[i] + i); };
        }
        letter.className = "h1main";
        let parent = document.getElementsByClassName("start")[0];
        parent.appendChild(letter);
    }
}

function toggleh1main(id) {
    let letter = document.getElementById(id);
    if (typeof (letter) != 'undefined' && letter != null) {
        classname = letter.className;
        letter.innerHTML = reversecapitalize(letter.innerHTML);
        if (classname == "h1main") {
            letter.className = "h1hold";
            return;
        }
        letter.className = "h1main";
    }
}

function reversecapitalize(letter) {
    if(letter == letter.toUpperCase()) {
        return letter.toLowerCase();
    }

    return letter.toUpperCase();
}
// smooth scrolling
$("html, body").animate({ scrollTop: $(".chat-msg-list") }, 1000);