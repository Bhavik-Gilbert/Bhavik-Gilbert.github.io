(function () {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('otF2U1AA8agT6_bgG');
})();
        
window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        const form = document.getElementById('contact-form');
        const email = form.elements['user_email'];

        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (email.value.match(mailformat)) {
            event.preventDefault();
            // generate a five digit number for the contact_number variable
            this.contact_number.value = Math.random() * 100000 | 0;
            // these IDs from the previous steps
            emailjs.sendForm('service_864znoa', 'template_amre6di', this)
                .then(function () {
                    window.alert("Email Sent Successfully\n\nWe'll get back to you shortly");
                }, function (error) {
                    window.alert("Error sending email\n\nTry again later");
                });
        }
        else {
            window.alert("Invalid Email Entered");
        }
    });
}