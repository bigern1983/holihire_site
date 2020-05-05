var controller = new ScrollMagic.Controller();

function init() {

    document.querySelector("body").style.visibility = "visible"

    var tl = gsap.timeline();


    tl.from("#mobility", {
        duration: 1,
        scale: 0.4,
        x: gsap.utils.random(-1000, 1000),
        y: gsap.utils.random(-200, 200),
        ease: "power",
        autoAlpha: 0
    });
    tl.from("#baby", {
        duration: 1,
        scale: 0.4,
        x: gsap.utils.random(-1000, 1000),
        y: gsap.utils.random(-200, 200),
        autoAlpha: 0
    });
    tl.from("#general", {
        duration: 1,
        scale: 0.4,
        y: gsap.utils.random(-200, 200),
        autoAlpha: 0
    });

    var t2 = gsap.timeline();

    t2.from("#about-text", {
        y: 100,
        x: document.body.getBoundingClientRect().width / 2.0,
        autoAlpha: 0,
        duration: 1
    })

    console.log(document.querySelector("#mainHeading").getBoundingClientRect().height)

    var scene = new ScrollMagic.Scene({
        triggerElement: "#categories",
        triggerHook: 0.3,
        reverse: false
    })
        .addIndicators({
            colorTrigger: "red",
            colorStart: "blue",
            colorEnd: "blue",
            
        })
        .setTween(tl)
        .addTo(controller);
    

    var scene2 = new ScrollMagic.Scene({
        triggerElement: "#about-text h2",
        triggerHook: 0.6,
        reverse: false
    })
        .addIndicators({
            colorTrigger: "red",
            colorStart: "blue",
            colorEnd: "blue",
            indent: 10

        })
        .setTween(t2)
        .addTo(controller);

    
    var t3 = gsap.timeline();

    t3.from("#delivery", {
        y: 100,
        x: -document.body.getBoundingClientRect().width / 2.0,
        autoAlpha: 0,
        duration: 1,
    })


    var scene3 = new ScrollMagic.Scene({
        triggerElement: "#delivery",
        triggerHook: 0.7,
        reverse: false
    })
        .addIndicators({
            colorTrigger: "red",
            colorStart: "blue",
            colorEnd: "blue",
            indent: 15
        })
        .setTween(t3)
        .addTo(controller);


}


window.addEventListener("load", (ev) => {
    init();
})
