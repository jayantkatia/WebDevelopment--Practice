<?php
$machine='localhost';
$username="root";
$pass='';
$dbName='ajax_start';

$dbConnection=mysqli_connect($machine,$username,$pass,$dbName);
if(mysqli_connect_error()){
    echo 'Some error occured while connecting to database';
}
?>