<?php
    $hello="Hello";
    $world='World';
    
    z($hello);

    function z ($hello){
        global $world;
        echo $hello.' '.$world;

    }



    // echo '<br>';
    // echo " End \r\n file";
?>















<!-- header('Content-type: text/plain') ; -->