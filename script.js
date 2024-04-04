// select elements
const toggleButton = document.querySelector(".hamburger-button")
const navMenu = document.querySelector(".nav-menu")

// create event listener that toggles the menu when the button is clicked
toggleButton.addEventListener("click", () => {
    menuOpen()
})

// create function that toggles the menu when called
function menuOpen() {
    // check if the button contains the active class
    if (toggleButton.classList.contains("active")) {
        toggleButton.classList.remove("active")
        navMenu.classList.remove("active")
    } else {
        toggleButton.classList.add("active")
        navMenu.classList.add("active")
    }
}