import { loadHomePage } from "./home.js";
import { loadWorldPage } from "./world.js";
import { loadCountryPage } from "./country.js";
import { loadLocalPage } from "./local.js";

import { addMenuSelStyles, removeMenuSelStyles , clearInput,  searchPageCall, handleLocation } from "./modules/_utils.js";

const navLinks = document.querySelectorAll("#side-nav li");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        const path = link.dataset.route;
        window.history.pushState({ path }, "", path);
        clearInput()
        removeMenuSelStyles()
        addMenuSelStyles(link)
    })
})

window.onpopstate = function (e) {
    const path = e.state?.path;
    path ? route[path].call() : route["/"].call();
    handleLocation(path)

}

window.onload = function () {
    const path = window.location.pathname;
    route[path].call();
    handleLocation(path)
}

const route = {
    "/": loadHomePage,
    "/search": searchPageCall,
    "/world": loadWorldPage,
    "/country": loadCountryPage,
    "/local": loadLocalPage
}