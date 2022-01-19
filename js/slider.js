const arrows = document.querySelectorAll(".arrow-div svg");
const newsCardHolder = document.querySelector(".news-card-holder");

arrows.forEach(arrow => {
    arrow.addEventListener("click", (e) => {
        const parentElement = e.currentTarget.parentElement;
        const dataId = parentElement.dataset.id;
        const targetClass = e.currentTarget.classList;
        const newsCardWrapper = document.querySelector(`#${dataId} > .news-card-wrapper`);
        console.log(newsCardWrapper);
        console.log(targetClass.value)
        if (targetClass == "left-arrow") {
            newsCardWrapper.scrollLeft -= 200;
        }
        else {
            newsCardWrapper.scrollLeft += 200;
        }
    })
});