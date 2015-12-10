'use strict';

// HELPER FUNCTIONS
function _(el) {
    return document.getElementById(el);
}
function _class(el) {
    return document.querySelector(el);
}


// EVENT LISTENERS
// _class("img.logo").addEventListener("mouseover", logoShowInfo, false);
// _class("img.logo").addEventListener("mouseout", logoHideInfo, false);
var portfolioItems = document.querySelectorAll(".work");
for (var i = 0; i < portfolioItems.length; i++) {
    portfolioItems[i].addEventListener("mouseover", applyOverlay, false);
    portfolioItems[i].addEventListener("mouseout", removeOverlay, false);
}
// _class(".info").addEventListener("mouseover", showContactInfo, false);
// _class(".info").addEventListener("mouseout", hideContactInfo, false);
// var portfolioPics = document.querySelectorAll(".lightbox");
// for (var i = 0; i < portfolioPics.length; i++) {
//     portfolioPics[i].addEventListener("mousedown", showLightbox, false);
// }

// MAIN ANIMATIONS
var deg = 0;

TweenLite.to(_class("h1.welcome"), 1.75, {delay:1, opacity:1, z:1, ease: Power0.easeNone});
TweenLite.to(_class("p.welcome"), 1, {delay:2, opacity:1, z:1, ease: Power0.easeNone});
// TweenLite.to(_class("p.welcome"), 1, {delay:2, opacity:1, z:1, ease: Power0.easeNone});
// TweenLite.from(_class("p.welcome"), 1.75, {delay:3, opacity:1, z:1, ease: Power0.easeNone});

function logoShowInfo(event) {
    TweenLite.to(_class("img.logo"),0.5, {rotationY:deg+=180, ease: Power0.easeNone});
}

function logoHideInfo(event) {
    TweenLite.to(_class("img.logo"),0.5, {rotationY:deg+=180, ease: Power0.easeNone});
}

function rotateForward(event) {
    TweenLite.from(event.target, 0.5, {rotationY:40, ease: Power0.easeNone});
}

function applyOverlay(event) {
    TweenLite.to(event.target, .35, {opacity: 1});
}
function removeOverlay(event) {
    TweenLite.to(event.target, .35, {opacity: .5});
}
function showContactInfo(event) {
    TweenLite.to(event.target, .35, {backgroundColor: "#fff"});
    TweenLite.to($('.info ul'), .35, {backgroundColor: "#fff"});
}
function hideContactInfo(event) {
    TweenLite.to(event.target, .35, {backgroundColor: "#000"});
    TweenLite.to($('.info ul'), .35, {backgroundColor: "#000"});
}
function showLightbox(event) {
    console.log('clicked');
    console.log(event.target);
}
// function rotateBack(event) {
//     TweenLite.to(event.target, 0.5, {rotationY:-40, z:-100, ease: Power0.easeNone});
// }