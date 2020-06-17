<?php
    include_once('queryEmail.php');
    $cmpPass=$_POST['password'];
    $row=mysqli_fetch_array($queryResult);
    if($cmpPass==$row['password']){
        echo 'Login Successful';
    }else{
        echo 'Not successful';
    }

?>