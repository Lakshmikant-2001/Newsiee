import { newsSection, newsCard } from "./_template.js";
import { removeLoadingAnimation } from "./_loader.js";
import { noDataTemplate } from "./_template.js";
import { loadSearchPage } from "../search.js";

function sleep(milliseconds) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds))
}

export async function fetchNews(query, pageNumber, route) {
    await sleep(1005);
    try {
        const response = await fetch(`https://free-news.p.rapidapi.com/v1/search?q="${query}"&lang=en&page_size=10&page=${pageNumber}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "free-news.p.rapidapi.com",
                "x-rapidapi-key": "1544c12ce7mshb9037b498f18f31p12611djsnbb00e4c0c136"
            }
        })
        if (!response.ok && window.location.pathname == route) {
            await sleep(500);
            return await fetchNews(query, pageNumber, route);
        }
        else if (window.location.pathname != route) {
            return;
        }
        else {
            try {
                const data = await response.json();
                removeLoadingAnimation()
                return [data.total_hits, data, data.total_pages];
            }
            catch (error) {
                console.log(error)
            }
        }
    }
    catch (error) {
        console.log(error);
    }
}

const newsCoverImages = ["news-cover-1.jpg", "news-cover-2.jpeg", "news-cover-3.jpeg", "news-cover-4.jpeg", "news-cover-5.jpeg"];

function randomImgGen() {
    return newsCoverImages[Math.floor(Math.random(newsCoverImages) * newsCoverImages.length)];
}

export function createNewsSection(data, heading, className) {
    const sectionId = `topic-${heading.replace(/\s/g, "")}`;
    if (className == "category-topics-container") {
        main.innerHTML += newsSection(heading, sectionId, className);
    }
    else {
        main.innerHTML = newsSection(heading, sectionId, className);
    }
    const currentNewsCardWrapper = document.querySelector(`#${sectionId} > .news-card-wrapper`);
    createCards(data, currentNewsCardWrapper);
}

export function createCards(data, currentNewsCardWrapper) {
    const articles = data.articles;
    articles.forEach(article => {
        const newsSource = article.clean_url.replace(/\.com/g, "").substr(0, 3);
        const newsSourceTitle = article.clean_url;
        let newsImg = article.media;
        const pattern = new RegExp(/.jpg/);
        const isJpg = pattern.test(newsImg);
        if (!isJpg) {
            newsImg = `./assets/${randomImgGen()}`;
        }
        const newsHeadlines = article.title;
        const newsLink = article.link;
        const newsSummary = article.summary;
        currentNewsCardWrapper.innerHTML += newsCard(newsSource, newsSourceTitle, newsImg, newsHeadlines, newsSummary, newsLink);
    });
};


//y-axis section
let pageNumber = 1, ttlPages, query, Route;

export async function checkAndCreateSection(Query, className, route) {
    Route = route;
    pageNumber = 1;
    query = Query;
    const result = await fetchNews(query, pageNumber, Route);
    if (result != undefined) {
        const isAvail = result[0];
        const data = result[1];
        ttlPages = result[2];
        if (!isAvail) {
            removeLoadingAnimation();
            main.innerHTML = noDataTemplate();
        }
        else {
            createNewsSection(data, query, className);
            removeLoadingAnimation();
            if (ttlPages > 1) {
                addIntersectionObserver()
            }
        }
    }
}

function addIntersectionObserver() {
    const lastCard = document.querySelector(`.news-card-wrapper > :last-child`);
    lastCardObserver.observe(lastCard);
}

const lastCardObserver = new IntersectionObserver(entries => {
    const entry = entries[0];
    if (entry.isIntersecting)
        return appendCards()
    lastCardObserver.unobserve(entry.target);
    const lastCard = document.querySelector(".news-card-wrapper > :last-child");
    if (lastCard) {
        lastCardObserver.observe(lastCard);
    }
}, {
    rootMargin: "500px",
});

async function appendCards() {
    const currentNewsCardWrapper = document.querySelector(`section > .news-card-wrapper`)
    pageNumber++;
    if (pageNumber <= ttlPages) {
        const result = await fetchNews(query, pageNumber, Route);
        if (result != undefined) {
            const data = result[1];
            createCards(data, currentNewsCardWrapper);
        }
    }
    else {
        const lastCard = document.querySelector(".news-card-wrapper > :last-child");
        lastCardObserver.unobserve(lastCard);
        currentNewsCardWrapper.innerHTML += ` <p class = "no-data-msg";><span class="iconify" data-icon="noto-v1:sad-but-relieved-face" data-width="50px"></span>No more data</p>`;
    }
}

export function getQuery() {
    const urlParams = new URLSearchParams(location.search);
    const query = urlParams.get("q");
    return query;
}

export function clearInput() {
    const searchBarInp = document.querySelector("#search-inp-fld");
    searchBarInp.value = "";
}

export function removeMenuSelStyles() {
    const navLinks = document.querySelectorAll("#side-nav li");
    navLinks.forEach(link => {
        link.classList.remove("selected-menu");
    })
}

export function addMenuSelStyles(link) {
    link.classList.add("selected-menu");
}

export function searchPageCall() {
    const query = getQuery();
    loadSearchPage(query)
}

export function handleLocation(path) {
    const searchBarInp = document.querySelector("#search-inp-fld");
    clearInput()
    removeMenuSelStyles()
    if (path == undefined || path == "/") {
        addMenuSelStyles(document.querySelector(`#suggested`))
    }
    else if (path == "/search") {
        const query = getQuery()
        searchBarInp.value = query;
    }
    else {
        const menuTag = document.querySelector(`#${path.replace(/\//g, '')}`);
        addMenuSelStyles(menuTag)
    }
}

export async function fetchState(countryId) {
    var headers = new Headers();
    headers.append("X-CSCAPI-KEY", "Z2JORDBsNFRIU28wWU9YZ1JqWEJqMDIxSFBqU0NyQTVyV2R5SGM4ZQ==");
    var requestOptions = {
        method: 'GET',
        headers: headers,
        redirect: 'follow'
    };
    try {
        const response = await fetch(`https://api.countrystatecity.in/v1/countries/${countryId}/states/`, requestOptions)
        const data = await response.json()
        return data;
    }
    catch (err) {
        console.log(err);
    }
}

export function imgErroFix() {
    const newsImages = document.querySelectorAll(".news-img");
    newsImages.forEach(img => {
        img.addEventListener("error", () => {
            img.setAttribute("src", `./assets/${randomImgGen()}`);
        })
    })
}

export function searchList() {
    const listDiv = document.querySelector(".list ul");
    const list = document.querySelectorAll(".list  li")
    document.querySelector("body").addEventListener("keypress", (e) => {
        for (const li of list) {
            if (li.lastChild.textContent[0].toLowerCase() == e.key.toLowerCase()) {
                listDiv.scrollTop = 0;
                listDiv.scrollBy(0, li.offsetTop - 78);
                li.focus()
                break;
            }
        }
    })
}
const creditsContainer = document.querySelector("#credits-container");
const main = document.querySelector("main");

export function showCredits() {
    main.style.filter = "blur(5px)";
    creditsContainer.classList.remove("none");
}

export function removeCredits() {
    main.style.filter = "none";
    creditsContainer.classList.add("none");
}

const body = document.querySelector("body");
const sideNavBar = document.querySelector("#side-nav");
const hamHolder = document.querySelector(".ham-holder");
const headerTitle = document.querySelector("#header-title");
const searchInpFld = document.querySelector("#search-inp-fld");
const inpClrBtn = document.querySelector("#inp-clear-btn");
const searchDiv = document.querySelector("#search-div");

export function expandSearchBar() {
    if (body.offsetWidth <= 650) {
        hamHolder.classList.add("none");
        headerTitle.classList.add("none");
        searchDiv.style.width = "100%";
        searchInpFld.style.display = "unset";
    }
    else return;
}

export function contractSearchBar() {
    if (body.offsetWidth <= 650) {
        hamHolder.classList.remove("none");
        headerTitle.classList.remove("none");
        searchInpFld.style.display = "none";
        inpClrBtn.style.display = "none";
        searchDiv.style.width = "max-content";
    }
    else return;
}

export function closeNavOnMobile() {
    if (body.offsetWidth <= 650) {
        sideNavBar.classList = [];
        sideNavBar.classList.add("close");
    }
}
