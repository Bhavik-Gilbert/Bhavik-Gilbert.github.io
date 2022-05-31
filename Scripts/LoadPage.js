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

function reactbyletter(text, tag, location, main, secondary) {
    for (let i = 0; i < text.length; i++) {
        var letter = document.createElement(tag);
        letter.innerHTML = text[i];
        letter.id = text[i] + i;
        letter.className = main;

        letter.onclick = function () { 
            togglereact(text[i] + i, main, secondary); 
            
            let elem = document.getElementById(text[i] + i);
            elem.innerHTML = reversecapitalize(elem.innerHTML);
        };
        
        let parent = document.getElementById(location);
        parent.appendChild(letter);
    }
}

function reactbyword(paragraph, tag, location, main, secondary) {
    var text = paragraph.split(" ");
    for (let i = 0; i < text.length; i++) {
        var word = document.createElement(tag);
        word.innerHTML = text[i] + " ";
        word.id = text[i] + i;
        word.className = main;
        
        word.onclick = function () {
            togglereact(text[i] + i, main, secondary);
        };

        let parent = document.getElementById(location);
        parent.appendChild(word);
    }
}

function togglereact(id, main, secondary) {
    let letter = document.getElementById(id);
    if (typeof (letter) != 'undefined' && letter != null) {
        classname = letter.className;
        if (classname == main) {
            letter.className = secondary;
            return;
        }
        letter.className = main;
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