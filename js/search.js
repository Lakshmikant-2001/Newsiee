import { addLoadingAnimation, removeLoadingAnimation } from "./loader.js";
import { fetchNews, createNewsSection } from "./utils.js";

const searchBarInp = document.querySelector("#search-inp-fld");
const main = document.querySelector("main");
const loaderDiv = document.querySelector(".loader-div");
const searchBarMsg = document.querySelector("#search-div >  .message");
const inpClearBtn = document.querySelector("#inp-clear-btn");
const className = `searched-topic-container`;
const searchBtn = document.querySelector("#search-icon");

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
        const query = searchBarInp.value;
        addLoadingAnimation(main, loaderDiv);
        checkAvail(query);
    }
});

searchBtn.addEventListener("click", ()=> {
    if (searchBarInp.value == "") {
        searchBarMsg.style.display = "flex";
        setTimeout(() => {
            searchBarMsg.style.display = "none";
        }, 1000)
    }
    if (searchBarInp.value != "") {
        searchBarMsg.style.display = "none";
        searchBarInp.blur();
        const query = searchBarInp.value;
        addLoadingAnimation(main, loaderDiv);
        checkAvail(query);
    }
})

async function checkAvail(query) {
    const result = await fetchNews(query);
    const isAvail = result[0];
    const data = result[1];
    if (!isAvail) {
        removeLoadingAnimation(main, loaderDiv);
        main.innerHTML = ` <p class = "no-data-msg"><span class="iconify" data-icon="noto-v1:sad-but-relieved-face" data-width="50px"></span>No data Available!</p>`;
    }
    else {
        createNewsSection(data, query, className);
        setTimeout(() => { removeLoadingAnimation(main, loaderDiv); }, 1001)
    }
}
