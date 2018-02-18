<?php
$name="test"; 
$phone="test"; 
$email="test"; 
$comment="test"; 
$carPrice="test"; 
$carname="test"; 
$rentdays="test"; 
$datalocationplace="test"; 
$datareturnplace="test"; 
$datafromVal="test"; 
$datatoVal="test"; 
$totalprice="test"; 
$extraval="test"; 
	
	  $host="localhost";
    $user="cr93142_ushanka";
    $pass="HX9d7oyl"; //установленный вами пароль
    $db_name="cr93142_ushanka";
    $link=mysql_connect($host,$user,$pass);
    mysql_select_db($db_name,$link);
	if (!$link)
    {
    die('Could not connect: ' . mysql_error());
    }
    else
    {
    echo "Congrats! connection established successfully";
    }
 if (isset($name)) {
    //Вставляем данные, подставляя их в запрос
    $sql = mysql_query('INSERT INTO bids(name, phone, email, comment, carPrice, carname, rentdays, datalocationplace, datareturnplace, datafromVal, datatoVal, totalprice, extraval)
 VALUES("'.$name.'", "'.$phone.'", "'.$email.'", "'.$comment.'", "'.$carPrice.'", "'.$carname.'", "'.$rentdays.'", "'.$datalocationplace.'", "'.$datareturnplace.'", "'.$datafromVal.'", "'.$datatoVal.'", "'.$totalprice.'", "'.$extraval.'")');
    //Если вставка прошла успешно
    if ($sql) {
        echo "<p>Данные успешно добавлены в таблицу.</p>";
    } else {
        echo "<p>Произошла ошибка.</p>";
    }
}
?>