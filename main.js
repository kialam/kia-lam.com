'use strict';

// HELPER FUNCTIONS
function _(el) {
    return document.getElementById(el);
}
function _class(el) {
    return document.querySelector(el);
}


// EVENT LISTENERS
_class("img.logo").addEventListener("mouseover", logoShowInfo, false);
_class("img.logo").addEventListener("mouseout", logoHideInfo, false);
var portfolioItems = document.querySelectorAll(".work");
for (var i = 0; i < portfolioItems.length; i++) {
    portfolioItems[i].addEventListener("mouseover", rotateForward, false);
    // portfolioItems[i].addEventListener("mouseout", rotateBack, false);
}

var portfolioPics = document.querySelectorAll(".lightbox");
for (var i = 0; i < portfolioPics.length; i++) {
    portfolioPics[i].addEventListener("mousedown", showLightbox, false);
}

// MAIN ANIMATIONS
var deg = 0;

TweenLite.to(_class("h1.welcome"), 1.75, {delay:1, opacity:1, z:1, ease: Power0.easeNone});

function logoShowInfo(event) {
    TweenLite.to(_class("img.logo"),0.5, {rotationY:deg+=180, ease: Power0.easeNone});
}

function logoHideInfo(event) {
    TweenLite.to(_class("img.logo"),0.5, {rotationY:deg+=180, ease: Power0.easeNone});
}

function rotateForward(event) {
    TweenLite.from(event.target, 0.5, {rotationY:40, ease: Power0.easeNone});
}
function showLightbox(event) {
    console.log('clicked');
    console.log(event.target);
}
// function rotateBack(event) {
//     TweenLite.to(event.target, 0.5, {rotationY:-40, z:-100, ease: Power0.easeNone});
// }