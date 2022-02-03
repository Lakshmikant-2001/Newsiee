import { addLoadingAnimation } from "./modules/_loader.js";
import { route } from "./modules/_route.js";
import { addMenuSelStyles, removeMenuSelStyles, clearInput, handleLocation, removeCredits, contractSearchBar, closeNavOnMobile } from "./modules/_utils.js";

const navLinks = document.querySelectorAll("#side-nav li");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if(link.id!="credits"){
            link.blur()
            addLoadingAnimation();
            removeCredits()
            contractSearchBar()
            closeNavOnMobile()
            const path = link.dataset.route;
            if (path != window.location.pathname) {
                window.history.pushState({ path }, "", path);
                clearInput()
                removeMenuSelStyles()
                addMenuSelStyles(link)
            }
            route[path].call()
        }
    })
})

navLinks.forEach(link => {
    link.addEventListener("keypress", (e) => {
        if (e.key == "Enter" && link.id!="credits") {
            link.blur()
            addLoadingAnimation();
            removeCredits()
            contractSearchBar()
            closeNavOnMobile()
            const path = link.dataset.route;
            route[path].call()
            if (path != window.location.pathname) {
                window.history.pushState({ path }, "", path);
                clearInput()
                removeMenuSelStyles()
                addMenuSelStyles(link)
            }
        }
    })
})

window.onpopstate = function (e) {
    addLoadingAnimation()
    const path = e.state?.path;
    path ? route[path].call() : route["/"].call();
    handleLocation(path);
    closeNavOnMobile()
}

window.onload = function () {
    addLoadingAnimation()
    const path = window.location.pathname;
    route[path].call();
    handleLocation(path)
    closeNavOnMobile()
}
