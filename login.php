<?php
    error_reporting (E_ALL ^ E_NOTICE);

    session_start();
    // Verifica l'esistenza di dati POST
    if(isset($_POST["nome_utente"]) && isset($_POST["password"]))
    {
       
        $conn = mysqli_connect("151.97.9.184", "brancaforte_emanuele", "7156858588", "brancaforte_emanuele");

        $nome_utente = mysqli_real_escape_string($conn, $_POST["nome_utente"]);
        $password = mysqli_real_escape_string($conn, $_POST["password"]);

        $query = "SELECT * FROM utente WHERE BINARY nome_utente = '".$nome_utente."' AND BINARY password = '".$password."'";

        $res = mysqli_query($conn, $query);
        
        if(mysqli_num_rows($res) > 0)
        { 
            // Imposta la variabile di sessione
            $_SESSION["nome_utente"] = $_POST["nome_utente"];
            // Vai alla pagina home.php
            header("Location: home.php");
            exit;
        }
        else
        {
            // Flag di errore
            $errore = true;
        }
    }


?>
<html>
    <head>
        <link href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap" rel="stylesheet">
        <meta charset="utf-8">
        <link rel='stylesheet' href='signup_e_login.css'>
        <script src='login.js' defer></script>
        <link rel="stylesheet" href="https://e6t7a8v2.stackpathcdn.com/tutorial/css/fontawesome-all.min.css">
        <title>StrongBook | Login</title>
    </head>
    
    <body>
        <section id = "intestazione">
           <img src = "./logo_bianco.png" id="imglogo"> 
            <h1 id = "benvenuto">Musica e Libri in un click</h1> 
        </section>
        <main>
            <form name='form' method='POST'>
            <span class="heading">Log In</span>
            <br>
            <?php
            // Verifica la presenza di errori
            if(isset($errore))
            {
                echo "<p class='errore'>";
                echo "Credenziali non valide.";
                echo "</p>";
            }
        ?>
                <p>
                    <label>
                    
                    <input type='text' name='nome_utente' class = "form_control" placeholder="Username">
                    <i class="fa fa-user"></i>
                </label>
                
                </p>
                <p>
                    <label><input type='password' name='password' class = "form_control" placeholder="Password">
                    <i class="fa fa-lock"></i>
                    
                </label>
                </p>
                <p>
                <label><button type='submit' id = "submit">Accedi</button></label>
                </p>
                <p>Se no sei registrato <a href = 'signup.php'>Registrati</a></p>
            </form>
        </main>
    </body>
</html>