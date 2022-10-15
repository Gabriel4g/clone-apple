const nav = document.querySelector("nav");

function navScrool() {
    if(scrollY >= 40) {
        nav.classList.add("style-background-nav");
    }

    else {
        nav.classList.remove("style-background-nav")
    }
}

document.addEventListener("scroll", () => {
    navScrool()
})

const buttonSearch = document.querySelector("#search-icon");
const buttoncloseSearch = document.querySelector("#close-search");
const contentNav = document.querySelector(".content-nav");
const contentSearch = document.querySelector("#search-nav");

buttonSearch.onclick = () => {
    contentNav.style.display = "none";
    contentSearch.style.display = "flex"
}

buttoncloseSearch.onclick = () => {
    contentSearch.style.display = "none";
    contentNav.style.display = "flex"
}