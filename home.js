fetch("localhost/socialnetwork2/hw1(consegnato)/search_post.php").then(onResponse).then(onJson);


function aggiungilike(event){
   console.log("Mipiace");
   const sel = event.currentTarget;
   sel.removeEventListener('click', aggiungilike);
    console.log(sel);
   sel.className = 'fas fa-heart';
   const padre = sel.parentNode;
   padre.classList.add('mipiace');
   const id = sel.id;

   const span = padre.querySelector('.span_count');
   const contenuto = span.textContent;
   const meno = (contenuto -1);
   if(contenuto == 0){
    span.textContent = "1";
   }
   else{
   span.textContent = "A te e altri"+contenuto;
   }

   fetch("http://151.97.9.184/brancaforte_emanuele/hw1/addlike.php?val1="+id);
   
}


function onResponseV(response){
    return response.json();
}


function onJsonV(json){

  const modalView = document.querySelector('.hidden');
  modalView.classList.remove('hidden');

  document.body.classList.add('no-scroll');
  
  modalView.style.top = window.pageYOffset + 'px';
  
  //Creiamo il div bianco
  const div1 = document.createElement('div');
  div1.classList.add('div1');
  div1.classList.add('scroll');


  const grigliainterna = document.createElement('section');
  grigliainterna.classList.add('grigliainterna');
  grigliainterna.innerHTML = ''; 
  for(let i =0;i<json.length;i++){
    const nomeutente = json[i].nome_utente;
    const nome = json[i].nome;
    const cognome = json[i].cognome;
    const imgprof = json[i].imgprofilo;
    const nomecognome = nome+' '+cognome;
    console.log(nomecognome);
    console.log(nomeutente);
    console.log(nome);
    console.log(cognome);
    console.log(imgprof);

  
  const utente = document.createElement('div');
  utente.classList.add('header');
  utente.classList.add('.headerlike');

  const infoutente = document.createElement('div');
  infoutente.classList.add('info_utente');

  const imgutente = document.createElement('img');
  imgutente.classList.add('fotoutente');
  if (imgprof == " "){
    console.log("Niente photo");
    imgutente.src ='./user-img.png';
  }
  else{
  imgutente.src = imgprof;}

  const nomediv = document.createElement('div');
  nomediv.classList.add('nome');

  const username = document.createElement('h1');
  username.classList.add('username');
  username.textContent = nomeutente;
  

  const nomeecognome = document.createElement('h1');
  nomeecognome.classList.add('nomeecognome');
  nomeecognome.textContent = nomecognome;


  utente.appendChild(infoutente);
  infoutente.appendChild(imgutente);
  infoutente.appendChild(nomediv);
  nomediv.appendChild(username);
  nomediv.appendChild(nomeecognome);
  grigliainterna.appendChild(utente);
    

  }
  div1.appendChild(grigliainterna);
  modalView.appendChild(div1);
  modalView.addEventListener('click', chiudimodale);
}


function chiudimodale(event){
    const modalView = document.querySelector('#sezionelike');
    document.body.classList.remove('no-scroll');
    modalView.classList.add('hidden');
    modalView.innerHTML='';
  
}



function onResponse(response){
    return response.json();


}

