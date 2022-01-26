
export function addLoadingAnimation() {
    const body = document.querySelector('body');
    const main = document.querySelector("main");
    const loaderDiv = document.querySelector(".loader-div");
    body.style.pointerEvents = "none";
    main.style.display = "none";
    loaderDiv.style.display = "flex";
}

export function removeLoadingAnimation() {
    const body = document.querySelector('body');
    const main = document.querySelector("main");
    const loaderDiv = document.querySelector(".loader-div");
    body.style.pointerEvents = "unset";
    main.style.display = "flex";
    loaderDiv.style.display = "none";
}
