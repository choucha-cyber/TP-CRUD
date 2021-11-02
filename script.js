/*************************MON STOCK**************/
let myForm= document.querySelector('#myForm');
let nom = document.querySelector('#nom');
let prenom = document.querySelector('#prenom');
let email = document.querySelector('#email');
let password = document.querySelector('#password');

let myInputs = [nom, prenom, email, password];
let btn= document.querySelector('#btn');
let affichage=document.querySelector("#affichage");
let messageErreur = document.querySelector('#messageErreur');


/**************CREATION COMPTE ETUDIANT**************/

function ajoutEtudiant(e){
  
  //alert("OK");  //controle du fonctionnement
if(nom.value =""){
  let messageErreur = document.querySelector('#messageErreur');
  messageErreur.innerHTML = "Votre nom est requis";
  messageErreur.style.color= 'red';
  e.preventDefault();
}else if(prenom.value =""){
  let messageErreur = document.querySelector('#messageErreur');
  messageErreur.innerHTML = "Votre prénom est requis";
  messageErreur.style.color= 'red';
  e.preventDefault();
}else if(email.value =""){
  let messageErreur = document.querySelector('#messageErreur');
  messageErreur.innerHTML = "Votre email est requis";
  messageErreur.style.color= 'red';
  e.preventDefault(); 
}else if(password.value =""){
  let messageErreur = document.querySelector('#messageErreur');
  messageErreur.innerHTML = "Votre mot de passe est requis";
  messageErreur.style.color= 'red';
  e.preventDefault();
}

verif(e);
            
passwordVerif(e);

displayList(e);         
}


function verif(e) {
  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9])+$/;
  e.preventDefault();
  if (!regex.test(email))  {
      
      email.textContent = 'Entrez un email valide';
      email.focus();
      email.style.background = "red";
      //document.querySelector('.error').innerHTML = "Email pas valide";
      
    }
  }


  function passwordVerif(e){
    e.preventDefault();
    let regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})$/;
    if (!regex.test(password))  {
      alert('Entrez un mot de passe valide');
      password.focus();
      password.style.background = "red";
      document.querySelector('.error').innerHTML = "mot de passe non valide";
      return false;
    }
  }
  
  function displayList(e){
    e.preventDefault();
    myForm.addEventListener('submit', function (e){
      
      for (i=0; i<myInputs.lenght; i++){
        affichage.innerHTML = `
            <ul>
                <li> ${nom} + ${prenom} + "est inscrit avec l'identifiant" + ${email} </li> 
            </ul>`;
      }
    })
    }
  

function updateEtudiant(){

}

function deleteEtudiant(){

}


