let endpointUrl = location.href;

function postRegisterData() {

    let postData = {
        "username": getInputElementValue("username"),
        "email": getInputElementValue("email"),
        "password": getInputElementValue("password")
    };

    // add result check and inform 
    // postRequest(endpointUrl, postData);
}

function postSigninData() {

    let postData = {
        "username": getInputElementValue("username"),
        "password": getInputElementValue("password")
    };

    // add result check and inform
    // postRequest(endpointUrl, postData);
}

function postForgotpasswordData() {

    let postData = {
        "email": getInputElementValue("email")
    };

    // add result check and inform   
    // postRequest(endpointUrl, postData);
}

// event listener (input username)
let usernameInputElem = document.getElementById("username");
if (usernameInputElem != null) {
    usernameInputElem.addEventListener('focusout', (e) => {
        let errorMessage = validateUsername(usernameInputElem.value);
        document.getElementById("username-error-info").innerText = errorMessage;
    });
}

// event listener (input email)
let emailInputElem = document.getElementById("email");
if (emailInputElem != null) {
    emailInputElem.addEventListener('focusout', (e) => {
        let errorMessage = validateEmail(emailInputElem.value);
        document.getElementById("email-error-info").innerText = errorMessage;
    });
}

// event listener (input password)
let passwordInputElem = document.getElementById("password");
if (passwordInputElem != null) {
    passwordInputElem.addEventListener('focusout', (e) => {
        let errorMessage = validatePassword(passwordInputElem.value);
        document.getElementById("password-error-info").innerText = errorMessage;
    });
}
