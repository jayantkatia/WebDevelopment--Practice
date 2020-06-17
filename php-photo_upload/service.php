<?php
//header('location:index.html');
//Picture shifting in uploads folder
//return;
$orgName = $_FILES['profile']['name'];
$tmpName = $_FILES['profile']['tmp_name'];
$size = $_FILES['profile']['size'];
$type = $_FILES['profile']['type'];
echo $tmpName;
echo '<br/>';
echo $orgName;
echo $size;
$destination = './uploads/'.$orgName;
echo $type;
if ( move_uploaded_file( $tmpName, $destination ) ) {
    echo 'Done';
} else {
    echo 'Failed';
}
//form creations
$name = $_POST['name'];
$age = $_POST['age'];
$gender = $_POST['gender'];
$city = $_POST['city'];
if ( !( $age >0 && $age <100 ) ) {
    $age = 'Immortal';
}
//checkbox menace
$skills=array();
$skillsWeightage=0;
checkBox('WebD');
checkBox('CPP');
checkBox('App');
checkBox('Cyber');
checkBox('Java');
checkBox('Linux');


function checkBox($skill){
    global $skills,$skillsWeightage;
    if(!empty($_POST[$skill])){
        $skills[]=$skill;
        $skillsWeightage+=$_POST[$skill];
    }
}
//mulitple list box


?>

<!DOCTYPE html>
<html lang = 'en'>
<head>
<meta charset = 'UTF-8'>
<meta name = 'viewport' content = 'width=device-width, initial-scale=1.0'>
<title>My Data</title>
<style>
    body{   
        margin:5% 40%; 
    }
    img{
        height:200;width:200;border-radius:50%;border: 1px black solid;
    }
    </style>
<script>
    function toCheckEligibility(weight){
        console.log(weight);
        if(weight>=30)
            document.getElementById('toShow').innerHTML="Congratulations, You are eligible!!";
        else
        document.getElementById('toShow').innerHTML="Not eligible";
    }
</script>
</head>
<body>
<div>
    <img src=<?php echo '"'.$destination.'"' ?> >
</div>
<div>
Name: <?php echo $name?>
</div>
<div>
Age: <?php echo $age?>
</div>
<div>
Gender:<?php echo $gender?>
</div>
<div>
City:<?php echo $city?>
</div>
<div>

<ul>
    <li>Skills:</li>
    <?php
        for($i=0;$i<count($skills);$i++){
            echo "<li>".$skills[$i]."</li>";
        }
   ?>
</ul>
</div>

<div>
        <ul>
            <li>Skills interested in:</li>
            <?php
            $tech=$_POST['tech'];
            foreach($_POST['tech'] as $value){
                    echo "<li>".$value."</li>";
            }   

?>
    </ul>


</div>


<div id="toShow" onclick=toCheckEligibility(<?php echo $skillsWeightage?>)>
        Click Here....
</div>

</body>
</html>
