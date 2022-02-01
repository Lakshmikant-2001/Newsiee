import { showCredits, removeCredits, handleLocation} from "./modules/_utils.js";

const creditsMenu = document.querySelector("#credits");
const creditsContainer = document.querySelector("#credits-container");
const main = document.querySelector("main");

main.addEventListener("click", ()=> {
    if(creditsContainer.classList.length == 0){
        removeCredits();
        const path = window.location.pathname;
        handleLocation(path)
    }
})
creditsMenu.addEventListener("click", () => {
    showCredits()
});

creditsMenu.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        showCredits()
    }
})

