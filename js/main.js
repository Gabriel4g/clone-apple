const nav = document.querySelector("nav");

function navScrool() {
    if(scrollY >= 700) {
        nav.style.background = "#2a2a2a"
    }

    else {
        nav.style.background = "#000"
    }
}

document.addEventListener("scroll", () => {
    navScrool()
})