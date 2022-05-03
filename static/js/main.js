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
