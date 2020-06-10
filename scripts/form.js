var defaultConfig = {
    // class of the parent element where the error/success class is added
    classTo: 'booking__group',
    errorClass: 'form-error',
    successClass: 'form-success',
    // class of the parent element where error text element is appended
    errorTextParent: 'booking__group',
    // type of element to create for the error text
    errorTextTag: 'span',
    // class of the error text element
    errorTextClass: 'text-help'
};

window.onload = function () {

    var form = document.getElementById("booking-form");

    // create the pristine instance
    var pristine = new Pristine(form, defaultConfig);

    form.addEventListener('submit', function (e) {
 

        // check if the form is valid
        console.log("submit")
        var valid = pristine.validate(); // returns true or false
        if (!valid) {
            e.preventDefault();
        }

    });
};
