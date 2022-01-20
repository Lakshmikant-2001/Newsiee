export function newsSection(heading,id) {
    return `<section class="topic-container" id="${id}">
                <h3 class="topic-heading">${heading}</h3>
                <div class="news-card-wrapper"></div>
                <div class="arrow-div" data-id="${id}">
                    <svg class="left-arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                        role="img" class="iconify iconify--ic right-arrow" width="60" height="60"
                        preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" data-icon="ic:sharp-arrow-drop-down-circle"
                        data-width="60" data-rotate="90deg">
                        <g transform="rotate(90 12 12)">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 13l-4-4h8l-4 4z"
                                fill="currentColor"></path>
                        </g>
                    </svg>
                    <svg class="right-arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                        role="img" class="iconify iconify--ic right-arrow" width="60" height="60"
                        preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" data-icon="ic:sharp-arrow-drop-down-circle"
                        data-width="60" data-rotate="-90deg">
                        <g transform="rotate(-90 12 12)">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 13l-4-4h8l-4 4z"
                                fill="currentColor"></path>
                        </g>
                    </svg>
                </div>
            </section>`
};


export function newsCard(source,sourceTitle,img,headlines,summary,link){
    return `<div class="news-card-holder">
    <div class="news-card">
        <div class="news-source" title="${sourceTitle}">${source}</div>
        <div class="news-front-side">
            <img src="${img}" alt="" class="news-img">
            <p class="news-headlines">${headlines}</p>
        </div>
        <div class="news-back-side">
            <p class="news-des">${summary}</p>
            <a class="visit-btn" href="${link}" target="blank">visit</a>
        </div>
    </div>
</div>`
}