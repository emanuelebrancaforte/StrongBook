<?php
error_reporting (E_ALL ^ E_NOTICE);
session_start();

if (!isset($_SESSION["nome_utente"]))
{
    header("Location:login.php");
}
?>


<html>


<head>
  <title>StrongBook | Home</title>
<link rel="stylesheet" href="https://e6t7a8v2.stackpathcdn.com/tutorial/css/fontawesome-all.min.css"> 
<link rel="stylesheet" href="barranavigazione.css">
<link rel="stylesheet" href="schemapost.css">
<script src="home.js" defer="true"></script>

</head>

<body>
<header id = "navigazione">
      <nav>
        <div id="logo">
          <img id = "logoimg"src = "logo_tagliato.png"></img>
        </div>
        <div id="links">
          <a href = "search_people.php" class="button"><i class="fa fa-user"></i>Cerca Utente</a>
          <a href = 'home.php' ><i class="fas fa-home"></i>Home</a>
          <a href = 'create_post.php'><i class="fas fa-edit"></i>Nuovo Post</a>
          <a href = 'logout.php'><i class="fas fa-sign-out-alt"></i>Logout</a>
        </div>
      </nav>
    </header>

<section id="sezionepost">
</section>

<section id = "sezionelike" class = 'hidden'>
</section>


</body>


</html>
