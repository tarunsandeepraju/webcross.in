<?php

include 'db.php';

$phno=$_POST['phno'];

$query="select phone_no from donor_details where phone_no='".$phno."'";
$result=mysqli_query($conn,$query);
$count=mysqli_num_rows($result);

if($count===1){
    echo "exists";
}