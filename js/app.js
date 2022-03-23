let elBg = document.getElementById('bg');
let elMoon = document.getElementById('moon');
let elMountain = document.getElementById('mountain');
let elRoad = document.getElementById('road');
let elText = document.getElementById('text');

window.addEventListener('scroll', function() {
    let value = window.scrollY;

    elBg.style.top = value * 0.5 + 'px';
    elMoon.style.left = -value * 0.5 + 'px';
    elMountain.style.top = -value * 0.15 + 'px';
    elRoad.style.top = value * 0.15 + 'px';
    elText.style.top = value * 1 + 'px';
})