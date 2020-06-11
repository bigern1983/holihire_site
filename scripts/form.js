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

    var bookingForm = document.getElementById("booking-form");

    // create the pristine instance
    if (bookingForm) {
        var pristineBooking = new Pristine(bookingForm, defaultConfig, true);

        bookingForm.addEventListener('submit', function (e) {


            // check if the form is valid
            console.log("submit")
            var valid = pristineBooking.validate(); // returns true or false
            if (!valid) {
                e.preventDefault();
            }

        });
    }

    var contactForm = document.getElementById("contact-form");
    if (contactForm) {
        var pristineContact = new Pristine(contactForm, defaultConfig, true);

        contactForm.addEventListener('submit', function (e) {


            // check if the form is valid
            console.log("submit")
            var valid = pristineContact.validate(); // returns true or false
            if (!valid) {
                e.preventDefault();
            }

        });

    }


};
