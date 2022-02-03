import { addLoadingAnimation } from "./modules/_loader.js";
import { stateCountryList, countriesList } from "./modules/_template.js";
import { checkAndCreateSection, imgErroFix, searchList } from "./modules/_utils.js";

const main = document.querySelector("main");

async function loadCountryPage(query) {
    const className = `country-news-container`;
    await checkAndCreateSection(query, className, "/country");
    dispChangeCountry()
    imgErroFix()
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
    main.innerHTML = stateCountryList('country')
    const list = document.querySelector(".list > ul");
    countriesList.sort(sortArray)
    countriesList.forEach(country => {
        list.innerHTML += `<li tabindex = "1" id="${country.countryId}"><span>${country.countryEmoji}</span>${country.countryName}</li>`
    })
    document.querySelectorAll("#country-list  li").forEach(list => {
        list.addEventListener("click", () => {
            if (localStorage.getItem("countryId") == list.id) {
                loadCountryPage(localStorage.getItem("countryId"))
            }
            else {
                localStorage.removeItem("countryName")
                localStorage.removeItem("countryId")
                localStorage.removeItem("stateName")
                selectCountry(list.id, list.lastChild.textContent)
            }
        })
    })
    document.querySelectorAll("#country-list  li").forEach(list => {
        list.addEventListener("keypress", (e) => {
            if (e.key == "Enter") {
                if (localStorage.getItem("countryId") == list.id) {
                    loadCountryPage(localStorage.getItem("countryId"))
                }
                else {
                    localStorage.removeItem("countryName")
                    localStorage.removeItem("countryId")
                    localStorage.removeItem("stateName")
                    selectCountry(list.id, list.lastChild.textContent)
                }
            }
        })
    })
    searchList()
}

function selectCountry(countryId, countryName) {
    addLoadingAnimation()
    localStorage.setItem("countryName", countryName);
    localStorage.setItem("countryId", countryId);
    main.innerHTML = "";
    loadCountryPage(localStorage.getItem("countryName"))
}

function dispChangeCountry() {
    const changeBtn = document.querySelector(".change-btn");
    if (changeBtn != null) {
        changeBtn.style.display = "unset";
        changeBtn.dataset.title = "change-country"
        changeBtn.addEventListener("click", () => {
            changeCountry()
        })
        changeBtn.addEventListener("keypress", (e) => {
            if (e.key == "Enter") {
                changeCountry()
            }
        })
    }
}

function changeCountry() {
    dispCountryList()
}

function sortArray(x, y) {
    return x.countryName.localeCompare(y.countryName);
}