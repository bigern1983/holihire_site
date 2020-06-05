
var resizeGallery = function (el) {
    var gallWidth = el.getBoundingClientRect().width;
    
    if (el.classList.contains("gallery--narrow")) {
        el.style.height = String(1.1 * gallWidth) + "px";
    } else {
        el.style.height = String(0.8 * gallWidth) + "px";
    }
    console.log(el, gallWidth)
}

var resizeAll = function () {
    var all = document.querySelectorAll(".gallery");
    for (var i = 0; i < all.length; ++i) {
        resizeGallery(all[i]);
    }
}

var configureGallery = function (el) {

    var thumbs = el.querySelectorAll(".gallery__thumbnails .gallery__thumbnail-item");
    var main = el.querySelector(".gallery__main")

    var popup = document.querySelector(".popup");
    var popupMain = document.querySelector(".popup__main");
    var popupCaption = document.querySelector(".popup__caption");
    console.log(popup);

    



    for (var i = 0; i < thumbs.length; ++i) {
        console.log(i + "heljaljdflajdlfkj");
        thumbs[i].addEventListener("click", function (ev) {
           
            for (var j = 0; j < main.children.length; ++j) {
                if (this.firstChild.src === main.children[j].src) {
                    console.log("matched");
                    main.children[j].classList.remove("hidden");
                    main.children[j].classList.add("visible");

                } else {
                    main.children[j].classList.remove("visible");
                    main.children[j].classList.add("hidden");
                }
            }
        });

        var newImg = document.createElement("img");
        newImg.src = thumbs[i].firstChild.src;
        newImg.classList.add("gallery__image")
        if (i === 0) {
            newImg.classList.add("visible");

        } else {

            newImg.classList.add("hidden")
        }

        newImg.addEventListener("click", function (ev) {
            console.log("click", this);
            popupMain.innerHTML = "";
            var newImg = document.createElement("img");
            newImg.src = this.src;
            newImg.classList.add("popup__image");
            popupMain.appendChild(newImg);
            popup.classList.toggle("popup--hidden");
        })
        main.appendChild(newImg);
    }


}


//get all instances of gallery
    var galleryList = document.querySelectorAll(".gallery");

    for (var i = 0; i < galleryList.length; ++i) {
        resizeAll();
        configureGallery(galleryList[i])
    }


var popupClose = document.querySelector(".popup__close");
var popup = document.querySelector(".popup");
console.log(popupClose);


popupClose.addEventListener("click", function (ev) {
    popup.classList.toggle("popup--hidden");
    console.log("popup click")
});




resizeAll();
window.onresize = resizeAll;