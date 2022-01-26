import { loadHomePage } from "./home.js";
import { loadSearchPage } from "./search.js";
import { loadWorldPage } from "./world.js";
import { loadCountryPage } from "./country.js";
import { loadLocalPage } from "./local.js";


const navLinks = document.querySelectorAll("#side-nav li");

function getQuery() {
    const urlParams = new URLSearchParams(location.search);
    const query = urlParams.get("q");
    loadSearchPage(query);
}

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        link.classList.add("selected-menu")
        const path = link.dataset.route;
        window.history.pushState({ path }, "", path);
        addMenuSelectionStyles(link)
    })
})

window.onpopstate = function (e) {
    const path = e.state?.path;
    path ? route[path].call() : route["/"].call();
    const searchBarInp = document.querySelector("#search-inp-fld");
    searchBarInp.value = "";
    if (path == undefined) {
        const menuTag = document.querySelector(`#suggested`);
        addMenuSelectionStyles(menuTag)
    }
    else if (path == "/search") {
        const urlParams = new URLSearchParams(location.search);
        const query = urlParams.get("q");
        searchBarInp.value = query;
    }
    else {
        const menu = path.replace(/\//g,'');
        const menuTag = document.querySelector(`#${menu}`);
        addMenuSelectionStyles(menuTag)
    }
}

const route = {
    "/": loadHomePage,
    "/search": getQuery,
    "/world": loadWorldPage,
    "/country": loadCountryPage,
    "/loacl": loadLocalPage
}

window.onload = function () {
    const path = window.location.pathname;
    route[path].call();
    const searchBarInp = document.querySelector("#search-inp-fld");
    searchBarInp.value = "";
    if (path == undefined) {
        const menuTag = document.querySelector(`#suggested`);
        addMenuSelectionStyles(menuTag)
    }
    else if (path == "/search") {
        const urlParams = new URLSearchParams(location.search);
        const query = urlParams.get("q");
        searchBarInp.value = query;
    }
    else {
        const menu = path.replace(/\//g,'');
        const menuTag = document.querySelector(`#${menu}`);
        addMenuSelectionStyles(menuTag)
    }
}

function addMenuSelectionStyles(link) {
    navLinks.forEach(link => {
        link.classList.remove("selected-menu");
    })
    link.classList.add("selected-menu");
}