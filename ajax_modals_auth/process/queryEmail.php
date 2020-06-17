<?php
include_once('connection.php');
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email=$_POST['email'];
    //echo "njnj";
}else{
    $email=$_GET['email'];
   // echo "get";
}
$query="select * from users_data where email='$email'";
$queryResult=mysqli_query($dbConnection,$query);
$msg=mysqli_error($dbConnection);
if($msg != ""){
    echo $msg;
    return;
}
$count=mysqli_num_rows($queryResult);
//echo $count;
?>