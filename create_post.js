const form = document.querySelector('form');
form.addEventListener('submit', direziona);



function direziona(event){
    event.preventDefault();
    
    const servizio = form.servizio.value;
    if(servizio =="musica"){
        cercaMusica(event);
        window.scroll(0,0);
    }
    else{
    cercaLibri(event);
    window.scroll(0,0);
    }
}

function carica(event){
    const sel = event.currentTarget;
    const botinvia = sel.parentNode;
    const modale = botinvia.parentNode;
    const titolo = encodeURIComponent(modale.querySelector("h2").textContent);
    const immagine = modale.querySelector("img").src;
    const traccia = modale.querySelector("source").src;
    const commento = document.getElementById("commento").value;
    console.log(titolo);
    console.log(immagine);
    console.log(traccia);
    console.log(commento);

    const successo = modale.parentNode;
successo.innerHTML='';
const div1 = document.createElement('div');
div1.classList.add('pubblicato');
 
const botchiudi = document.createElement('button');
botchiudi.textContent= 'Pubblica ancora';
botchiudi.classList.add('botannulla');
botchiudi.classList.add('pubblicatobottoni');
 
const botposta = document.createElement('button');
botposta.textContent= 'Torna alla Home';
botposta.classList.add('botinvia');
botposta.classList.add('pubblicatobottoni');
 
div1.appendChild(botposta);
div1.appendChild(botchiudi);
successo.appendChild(div1);
 
botchiudi.addEventListener('click', ripubblica);
botposta.addEventListener('click', vaihome);


fetch("http://151.97.9.184/brancaforte_emanuele/hw1/create_post.php?tit="+titolo+"&img="+immagine+"&comm="+commento+"&tracc="+traccia);

}
 
function ripubblica(event){
    window.location.reload()
    
}
    
function vaihome(event){
    window.location.href = "http://151.97.9.184/brancaforte_emanuele/hw1/home.php";
}

function chiudimodale(event){
      const modalView = document.querySelector('#modal-view');
      document.body.classList.remove('no-scroll');
      modalView.classList.add('hidden');
      modalView.innerHTML='';
    
}
 
function seleziona(event){
    
    const sel = event.currentTarget;
    const div = sel.parentNode;
    const titolo = div.getAttribute("titolo");
    const immagine = div.getAttribute("immagine");
    const traccia = div.getAttribute("traccia");


    
    mostraselezionato(titolo, immagine, traccia);
       
}
 
function mostraselezionato(titolo, immagine, traccia){
    
    const modalView = document.querySelector('.hidden');
    modalView.classList.remove('hidden');

    document.body.classList.add('no-scroll');
    modalView.style.top = window.pageYOffset + 'px';
   
    //Creiamo il div bianco
    const div1 = document.createElement('div');
    div1.classList.add('div1');
    
    //Creiamo l' intestazione
    const h1 = document.createElement('h1');
    h1.classList.add('intestazione');
    h1.textContent = "Creazione Post";

    //creiamo il titolo
    const h2 = document.createElement('h2');
    h2.classList.add('titolo');
    h2.textContent = titolo;

    //creaiamo la descrizione
    const descrizione = document.createElement('input');
    descrizione.type = 'textarea';
    descrizione.placeholder = "Inserisci un commento...";
    descrizione.id ='commento';
    descrizione.classList.add('commento');

    //creiamo l' immagine
    const img = document.createElement('img');
    img.src = immagine;
    img.classList.add('imgmodale');

    //creiamo il riproduttore
    const video = document.createElement('video');
    video.classList.add('videomodale');
    video.controls = true;
    video.name = "media";
    
    const sound = document.createElement('source');
    sound.src = traccia;
    sound.type = "audio/x-m4a";
    
    //creiamo div bottoni
    const divbot = document.createElement('div');
    divbot.classList.add('divbot');

    //creo bottone invia
    const botinvia = document.createElement('button');
    botinvia.type = 'submit';
    botinvia.textContent = 'CONDIVIDI';
    botinvia.classList.add('botinvia');

    //creo bottone Annulla
    const botannulla = document.createElement('button');
    botannulla.textContent = 'ANNULLA';
    botannulla.classList.add('botannulla');

    

    div1.appendChild(h1);
    div1.appendChild(h2);
    div1.appendChild(descrizione);
    div1.appendChild(img);
    video.appendChild(sound);
    div1.appendChild(video);
    divbot.appendChild(botannulla);
    divbot.appendChild(botinvia);
    div1.appendChild(divbot);

    modalView.appendChild(div1);
    
    botannulla.addEventListener('click',chiudimodale);

    botinvia.addEventListener('click', carica);

}


 
function cercaMusica(event){
  event.preventDefault();
  const servizio = form.servizio.value;
  const tipo_input = document.querySelector('#artista');
    const tipo_value = encodeURIComponent(tipo_input.value);
    fetch("http://151.97.9.184/brancaforte_emanuele/hw1/do_search_content.php?val1="+tipo_value+"&val2="+servizio).then(onResponse).then(onJson);
    
}




 
function onResponse(response){
    return response.json();
}
 
