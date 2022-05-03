let endpointUrl = location.href;

function postRegisterData() {

    let username = getInputElementValue("username");
    let email = getInputElementValue("email");
    let password = getInputElementValue("password");

    try{
        validationRegisterData();
    } catch(e) {
        // set error info to UI.
        return;
    }
    
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
console.log(usernameInputElem);
if (usernameInputElem != null) {
    console.log("username input");
    usernameInputElem.addEventListener('focusout', (e) => {
        let errorMessage = validateUsername(usernameInputElem.value);
        document.getElementById("username-error-info").innerText = errorMessage;
    });
}

// event listener (input email)
let emailInputElem = document.getElementById("email");
console.log(emailInputElem);
if (emailInputElem != null) {
    console.log("email input");
    emailInputElem.addEventListener('focusout', (e) => {
        let errorMessage = validateEmail(emailInputElem.value);
        document.getElementById("email-error-info").innerText = errorMessage;
    });
}

// event listener (input email)
let passwordInputElem = document.getElementById("password");
console.log(passwordInputElem);
if (passwordInputElem != null) {
    console.log("password input");
    passwordInputElem.addEventListener('focusout', (e) => {
        let errorMessage = validatePassword(passwordInputElem.value);
        document.getElementById("password-error-info").innerText = errorMessage;
    });
}
