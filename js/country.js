import { addLoadingAnimation } from "./modules/_loader.js";
import { checkAndCreateSection } from "./modules/_utils.js";

const countryMenu  = document.querySelector("#country");

countryMenu.addEventListener("click", ()=> {
    loadCountryPage()
})

export function loadCountryPage() {
    const className = `country-news-container`;
    const query = "india";
    addLoadingAnimation();
    checkAndCreateSection(query,className);
}

