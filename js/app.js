const menu_icon = document.querySelector(".menu-icon");

menu_icon.addEventListener("click", function() {
    let ul_nav = document.querySelector(".ul-nav");
    ul_nav.classList.toggle("invisible");
});