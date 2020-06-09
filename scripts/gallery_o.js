function Gallery(el) {

    this.thumbs = el.querySelectorAll(".gallery__thumbnail-image");
    this.thumbItems = el.querySelectorAll(".gallery__thumbnail-item");
    this.main = el.querySelector(".gallery__main");
    this.images = [];
    this.thumbLefts = new Array(this.thumbItems.length);
    this.currentImageIndex = 0;
    this.popup = document.querySelector(".popup")
    this.popupMain = document.querySelector(".popup__main")


    this.nextImage = function () {

        if (this.currentImageIndex < this.mainImages.length - 1) {
            this.mainImages[this.currentImageIndex + 1].classList.add("visible");
            this.mainImages[this.currentImageIndex].classList.remove("visible");

            this.currentImageIndex += 1;
            this.slideThumbs(this.currentImageIndex);

        }

    };

    this.prevImage = function () {

        if (this.currentImageIndex > 0) {
            this.mainImages[this.currentImageIndex - 1].classList.add("visible");
            this.mainImages[this.currentImageIndex].classList.remove("visible");

            this.currentImageIndex -= 1;
            this.slideThumbs(this.currentImageIndex);

        }

    };


    this.resizeThumbs = function () {
        this.thumbsGalleryWidht = el.querySelector(".gallery__thumbnails").offsetWidth;

        for (var i = 0; i < this.thumbItems.length; ++i) {
            this.thumbLefts[i] = i * this.thumbsGalleryWidht / 5;
            this.thumbItems[i].style["left"] = String(this.thumbLefts[i])+ "px";
        }
    }

    //center on the clicked thumbnail
    this.slideThumbs= function (n) {
        this.thumbsGalleryWidht = el.querySelector(".gallery__thumbnails").offsetWidth;
        var thumbWidth = this.thumbsGalleryWidht / 5;
        for (var i = 0; i < this.thumbItems.length; ++i) {
            
            var offset = (i * this.thumbsGalleryWidht / 5) - n * thumbWidth + 2*thumbWidth;
            this.thumbItems[i].style.left = String(offset) + "px";
        }
    }
   
    


    //add all images to main panel
    for (var i = 0; i < this.thumbs.length; ++i) {
        this.images.push(this.thumbs[i]);
        var newImg = document.createElement("img");
        newImg.setAttribute("data-test", "test");
        newImg.src = this.thumbs[i].src;
        newImg.classList.add("gallery__image");
        newImg.addEventListener("click", (ev) => {
            console.log("click");
            this.popupMain.innerHTML = "";
            var popupImg = document.createElement("img");
            popupImg.src = ev.target.src;
            popupImg.classList.add("popup__image");
            this.popupMain.appendChild(popupImg);
            this.popup.classList.toggle("popup--hidden");
        })

        this.main.appendChild(newImg);
    }

    this.main.firstElementChild.classList.add("visible");
    this.mainImages = this.main.children;


    for (var i = 0; i < this.thumbs.length; ++i) {
        console.log(this.thumbs[i]);
        this.thumbs[i].addEventListener("click", (ev) => {
         
            var index = Array.prototype.indexOf.call(this.thumbs, ev.target);
            if (index != this.currentImageIndex) {
                
                //left or right of current image
                this.slideThumbs(index);
                this.mainImages[index].classList.add("visible");
                this.mainImages[this.currentImageIndex].classList.remove("visible");
                this.currentImageIndex = index;
            }
        });
    }
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
popupClose.addEventListener("click", (ev) => {
    popup.classList.toggle("popup--hidden");
})

resizeAll();
window.onresize = resizeAll;
window.onload = resizeAll;