var controller = new ScrollMagic.Controller();

function init() {

    // Animate the mobility card
    var mobilityTimeline = gsap.timeline();
    mobilityTimeline.from("#mobility", {
        x: gsap.utils.random(-100, 100),
        duration: 0.4,
        ease: "power",
        autoAlpha: 0
    });

    var mobScene = new ScrollMagic.Scene({
        triggerElement: "#mobility",
        triggerHook: 0.7,
        reverse: true
    }).setTween(mobilityTimeline)
    .addIndicators({
        name: "mobility", 
        colorTrigger: "red",
        indent: 10
    }).addTo(controller);


    //animate the baby card
    var babyTimeline = gsap.timeline();
    babyTimeline.from("#baby", {
        x: gsap.utils.random(-100, 100),
        duration: 0.4,
        ease: "power",
        autoAlpha: 0
    });

    var babyScene = new ScrollMagic.Scene({
        triggerElement: "#baby",
        triggerHook: 0.7,
        reverse: true
    }).setTween(babyTimeline)
        .addIndicators({
            name: "baby",
            colorTrigger: "green",
            indent: 20
        }).addTo(controller);

    
    //animate the general card
    var generalTimeline = gsap.timeline();
    generalTimeline.from("#general", {
        x: gsap.utils.random(-100, 100),
        duration: 0.4,
        ease: "power",
        autoAlpha: 0
    });

    var generalScene = new ScrollMagic.Scene({
        triggerElement: "#general",
        triggerHook: 0.7,
        reverse: true
    }).setTween(generalTimeline)
        .addIndicators({
            name: "general",
            colorTrigger: "green",
            indent: 30
        }).addTo(controller);
    
    console.log(mobScene)
  






   

    var aboutTimeline = gsap.timeline();

    aboutTimeline.from("#about-text p", {
        //y: gsap.utils.random(-100, 100),
        x: gsap.utils.random(-100, 100),
        autoAlpha: 0,
        duration: 0.5
    });

        var aboutScene = new ScrollMagic.Scene({
        triggerElement: "#about-text h2",
        triggerHook: 0.8,
        reverse: true
    })
    .addIndicators({
        name: "about",
        colorTrigger: "red",
        indent: 40
    })
    .setTween(aboutTimeline)
    .addTo(controller);

    //animate the delivery card
    var deliveryTimeline = gsap.timeline();

    deliveryTimeline.from("#delivery", {
        x: gsap.utils.random(-500, -300),
        autoAlpha: 0,
        duration: 0.5
    })


    var deliveryScene = new ScrollMagic.Scene({
        triggerElement: "#delivery",
        triggerHook: 0.7,
        reverse: true
    })
        .addIndicators({
            colorTrigger: "red",
            colorStart: "blue",
            colorEnd: "blue",
            indent: 50
        })
        .setTween(deliveryTimeline)
        .addTo(controller);

        //animate the down arrow in the heading 
        gsap.from(".down", {
            scale: 0.7,
            duration: 1, 
            repeat: -1,
            yoyo: true
        })

        // //pin heading
        // var headerScene = new ScrollMagic.Scene({
        //     triggerHook: 0,
        //     duration: "100%"
        // })
        //     .setPin("#mainHeading", { pushFollowers: false})
        // .addTo(controller);
    
    
}


window.addEventListener("load", (ev) => {
    init();
})
