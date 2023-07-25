***Tabella Utente***
create table utente(nome_utente integer not null auto_increment primary key,
 nome char(20), 
 cognome char(20),
 email varchar(32), 
 password varchar(10));

***Tabella Follower***
create table follower(id_follow integer not null auto_increment primary key, 
utente_a varchar(20), 
utente_p varchar(20),
FOREIGN KEY (utente_a) REFERENCES utente(nome_utente),
FOREIGN KEY (utente_p) REFERENCES utente(nome_utente));

***Tabella Post***
create table post(id_post integer not null auto_increment primary key,
titolo varchar(255),
commento varchar(255),
immagine varchar(255),
traccia varchar(255),
utente varchar(20),
FOREIGN KEY (utente) REFERENCES utente(nome_utente));

***Tabella Likes***
create table likes(id_like integer not null auto_increment primary key, 
utente varchar(20),
post integer,
FOREIGN KEY (utente) REFERENCES utente(nome_utente), 
FOREIGN KEY (post) REFERENCES post(id_post));


$conn = mysqli_connect("151.97.9.184", "brancaforte_emanuele", "7156858588", "brancaforte_emanuele");

