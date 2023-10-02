import { timer } from "./timer";
import { collapseButtonVisible } from "./displayControls";

function collapseEventListeners(collapsibleElementIds: string[]) {
    collapsibleElementIds.forEach(collapsibleElementId => {
        let collapsibleElement = document.getElementById(collapsibleElementId);
        if (collapsibleElement == null) return;

        let buttonElementId = collapsibleElementId + "CollapseButton";
        let buttonElement = document.getElementById(buttonElementId);
        if (buttonElement == null) return;

        window.addEventListener("load", (event) => collapseButtonVisible(collapsibleElement!, buttonElement!))
        window.addEventListener("resize", async (event) => 
        {
            // forces wait for resize to complete
            await timer(500);
            collapseButtonVisible(collapsibleElement!, buttonElement!)
        }, true) 
    });
}

export {
    collapseEventListeners
}