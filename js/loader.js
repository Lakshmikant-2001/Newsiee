
export function addLoadingAnimation(main,loaderDiv) {
    const body = document.querySelector('body');
    body.style.pointerEvents="none";
    main.style.display="none";
    loaderDiv.style.display = "flex";
}

export function removeLoadingAnimation(main,loaderDiv) {
    const body = document.querySelector('body');
    body.style.pointerEvents="unset";
    main.style.display="flex";
    loaderDiv.style.display = "none";
}
