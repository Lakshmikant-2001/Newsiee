import { clickSlider } from "./modules/_slider.js";
import { addLoadingAnimation, removeLoadingAnimation } from "./modules/_loader.js";
import { fetchNews, createNewsSection, imgErroFix } from "./modules/_utils.js";

const main = document.querySelector("main");
const className = `category-topics-container`;
const homePageMenu = document.querySelector("#suggested");

let topics = ["covid", "ozone", "tesla", "google", "meta", "microsoft", "agriculture", "crypto"];
let genWords = [], sessionTopics = [], noDataWords = [];

homePageMenu.addEventListener("click", () => {
    if (window.location.pathname != homePageMenu.dataset.route) {
        loadHomePage();
    }
})

homePageMenu.addEventListener("keydown", (e) => {
    if(e.key=="Enter"){
        if (window.location.pathname != homePageMenu.dataset.route) {
            loadHomePage();
        }
    }
})

export function loadHomePage() {
    main.innerHTML = "";
    addLoadingAnimation();
    sessionTopics = [];
    wordPicker();
}

function wordPicker() {
    const randomWord = randomWordGen();
    if (noDataWords.includes(randomWord)) {
        wordPicker()
    }
    else
        if (genWords.includes(randomWord)) {
            wordPicker()
        }
        else {
            checkAvail(randomWord);
            genWords.push(randomWord);
        }
}

function randomWordGen() {
    return topics[Math.floor(Math.random(topics) * topics.length)];
}

async function checkAvail(randomWord) {
    const result = await fetchNews(randomWord, 1);
    const isAvail = result[0];
    const data = result[1];
    if (!isAvail) {
        wordPicker();
        noDataWords.push(randomWord);
    }
    else {
        createNewsSection(data, randomWord, className);
        sessionTopics.push(randomWord);
        checkTtlTopics()
    }
}

function checkTtlTopics() {
    if (topics.length != genWords.length) {
        if (sessionTopics.length != 1) {
            wordPicker();
        }
        else {
            imgErroFix();
            removeLoadingAnimation();
            clickSlider();
        }
    }
}