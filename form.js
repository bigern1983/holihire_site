form = document.forms.namedItem("fileinfo");
form.addEventListener('submit', function (ev) {

    ev.preventDefault();
    var oOutput = document.querySelector("div");
    oData = new FormData(form);
    for (var [key, value] of oData.entries()) {
        console.log("e", key, value);
    }
});