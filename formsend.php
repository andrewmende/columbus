<?php
$name=$_POST['name']; 
$phone=$_POST['phone']; 
$email=$_POST['email']; 
$comment=$_POST['comment']; 
$carPrice=$_POST['carPrice']; 
$carname=$_POST['carname']; 
$rentdays=$_POST['rentdays']; 
$datalocationplace=$_POST['datalocationplace']; 
$datareturnplace=$_POST['datareturnplace']; 
$datafromVal=$_POST['datafromVal']; 
$datatoVal=$_POST['datatoVal']; 
$totalprice=$_POST['totalprice']; 
$extraval=$_POST['extraval']; 
 
 
$msg=" 

name: $name
phone: $phone
E-mail: $email
comment: $comment
Total price: $totalprice

details:

Rent from: $datafromVal
Rent to: $datatoVal
Car model: $carname
Car price per day: $carPrice
Num days for rent: $rentdays
Rent place: $datalocationplace
Return place: $datareturnplace
Extra options: $extraval
 
"; 
 
  
 
 // Отправляем письмо админу  
$adminemail = "columbusrentcar@gmail.com, amende@gmail.com";

mail("$adminemail", "bid from 
$name", "$msg"); 

  	$host="localhost";
    $user="cr93142_ushanka";
    $pass="NissanNoteCrnaGora"; //установленный вами пароль
    $db_name="cr93142_ushanka";
    $link=mysql_connect($host,$user,$pass);
    mysql_select_db($db_name,$link);

    //Вставляем данные, подставляя их в запрос
    $sql = mysql_query('INSERT INTO bids(name, phone, email, comment, carPrice, carname, rentdays, datalocationplace, datareturnplace, datafromVal, datatoVal, totalprice, extraval)
 VALUES("'.$name.'", "'.$phone.'", "'.$email.'", "'.$comment.'", "'.$carPrice.'", "'.$carname.'", "'.$rentdays.'", "'.$datalocationplace.'", "'.$datareturnplace.'", "'.$datafromVal.'", "'.$datatoVal.'", "'.$totalprice.'", "'.$extraval.'")');
mysql_close($link);
?>