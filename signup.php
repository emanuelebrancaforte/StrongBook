<?php
error_reporting (E_ALL ^ E_NOTICE);
session_start();

if(isset($_POST['nome']) && $_POST['nome']!== '' &&
    isset($_POST['cognome']) && $_POST['cognome']!== '' &&
     isset($_POST['nome_utente']) && $_POST['nome_utente']!== '' &&
      isset($_POST['email']) && $_POST['email']!== '' &&
       isset($_POST['password']) && $_POST['password']!== '' &&
        isset($_POST['conferma_password']) && $_POST['conferma_password']!== '')
   {
      $conn = mysqli_connect("151.97.9.184", "brancaforte_emanuele", "7156858588", "brancaforte_emanuele");

      
   $nome = mysqli_real_escape_string($conn, $_POST["nome"]);
   $cognome = mysqli_real_escape_string($conn, $_POST["cognome"]);
   $nome_utente = mysqli_real_escape_string($conn, $_POST["nome_utente"]);
   $email = mysqli_real_escape_string($conn, $_POST["email"]);
   $foto_profilo = mysqli_real_escape_string($conn, $_POST['foto_profilo']);
   $password = mysqli_real_escape_string($conn, $_POST["password"]);
   
       
   $query = "INSERT INTO utente(nome_utente, nome, cognome, email, password, imgprofilo) VALUES ('$nome_utente', '$nome', '$cognome', '$email', '$password', '$foto_profilo')";

   $res = mysqli_query($conn, $query);

   //controllo se la query è andata a buon fine e imposto la sessione
   if($res){
       $SESSION["nome_utente"] = $_POST['nome_utente'];
       header("Location: home.php");
       exit;
   }
   else
   $erroreserver = true;
  
}



if(isset($erroreserver)){
    echo "<p>";
    echo "Dati non inseriti nel database";
    echo "</p>";
}

?>

<html>
 <head>
 <link href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap" rel="stylesheet">
    <meta charset="utf-8">
    <title>StrongBook | Registrazione</title>
    <link rel="stylesheet" href="signup_e_login.css"/>
    <script src = 'signup.js' defer = 'true'></script>
    <link rel="stylesheet" href="https://e6t7a8v2.stackpathcdn.com/tutorial/css/fontawesome-all.min.css">     
 </head>
    <body>
         <section id = "intestazione">
           <img src = "./logo_bianco.png" id="imglogo"> 
            <h1 id = "benvenuto">Musica e Libri in un click</h1> 
         </section>
         <main>
            <form name = 'iscrizione' method="POST" >
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBvwAcytGFLkWO2eT-FCwE5z_mlQxBdI9uwbyeczCTVBci7Vrg&usqp=CAU" id = "imguser"></img>
               <span class="heading">Registrazione
            
               </span>
               <br>
                  <p>
                     <label><input type='text' name='nome' class = "form_control" placeholder="Nome">
                     <i class="fa fa-user"></i>
                     </label>
                  </p>
                  <p>
                     <label><input type='text' name='cognome' class = "form_control" placeholder="Cognome">
                     <i class="fa fa-user"></i>
                     </label>
                  </p>
                  <p>
                     <label><input type='text' name='nome_utente' class = "form_control" placeholder="Nome Utente">
                     <i class="fa fa-user"></i>
                     </label>
                  </p>
                <p>
                   <label><input type='text' name='email' class = "form_control" placeholder="e-mail">
                   <i class="fas fa-envelope"></i>
                   </label>
                </p>
                <p>
                   <label><input type='password' name='password' class = "form_control" placeholder="Password">
                   <i class="fa fa-lock"></i>
                   </label>
                <p>
                   <label><input type='password' name='conferma_password' class = "form_control"placeholder="Conferma Password">
                   <i class="fa fa-lock"></i>
                   </label>
                </p>
                <p>
                   <label><input type='text' name='foto_profilo' class = "form_control" placeholder="Incolla link foto">
                   <i class="far fa-image"></i>
                   </label>
                </p>
                <p>
                   <label ><button type='submit' id = "submit">Registrati</button></label>
                </p>
                
                <p>Oppure <a href = 'login.php'>Accedi</a></p>
               </form>
        </main>
    </body>
</html>