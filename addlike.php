<?php
error_reporting (E_ALL ^ E_NOTICE);
session_start();

$utente = $_SESSION["nome_utente"];
$post = $_GET["val1"];

if(isset($utente) && $utente !== '' &&
    isset($post) && $post !== ''){

$conn = mysqli_connect("151.97.9.184", "brancaforte_emanuele", "7156858588", "brancaforte_emanuele");
$query = "INSERT INTO likes(utente,post) VALUES ('$utente','$post')";

$res = mysqli_query($conn,$query);

if($res){
    echo 'tutto riuscito';
}
else{
    echo 'errore';
}

    }

?>