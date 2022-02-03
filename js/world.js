import { addLoadingAnimation } from "./modules/_loader.js";
import { checkAndCreateSection, imgErroFix } from "./modules/_utils.js";

export function loadWorldPage() {
    const className = `world-news-container`;
    const query = "world";
    addLoadingAnimation();
    checkAndCreateSection(query, className, "/world");
    imgErroFix()
}