'use strict'

var buttonMenu = document.getElementById("buttonMenu");
var menu = document.getElementById("menuList");

//var hamburgerBtnClosed = 'hamburger - btn closed';/////
var closeButton = 'hamburger-btn closed';///
var openButton = 'hamburger-btn opened';//

var menuListClosed = 'header-nav__items closed';
var menuListOpened = 'header-nav__items opened';

buttonMenu.onclick = function (e) {
    if (buttonMenu.className == closeButton) {
        buttonMenu.className = openButton;
        menu.className = menuListOpened;

    } else if (buttonMenu.className == openButton) {
        buttonMenu.className = closeButton;
        menu.className = menuListClosed;
    }
}