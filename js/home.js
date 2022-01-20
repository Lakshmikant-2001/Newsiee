import { clickSlider } from "./slider.js";
import { newsSection, newsCard } from "./template.js";

const main = document.querySelector("main");
let topics = ["covid", "ozone", "tesla", "google", "meta"];
let sessionWords = [], totalTopics = [];

window.onload = wordPicker();

function randomWordGen() {
    return topics[Math.floor(Math.random(topics) * topics.length)];
}

function wordPicker() {
    const randomWord = randomWordGen();
    if (sessionWords.includes(randomWord)) {
        randomWordGen()
        wordPicker()
    }
    else {
        checkAvail(randomWord)
        sessionWords.push(randomWord);
    }
}

function checkTtlTopics() {
    if (totalTopics.length != 3) {
        setTimeout(() => {
            wordPicker();
        }, 1200)
    }
    else {
        console.log(totalTopics);
        imgErroFix()
    }
}

async function checkAvail(randomWord) {
    const result = await fetchNews(randomWord);
    const isAvail = result[0];
    const data = result[1];
    if (!isAvail) {
        wordPicker();
    }
    else {
        createNewsSection(data, randomWord);
        clickSlider();
        totalTopics.push(randomWord);
        checkTtlTopics()
    }
}

async function fetchNews(randomWord) {
    const response = await fetch(`https://free-news.p.rapidapi.com/v1/search?q="${randomWord}"&page_size=10`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "free-news.p.rapidapi.com",
            "x-rapidapi-key": "1544c12ce7mshb9037b498f18f31p12611djsnbb00e4c0c136"
        }
    });
    const data = await response.json();
    return [data.total_hits, data];
}

function createNewsSection(data, heading) {
    const sectionId = `topic-${heading}`;
    main.innerHTML += newsSection(heading, sectionId);
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