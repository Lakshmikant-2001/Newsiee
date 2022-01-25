import { loadSearchPage } from "./search.js";
import { loadHomePage } from "./home.js";

const navLinks = document.querySelectorAll("#side-nav li");

function getQuery() {
    const urlParams = new URLSearchParams(location.search);
    const query = urlParams.get("q");
    loadSearchPage(query);
}

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        const path = link.dataset.route;
        window.history.pushState({ path }, "", path);
    })
})


window.onpopstate = function (e) {
    const path = e.state?.path;
    path ? route[path].call() : route["/"].call();
}

const route = {
    "/": loadHomePage,
    "/search": getQuery,
}

window.onload= function(){
    const path = window.location.pathname;
    console.log(path)
    route[path].call();
}