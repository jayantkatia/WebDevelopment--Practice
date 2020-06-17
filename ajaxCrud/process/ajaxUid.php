<?php
   include_once('connection.php');
    $uid=$_GET['uid'];
    // echo "Hello".$uid;
    $query="select * from users_data where uid='$uid'";
    $queryResult=mysqli_query($dbConnection,$query);
    if(mysqli_error($dbConnection)){
        echo "Some error occured while querying data";
        return;
    }
    $count=mysqli_num_rows($queryResult);
    if($count){
        echo 'Not Available UID';
    }else{
        echo 'Available UID';
    }
?>
