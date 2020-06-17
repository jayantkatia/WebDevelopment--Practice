<?php
include_once( 'connection.php' );
$email = $_GET['email'];

$query = "select * from users where email='$email'";
$queryResult = mysqli_query( $dbConnection, $query );
$msg=mysqli_error( $dbConnection );
if ( $msg!='' ) {
    echo 'query didnt happen...pls try again';
    return;
}

$count=mysqli_num_rows($queryResult);
//echo $count;
if($count){
    echo 'Email already registered....';
}else{
    echo 'Available Email';
}
?>
