<?php
    mysql_connect("0.0.0.0", "cruzemcfarlane");
    mysql_select_db("cheapo");
    
    $id = $_GET["id"];
    $password = $_Get["password"];
    
    if(isset($message)){
        $result = mysql_quer("SELECT * FROM message;");
        
        while($row = mysql_fetch_array($result)){
            >?
            <?php
                echo $row["subject"]." ".$row["recipient_id"];
        }
        ?>
        <?php
    }
?>