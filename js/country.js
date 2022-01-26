import { addLoadingAnimation } from "./modules/_loader.js";
import { countriesList } from "./modules/_template.js";
import { checkAndCreateSection } from "./modules/_utils.js";

const countryMenu = document.querySelector("#country");
const main = document.querySelector("main");

countryMenu.addEventListener("click", () => {
    if (window.location.pathname != countryMenu.dataset.route) {
        isCountryAvail()
    }
})

async function loadCountryPage(query) {
    const className = `country-news-container`;
    addLoadingAnimation();
    await checkAndCreateSection(query, className);
    dispChangeCountry()
}

export function isCountryAvail() {
    const userCountry = localStorage.getItem("countryName");
    if (userCountry) {
        loadCountryPage(userCountry)
    }
    else {
        dispCountryList()
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
    loadCountryPage(localStorage.getItem("countryName"))
}

function dispChangeCountry() {
    const changeBtn = document.querySelector(".change-btn");
    changeBtn.style.display = "unset";
    changeBtn.title="change-country"
    changeBtn.addEventListener("click", () => {
        console.log("call")
        changeCountry()
    })
}

function changeCountry() {
    localStorage.removeItem("countryName")
    localStorage.removeItem("countryId")
    dispCountryList()
}
