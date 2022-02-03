export function clickSlider(className) {
    const arrows = document.querySelectorAll(`.${className} .arrow-div svg`);
    const newsCardHolder = document.querySelector(".news-card-holder");
    const marginWidth = window.getComputedStyle(newsCardHolder).marginRight.replace(/\D/g, '');
    const cardWidth = newsCardHolder.offsetWidth;
    arrows.forEach(arrow => {
        arrow.addEventListener("click", (e) => {
            const parentElement = e.currentTarget.parentElement;
            const dataId = parentElement.dataset.id;
            const targetClass = e.currentTarget.classList;
            const newsCardWrapper = document.querySelector(`#${dataId} > .news-card-wrapper`);
            if (targetClass == "left-arrow") {
                newsCardWrapper.scrollLeft -= cardWidth + (+marginWidth) * 2;
            }
            else {
                newsCardWrapper.scrollLeft += cardWidth + (+marginWidth) * 2;
            }
        })
    });
}