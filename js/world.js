import { addLoadingAnimation } from "./modules/_loader.js";
import { checkAndCreateSection, imgErroFix } from "./modules/_utils.js";

let worldCategories = ["sports", "weather", "science", "technology", "entertainment", "health", "finance"];

export function loadWorldPage() {
    const className = `world-news-container`;
    const query = randomWorldCategory();
    addLoadingAnimation();
    checkAndCreateSection(query, className, "/world");
    imgErroFix()
}

function randomWorldCategory() {
    return worldCategories[Math.floor(Math.random(worldCategories) * worldCategories.length)];
}