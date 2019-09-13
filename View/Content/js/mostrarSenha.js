$(document).ready(function () {

    // Click event of the showPassword button
    $('#showPassword').on('click', function () {

        // Get the password field
        var passwordField = $('#password');

        // Get the current type of the password field will be password or text
        var passwordFieldType = passwordField.attr('type');

        // Check to see if the type is a password field
        if (passwordFieldType == 'password') {
            // Change the password field to text
            passwordField.attr('type', 'text');

            // Change the Text on the show password button to Hide
            $(this).val('Ocultar senha');
        } else {
            // If the password field type is not a password field then set it to password
            passwordField.attr('type', 'password');

            // Change the value of the show password button to Show
            $(this).val('Show');
        }
    });
});