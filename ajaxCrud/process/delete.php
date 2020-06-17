<?php
    include_once('checkRecord.php');
    if(! $existQuery){
        echo 'no such record....';
        return;
    }

    $queryFileName="select fileName from users_data where uid=$uid";
    $queryFileNameResult=mysqli_query($dbConnection,$queryFileName);
    if(!mysqli_error($dbConnection)){
        $row=mysqli_fetch_array($queryFileNameResult);
        $pic=$row['fileName'];
    }




    $queryDelete="delete from users_data where uid=$uid";
    $queryDeleteResult=mysqli_query($dbConnection,$queryDelete);
    $msg=mysqli_error($dbConnection);
    if($msg==''){
        if(!($pic==''))
        unlink("uploads/$pic");
        echo "Deleted Record";
        
    }else{
        echo $msg;                    
    }

?>