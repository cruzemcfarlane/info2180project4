<?php
    $con = mysql_connect("0.0.0.0", "cruzemcfarlane");
    
    if(!$con){
        die("Connection failed: ". msql_error());
    }
    
    else{
        if(mysql_query("CREATE DATABASE cheapo", $con)){
            echo "Database was successfully created.";
        }
        
        else{
            echo "Database was not successfully created.";
        }
    }
?>