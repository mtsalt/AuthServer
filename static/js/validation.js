function validateUsername(usernameStr) {

    let errorMessage = "";

    // length
    if (!strLengthIsValid(usernameStr, usernameMinLen, usernameMaxLen)) {
        errorMessage += ("Username length is 5 to 20 characters." + " ");
    }

    // kind of character
    if (!isLettesOrNumbers(usernameStr)) {
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

class Validation {

    errorInfoUsername = "";
    errorInfoPassword = "";
    errorInfoEmail = "";

    textContentUsename = "";
    textContentPassword = "";
    textContentEmail = "";

    username(usernameStr) {

        this.errorInfoUsername = "";
        this.textContentUsename = usernameStr;

        // length
        if (!strLengthIsValid(usernameStr, usernameMinLen, usernameMaxLen)) {
            this.errorInfoUsername += ("Username length is 5 to 20 characters." + " ");
        }

        // kind of character
        if (!isLettesOrNumbers(usernameStr)) {
            this.errorInfoUsername += ("Username can only use letters and numbers." + " ");
        }

        // username is already taken or not
        if (usernameIsAlreadyTaken(usernameStr)) {
            this.errorInfoUsername += "Username is already taken.";
        }

    }

    password(passwordStr) {

        this.errorInfoPassword = "";
        this.textContentPassword = passwordStr;

        // length
        if (!strLengthIsValid(passwordStr, passwordMinLen, passwordMaxLen)) {
            this.errorInfoPassword += ("Password length is 8 to 20 characters." + " ");
        }

        // kind of character
        if (!isLettersAndNumbers(passwordStr)) {
            this.errorInfoPassword += "Password must use letters(uppder & lower) and numbers.";
        }

    }

    email(emailStr) {

        this.errorInfoEmail = "";
        this.textContentEmail = emailStr;

        if (!isValidEmailAddress(emailStr)) {
            this.errorInfoEmail += "Email address is invalid.";
        }
    }

    isValidationAllSatisfied() {

        let abc = this.isCheckboxTrue();
        if (this.isErrorInfoAllEmpty() && this.isAllTextContentSatisfied() && this.isCheckboxTrue()) {
            return true;
        }
        else {
            return false;
        }
    }

    isErrorInfoAllEmpty() {

        let totalStr = this.errorInfoUsername + this.errorInfoPassword + this.errorInfoEmail;
        if (isEmpty(totalStr)) {
            return true;
        }
        else {
            return false;
        }
    }

    isAllTextContentSatisfied() {

        // TODO: 要素が存在しない場合もfalseとなるので対応が必要
        if (!isEmpty(this.textContentUsename) && !isEmpty(this.textContentPassword) && !isEmpty(this.textContentEmail)) {
            return true;
        }
        else {
            return false;
        }
    }

    isCheckboxTrue() {

        let checkbox = document.getElementById("agreement");
        if (checkbox != null) {
            return checkbox.checked;
        }
        else {
            return true;
        }
    }
}