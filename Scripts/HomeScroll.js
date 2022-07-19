// timer function
const timer = ms => new Promise(res => setTimeout(res, ms));

// locks scrolling
function addscrolllock() {
     if(!handheldcheck()) {
        $('body').addClass('stop-scrolling');
        $('body').bind('touchmove', function (e) { e.preventDefault() });
    }
}

// gets current position of scrollY
var prevY = 0;
var scrolllock = true;
var goal = findPos(welcome);

document.addEventListener('scroll', async function (e) {
    if(handheldcheck()) { 
        return;
    }

    var welcome = document.getElementById("welcome");
    var goal = findPos(welcome);
    if (window.scrollY < goal-120 && prevY < goal-120 && scrolllock) {
        $('body').addClass('stop-scrolling');
        $('body').bind('touchmove', function (e) { e.preventDefault() });

        await timer(500);
        if(window.scrollY > 5) {
            topFunction();
        }
    }
    else if(window.scrollY > goal - 120 && prevY > goal - 120 && scrolllock) {
        $('body').removeClass('stop-scrolling');
        $('body').unbind('touchmove', function (e) { e.preventDefault() });
    }

    prevY = window.scrollY;
});

// scrolls to next page
async function nextFunction() {
    var increment = 20;
    var welcome = document.getElementById("welcome");
    var goal = findPos(welcome);

    await timer(200);
    while (window.scrollY < goal) {
        scrolllock = false;
        var scroll = window.scrollY + increment;

        if (scroll > goal) {
            scroll = goal;
        }

        document.body.scrollTop = scroll; // For Safari
        document.documentElement.scrollTop = scroll; // For Chrome, Firefox, IE and Opera


        if (scroll == goal) {
            scrolllock = true;
            break;
        }

        await timer(1);
    }
}

// gets current scroll position
function findPos(obj) {
    var curtop = 0;
    if (obj.offsetParent) {
        do {
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
        return [curtop];
    }
}