function onJson(json){
    console.log('JSON ricevuto');
    //svuoto la libreria
    const album = document.querySelector('#musica-view');
    album.innerHTML = '';
 
    // Processa ciascun risultato
    for(let i=0; i<json.resultCount; i++){
       const item = json.results[i];
    
 
       const titolo = item.trackName;
 
       const foto = item.artworkUrl100;

       const traccia = item.previewUrl;
 
    // Creiamo il div che conterrà immagine e didascalia
    const carta = document.createElement('div');
    carta.classList.add('carta');
    

    carta.setAttribute("titolo", titolo);
    carta.setAttribute("immagine", foto);
    carta.setAttribute("traccia", traccia);

    // Creiamo l'immagine
    const img = document.createElement('img');
    img.src = foto;
    // Creiamo la didascalia
    const caption = document.createElement('span');
    caption.textContent = titolo;
    
    // creiamo il bottone
    const bottone = document.createElement("button");
    
    bottone.name='seleziona';
    bottone.id = foto;
    bottone.textContent = "Seleziona";
    bottone.classList.add('submit');

    const video = document.createElement('video');
    video.controls = true;
    video.name = "media";
    
    const sound = document.createElement('source');
    sound.src = traccia;
    sound.type = "audio/x-m4a";


       carta.appendChild(caption);

       carta.appendChild(img);

       video.appendChild(sound);

       carta.appendChild(video);

       carta.appendChild(bottone);
    
       album.appendChild(carta);
 
       
       bottone.addEventListener('click', seleziona);
    }
    
    
    
}

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


function onJsonL(json){
    console.log('JSON ricevuto');
    //svuoto la libreria
    const album = document.querySelector('#musica-view');
    album.innerHTML = '';
 
    // Processa ciascun risultato
    for(let i=0; i<json.num_found; i++){
       const item = json.docs[i];
    
 
       const titolo = item.title_suggest;
       const isbn = item.isbn[0];
       const foto = 'https://covers.openlibrary.org/b/isbn/'+isbn+'-M.jpg';

       
 
    // Creiamo il div che conterrà immagine e didascalia
    const carta = document.createElement('div');
    
    carta.classList.add('divlibro');

    carta.setAttribute("titolo", titolo);
    carta.setAttribute("immagine", foto);
    
    
    

    // Creiamo l'immagine
    const img = document.createElement('img');
    img.src = foto;
    img.classList.add('imglibro');
    // Creiamo la didascalia
    const caption = document.createElement('span');
    caption.textContent = titolo;
    caption.classList.add('spanL');
    
    // creiamo il bottone
    const bottone = document.createElement("button");
    bottone.classList.add('submitL');
    bottone.name='seleziona';
    
    bottone.textContent = "Seleziona";

    


       carta.appendChild(caption);

       carta.appendChild(img);

       carta.appendChild(bottone);
    
       album.appendChild(carta);
 
       
       bottone.addEventListener('click', selezionaL);

      
    }
    
    
    
}




