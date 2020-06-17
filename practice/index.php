 <?php
$connection=mysqli_connect("localhost","root","","employee");

if(mysqli_connect_error()){
    echo mysqli_connect_error();
    exit();
}else{
    echo "Hello World";
}

// $servername = "localhost";
// $username = "root";
// $password = "";
// $dbname = "employee";

// // Create connection
// $conn = new mysqli($servername, $username, $password, $dbname);
// // Check connection
// if ($conn->connect_error) {
//   die("Connection failed: " . $conn->connect_error);
// }

// $sql = "SELECT ename FROM employee";
// $result = $conn->query($sql);

// if ($result->num_rows > 0) {
//   // output data of each row
//   while($row = $result->fetch_assoc()) {
//     echo "id: " . $row["ename"]."<br>";
//   }
// } else {
//   echo "0 results";
// }
// $conn->close();

