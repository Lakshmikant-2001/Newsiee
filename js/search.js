import { addLoadingAnimation, removeLoadingAnimation } from "./loader.js";
import { fetchNews, createNewsSection, createCards } from "./utils.js";

const searchBarInp = document.querySelector("#search-inp-fld");
const main = document.querySelector("main");
const loaderDiv = document.querySelector(".loader-div");
const searchBarMsg = document.querySelector("#search-div >  .message");
const inpClearBtn = document.querySelector("#inp-clear-btn");
const className = `searched-topic-container`;
const searchBtn = document.querySelector("#search-icon");
let pageNumber = 1, query, ttlPages;

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
        addLoadingAnimation(main, loaderDiv);
        checkAndCreateSection(query);
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
        searchBarMsg.style.display = "none";
        searchBarInp.blur();
        query = searchBarInp.value;
        addLoadingAnimation(main, loaderDiv);
        checkAndCreateSection(query);
    }
})

async function checkAndCreateSection(query) {
    const result = await fetchNews(query, pageNumber);
    const isAvail = result[0];
    const data = result[1];
    ttlPages = result[2];
    if (!isAvail) {
        removeLoadingAnimation(main, loaderDiv);
        main.innerHTML = ` <p class = "no-data-msg"><span class="iconify" data-icon="noto-v1:sad-but-relieved-face" data-width="50px"></span>No data Available!</p>`;
    }
    else {
        createNewsSection(data, query, className);
        setTimeout(() => { removeLoadingAnimation(main, loaderDiv); }, 1001);
        addInfScroll();
    }
}

const debounce = (func, delay) => {
    let debounceTimer
    return function() {
            clearTimeout(debounceTimer)
                debounceTimer = setTimeout(() => func.apply(this, arguments), delay)
    }
} 

function addInfScroll() {
    window.addEventListener("scroll", debounce(() => {
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
            pageNumber++;
            const toScroll = window.scrollY;
            if (ttlPages >= pageNumber) {
                addLoadingAnimation(main, loaderDiv)
                setTimeout(() => {
                    appendCards(pageNumber, toScroll);
                }, 1001);
            }
        }
    },1002));
}

async function appendCards(pageNumber, scroll) {
    const result = await fetchNews(query, pageNumber);
    const sectionId = `topic-${query.replace(/\s/g, "")}`;
    const data = result[1];
    createCards(data, sectionId);
    removeLoadingAnimation(main, loaderDiv);
    window.scrollBy(0, scroll);
}