function onJson(json){
    //console.log("Json");
    const griglia = document.querySelector('#sezionepost');
    griglia.innerHTML = '';
    for(let i=0; i<json.length; i++){
        const nomeutente = json[i].nome_utente;
        const nome = json[i].nome;
        const cognome = json[i].cognome;
        const imgprof = json[i].imgprofilo;
        const nomecognome = nome+' '+cognome;
        const datapubblicazione = json[i].datapubblicazione;
        const immagine = json[i].immagine;
        const traccia = json[i].traccia;
        const titolo = json[i].titolo;
        const commento = json[i].commento;
        const id_post = json[i].id_post;
        
    
        /*console.log(nomecognome);
        console.log(nomeutente);
        console.log(nome);
        console.log(cognome);
        console.log(imgprof);
        console.log(datapubblicazione);
        console.log(immagine);
        console.log(traccia);
        console.log(titolo);
        console.log(commento);
        console.log(id_post);*/

        const post = document.createElement('div');
        post.classList.add('post');

        const header = document.createElement('div');
        header.classList.add('header');
      
        const infoutente = document.createElement('div');
        infoutente.classList.add('info_utente');
      
        const imgutente = document.createElement('img');
        imgutente.classList.add('fotoutente');
        if (imgprof == " "){
          //console.log("Niente photo");
          imgutente.src ='./user-img.png';
        }
        else{
        imgutente.src = imgprof;}

        const nomediv = document.createElement('div');
        nomediv.classList.add('nome');
      
        const username = document.createElement('h1');
        username.classList.add('username');
        username.textContent = nomeutente;
        
      
        const nomeecognome = document.createElement('h1');
        nomeecognome.classList.add('nomeecognome');
        nomeecognome.textContent = nomecognome;

        const infopost = document.createElement('div');
        infopost.classList.add('info_post');

        const span = document.createElement('span');
        span.textContent = "Data:";

        const data = document.createElement('span');
        data.textContent = datapubblicazione;

        const corpo_post = document.createElement('div');
        corpo_post.classList.add("corpo_post");

        const img_post = document.createElement('div');
        img_post.classList.add('img_post');

        const img = document.createElement('img');
        img.src = immagine;

        const classe_traccia = document.createElement('div');
        classe_traccia.classList.add('traccia');

        const video = document.createElement('video');
        video.controls = "autoplay";
        video.name = "media";

        const source = document.createElement('source');
        source.src = traccia;
        source.type = "audio/x-m4a";
        
        if(traccia == "/"){
            classe_traccia.classList.add('novideo');
            }
        

        const testo_post = document.createElement('div');
        testo_post.classList.add("testo_post");

        const titolo_post = document.createElement('div');
        titolo_post.classList.add("titolo_post");

        const h1 = document.createElement('h1');
        h1.textContent = titolo;

        const commento_post = document.createElement('div');
        commento_post.classList.add("commento_post");

        const span_commento = document.createElement('span');
        span_commento.textContent = commento;

        const like = document.createElement('div');
        like.classList.add('like');

        const heart = document.createElement('i');
        heart.id = id_post;

        const span_count = document.createElement('span');
        span_count.classList.add('nlike');
        span_count.classList.add('vedilike');
        span_count.id = id_post;
        span_count.className = "span_count";
        


        fetch("http://151.97.9.184/brancaforte_emanuele/hw1/controllalike.php?val1="+id_post).then(onResponse).then(onText);
        
        function onResponse(response){
            return response.text();
        }

        function onText(text){
            //console.log(text);
            
            if(text == "0"){
            heart.className = 'far fa-heart';
            heart.addEventListener('click', aggiungilike);
            
            }
            else{
                heart.className = 'fas fa-heart';
                heart.classList.add('mipiace');
                    
            }
        
        
        
        }
        
        
        

        
        /**/ 
        fetch("http://151.97.9.184/brancaforte_emanuele/hw1/numerolike.php?val1="+id_post).then(onResponsel).then(onTextl);

        function onResponsel(response){
            return response.text();
        }
        
        function onTextl(text){
            //console.log(text);
            if(text == "0"){
                span_count.textContent = " ";
            }
            else{
            span_count.textContent = " "+text;}
        }
        
         


        
    

        nomediv.appendChild(username);

        nomediv.appendChild(nomeecognome);

        infoutente.appendChild(imgutente);

        infoutente.appendChild(nomediv);

        infopost.appendChild(span);

        infopost.appendChild(data);

        header.appendChild(infoutente);

        header.appendChild(infopost);

        


        video.appendChild(source);

        classe_traccia.appendChild(video);

        img_post.appendChild(img);

        img_post.appendChild(classe_traccia);

        titolo_post.appendChild(h1);

        commento_post.appendChild(span_commento);

        testo_post.appendChild(titolo_post);

        testo_post.appendChild(commento_post),

        corpo_post.appendChild(img_post);

        corpo_post.appendChild(testo_post);




        like.appendChild(heart);

        like.appendChild(span_count);



        post.appendChild(header);

        post.appendChild(corpo_post);

        post.appendChild(like);


        griglia.appendChild(post);



        span_count.addEventListener('click', mostralike);

    }

    
    
}

function mostralike(event){
    const sel = event.currentTarget;
    const id_cuore = sel.id;
    console.log(id_cuore);
    
    fetch("http://151.97.9.184/brancaforte_emanuele/hw1/vedilike.php?val1="+id_cuore).then(onResponseV).then(onJsonV);

}