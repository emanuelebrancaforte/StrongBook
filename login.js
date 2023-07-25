function validazione(event)
{
    // Verifica se tutti i campi sono riempiti
    if(form.nome.value.length == 0 ||
       form.cognome.value.length == 0 ||
       form.email.value.length == 0 ||
       form.password.value.length == 0)
    {
        // Avvisa utente
        
        alert("Compilare tutti i campi.");
        
        event.preventDefault();
    }
        
}

// Riferimento al form
const form = document.forms['form'];
// Aggiungi listener
form.addEventListener('submit', validazione);