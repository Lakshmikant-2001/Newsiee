import { showCredits, removeCredits, handleLocation } from "./modules/_utils.js";

const creditsMenu = document.querySelector("#credits");
const creditsContainer = document.querySelector("#credits-container");
const creditsHolder = document.querySelector(".credits-holder");
const main = document.querySelector("main");
const sideChangeFront = document.querySelector(".credits-holder .front-side .heading > .iconify");
const sideChangeBack = document.querySelector(".credits-holder .back-side .heading > .iconify");


main.addEventListener("click", () => {
    if (creditsContainer.classList.length == 0) {
        removeCredits();
        const path = window.location.pathname;
        handleLocation(path)
    }
});

document.addEventListener("keydown",(e)=> {
    if (creditsContainer.classList.length == 0 && e.key == "Escape") {
        removeCredits();
        const path = window.location.pathname;
        handleLocation(path)
    }
});

creditsMenu.addEventListener("click", () => {
    showCredits()
});

creditsMenu.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        showCredits()
    }
});

sideChangeFront.addEventListener("click", () => {
    creditsHolder.classList.add("show-back");
});

sideChangeBack.addEventListener("click", () => {
    creditsHolder.classList.remove("show-back");
});

sideChangeFront.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        creditsHolder.classList.add("show-back");
    }
});

sideChangeBack.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        creditsHolder.classList.remove("show-back");
    }
});