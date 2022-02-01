import { addLoadingAnimation } from "./modules/_loader.js";
import { checkAndCreateSection, getQuery, imgErroFix, removeCredits, removeMenuSelStyles } from "./modules/_utils.js";

const searchBarInp = document.querySelector("#search-inp-fld");
const searchBarMsg = document.querySelector("#search-div >  .message");
const inpClearBtn = document.querySelector("#inp-clear-btn");
const searchBtn = document.querySelector("#search-icon");
let query;

searchBarInp.addEventListener("focus", () => {
    inpClearBtn.style.display = "unset";
});

searchBarInp.addEventListener("blur", () => {
    if (searchBarInp.value == "") {
        inpClearBtn.style.display = "none";
    }
});

inpClearBtn.addEventListener("focusout", () => {
    if (searchBarInp.value == "") {
        inpClearBtn.style.display = "none";
    }
});

inpClearBtn.addEventListener("click", () => {
    searchBarInp.value = "";
    removeCredits();
})

searchBarInp.addEventListener("keydown", (e) => {
    if (e.key == "Enter" && searchBarInp.value == "") {
        searchBarMsg.style.display = "flex";
        setTimeout(() => {
            searchBarMsg.style.display = "none";
        }, 1000)
    }
    if (e.key == "Enter" && searchBarInp.value != "") {
        searchBarMsg.style.display = "none";
        searchBarInp.blur();
        query = searchBarInp.value;
        if(query != getQuery()){
            removeCredits()
            window.history.pushState({ "path": "/search" }, "", `/search?q=${query}`);
            loadSearchPage(query)
        }
    }
});

searchBtn.addEventListener("click", () => {
    if (searchBarInp.value == "") {
        searchBarMsg.style.display = "flex";
        setTimeout(() => {
            searchBarMsg.style.display = "none";
        }, 1000)
    }
    if (searchBarInp.value != "") {
        removeCredits()
        searchBarMsg.style.display = "none";
        searchBarInp.blur();
        query = searchBarInp.value;
        if(query != getQuery()){
            window.history.pushState({ "path": "/search" }, "", `/search?q=${query}`);
            loadSearchPage(query)
        }
    }
})

export function loadSearchPage(query) {
    const className = `searched-topic-container`;
    removeMenuSelStyles()
    addLoadingAnimation();
    checkAndCreateSection(query, className);
    imgErroFix()
}