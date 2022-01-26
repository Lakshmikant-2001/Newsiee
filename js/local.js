import { addLoadingAnimation } from "./modules/_loader.js";
import { checkAndCreateSection } from "./modules/_utils.js";

const localMenu  = document.querySelector("#local");

localMenu.addEventListener("click", ()=> {
    loadLocalPage()
})

export function loadLocalPage() {
    const className = `local-news-container`;
    const query = "chennai";
    addLoadingAnimation();
    checkAndCreateSection(query,className);
}

