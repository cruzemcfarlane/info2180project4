function runForm(){
    var idNo = document.getElementById("idNo").value;
    var logpass = document.getElementById("logpass").value;
    alert(1);
    
    new Ajax.Request("cheapo.php",
    {
        method: "GET",
        parameters: {id: idNo, password: logpass},
        onSuccess: callLoginPHP,
        onFailure: failureFunc
    }
    );
    
};

function callLoginPHP(responseObject){
    if(responseObject.status == 200){
        document.getElementById("enter").innerHTML = "SUCCESS";
    }
    
    else{
        failureFunc(responseObject);
    }
};

function failureFunc(responseObject){
    alert("Faulty entry");
};
