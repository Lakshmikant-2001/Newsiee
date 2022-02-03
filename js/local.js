import { addLoadingAnimation, removeLoadingAnimation } from "./modules/_loader.js";
import { stateCountryList, countriesList } from "./modules/_template.js";
import { checkAndCreateSection, fetchState, imgErroFix, searchList } from "./modules/_utils.js";

const main = document.querySelector("main");

async function loadLocalPage(query) {
    const className = `local-news-container`;
    await checkAndCreateSection(query, className, "/local");
    dispChangeState()
    imgErroFix()
}

export function checkCountryAvail() {
    const userCountry = localStorage.getItem("countryName");
    if (userCountry) {
        isLocalAvail()
    }
    else {
        dispCountryList()
        removeLoadingAnimation()
    }
}

function isLocalAvail() {
    const userLocal = localStorage.getItem("stateName");
    if (userLocal) {
        loadLocalPage(userLocal)
    }
    else {
        dispStatesList()
        removeLoadingAnimation()
    }
}

function dispCountryList() {
    main.innerHTML = stateCountryList('country')
    const list = document.querySelector(".list > ul");
    countriesList.forEach(country => {
        list.innerHTML += `<li tabindex="1" id="${country.countryId}"><span>${country.countryEmoji}</span>${country.countryName}</li>`
    })
    document.querySelectorAll("#country-list  li").forEach(list => {
        list.addEventListener("click", () => {
            selectCountry(list.id, list.lastChild.textContent)
        })
    })
}

function selectCountry(countryId, countryName) {
    localStorage.setItem("countryName", countryName);
    localStorage.setItem("countryId", countryId);
    main.innerHTML = "";
    dispStatesList()
}

async function dispStatesList() {
    let states = await fetchState(localStorage.getItem("countryId"))
    main.innerHTML = stateCountryList('state');
    const list = document.querySelector(".list > ul");
    if (states.length == 0) {
        list.innerHTML += `<li>No States Available</li>`;
    }
    else {
        states = states.sort(sortArray)
        states.forEach(state => {
            list.innerHTML += `<li tabindex="1">${state.name}</li>`
        });
        document.querySelectorAll("#state-list  li").forEach(li => {
            li.addEventListener("click", () => {
                if (li.textContent == localStorage.getItem("stateName")) {
                    loadLocalPage(localStorage.getItem("stateName"))
                }
                else {
                    selectState(li.textContent)
                }
            })
        });
        document.querySelectorAll("#state-list  li").forEach(li => {
            li.addEventListener("keypress", (e) => {
                if (e.key == "Enter") {
                    if (li.textContent == localStorage.getItem("stateName")) {
                        loadLocalPage(localStorage.getItem("stateName"))
                    }
                    else {
                        selectState(li.textContent)
                    }
                }
            })
        });
        searchList()
    }
}

function selectState(stateName) {
    addLoadingAnimation()
    localStorage.setItem("stateName", stateName);
    main.innerHTML = "";
    loadLocalPage(localStorage.getItem("stateName"))
}

function dispChangeState() {
    const changeBtn = document.querySelector(".change-btn");
    if (changeBtn != null) {
        changeBtn.style.display = "unset";
        changeBtn.dataset.title = "change-state"
        changeBtn.addEventListener("click", () => {
            changeState()
        })
        changeBtn.addEventListener("keypress", (e) => {
            if (e.key == "Enter") {
                changeState()
            }
        })
    }
}

function changeState() {
    localStorage.removeItem("stateName")
    dispStatesList()
}

function sortArray(x, y) {
    return x.name.localeCompare(y.name);
}