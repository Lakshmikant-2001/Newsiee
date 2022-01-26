import { addLoadingAnimation } from "./loader.js";
import { checkAndCreateSection } from "./utils.js";

const localMenu  = document.querySelector("#local");

localMenu.addEventListener("click", ()=> {
    const searchBarInp = document.querySelector("#search-inp-fld");
    searchBarInp.value="";
    loadLocalPage()
})

export function loadLocalPage() {
    const className = `local-news-container`;
    const query = "chennai";
    addLoadingAnimation();
    checkAndCreateSection(query,className);
}

