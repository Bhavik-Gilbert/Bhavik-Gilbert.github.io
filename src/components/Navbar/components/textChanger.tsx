import { timer } from '../../../setup/components/timer';

const equals = (a: any, b: any) => JSON.stringify(a) === JSON.stringify(b);

async function changeText(id: string) {
    if (document.getElementById(id) == null) return;
    let text: string = id;

    let display: string[] = [];
    let time: number = 3000/text.length

    if (time > 500) time = 500;

    for (const element of text) {
        let current = document.getElementById(id)!.innerHTML; 
        
        if(equals(current.split(""), display) || display.length === 0) {
            display.push(element);
            document.getElementById(id)!.innerHTML = display.toString().replaceAll(",","");
        }
        else{
            break;
        }
        await timer(time);
    }
}

function revertText(id: string, text: string) {
    let element: HTMLElement | null = document.getElementById(id);
    if (element !== null) document.getElementById(id)!.innerHTML = text;
}

export {
    revertText, changeText
}; 