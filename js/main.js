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