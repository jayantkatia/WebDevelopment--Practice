<?php
    $name=$_POST['name'];
    $items =array();
    $itemsPrice=array();
    $discount=$_POST['discount'];
    $coupon=$_POST['coupon'];

    arrayPush('book');
    arrayPush('laptop');
    arrayPush('smartphone');
    function arrayPush($key)
    {
        global $items,$itemsPrice;
        if(!empty($_POST[$key])){
            $itemsPrice[]=$_POST[$key];
            $items[]=$key;
        }
    }
    
    if(!empty($coupon)){
        if($coupon=='CART30')
            $discount=30;
    }
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        table {
            border: 1px solid black;
            width: 400px;
        }
        ul{
            padding:0;
        }
        .discount{
            color:red;
        }
        .net{
            font-weight:bold;
            color:green;
        }
        div.net{
            margin-top:20px;
        }
    </style>
</head>

<body>
    <center>
        <h2>Checkout</h2>
        <table>
            <tr>
                <td>Name:</td>
                <td> <?php echo $name ?> </td>
            </tr>
            <tr>
                <td>Items purchased:</td>
                <td>
                    <ul>
                        <?php
                            for($i=0;$i < count($items);$i++){
                                echo "<li>".$items[$i]."</li>";
                            }
                        ?>
                    </ul>
                </td>
            </tr>
            <tr>
                <td>Items Prices:</td>
                <td>
                    <ul>
                        <?php
                            for($i=0;$i < count($items);$i++){
                                echo "<li>".$itemsPrice[$i]."</li>";
                            }
                        ?>
                    </ul>
                </td>
            </tr>
            <tr>
                <td>Total:</td>
                <td>
                    <?php
                            $total=0;
                            for($i=0;$i < count($itemsPrice);$i++){
                                $total += $itemsPrice[$i];
                            }
                            echo $total;
                    ?>
                </td>
            </tr>

            <tr>
                <td>Discount:</td>
                <td class="discount">
                    <?php
                        echo $discount."%";
                    ?>
                </td>
            </tr>
            <tr>
                <td>Net:</td>
                <td class="net" >
                    <?php
                        $net=(1-$discount/100)*$total;
                            echo $net;
                   ?>
                </td>
            </tr>
        </table>
        <div class="net">
            <?php echo "You saved Rs.".($total-$net)." !!";?>
        </div>
    </center>
</body>

</html>


