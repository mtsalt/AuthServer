let endpointUrl = location.href;
let validation = null;

window.onload = function initEvents() {

    validation = new Validation();

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

    // // event listener (input username)
    // let usernameInputElem = document.getElementById("username");
    // if (usernameInputElem != null) {
    //     usernameInputElem.addEventListener('keyup', (e) => {
    //         let errorMessage = validateUsername(usernameInputElem.value);
    //         document.getElementById("username-error-info").innerText = errorMessage;
    //     });
    // }
    
    // // event listener (input email)
    // let emailInputElem = document.getElementById("email");
    // if (emailInputElem != null) {
    //     emailInputElem.addEventListener('keyup', (e) => {
    //         let errorMessage = validateEmail(emailInputElem.value);
    //         document.getElementById("email-error-info").innerText = errorMessage;
    //     });
    // }
    
    // // event listener (input password)
    // let passwordInputElem = document.getElementById("password");
    // if (passwordInputElem != null) {
    //     passwordInputElem.addEventListener('keyup', (e) => {
    //         let errorMessage = validatePassword(passwordInputElem.value);
    //         document.getElementById("password-error-info").innerText = errorMessage;
    //     });
    // }

    // // event listener (execute register, signin, send)



    

    // event listener (input username)
    let usernameInputElem = document.getElementById("username");
    if (usernameInputElem != null) {
        usernameInputElem.addEventListener('keyup', (e) => {
            validation.username(usernameInputElem.value);
            let btnElem = document.getElementById("submit");
            if (validation.isValidationAllSatisfied()) {
                changeButtonStateEnabled(btnElem);
            }
            else {
                document.getElementById("username-error-info").innerText = validation.errorInfoUsername;
                changeButtonStateDisabled(btnElem);
            }
        });
    }
    
    // event listener (input email)
    let emailInputElem = document.getElementById("email");
    if (emailInputElem != null) {
        emailInputElem.addEventListener('keyup', (e) => {
            validation.email(emailInputElem.value);
            let btnElem = document.getElementById("submit");
            if (validation.isValidationAllSatisfied()) {
                changeButtonStateEnabled(btnElem);
            }
            else {
                document.getElementById("email-error-info").innerText = validation.errorInfoEmail;
                changeButtonStateDisabled(btnElem);
            }
        });
    }
    
    // event listener (input password)
    let passwordInputElem = document.getElementById("password");
    if (passwordInputElem != null) {
        passwordInputElem.addEventListener('keyup', (e) => {
            validation.password(passwordInputElem.value);
            let btnElem = document.getElementById("submit");
            if (validation.isValidationAllSatisfied()) {
                changeButtonStateEnabled(btnElem);
            }
            else {
                document.getElementById("password-error-info").innerText = validation.errorInfoPassword;
                changeButtonStateDisabled(btnElem);
            }
        });
    }

    // event listener (checkbox agreement)
    let checkboxElem = document.getElementById("agreement");
    if (checkboxElem != null) {
        checkboxElem.addEventListener('click', (e) => {
            let btnElem = document.getElementById("submit");
            if (validation.isValidationAllSatisfied()) {
                changeButtonStateEnabled(btnElem);
            }
            else {
                changeButtonStateDisabled(btnElem);
            }
        });
    }
}

function initExecutionButton() {

    let submitButton = document.getElementById("submit");
    if (submitButton != null) {
        submitButton.disabled = true;
        submitButton.style.backgroundColor = buttonDisabledColor;
    }

    // let registerButton = document.getElementById("register");
    // if (registerButton != null) {
    //     registerButton.disabled = true;
    //     registerButton.style.backgroundColor = buttonDisabledColor;
    // }

    // let signinButton = document.getElementById("signin");
    // if (signinButton != null) {
    //     signinButton.disabled = true;
    //     signinButton.style.backgroundColor = buttonDisabledColor;
    // }

    // let forgotpasswordButton = document.getElementById("forgot-password");
    // if (forgotpasswordButton != null) {
    //     forgotpasswordButton.disabled = true;
    //     forgotpasswordButton.style.backgroundColor = buttonDisabledColor;
    // }
}

function test() {
    alert("hello");
}