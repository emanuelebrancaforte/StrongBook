<?php
error_reporting (E_ALL ^ E_NOTICE);

      // Connessione al database
      $conn = mysqli_connect("151.97.9.184", "brancaforte_emanuele", "7156858588", "brancaforte_emanuele");
      // Inizializza array di utenti
      $utenti = array();
      // Leggi utenti
      $res = mysqli_query($conn, "SELECT * FROM utente ORDER BY nome_utente");
      while($row = mysqli_fetch_assoc($res))
      {
            $utenti[] = $row;
      }
      // Chiudi
      mysqli_free_result($res);
      mysqli_close($conn);
      // Ritorna
      //echo json_encode($utenti);

?>