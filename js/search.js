import { addLoadingAnimation, removeLoadingAnimation } from "./loader.js";
import { fetchNews,createNewsSection } from "./utils.js";

const searchBar = document.querySelector("#search-inp-fld");
const main = document.querySelector("main");
const loaderDiv = document.querySelector(".loader-div");
const className = `searched-topic-container`;

searchBar.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        const query = searchBar.value;
        addLoadingAnimation(main, loaderDiv);
        checkAvail(query);
    }
});

async function checkAvail(query) {
    const result = await fetchNews(query);
    const isAvail = result[0];
    const data = result[1];
    if (!isAvail) {
        console.log("no data available");
        removeLoadingAnimation(main, loaderDiv);
    }
    else {
        createNewsSection(data, query, className);
        removeLoadingAnimation(main, loaderDiv);
    }
}
