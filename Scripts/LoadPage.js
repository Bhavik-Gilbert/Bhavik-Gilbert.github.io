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

// smooth scrolling
$("html, body").animate({ scrollTop: $(".chat-msg-list") }, 1000);