<?php
error_reporting (E_ALL ^ E_NOTICE);

session_start();

if (!isset($_SESSION["nome_utente"]))
{
    header("Location:login.php");
}

$utenteP= urlencode($_GET["val1"]);
$utenteA= urlencode($_SESSION["nome_utente"]);
$conn = mysqli_connect("151.97.9.184", "brancaforte_emanuele", "7156858588", "brancaforte_emanuele");

$queryc = "SELECT* from follower where utente_a = '$utenteA' AND utente_p = '$utenteP'";
$resc = mysqli_query($conn,$queryc);
$row = mysqli_num_rows($resc);

if ($row==0){
if (isset ($utenteA) && isset($utenteP)
&& $utenteA !=='' && $utenteP !==''){
$query = "INSERT INTO follower(utente_a,utente_p) VALUES ('$utenteA','$utenteP')";
$res = mysqli_query($conn,$query);
echo $res;
if ($res){
  echo "tutto riuscito";
  mysqli_close($conn);
}
else {
  echo "errore";
  mysqli_close($conn);
 }
}
}

?>


<html>
  <head>
    <title>StrongBook | Cerca Utente</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Creazione Post</title>
    <link rel="stylesheet" href="search_people.css">
    <link rel="stylesheet" href="barranavigazione.css">
    <link rel="stylesheet" href="https://e6t7a8v2.stackpathcdn.com/tutorial/css/fontawesome-all.min.css"> 
    <script src="search_people.js" defer="true"></script>
  </head>
  <header id = "navigazione">
      <nav>
        <div id="logo">
        <img id = "logoimg" src = "logo_tagliato.png" ></img>
        </div>
        <div id="links">
          <a href = "search_people.php" class="button"><i class="fa fa-user"></i>Cerca Utente</a>
          <a href = 'home.php' ><i class="fas fa-home"></i>Home</a>
          <a href = 'create_post.php'><i class="fas fa-edit"></i>Nuovo Post</a>
          <a href="logout.php"><i class="fas fa-sign-out-alt"></i>Logout</a>
        </div>
      </nav>
    </header>
 
  <body>
    <section id= 'scelta'>
    <div id ="overlay"></div>
      <h1>Cerca Utente</h1>
      <form>
    
      
        <p> Inserisci il <em>nome utente</em> della persona da cercare:</p>
       
        <input type='text' id='utente'>
        <input type='submit' id='submit' value='Cerca'>
      </form>
    </section>  
     
    <section id="utente-view">
    </section>
  
  </body>

</html>