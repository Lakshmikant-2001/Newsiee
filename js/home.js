import { clickSlider } from "./slider.js";
import { addLoadingAnimation, removeLoadingAnimation } from "./loader.js";
import { fetchNews,createNewsSection } from "./utils.js";

const main = document.querySelector("main");
const loaderDiv = document.querySelector(".loader-div");
const className = `category-topics-container`;

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
        createNewsSection(data, randomWord,className);
        sessionTopics.push(randomWord);
        checkTtlTopics()
    }
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

function imgErroFix() {
    const newsImages = document.querySelectorAll(".news-img");
    newsImages.forEach(img => {
        img.addEventListener("error", () => {
            img.setAttribute("src", `./assets/news-cover-img.jpg`);
        })
    })
}