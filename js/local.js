import { addLoadingAnimation } from "./modules/_loader.js";
import { stateList, countriesList } from "./modules/_template.js";
import { checkAndCreateSection, fetchState, imgErroFix } from "./modules/_utils.js";

const localMenu = document.querySelector("#local");
const main = document.querySelector("main");

localMenu.addEventListener("click", () => {
    if (window.location.pathname != localMenu.dataset.route) {
        checkCountryAvail()
    }
})

async function loadLocalPage(query) {
    const className = `local-news-container`;
    addLoadingAnimation();
    await checkAndCreateSection(query, className);
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
    }
}

function isLocalAvail() {
    const userLocal = localStorage.getItem("stateName");
    if (userLocal) {
        loadLocalPage(userLocal)
    }
    else {
        dispStatesList()
    }
}

function dispCountryList() {
    main.innerHTML = countriesList();
    const countriesListDiv = document.querySelector("#country-list")
    countriesListDiv.style.display = "unset";
    const list = countriesListDiv.querySelectorAll("ul>li");
    list.forEach(list => {
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
    const states = await fetchState(localStorage.getItem("countryId"))
    main.innerHTML = stateList();
    const list = document.querySelector(".list > ul");
    states.forEach(state => {
        list.innerHTML += `<li>${state.name}</li>`
    });
    document.querySelectorAll("#state-list  li").forEach(element => {
        element.addEventListener("click", () => {
            if(element.textContent == localStorage.getItem("stateName")){
                loadLocalPage(localStorage.getItem("stateName"))
            }
            else{
                selectState(element.textContent)
            }
        })
    });
}

function selectState(stateName) {
    localStorage.setItem("stateName", stateName);
    main.innerHTML = "";
    loadLocalPage(localStorage.getItem("stateName"))
}

function dispChangeState() {
    const changeBtn = document.querySelector(".change-btn");
    changeBtn.style.display = "unset";
    changeBtn.dataset.title = "change-state"    
    changeBtn.addEventListener("click", () => {
        changeState()
    })
}

function changeState() {
    localStorage.removeItem("stateName")
    dispStatesList()
}