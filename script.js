const $BODY = document.querySelector('body');
const $BUTTON = document.querySelector('#main');
const $SECTION = document.querySelectorAll('section');
const $BURGER_MENU_BUTTON = document.querySelector('.burger-menu');
const $NAV_LINKS = document.querySelector('.nav-links');

function scrollToElement(element) {
    const scrollHeight = element.offsetTop - 200;
    scroll({
        top:scrollHeight,
        behavior: 'smooth',
    });
}
function scrollToSection() {
    for (let i = 0; i > $SECTION.length; i++ ){
        console.log(`executed. number ${i}`);
        scrollToElement($SECTION[i]);
    }
}
$BUTTON.onclick = function() {
    scrollToElement($SECTION[1]);
};

$BURGER_MENU_BUTTON.onclick = function() {
    displayLinks = $NAV_LINKS.style.display;
    isMenuOpen = displayLinks != "none";
    isMenuOpen  ?  displayLinks = "none" : displayLinks = "block";
}



