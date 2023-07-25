<?php
error_reporting (E_ALL ^ E_NOTICE);
session_start();

$utenteP= urlencode($_GET["val1"]);
$utenteA= urlencode($_SESSION["nome_utente"]);
$conn = mysqli_connect("151.97.9.184", "brancaforte_emanuele", "7156858588", "brancaforte_emanuele");

$queryc = "SELECT* from follower where utente_a = '$utenteA' AND utente_p = '$utenteP'";
$resc = mysqli_query($conn,$queryc);
$row = mysqli_num_rows($resc);

echo $row;

?>