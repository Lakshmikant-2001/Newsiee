import { addLoadingAnimation } from "./modules/_loader.js";
import { checkAndCreateSection } from "./modules/_utils.js";

const worldMenu  = document.querySelector("#world");

worldMenu.addEventListener("click", ()=> {
    loadWorldPage()
})

export function loadWorldPage() {
    const className = `world-news-container`;
    const query = "world";
    addLoadingAnimation();
    checkAndCreateSection(query,className);
}