function onResponseL(response){
    return response.json();
}

function cercaLibri(event){
    event.preventDefault();
    const servizio = form.servizio.value;
    const tipo_input = document.querySelector('#artista');
       const tipo_value = encodeURIComponent(tipo_input.value);
       
       fetch("http://151.97.9.184/brancaforte_emanuele/hw1/do_search_content.php?val1="+tipo_value+"&val2="+servizio).then(onResponseL).then(onJsonL);
}


   function selezionaL(event){

    const sel = event.currentTarget;
    const div = sel.parentNode;
    const titolo = div.getAttribute("titolo");
    const immagine = div.getAttribute("immagine");
    


 
    mostraselezionatoL(titolo, immagine);
       
}
 
function mostraselezionatoL(titolo, immagine){
    
    const modalView = document.querySelector('.hidden');
    modalView.classList.remove('hidden');

    document.body.classList.add('no-scroll');
    modalView.style.top = window.pageYOffset + 'px';
   
    //Creiamo il div bianco
    const div1 = document.createElement('div');
    div1.classList.add('div1');
    
    //Creiamo l' intestazione
    const h1 = document.createElement('h1');
    h1.classList.add('intestazione');
    h1.textContent = "Creazione Post";

    //creiamo il titolo
    const h2 = document.createElement('h2');
    h2.classList.add('titolo');
    h2.textContent = titolo;

    //creaiamo la descrizione
    const descrizione = document.createElement('input');
    descrizione.type = 'textarea';
    descrizione.id = 'commento';
    descrizione.placeholder = "Inserisci un commento...";
    descrizione.classList.add('commento');


    //creiamo l' immagine
    const img = document.createElement('img');
    img.src = immagine;
    img.classList.add('imgmodale');

    //creiamo div bottoni
    const divbot = document.createElement('div');
    divbot.classList.add('divbot');

    //creo bottone invia
    const botinvia = document.createElement('button');
    botinvia.type = 'submit';
    botinvia.textContent = 'CONDIVIDI';
    botinvia.classList.add('botinvia');

    //creo bottone Annulla
    const botannulla = document.createElement('button');
    botannulla.textContent = 'ANNULLA';
    botannulla.classList.add('botannulla');

    

    div1.appendChild(h1);
    div1.appendChild(h2);
    div1.appendChild(descrizione);
    div1.appendChild(img);
    divbot.appendChild(botannulla);
    divbot.appendChild(botinvia);

    div1.appendChild(divbot)

    modalView.appendChild(div1);
    
    botannulla.addEventListener('click',chiudimodale);

    botinvia.addEventListener('click', caricaL);
    
    
}

function caricaL(event){
    const sel = event.currentTarget;
    const botinvia = sel.parentNode;
    const modale = botinvia.parentNode;
    const titolo = modale.querySelector("h2").textContent;
    const immagine = modale.querySelector("img").src;
    const commento = document.getElementById("commento").value;
    console.log(titolo);
    console.log(immagine);
    console.log(commento);

    const successo = modale.parentNode;
    successo.innerHTML='';
    const div1 = document.createElement('div');
    div1.classList.add('pubblicato');
 
    const botchiudi = document.createElement('button');
    botchiudi.textContent= 'Pubblica ancora';
    botchiudi.classList.add('botannulla');
    botchiudi.classList.add('pubblicatobottoni');
 
    const botposta = document.createElement('button');
    botposta.textContent= 'Torna alla Home';
    botposta.classList.add('botinvia');
    botposta.classList.add('pubblicatobottoni');
 
    div1.appendChild(botposta);
    div1.appendChild(botchiudi);
    successo.appendChild(div1);
 
    botchiudi.addEventListener('click', ripubblica);
    botposta.addEventListener('click', vaihome);

    fetch("http://151.97.9.184/brancaforte_emanuele/hw1/create_post.php?tit="+titolo+"&img="+immagine+"&comm="+commento);
}
