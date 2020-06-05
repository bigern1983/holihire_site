var popup = document.querySelector(".popup");
console.log(popup);

var popupClose = document.querySelector(".popup__close");
console.log(popupClose);


popupClose.addEventListener("click", function (ev) {
    popup.classList.toggle("popup--hidden"); 
});