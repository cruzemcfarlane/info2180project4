window.onload = function(){
    new Ajax.Request("inbox.php",
    {
        method: "Get",
        parameters: {id: "", password: },
        onSuccess: callInboxPHP,
        onFailure: failureFunc
    }
    );
}

function showCompose(){
    var formElements = document.getElementById("formElements");
    var inboxElements = document.getElementById("inboxElements");
    
    if(formElements.style.display == "none"){
        formElements.style.display = "block";
        inboxElements.style.display = "none";
    }
    
    else{
        formElements.style.display = "none";
        inboxElements.style.display = "none";
    };
};

function showInbox(){
    var inboxElements = document.getElementById("inboxElements");
    var formElements = document.getElementById("formElements");

    if(inboxElements.style.display == "none"){
        inboxElements.style.display = "block";
        formElements.style.display = "none";
    }
    
    else{
        inboxElements.style.display = "none";
        formElements.style.display = "none";
    };
};

function callInboxPHP(responseObject){
    if(responseObject.status == 200){
        var table = document.getElementById("table");
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
    
        cell1.innerHTML = responseObject.responseText;
        cell2.innerHTML = responseObject.responseText;
    }
};

function failureFunc(responseObject){
     alert("Error!!");
}