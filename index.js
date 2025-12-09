const toggle_btn = document.querySelector('.toggle_btn');
const navitems = document.querySelector('.nav-items');
let menuOpen = false;

toggle_btn.addEventListener('click', () => {
    if (menuOpen == false) {
        navitems.style.display = "block";
        menuOpen = true;
    }
    else if (menuOpen == true) {
        navitems.style.display = "none"
        menuOpen = false;
    }
});