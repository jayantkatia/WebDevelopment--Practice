<?php
        include_once('connection.php');
     include_once('checkRecord.php');
     if($existQuery){
         echo 'Record having same uid already exists...rather click on update or enter new uid';
         return;
     }
 
     $firstName=$_POST['firstName'];
     $lastName=$_POST['lastName'];
     
     $addr1=$_POST['addr1'];
     $addr2=$_POST['addr2'];
     $city=$_POST['city'];
     $state=$_POST['state'];
     $zip=$_POST['zip'];
     $checkbox=0;
    // $orgName=$_FILES['pic']['name'];
     //$pic=null;
     if(isset($_POST['checkbox1'])){
         $checkbox=1;
     };
    // if(!($orgName=='')){
    // $tmpName=$_FILES['pic']['tmp_name'];
    // $pic=$uid.'-'."$orgName";
     //move_uploaded_file($tmpName,'./uploads/'.$pic);
     //}
     
     $queryInsert="insert into users_data(uid,firstName,lastName,addr1,addr2,city,state,zip,checkbox1) values($uid,'$firstName','$lastName','$addr1','$addr2','$city','$state','$zip','$checkbox');";
     $queryInsertResult=mysqli_query($dbConnection,$queryInsert);
 
     $msg=mysqli_error($dbConnection);
     if($msg==''){
         echo "Created Record";
     }
     else{
         echo '<br>'.$msg;
     }
?>