var looper;
var degrees = 0;

window.addEventListener('touchstart', function() {
    
    clearTimeout(looper);

});

function rotate(el, speed) {
    var elem = document.getElementById(el);
    elem.style.transform = "rotate("+degrees+"deg)";
    looper = setTimeout('rotate(\''+el+'\','+speed+')',speed);
    degrees++;
    if (degrees > 359) {
        degrees = 1;
    }
}
