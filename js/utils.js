import { newsSection, newsCard } from "./template.js";

export async function fetchNews(query) {
    const response = await fetch(`https://free-news.p.rapidapi.com/v1/search?q="${query}"&lang=en&page_size=10`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "free-news.p.rapidapi.com",
            "x-rapidapi-key": "1544c12ce7mshb9037b498f18f31p12611djsnbb00e4c0c136"
        }
    });
    const data = await response.json();
    return [data.total_hits, data];
}

export function createNewsSection(data, heading,className) {
    heading = heading.replace(/\s/g, "");
    const sectionId = `topic-${heading}`;
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