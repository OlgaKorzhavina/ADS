<?php
$name = $_POST['name'];
$tel = $_POST['telephone'];

$name = htmlspecialchars($name);
$tel = htmlspecialchars($tel);

$name = urlencode($name);
$tel = urlencode($tel);

$name = trim($name);
$tel = trim($tel);

if (mail("to_korzjavina.olga@gmail.com",
     "Pest Reject",
     "Имя: ".$name."\n".
     "Телефон ".$tel,
     "From: korzjavina.olga@gmail.com \r\n")
){
     header("Location: /thank_you.html");
}

else {
     echo ("Error");
}

?>