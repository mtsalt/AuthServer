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

function postRequest(endpointUrl, objData) {

    // 通信実行
    $.ajax({
        type: "post",
        url: endpointUrl,
        data:JSON.stringify(objData),
        contentType: 'application/json',
        dataType: "json",
        success: function(jsonData) {   // 200 OK時
            // JSON Arrayの先頭が成功フラグ、失敗の場合2番目がエラーメッセージ
            if (!jsonData[0]) {    // サーバが失敗を返した場合
                alert("Transaction error. " + json_data[1]);
                return;
            }
            console.log("postRequest succeeded.");
            location.reload();
        },
        error: function() {
            console.log("error, postRequest failed.");
        },
        complete: function() {
            console.log("postRequest finished.");
        }
    });

}