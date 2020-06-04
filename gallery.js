var gallery = document.querySelector("#mob-gallery")
var gallMain = document.querySelector("#mob-gallery .gallery__main-image")
var gallThumbs = document.querySelectorAll("#mob-gallery .gallery__thumbnail-item")

gallMain.src = gallThumbs[0].firstChild.firstChild.src;


var resizeGallery = function() {
    var gallWidth = gallery.getBoundingClientRect().width;
    gallery.style.height = String(0.8 * gallWidth) + "px";
    console.log(gallWidth)
}



for (var i = 0; i < gallThumbs.length; ++i) {
    console.log(i);
    gallThumbs[i].addEventListener("click", function (ev) {
        console.log(this.children[0].innerHTML);
        console.log(this.firstChild.firstChild.src)
        gallMain.src = this.firstChild.firstChild.src;

    });
}

console.log(gallery);
resizeGallery();
window.onresize = resizeGallery;