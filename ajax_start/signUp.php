<?php
include_once('connection.php');
$email=$_POST['email'];
$pass=$_POST['pass'];
$mobNo=$_POST['mobNo'];
$query="insert into users(email,password,mobileNo) values('$email','$pass','$mobNo')";
$queryResult=mysqli_query($dbConnection,$query);
$msg=mysqli_error($dbConnection);
if($msg!=''){
    echo $msg;
    return;
}
echo "Signed Up successfully.....";

?>