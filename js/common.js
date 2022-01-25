const hamBtn = document.querySelector("#ham-btn");
const sideNavBar = document.querySelector("#side-nav");

hamBtn.addEventListener("click",()=> {
    if(sideNavBar.classList=="close"){
        sideNavBar.classList.replace("close","open");
    }
    else{
        sideNavBar.classList.replace("open","close");
    }
})

