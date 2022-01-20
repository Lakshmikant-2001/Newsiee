import { clickSlider } from "./slider.js";
const main = document.querySelector("main");

fetchNews("covid");

setTimeout(() => {
    fetchNews("elon");
}, 2000);


async function fetchNews(randomWord) {
    const response = await fetch(`https://free-news.p.rapidapi.com/v1/search?q=${randomWord}&page_size=10`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "free-news.p.rapidapi.com",
            "x-rapidapi-key": "1544c12ce7mshb9037b498f18f31p12611djsnbb00e4c0c136"
        }
    });
    const data = await response.json();
    createNewsSection(data, randomWord);
    clickSlider();
}

function createNewsSection(data, heading) {
    const sectionId = `topic-${heading}`;
    main.innerHTML += `       
    <section class="topic-container" id="${sectionId}">
        <h3 class="topic-heading">${heading}</h3>
        <div class="news-card-wrapper"></div>
        <div class="arrow-div" data-id="${sectionId}">
            <svg class="left-arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                role="img" class="iconify iconify--ic right-arrow" width="60" height="60"
                preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" data-icon="ic:sharp-arrow-drop-down-circle"
                data-width="60" data-rotate="90deg">
                <g transform="rotate(90 12 12)">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 13l-4-4h8l-4 4z"
                        fill="currentColor"></path>
                </g>
            </svg>
            <svg class="right-arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                role="img" class="iconify iconify--ic right-arrow" width="60" height="60"
                preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" data-icon="ic:sharp-arrow-drop-down-circle"
                data-width="60" data-rotate="-90deg">
                <g transform="rotate(-90 12 12)">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 13l-4-4h8l-4 4z"
                        fill="currentColor"></path>
                </g>
            </svg>
        </div>
    </section>`;
    createCards(data, sectionId);
}

function createCards(data, sectionId) {
    const currentNewsCardWrapper = document.querySelector(`#${sectionId} > .news-card-wrapper`);
    const articles = data.articles;
    articles.forEach(article => {
        const newsSource = article.clean_url.replace(/\.com/g, "").substr(0, 3);
        const newsImg = article.media;
        currentNewsCardWrapper.innerHTML += `
        <div class="news-card-holder">
            <div class="news-card">
                <div class="news-source" title="${article.clean_url}">${newsSource}</div>
                <div class="news-front-side">
                    <img src="${newsImg}" alt="" class="news-img">
                    <p class="news-headlines">${article.title}</p>
                </div>
                <div class="news-back-side">
                    <p class="news-des">${article.summary}</p>
                    <a class="visit-btn" href="${article.link}" target="blank">visit</a>
                </div>
            </div>
        </div>`
    })
};

