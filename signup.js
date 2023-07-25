function validazione (event){
    campipieni(event);
    utentetroppolungo(event);
    emailcorretta(event);
    passwordcoincidenti(event);
    nomeutente();
    noaccenti(event);
}
 
function campipieni(event){
    if(form.nome.value.length == 0 ||
        form.cognome.value.length == 0 ||
        form.nome_utente.value.length == 0 ||
        form.email.value.length == 0 ||
        form.password.value.length == 0 ||
        form.conferma_password.value.length == 0)
        { 
            console.log("Errore");
            alert("Compilare tutti i campi");
            event.preventDefault();
        }       
}

function utentetroppolungo(event){
    if(form.nome_utente.value.length > 20){
        alert("Nome Utente non valido");
        event.preventDefault();
    }
}

function emailcorretta(event){
    const email = form.email.value;
    const trovato = email.indexOf('@');
    if(trovato == -1)
    {
        console.log("Errore");
            alert("Email non corretta");
            event.preventDefault();
    }
}


function passwordcoincidenti(event){
    const p1 = form.password.value;
    const p2 = form.conferma_password.value;
    if(p1 != p2){
        console.log("Errore");
            alert("La password non coincide");
            event.preventDefault();
    }
}

function onJson(json){
   for (utente of json){
       if (form.nome_utente.value == utente.nome_utente){
           alert("nome utente già utilizzato");
       }
   }     
}

function onResponse(response){
    return response.json();
}

function controllanomeutente(event){
   fetch("http://151.97.9.184/brancaforte_emanuele/hw1/elencojson.php").then(onResponse).then(onJson);  
}






 
const form = document.forms['iscrizione'];
 
form.addEventListener('submit', validazione);

form.nome_utente.addEventListener('blur', controllanomeutente);