import { addLoadingAnimation } from "./loader.js";
import { checkAndCreateSection } from "./utils.js";

const worldMenu  = document.querySelector("#world");

worldMenu.addEventListener("click", ()=> {
    const searchBarInp = document.querySelector("#search-inp-fld");
    searchBarInp.value="";
    loadWorldPage()
})

export function loadWorldPage() {
    const className = `world-news-container`;
    const query = "world";
    addLoadingAnimation();
    checkAndCreateSection(query,className);
}

