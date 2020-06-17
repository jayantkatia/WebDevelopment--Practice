<?php
$uid=$_POST['uid'];
$query="select uid from users_data where uid=$uid";
$resultQuery=mysqli_query($dbConnection,$query);
$existQuery=mysqli_num_rows($resultQuery);
?>