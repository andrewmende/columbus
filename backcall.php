<?php
$name=$_POST['name']; 
$phone=$_POST['phone']; 
 
 
$msg=" 

name: $name
phone: $phone
 
"; 
 
  
 
 // Отправляем письмо админу  
$adminemail = "columbuscarrent@gmail.com";

mail("$adminemail", "backcall request from
$name", "$msg"); 
  
?>