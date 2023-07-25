<?php
error_reporting (E_ALL ^ E_NOTICE);
session_start();

$id_cuore= $_GET["val1"];

$conn = mysqli_connect("151.97.9.184", "brancaforte_emanuele", "7156858588", "brancaforte_emanuele");

$utentilike = array();

$query = "SELECT nome_utente, nome, cognome, imgprofilo FROM likes, utente WHERE post = '$id_cuore' AND utente = nome_utente ";
$res = mysqli_query($conn,$query);


while($row = mysqli_fetch_assoc($res)){

    $utentilike[] = $row;
}

mysqli_free_result($res);
mysqli_close($conn);

echo json_encode($utentilike);

?>