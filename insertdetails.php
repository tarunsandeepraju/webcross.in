<?php
include "db.php";

$name=$_POST['name'];
$age=$_POST['age'];
$phno=$_POST['phno'];
$state=$_POST['state'];
$district=$_POST['district'];
$area=$_POST['area'];
$bloodgroup=$_POST['bloodgroup'];

$query = "INSERT INTO donor_details (name, age, phone_no, state, district, area, blood_group) VALUES ('".$name."','".$age."','".$phno."','".$state."','".$district."','".$area."','".$bloodgroup."')";
$result=mysqli_query($conn,$query);
