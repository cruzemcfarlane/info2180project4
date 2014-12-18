<?php
    $conn = mysql_connect("0.0.0.0", "cruzemcfarlane");
    $exist = mysql_select_db("cheapo");
    
    if($conn->connection_error){
        die("Connection failed: " + $conn->connection_error);
        
        if($exist->connection_error){
            print_r($conn->connection_error);
        }
    }
    
    else{
        echo "Success";
        
        $id = $_GET["idNo"];
        $password = $_GET["password"];
        
        $result = mysql_query("SELECT * FROM User WHERE id='$id' AND password='$password';");
        
        if(mysql_num_row($result) == 0){
            echo "User doesn't exist!";
        }
        
        else{
            while($row = mysql_fetch_array($result)){
                ?>
                <?php
                    echo $row.['id']." ".$row['password'];
            }
            ?>
            <?php
        }
    }
?>