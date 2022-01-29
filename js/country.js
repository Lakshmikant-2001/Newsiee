import { addLoadingAnimation } from "./modules/_loader.js";
import { stateCountryList , countriesList} from "./modules/_template.js";
import { checkAndCreateSection, imgErroFix } from "./modules/_utils.js";

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
    countriesList.forEach(country => {
        list.innerHTML += `<li id="${country.countryId}"><span>${country.countryEmoji}</span>${country.countryName}</li>`
    })
    document.querySelectorAll("#country-list  li").forEach(list => {
        list.addEventListener("click", () => {
            if(localStorage.getItem("countryId") == list.id){
                loadCountryPage(localStorage.getItem("countryId"))
            }
            else{
                localStorage.removeItem("countryName")
                localStorage.removeItem("countryId")
                localStorage.removeItem("stateName")
                selectCountry(list.id, list.lastChild.textContent)
            }
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
    changeBtn.dataset.title="change-country"
    changeBtn.addEventListener("click", () => {
        changeCountry()
    })
}

function changeCountry() {
    dispCountryList()
}
