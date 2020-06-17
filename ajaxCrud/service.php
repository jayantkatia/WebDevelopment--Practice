<?php
include_once('./process/connection.php');
$btn=$_POST['btn'];

if($btn=='signUp'){
    include_once('./process/signUp.php');
}else if($btn=='delete'){
    include_once('./process/delete.php');
}
else if($btn=='update'){
    include_once('./process/update.php');
}else if($btn=='show'){
    include_once('./process/show.php');
}else{
    echo "Service corresponding to button clicked doesnt exists...";
}


?>