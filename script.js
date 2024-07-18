const collapsibleMenu = document.querySelector(".collapsible-menu");
const menuBars = document.querySelector(".menu-bars");
const servicesIcon = document.querySelector(".services-icon");
const applicationsIcon = document.querySelector(".applications-icon");

const servicesCollapsibleMenu = document.querySelector(".services-collapsible-menu");
const applicationsCollapsibleMenu = document.querySelector(".applications-collapsible-menu");

// hide collapsible menu when clicking outside its div (if its open)
window.addEventListener("click", (event) => {
    if(collapsibleMenu.style.display == "block" && event.target.tagName == "BODY"){
        collapsibleMenu.style.display="none";
        applicationsCollapsibleMenu.style.display="none";
        servicesCollapsibleMenu.style.display="none";
        menuDisplayed = false;
        serviceMenuDisplayed = false;
        applicationsMenuDisplayed = false;
    }
})

// hide collapsible menu when open if window size abve 975px
window.addEventListener("resize", () => {
    console.log(window.innerWidth);

    if(window.innerWidth > 975){
        collapsibleMenu.style.display="none";
        applicationsCollapsibleMenu.style.display="none";
        servicesCollapsibleMenu.style.display="none";
        menuDisplayed = false;
        serviceMenuDisplayed = false;
        applicationsMenuDisplayed = false;
    }
})

let menuDisplayed = false;

menuBars.addEventListener("click", () => {
    if(!menuDisplayed) {
        collapsibleMenu.style.display="block";
        menuDisplayed = true;
    } else {
        collapsibleMenu.style.display="none";
        servicesCollapsibleMenu.style.display="none";
        applicationsCollapsibleMenu.style.display="none";
        menuDisplayed = false;
        serviceMenuDisplayed = false;
        applicationsMenuDisplayed = false;
    }
})

let serviceMenuDisplayed = false;

servicesIcon.addEventListener("click", () => {
    if(!serviceMenuDisplayed) {
        servicesCollapsibleMenu.style.display="block";
        serviceMenuDisplayed = true;
    } else {
        servicesCollapsibleMenu.style.display="none";
        serviceMenuDisplayed = false;
    }
})

let applicationsMenuDisplayed = false;

applicationsIcon.addEventListener("click", () => {
    if(!applicationsMenuDisplayed) {
        applicationsCollapsibleMenu.style.display="block";
        applicationsMenuDisplayed = true;
    } else {
        applicationsCollapsibleMenu.style.display="none";
        applicationsMenuDisplayed = false;
    }
})