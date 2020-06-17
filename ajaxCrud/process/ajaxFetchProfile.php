<?php
	include_once("connection.php");
 $uid=$_GET["uid"];
$query="select * from users_data where uid='$uid'";
$table=mysqli_query($dbConnection,$query);//table will have 0 or 1 record
$ary=array();
while($row=mysqli_fetch_array($table)){
	$ary[]=$row;
}
echo json_encode($ary);
?>