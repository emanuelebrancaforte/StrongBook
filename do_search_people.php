<?php
error_reporting (E_ALL ^ E_NOTICE);
session_start();


$utente = $_GET["val1"];
$utenteA = $_SESSION["nome_utente"];
$conn = mysqli_connect("151.97.9.184", "brancaforte_emanuele", "7156858588", "brancaforte_emanuele");

$utenti = array();

$query = "SELECT nome_utente,nome, cognome, imgprofilo FROM utente where nome_utente like '$utente%' AND nome_utente != '$utenteA'";
$res = mysqli_query($conn, $query);

while($row = mysqli_fetch_assoc($res)){
    $utenti[] = $row;
}

mysqli_free_result($res);
mysqli_close($conn);

echo json_encode($utenti);
?>