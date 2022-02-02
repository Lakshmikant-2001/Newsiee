import { contractSearchBar, expandSearchBar } from "./modules/_utils.js";

const hamBtn = document.querySelector("#ham-btn");
const sideNavBar = document.querySelector("#side-nav");
const searchDiv = document.querySelector("#search-div");
const body = document.querySelector("body");
const headerTitle = document.querySelector("#header-title");

hamBtn.addEventListener("click", () => {
    if (sideNavBar.classList == "close") {
        sideNavBar.classList.replace("close", "open");
    }
    else {
        sideNavBar.classList.replace("open", "close");
    }
})

searchDiv.addEventListener("click", () => {
    expandSearchBar()
})

searchDiv.addEventListener("mouseenter", () => {
    expandSearchBar()
})

body.addEventListener("keydown", (e) => {
    if (headerTitle.classList.length != 0 && e.key == "Escape") {
        contractSearchBar()
    }
})