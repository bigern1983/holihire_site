function Gallery(el) {

    this.thumbs = el.querySelectorAll(".gallery__thumbnail-image");
    this.thumbItems = el.querySelectorAll(".gallery__thumbnail-item");
    this.main = el.querySelector(".gallery__main");
    this.images = [];
    this.thumbLefts = new Array(this.thumbItems.length);
    this.currentImageIndex = 0;
    this.popup = document.querySelector(".popup");
    this.popupMain = document.querySelector(".popup__main");
    this.nextArrow = this.main.querySelector(".gallery__next");
    this.prevArrow = this.main.querySelector(".gallery__prev");

    this.nextImage = function () {

        if (this.currentImageIndex < this.mainImages.length - 1) {
            this.mainImages[this.currentImageIndex + 1].classList.add("visible");
            this.mainImages[this.currentImageIndex].classList.remove("visible");

            this.currentImageIndex += 1;
            this.slideThumbs(this.currentImageIndex);
            this.checkEnd();
        }

    };

    this.prevImage = function () {

        if (this.currentImageIndex > 0) {
            this.mainImages[this.currentImageIndex - 1].classList.add("visible");
            this.mainImages[this.currentImageIndex].classList.remove("visible");

            this.currentImageIndex -= 1;
            this.slideThumbs(this.currentImageIndex);
            this.checkEnd();

        }

    };

    this.checkEnd = function () {
        if (this.currentImageIndex == 0) {
            //remove prev arrow
            this.prevArrow.style.opacity = 0;
        } else {
            //put it back
            this.prevArrow.style.opacity = 1;
            
        }

        if (this.currentImageIndex == this.mainImages.length - 1) {
            //remove prev arrow
            this.nextArrow.style.opacity = 0;
        } else {
            //put it back
            this.nextArrow.style.opacity = 1;

        }
        
    }

    this.resizeThumbs = function () {
        this.thumbsGalleryWidht = el.querySelector(".gallery__thumbnails").offsetWidth;

        for (var i = 0; i < this.thumbItems.length; ++i) {
            this.thumbLefts[i] = i * this.thumbsGalleryWidht / 5;
            this.thumbItems[i].style["left"] = String(this.thumbLefts[i]) + "px";
        }
    }

    //center on the clicked thumbnail
    this.slideThumbs = function (n) {
        if ((n < 2) || (n > (this.mainImages.length - 2 -1))) {
            return;
        }
        this.thumbsGalleryWidht = el.querySelector(".gallery__thumbnails").offsetWidth;
        var thumbWidth = this.thumbsGalleryWidht / 5;
        for (var i = 0; i < this.thumbItems.length; ++i) {

            var offset = (i * this.thumbsGalleryWidht / 5) - n * thumbWidth + 2 * thumbWidth;
            this.thumbItems[i].style.left = String(offset) + "px";
        }
    }






    //add all images to main panel
    for (var i = 0; i < this.thumbs.length; ++i) {
        this.images.push(this.thumbs[i]);
        var newImg = document.createElement("img");
        // newImg.setAttribute("data-test", "test");
        newImg.src = this.thumbs[i].src;
        newImg.alt = this.thumbs[i].alt
        newImg.classList.add("gallery__image");
        newImg.addEventListener("click", function (ev) {
            console.log("click");
            this.popupMain.innerHTML = "";
            var popupImg = document.createElement("img");
            popupImg.src = ev.target.src;
            popupImg.classList.add("popup__image");
            this.popupMain.appendChild(popupImg);
            this.popup.classList.toggle("popup--hidden");
        }.bind(this));

        this.main.appendChild(newImg);
    }


    this.mainImages = this.main.querySelectorAll(".gallery__image");
    this.mainImages[0].classList.add("visible")

    // add event listeners to thumnails
    for (var i = 0; i < this.thumbs.length; ++i) {
        this.thumbs[i].addEventListener("click", function(ev){

            var index = Array.prototype.indexOf.call(this.thumbs, ev.target);
            if (index != this.currentImageIndex) {

                //left or right of current image
                this.slideThumbs(index);
                this.mainImages[index].classList.add("visible");
                this.mainImages[this.currentImageIndex].classList.remove("visible");
                this.currentImageIndex = index;
                this.checkEnd();
            }
        }.bind(this));
        this.checkEnd();
    }


    //next button listenter
    this.main.querySelector(".gallery__next").addEventListener("click", function(ev){
        console.log("click")
        this.nextImage();
    }.bind(this));
    //prev button listenter
    this.main.querySelector(".gallery__prev").addEventListener("click", function (ev) {
        console.log("click")
        this.prevImage();
    }.bind(this));
}





var resizeGallery = function (el) {
    var gallWidth = el.getBoundingClientRect().width;
    if (el.classList.contains("gallery--narrow")) {
        el.style.height = String(1.1 * gallWidth) + "px";
    } else {
        el.style.height = String(0.8 * gallWidth) + "px";
    }
}

var resizeAll = function () {
    console.log("called resize function");
    for (var i = 0; i < galleryList.length; ++i) {

        resizeGallery(galleryList[i]);
        galleryArray[i].resizeThumbs();
    }
}

//get all instances of gallery
var galleryList = document.querySelectorAll(".gallery");
var galleryArray = []
//create gallery objects
for (var i = 0; i < galleryList.length; ++i) {
    galleryArray.push(new Gallery(galleryList[i], popup));
}

//configure popup
var popup = document.querySelector(".popup");
var popupClose = document.querySelector(".popup__close");
popupClose.addEventListener("click", function(ev){
    popup.classList.toggle("popup--hidden");
}.bind(this));

resizeAll();
window.onresize = resizeAll;
window.onload = resizeAll;