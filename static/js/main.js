let endpointUrl = location.href;

function postRegisterData() {

    let username = getInputElementValue("username");
    let email = getInputElementValue("email");
    let password = getInputElementValue("password");
    
    let postData = {
        "username": username,
        "email": email,
        "password": password
    };

    // postRequest(endpointUrl, postData);
}

function postSigninData() {

    let username = getInputElementValue("username");
    let password = getInputElementValue("password");

    try {

    } catch(e) {
        // set error info to UI.
    }

    let postData = {
        "username": username,
        "password": password
    };

    // postRequest(endpointUrl, postData);
}

function postForgotpasswordData() {

    let email = getInputElementValue("email");

    try {

    } catch(e) {
        // set error info to UI.
    }

    let postData = {
        "username": username,
        "password": password
    };
    
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

// event listener (input email)
let passwordInputElem = document.getElementById("password");
if (passwordInputElem != null) {
    passwordInputElem.addEventListener('focusout', (e) => {
        let errorMessage = validatePassword(passwordInputElem.value);
        document.getElementById("password-error-info").innerText = errorMessage;
    });
}
