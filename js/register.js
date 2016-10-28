// Script 10.7- register.js
// This script validates a form.

// Function called when the form is submitted.
// Function validates the form data.

function validateUsername(username, message){
    //Validates that a username meets
    //the following criteria:
    //1. Must be at least 8 characters long
    //2. First character must be A-Z or a-z
    //3. Must contain at least one digit (0-9)
    //Function returns "true" if all criteria
    // is met, "false" if any criteria is not met.

    var char1;
    var hasNumber;

    //Check username length;
    if (username.length < 8) {
        message.valueOf = "User name must be at least 8 characters";
        return false;
    }

    //Check first character:
    char1 = username.substr(0,1).toUpperCase();
    if (!(char1 >= "A" && char1 <= "Z")) {
        message.valueOf = "First character must be A-Z or a-z";
        return false;
    }


    //Check for at least 1 digit/numeral:
    hasNumber = /\d/;
    if (!(hasNumber.test(username))){
        message.valueOf = "USer name must contain at least one numeral";
        return false;
    }
    /*
    //Alternate version:
    var anyDigits = false;
    while (!(anyDigits)){
        for (var i = 1; i < username.length; i++)
        {
            char1 = userName.substr(i,1);
            if (char1 >= "0" && char1 <= "9")
            {
                anyDigits = true;
                break; //exit for loop, found one!
            } //end if
        } //end for
        if(!(anyDigits)){
            return false;
        }
    }// end while

    //Otherwise, all criteria met:
    return true;
*/
} //end function

function validateForm(e) {
    'use strict';

    if (typeof e == 'undefined') {
        //This is a browser window-generated event
        e = window.event;
    }

    //Get form references:
    var firstName = U.$('firstName');
    var lastName = U.$('lastName');
    var userName = U.$('userName');
    var email = U.$('email');
    var phone = U.$('phone');
    var city = U.$('city');
    var state = U.$('state');
    var zip = U.$('zip');
    var terms = U.$('terms');

    //error flag:
    var error = false;

    //Validate the first name using a
    //regular expression:
    if (/^[A-Z .\-']{2,20}$/i.test(firstName.value)) {
        // Everything between / and / is the expression
        //Any letter A-Z (case insensitive) is valid
        //Spaces, periods, and hyphens are valid
        //name must be 2 - 20 characters long

        //First name matches the expression
        //and is valid
        //alert("Valid first name");
        removeErrorMessage('firstName');
    }
    else {
        //alert("Invalid first name");
        addErrorMessage('firstName',
            'Invalid/missing first name');
        error = true;
    }
    if (/^[A-Z .\-']{2,20}$/i.test(lastName.value)) {
        // Everything between / and / is the expression
        //Any letter A-Z (case insensitive) is valid
        //Spaces, periods, and hyphens are valid
        //name must be 2 - 20 characters long

        //First name matches the expression
        //and is valid
        //alert("Valid first name");
        removeErrorMessage('lastName');
    }
    else {
        //alert("Invalid last name");
        addErrorMessage('lastName',
            'Invalid/missing last name');
        error = true;
    }

    var msg = "initial message";
    msg = Object(msg);
    if(validateUsername(userName.value, msg)){
        //The username meets requirements
        removeErrorMessage('userName');
    }
    else{
        //The username is not valid
        addErrorMessage('userName',msg.valueOf);
        error = true;
    }

    if (error) {
        if (e.preventDefault) {
            e.preventDefault();
        }
        else {
            e.returnValue = false;
        }
    }
    //The email
    if (/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,6}$/i.test(email.value)) {
        // w = any alphanumeric character
        //A-Za-z = any alphabetic character
        //2-6 = how many characters are required

        //First name matches the expression
        //and is valid
        //alert("Valid first name");
        removeErrorMessage('email');
    }
    else {
        //alert("Invalid first name");
        addErrorMessage('email',
            'Invalid/missing email');
        error = true;
    }

    //Phone number
    if (/^\d{3}[ \-.]?\d{3}[ \-.]?\d{4}$/i.test(phone.value)){
        removeErrorMessage('phone');
    }
    else {
        addErrorMessage('phone','(Should be in the format xxx-xxx-xxxx or xxx.xxx.xxxx)');
    }

    //Zip code:
    if (/^\d{5}(\-\d{4})?$/i.test(zip.value)){
        removeErrorMessage('zip');
    }
    else{
        addErrorMessage('zip','(Should be in the format xxxxx-xxxx)');
    }

    return false;
} // End of validateForm() function.

// Function called when the terms checkbox changes.
// Function enables and disables the submit button.
    function toggleSubmit() {
    'use strict';

} // End of toggleSubmit() function.

// Establish functionality on window load:
window.onload = function() {
    'use strict';

    //addEvent requires three pieces of info:
    //1. The object to add the event listener to
    //2. The event to listen for
    //3. The function to call in response to
    //  the event in #2
    U.addEvent(
        U.$('theForm'),
        'submit',
        validateForm);


};