function getInputElementValue(id) {
    return document.getElementById(id).value;
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