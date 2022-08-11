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
    if (letter == letter.toUpperCase()) {
        return letter.toLowerCase();
    }

    return letter.toUpperCase();
}

const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);

async function changeText(id, text) {
    var display = [];

    var time = 3000/text.length

    if (time > 500) {
        time = 500;
    }

    for (let i = 0; i < text.length; i++) {
        current = document.getElementById(id).innerHTML; 
        
        if(equals(current.split(""), display) || display.length == 0) {
            display.push(text[i]);
            document.getElementById(id).innerHTML = display.toString().replaceAll(",","");
        }
        else{
            break;
        }
        await timer(time);
    }
}

function changeBack(id, text) {
    document.getElementById(id).innerHTML = text;
}