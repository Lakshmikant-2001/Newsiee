import { clickSlider } from "./slider.js";
import { newsSection, newsCard } from "./template.js";
import { addLoadingAnimation, removeLoadingAnimation } from "./loader.js";

const main = document.querySelector("main");
const loaderDiv = document.querySelector(".loader-div");
let topics = ["covid", "ozone", "tesla", "google", "meta", "microsoft", "agriculture", "crypto"];
let genWords = [], sessionTopics = [], noDataWords = [];

window.onload = () => {
    addLoadingAnimation(main, loaderDiv);
    wordPicker();
}

function wordPicker() {
    const randomWord = randomWordGen();
    if (noDataWords.includes(randomWord)) {
        wordPicker()
    }
    else
        if (genWords.includes(randomWord)) {
            randomWordGen()
            wordPicker()
        }
        else {
            setTimeout(() => {
                checkAvail(randomWord);
            }, 1200)
            genWords.push(randomWord);
        }
}

function randomWordGen() {
    return topics[Math.floor(Math.random(topics) * topics.length)];
}

async function checkAvail(randomWord) {
    const result = await fetchNews(randomWord);
    const isAvail = result[0];
    const data = result[1];
    if (!isAvail) {
        wordPicker();
        noDataWords.push(randomWord);
    }
    else {
        createNewsSection(data, randomWord);
        sessionTopics.push(randomWord);
        checkTtlTopics()
    }
}

async function fetchNews(randomWord) {
    const response = await fetch(`https://free-news.p.rapidapi.com/v1/search?q="${randomWord}"&lang=en&page_size=10`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "free-news.p.rapidapi.com",
            "x-rapidapi-key": "1544c12ce7mshb9037b498f18f31p12611djsnbb00e4c0c136"
        }
    });
    const data = await response.json();
    return [data.total_hits, data];
}

function checkTtlTopics() {
    if (topics.length != genWords.length) {
        if (sessionTopics.length != 3) {
            wordPicker();
        }
        else {
            imgErroFix();
            removeLoadingAnimation(main, loaderDiv);
            clickSlider();
        }
    }
}

function createNewsSection(data, heading) {
    heading = heading.replace(/\s/g, "");
    const sectionId = `topic-${heading}`;
    const className = `category-topics-container`;
    main.innerHTML += newsSection(heading, sectionId, className);
    createCards(data, sectionId);
}

function createCards(data, sectionId) {
    const currentNewsCardWrapper = document.querySelector(`#${sectionId} > .news-card-wrapper`);
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

function imgErroFix() {
    const newsImages = document.querySelectorAll(".news-img");
    newsImages.forEach(img => {
        img.addEventListener("error", () => {
            img.setAttribute("src", `./assets/news-cover-img.jpg`);
        })
    })
}