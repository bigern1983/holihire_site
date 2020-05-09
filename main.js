function revealpage() {
    console.log("loaded page");
    gsap.to("body", {
        autoAlpha: 1, duration: 0.5
    });


};

function navBarScrolled() {
    var controller1 = new ScrollMagic.Controller();
    var scene = new ScrollMagic.Scene({
        offset: document.querySelector("#mainNavbar").getBoundingClientRect().height
    }).setClassToggle("#mainNavbar", "scrolled").addIndicators({name:"navbar"}).addTo(controller1);
}


window.addEventListener("load", function(ev) {
    console.log("window loaded")
    revealpage();
    navBarScrolled();
});