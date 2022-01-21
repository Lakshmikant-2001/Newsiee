
export function addLoadingAnimation(main,loaderDiv) {
    main.style.display="none";
    loaderDiv.style.display = "flex";
}

export function removeLoadingAnimation(main,loaderDiv) {
    main.style.display="flex";
    loaderDiv.style.display = "none";
}
