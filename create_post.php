<?php
error_reporting (E_ALL ^ E_NOTICE);
session_start();

if(!isset($_SESSION["nome_utente"]))
{
    header("Location:login.php");
}

$date = date("Y-n-j");

$conn = mysqli_connect("151.97.9.184", "brancaforte_emanuele", "7156858588", "brancaforte_emanuele");  
$titolo = $_GET["tit"];
$immagine = $_GET["img"];
$commento = $_GET["comm"];
$traccia = $_GET["tracc"];
$utente = $_SESSION["nome_utente"];
$data =  $date;

if (isset ($titolo) && isset($immagine) && isset($commento) && isset($traccia)
&& $titolo!=='' && $immagine!==''  && $traccia !==''){
$query = "INSERT INTO post(titolo,commento,traccia,utente,datapubblicazione,immagine) VALUES ('$titolo','$commento','$traccia','$utente','$data','$immagine')";
$res = mysqli_query($conn, $query);

if ($res){
  mysqli_close($conn);
  echo "tutto riuscito";
}
else {
  echo "errore";
 }
}
else if (isset ($titolo) && isset($immagine) && isset($commento)
&& $titolo!=='' && $immagine!==''){
  $query = $query = "INSERT INTO post(titolo,commento,traccia,utente,datapubblicazione,immagine) VALUES ('$titolo','$commento','/','$utente','$data','$immagine')";
  $res = mysqli_query($conn, $query);
  
  if ($res){
    mysqli_close($conn);
    echo "tutto riuscito";
  }
  else {
    echo "errore";
   }
  }



?>

<html>
<head>
<title>StrongBook | Nuovo Post</title>
    <meta charset="utf-8">
    <//script src = 'home.js' defer = 'true'></script> 
    <link rel="stylesheet" href="https://e6t7a8v2.stackpathcdn.com/tutorial/css/fontawesome-all.min.css"> 
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Creazione Post</title>
    <link rel="stylesheet" href="create_post.css">
    <link rel="stylesheet" href="barranavigazione.css">
    <script src="create_post.js" defer></script>
    
  </head>  
 
  <body>
  <header id = "navigazione">
      <nav>
        <div id="logo">
         <img id = "logoimg" src = "logo_tagliato.png" ></img>
        </div>
        <div id="links">
          <a href="search_people.php" class="button"><i class="fa fa-user"></i>Cerca Utente</a>
          <a href="home.php"><i class="fas fa-home"></i>Home</a>
          <a href="create_post.php"><i class="fas fa-edit"></i>Nuovo Post</a>
          <a href="logout.php"><i class="fas fa-sign-out-alt"></i>Logout</a>
        </div>
      </nav>
    </header>

        <header id= 'scelta'></section>>
          <div id ="overlay"></div>
          <h1>Cerca un servizio</h1>
          <form >
            <input type = 'radio' name = 'servizio' value = 'libri' class = "servizio"><i class="fas fa-book"></i>Libri</input>
            <input type = 'radio' name = 'servizio' value = 'musica' class = "servizio"><i class="fas fa-music"></i>Musica</input>
            </br>
      
            
       
            <input type='text' id='artista' placeholder="Inserisci il nome dell' autore o dell' artista...">
            <input type='submit' id='submit' value='Cerca'>
          </form>
        </header> 
     
    <section id="musica-view">
    </section>
     
    <section id = "modal-view" class= "hidden">
    </section> 
    

  </body>

</html>
