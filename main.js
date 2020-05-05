function init() {
    console.log("loaded page");
    document.querySelector("body").style.visibility = "visible";

    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        offset: document.querySelector("#mainNavbar").getBoundingClientRect().height
    }).setClassToggle("#mainNavbar", "scrolled").addIndicators().addTo(controller);
};


window.addEventListener("load", (ev) => {
    init();
});