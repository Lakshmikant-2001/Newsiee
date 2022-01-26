import { newsSection, newsCard } from "./_template.js";
import { removeLoadingAnimation } from "./_loader.js";

import { loadSearchPage } from "../search.js";

function sleep(milliseconds) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds))
}

export async function fetchNews(query, pageNumber) {
    await sleep(1001);
    try {
        const response = await fetch(`https://free-news.p.rapidapi.com/v1/search?q="${query}"&lang=en&page_size=10&page=${pageNumber}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "free-news.p.rapidapi.com",
                "x-rapidapi-key": "1544c12ce7mshb9037b498f18f31p12611djsnbb00e4c0c136"
            }
        })
        if (!response.ok) {
            fetchNews(query, pageNumber);
        }
        else {
            try {
                const data = await response.json();
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
        const pattern = new RegExp(/.png/);
        const isPng = pattern.test(newsImg);
        if (newsImg == null || isPng) {
            newsImg = "./assets/news-cover-img.jpg"
        }
        const newsHeadlines = article.title;
        const newsLink = article.link;
        const newsSummary = article.summary;
        currentNewsCardWrapper.innerHTML += newsCard(newsSource, newsSourceTitle, newsImg, newsHeadlines, newsSummary, newsLink);
    });
};


//y-axis section
let pageNumber = 1, ttlPages, query;

export async function checkAndCreateSection(Query, className) {
    pageNumber = 1;
    query = Query;
    const result = await fetchNews(query, pageNumber);
    const isAvail = result[0];
    const data = result[1];
    ttlPages = result[2];
    if (!isAvail) {
        removeLoadingAnimation();
        main.innerHTML = ` <p class = "no-data-msg"><span class="iconify" data-icon="noto-v1:sad-but-relieved-face" data-width="50px"></span>No data Available!</p>`;
    }
    else {
        createNewsSection(data, query, className);
        removeLoadingAnimation();
        if (ttlPages > 1) {
            addIntersectionObserver(className)
        }
    }
}

function addIntersectionObserver(className) {
    const lastCard = document.querySelector(`.${className} .news-card-wrapper > :last-child`);
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
    const currentNewsCardWrapper = document.querySelector(`section > .news-card-wrapper`);
    pageNumber++;
    if (pageNumber <= ttlPages) {
        const result = await fetchNews(query, pageNumber);
        const data = result[1];
        createCards(data, currentNewsCardWrapper);
    }
    else {
        const lastCard = document.querySelector(".searched-topic-container .news-card-wrapper > :last-child");
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