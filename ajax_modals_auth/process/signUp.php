<?php
include_once('connection.php');
$email=$_POST['email'];
$password=$_POST['password'];
$mobile=$_POST['mobile'];

$query="insert into users_data(email,password,mobile) values('$email','$password','$mobile');";

$orgName=$_FILES['pic']['name'];
if($orgName!=null){
    $tmpName=$_FILES['pic']['tmp_name'];
    $fileName="$email-$orgName";
    $destination="../uploads/$fileName";
    move_uploaded_file($tmpName,$destination);
    $query="insert into users_data(email,password,mobile,fileName) values('$email','$password','$mobile','$fileName');";
}

$queryResult=mysqli_query($dbConnection,$query);
$count=mysqli_affected_rows($dbConnection);
if($count==1){
   //echo "Sign Up Successful....";s
      header("location:../index.php?msg=signUpSuccessful");
   // echo "<script>window.location.href='index.php?msg=signUpSuccessful';</script>";
    exit;

}
else
echo mysqli_error($dbConnection);
?>  