<?php
error_reporting (E_ALL ^ E_NOTICE);
session_start();


$utenteA= $_SESSION["nome_utente"];
$id_post = $_GET["val1"];

$conn = mysqli_connect("151.97.9.184", "brancaforte_emanuele", "7156858588", "brancaforte_emanuele");

$query = "SELECT * FROM likes WHERE post = '$id_post' AND utente = '$utenteA'";
$res = mysqli_query($conn,$query);
$row = mysqli_num_rows($res);

echo $row;

?>