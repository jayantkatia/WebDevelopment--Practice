<?php
	include_once("connection.php");
$uid=$_GET["uid"];

$query="select * from users_data where uid='$uid'";
$table=mysqli_query($dbConnection,$query);

$ary=array();//JSON-1

while($row=mysqli_fetch_array($table))
{
	
	$ary[]=$row;
}
print_r($ary);
echo json_encode($ary);
?>