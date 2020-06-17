<?php
$server_address='localhost';
$username="root";
$pass="";
$tableName="crud1";
$dbConnection=mysqli_connect($server_address,$username,$pass,$tableName);
if(mysqli_connect_error()){
    echo "Error connecting to database...pls try again or contact developer";
}

?>