<?php
include "db.php";

$state=$_POST['state'];
$district=$_POST['district'];
$area=$_POST['area'];
$bloodgroup=$_POST['bloodgroup'];

$query="Select * from donor_details where (state='".$state."'and district='".$district."' and area='".$area."' and blood_group='".$bloodgroup."')";
$result=mysqli_query($conn,$query);

if($result -> num_rows > 0){
    $data = array();
    while($row = $result -> fetch_assoc()){
        $data[] = $row;
    }
}
else
{
    $data="";
}
echo json_encode($data);