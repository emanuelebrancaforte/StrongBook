<?php
error_reporting (E_ALL ^ E_NOTICE);
session_start();

$utenteA = urlencode($_SESSION["nome_utente"]);
$conn = mysqli_connect("151.97.9.184", "brancaforte_emanuele", "7156858588", "brancaforte_emanuele");

$post = array();

$query = "SELECT imgprofilo, nome_utente, nome, cognome, datapubblicazione, id_post, titolo, commento, immagine, traccia
FROM utente, follower, post
WHERE utente.nome_utente = follower.utente_p AND
      utente_a = '$utenteA' AND
      post.utente = utente_p 
              UNION
      SELECT imgprofilo, nome_utente, nome, cognome, datapubblicazione, id_post, titolo, commento, immagine, traccia
      FROM post, utente
      WHERE nome_utente = post.utente And
            nome_utente = '$utenteA'
      ORDER BY id_post DESC";

$res = mysqli_query($conn,$query);

while($row = mysqli_fetch_assoc($res)){
  $post[] = $row;
}

mysqli_free_result($res);
mysqli_close($conn);

echo json_encode($post);

?>
