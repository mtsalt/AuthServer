// function validationRegisterData(objData) {

//     let errorMessage = "";
//     errorMessage += validationUsername(objData["username"]),
//     errorMessage += validationEmail(objData["email"]),
//     errorMessage += validationPassword(objData["password"])

//     return errorMessage;
// }

// function validationSigninData(objData) {

//     let errorMessage = "";
//     errorMessage += validationUsername(objData["username"]);
//     errorMessage += validationPassword(objData["password"]);

//     return errorMessage;
// }

// function validationForgotpassword(objData) {

//     let errorMessage = "";
//     errorMessage += validationEmail(objData["email"]);

//     return errorMessage;
// }

function validateUsername(usernameStr) {

    const minLen = 6;
    const maxLen = 20;

    let errorMessage = "";

    // length
    if (!strLengthIsValid(usernameStr, minLen, maxLen)) {
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

}

function validateEmail(emailStr) {

}

function confirmPassword(passwordStr, confirmPasswordStr) {
    
}