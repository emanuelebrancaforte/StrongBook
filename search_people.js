const form = document.querySelector('form');
form.addEventListener('submit', cercautente);
form.addEventListener('keyup', cercautente);





function onJson(json){
  console.log(json);
  const griglia = document.querySelector('#utente-view');
  griglia.innerHTML = ''; 
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

  const infoutente = document.createElement('div');
  infoutente.classList.add('info_utente');

  const imgutente = document.createElement('img');
  imgutente.classList.add('fotoutente');
  if (imgprof == ""){
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

  const add = document.createElement('div');
  add.classList.add('add');

  const omino = document.createElement('i');
  
 fetch("http://151.97.9.184/brancaforte_emanuele/hw1/controllaseguito.php?val1="+username.textContent).then(onResponset).then(onText);

 function onResponset(response){
  return response.text();
}

function onText(text){
  console.log(text);
if(text == "0"){
 omino.className = 'fas fa-user-plus fa-2x';
 omino.addEventListener('click',seguiutente);
}
else {
  add.classList.add('check');
  omino.className = 'fas fa-user-check fa-2x';
}
}


  utente.appendChild(infoutente);
  infoutente.appendChild(imgutente);
  infoutente.appendChild(nomediv);
  nomediv.appendChild(username);
  nomediv.appendChild(nomeecognome);
  add.appendChild(omino);
  utente.appendChild(add);

  griglia.appendChild(utente);

 
}

}

function onResponse(response){
  return response.json();
}

function cercautente(event){
    event.preventDefault();
    const tipo_input = document.querySelector('#utente');
    const tipo_value = encodeURIComponent(tipo_input.value);
    fetch("http://151.97.9.184/brancaforte_emanuele/hw1/do_search_people.php?val1="+tipo_value).then(onResponse).then(onJson);
}

function seguiutente(event){
  console.log("Seguito");
  const sel = event.currentTarget;
  sel.className = 'fas fa-user-check fa-2x';
  const add = sel.parentNode;
  add.classList.add('check');
  const header = add.parentNode;
  console.log(header);
  const username = header.querySelector("h1.username").textContent;
  console.log(username);
  fetch("http://151.97.9.184/brancaforte_emanuele/hw1/search_people.php?val1="+username);
}


