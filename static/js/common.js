function getInputElementValue(id) {

    return document.getElementById(id).value;
}

function getCheckboxElementValue(id) {

    return document.getElementById(id).checked;
}

function postRequest(endpointUrl, objData) {

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
                return null;
            }
            console.log("postRequest succeeded.");
            location.reload();
        },
        error: function() {
            console.log("error, postRequest failed.");
            return null;
        },
        complete: function() {
            console.log("postRequest finished.");
        }
    });
}

function strLengthIsValid(str, minLen, maxLen) {

    let strLen = str.length;
    if (minLen <= strLen && strLen <= maxLen) {
        return true;
    }
    else {
        return false;
    }
}

function isEmpty(str) {

    return str === "";
}

function isLettesOrNumbers(str) {

    return /^[0-9a-zA-Z]+$/.test(str);
    // return str.match('/[^A-Za-z0-9]+/');
}

function isLettersAndNumbers(str) {

    const digitRegex = /(?=.*[0-9])/;
    const lowerCaseRegex = /(?=.*[a-z])/;
    const upperCaseRegex = /(?=.*[A-Z])/;

    if (digitRegex.test(str) && lowerCaseRegex.test(str) && upperCaseRegex.test(str)) {
        return true;
    }
    else {
        return false;
    }
}

function isValidEmailAddress(str) {
    
    const regex = /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
    return regex.test(str);
}

function usernameIsAlreadyTaken(str) {

    return false;
    // const usernameAvailabilityUrl = location.host + "/account_availability";
    // let postData = {
    //     "username": str
    // }
    // let isTaken = postRequest(usernameAvailabilityUrl, postData);
    // if (isTaken == null) {
    //     return null;
    // }
    // if (isTaken == true) {
    //     return "Username is already taken.";
    // }
}

function setEnableButtonColor(buttonElem) {
    buttonElem.style.backgroundColor = buttonEnabledlColor;
    buttonElem.addEventListener('mouseover', function() {
        buttonElem.style.backgroundColor = buttonEnabledHoverColor;
    });
    buttonElem.addEventListener('mouseleave', function() {
        buttonElem.style.backgroundColor = buttonEnabledlColor;
    })
}

function setDisabledButtonCollor(buttonElem) {
    buttonElem.style.backgroundColor = buttonDisabledColor;
}

function changeButtonStateDisabled(buttonElem) {
    buttonElem.disabled = true;
    setDisabledButtonCollor(buttonElem);
}

function changeButtonStateEnabled(buttonElem) {
    buttonElem.disabled = false;
    setEnableButtonColor(buttonElem);
}