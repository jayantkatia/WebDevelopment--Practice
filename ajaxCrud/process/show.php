<?php
    $queryShow="select * from users_data";
    $queryShowResult=mysqli_query($dbConnection,$queryShow);
    //$msg=mysqli_error($queryShowResult);
    $row=0;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Show All</title>
</head>
<body>
    <table>
        <tr>
            <th>UID</th>
            <th>firstName</th>
            <th>lastName</th>
            <th>Addr1</th>
            <th>Addr2</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Checkbox1</th>
            <th>fileName</th>
        </tr>
        
         
            <?php
                while($row=mysqli_fetch_array($queryShowResult)){
                    echo "<tr>
                    <td>".$row['uid']."</td>
                    <td>".$row['firstName']."</td>
                    <td>".$row['lastName']."</td>
                    <td>".$row['addr1']."</td>
                    <td>".$row['addr2']."</td>
                    <td>".$row['city']."</td>
                    <td>".$row['state']."</td>
                    <td>".$row['zip']."</td>
                    <td>".$row['checkbox1']."</td>
                    <td>".$row['fileName']."</td>
                    <td><a href='uploads/".$row['fileName']."'>Link</a></td>
                    </tr>";
                }
            ?>
        
    </table>
</body>
</html>