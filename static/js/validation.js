const usernameMinLen = 5;
const usernameMaxLen = 20;
const passwordMinLen = 8;
const passwordMaxLen = 20;


function validateUsername(usernameStr) {

    let errorMessage = "";

    // length
    if (!strLengthIsValid(usernameStr, usernameMinLen, usernameMaxLen)) {
        errorMessage += ("Username length is 5 to 20 characters." + " ");
    }

    // kind of character
    if (isLettesOrNumbers(usernameStr)) {
        errorMessage += ("Username can only use letters and numbers." + " ");
    }

    // username is already taken or not
    if (usernameIsAlreadyTaken(usernameStr)) {
        errorMessage += "Username is already taken.";
    }

    return errorMessage;
}

function validatePassword(passwordStr) {

    let errorMessage = "";

    // length
    if (!strLengthIsValid(passwordStr, passwordMinLen, passwordMaxLen)) {
        errorMessage += ("Password length is 8 to 20 characters." + " ");
    }

    // kind of character
    if (!isLettersAndNumbers(passwordStr)) {
        errorMessage += "Password can use letters and numbers.";
    }

    return errorMessage;
}

function validateEmail(emailStr) {

    let errorMessage = "";
    
    const regex = /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
    if (!regex.test(emailStr)) {
        errorMessage += "Email address is invalid.";
    }

    return errorMessage;
}

// function confirmPassword(passwordStr, confirmPasswordStr) {
    
// }