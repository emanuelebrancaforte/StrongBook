<?php
error_reporting (E_ALL ^ E_NOTICE);
session_start();

$servizio = $_GET["val2"];  
$val= $_GET["val1"];
$val1 = urlencode($val);


if($servizio == "musica"){
    $curl = curl_init();
    $url = 'https://itunes.apple.com/search?term='.$val1.'&limit=100';

 

    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

    $result = curl_exec($curl);
    echo $result;
    curl_close($curl);
}




else{
    $curl = curl_init();

    $url = 'https://openlibrary.org/search.json?author='.$val1;

 

    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

    $result = curl_exec($curl);
    echo $result;
    curl_close($curl);
}


?>



