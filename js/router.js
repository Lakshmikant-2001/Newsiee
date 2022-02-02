import { loadHomePage } from "./home.js";
import { loadWorldPage } from "./world.js";
import { isCountryAvail } from "./country.js";
import { checkCountryAvail } from "./local.js";

import { addMenuSelStyles, removeMenuSelStyles, clearInput, searchPageCall, handleLocation, removeCredits, contractSearchBar } from "./modules/_utils.js";

const navLinks = document.querySelectorAll("#side-nav li");
const sideNavBar = document.querySelector("#side-nav");
const body = document.querySelector("body");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        removeCredits()
        contractSearchBar()
        if (body.offsetWidth <= 650) {
            sideNavBar.classList = [];
            sideNavBar.classList.add("close");
        }
        const path = link.dataset.route;
        if (path != window.location.pathname) {
            window.history.pushState({ path }, "", path);
            clearInput()
            removeMenuSelStyles()
            addMenuSelStyles(link)
        }
        link.blur()
    })
})

navLinks.forEach(link => {
    link.addEventListener("keypress", (e) => {
        if (e.key == "Enter") {
            removeCredits()
            contractSearchBar()
            if (body.offsetWidth <= 650) {
                sideNavBar.classList = [];
                sideNavBar.classList.add("close");
            }
            const path = link.dataset.route;
            if (path != window.location.pathname) {
                window.history.pushState({ path }, "", path);
                clearInput()
                removeMenuSelStyles()
                addMenuSelStyles(link)
            }
            link.blur()
        }
    })
})

window.onpopstate = function (e) {
    const path = e.state?.path;
    path ? route[path].call() : route["/"].call();
    handleLocation(path)
    sideNavBar.classList = [];
    sideNavBar.classList.add("close");
    if (body.offsetWidth <= 650) {
        sideNavBar.classList = [];
        sideNavBar.classList.add("close");
    }
}

window.onload = function () {
    const path = window.location.pathname;
    route[path].call();
    handleLocation(path)
    if (body.offsetWidth <= 650) {
        sideNavBar.classList = [];
        sideNavBar.classList.add("close");
    }
}

const route = {
    "/": loadHomePage,
    "/search": searchPageCall,
    "/world": loadWorldPage,
    "/country": isCountryAvail,
    "/local": checkCountryAvail
}