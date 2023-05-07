const $BODY = document.querySelector('body');
const $BUTTON = document.querySelector('#main');

function scrollToElement(element) {
    scroll({
        top:900,
        behavior: 'smooth',
    });
}
function getScrollPosition() {
    return window.scrollY;
}
$BUTTON.onclick = function() {
    scrollToElement();
    console.log(getScrollPosition());
};

