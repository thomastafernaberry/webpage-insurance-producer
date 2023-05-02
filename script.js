const $BUTTON = document.querySelector('#main');

function scrollToElement(element) {
    scroll({
        top:900,
        behavior: 'smooth',
    });
}
$BUTTON.onclick = function() {
    scrollToElement();
};



