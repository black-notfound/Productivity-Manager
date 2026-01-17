const theme = document.getElementById("theme");

function changeTheme() {
    document.body.classList.toggle("dark")
}

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});