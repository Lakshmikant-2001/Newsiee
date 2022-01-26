import { addLoadingAnimation } from "./loader.js";
import { checkAndCreateSection } from "./utils.js";

const countryMenu  = document.querySelector("#country");

countryMenu.addEventListener("click", ()=> {
    const searchBarInp = document.querySelector("#search-inp-fld");
    searchBarInp.value="";
    loadCountryPage()
})

export function loadCountryPage() {
    const className = `country-news-container`;
    const query = "india";
    addLoadingAnimation();
    checkAndCreateSection(query,className);
}

