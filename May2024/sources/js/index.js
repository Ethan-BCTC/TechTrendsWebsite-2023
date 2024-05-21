function menuOpen() {
    var content = document.getElementById('hamburger-menu-content');
    var ham = document.getElementById('hamburger-menu-open');
    content.style.animationDirection = 'normal';
    ham.style.animationDirection = 'normal';
    content.style.animationName = 'hamburgerMenuContent';
    ham.style.animationName = 'hamburgerMenuAnimation';
    ham.addEventListener('animationend',menuOpenEnd);
    ham.removeEventListener('mouseover', menuOpen);
}
function menuOpenEnd() {
    var content = document.getElementById('hamburger-menu-content');
    var ham = document.getElementById('hamburger-menu-open');
    content.style.animationName = 'none';
    ham.style.animationName = 'none';
    ham.style.transform = 'rotate(90deg)'
    content.style.transform = 'translateY(50px)';
    content.style.opacity = '1';
    ham.addEventListener('mouseleave',menuClose);
    ham.removeEventListener('animationend', menuOpenEnd);
    ham.removeEventListener('mouseover',menuOpen);
}



function menuClose() {
    var content = document.getElementById('hamburger-menu-content');
    var ham = document.getElementById('hamburger-menu-open');
    ham.removeEventListener('animationend', menuOpenEnd);

    content.style.animationDirection = 'reverse';
    ham.style.animationDirection = 'reverse';
    content.style.animationName = 'hamburgerMenuContent';
    ham.style.animationName = 'hamburgerMenuAnimation';
    ham.addEventListener('animationend',menuCloseEnd);
}
function menuCloseEnd() { 
    var content = document.getElementById('hamburger-menu-content');
    var ham = document.getElementById('hamburger-menu-open');
    ham.style.transform = 'rotate(0deg)'
    ham.style.animationName = 'none';
    content.style.transform = 'translateY(-250px)';
    content.style.opacity = '0';
    content.style.animationName = 'none';
    ham.removeEventListener('mouseleave', menuClose);
    ham.removeEventListener('animationend', menuCloseEnd);
    ham.addEventListener('mouseover', menuOpen);
}