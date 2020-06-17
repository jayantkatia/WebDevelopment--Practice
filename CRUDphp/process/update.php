<?php
include_once( 'checkRecord.php' );
if ( ! $existQuery ) {
    echo 'no already existing query .....rather create or change input...';
    return;
}

$querySelect = "select * from users_data where uid=$uid";

$querySelectResult = mysqli_query( $dbConnection, $querySelect );



$msg = mysqli_error( $dbConnection );

if ( $msg != '' ) {
    echo $msg;
    return;
}

$row = mysqli_fetch_array( $querySelectResult );

$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$addr1 = $_POST['addr1'];
$addr2 = $_POST['addr2'];
$city = $_POST['city'];
$state = $_POST['state'];
$zip = $_POST['zip'];
$checkbox1 = 0;
if ( isset( $_POST['checkbox1'] ) ) {
    $checkbox1 = 1;
}

$orgName = $_FILES['pic']['name'];
$tmpName = $_FILES['pic']['tmp_name'];
$fileName = null;
if ( !( $orgName == '' ) ) {
    $fileName = $uid.'-'."$orgName";  
}
checkUpdate('firstName',$row['firstName'],$firstName);
checkUpdate('lastName',$row['lastName'],$lastName);
checkUpdate('zip',$row['zip'],$zip);
checkUpdate('city',$row['city'],$city);
checkUpdate('state',$row['state'],$state);
checkUpdate('addr1',$row['addr1'],$addr1);
checkUpdate('addr2',$row['addr2'],$addr2);
checkUpdate('checkbox1',$row['checkbox1'],$checkbox1);
checkUpdate('fileName',$row['fileName'],$fileName);

function checkUpdate($varName,$dbValue,$currentValue){
    global $uid,$dbConnection;
    echo $dbValue."   ".$currentValue;
    if($dbValue!=$currentValue){
         if($varName=='fileName'){
            fileFunc($dbValue,$currentValue);
            if($currentValue==null)
            return;
        }

        $queryUpdate="update users_data set $varName='$currentValue' where uid=$uid";
        $queryUpdateResult=mysqli_query($dbConnection,$queryUpdate);
        echo "$varName updated<br/>";
    }
}
function fileFunc($dbValue,$currentValue){
    if($currentValue==null)
    {
        return;
    }
    global $tmpName;
    unlink("./uploads/$dbValue");
    move_uploaded_file($tmpName,"./uploads/$currentValue");
}


?>