let endpointUrl = location.href;

window.onload = function initEvents() {
    
    initExecutionButton();
    initEventListeners();
}

function postRegisterData() {

    let postData = {
        "username": getInputElementValue("username"),
        "email": getInputElementValue("email"),
        "password": getInputElementValue("password"),
        "agreement_terms_and_policy": getCheckboxElementValue("agree")
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

function initEventListeners() {

    // event listener (input username)
    let usernameInputElem = document.getElementById("username");
    if (usernameInputElem != null) {
        usernameInputElem.addEventListener('keyup', (e) => {
            let errorMessage = validateUsername(usernameInputElem.value);
            document.getElementById("username-error-info").innerText = errorMessage;
        });
    }
    
    // event listener (input email)
    let emailInputElem = document.getElementById("email");
    if (emailInputElem != null) {
        emailInputElem.addEventListener('keyup', (e) => {
            let errorMessage = validateEmail(emailInputElem.value);
            document.getElementById("email-error-info").innerText = errorMessage;
        });
    }
    
    // event listener (input password)
    let passwordInputElem = document.getElementById("password");
    if (passwordInputElem != null) {
        passwordInputElem.addEventListener('keyup', (e) => {
            let errorMessage = validatePassword(passwordInputElem.value);
            document.getElementById("password-error-info").innerText = errorMessage;
        });
    }

    // event listener (execute register, signin, send)

}

function initExecutionButton() {

    let registerButton = document.getElementById("register");
    if (registerButton != null) {
        registerButton.disabled = true;
        registerButton.style.backgroundColor = buttonDisabledColor;
    }

    let signinButton = document.getElementById("signin");
    if (signinButton != null) {
        signinButton.disabled = true;
        signinButton.style.backgroundColor = buttonDisabledColor;
    }

    let forgotpasswordButton = document.getElementById("forgot-password");
    if (forgotpasswordButton != null) {
        forgotpasswordButton.disabled = true;
        forgotpasswordButton.style.backgroundColor = buttonDisabledColor;
    }
}