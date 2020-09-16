/*$(document).ready(function(){
    $('.button').click(function(){
        $('.navigation').toggleClass('isOpen');
    });
}); */


//évènement clic bouton
//const elt = document.getElementsByTagName('button');    // On récupère l'élément sur lequel on veut détecter le clic
//elt.addEventListener('click', function() {          // On écoute l'événement click
//    elt.innerHTML = "C'est cliqué !";               // On change le contenu de notre élément pour afficher "C'est cliqué !"
//});

//lors clic sur le lien, envoyer vers la page en séléctionnant l'ours choisi
//const elt = document.getElementById('a');           // On récupère l'élément sur lequel on veut détecter le clic
//elt.addEventListener('click', function() {          // On écoute l'événement click
//    elt.innerHTML = "C'est cliqué !";               // On change le contenu de notre élément pour afficher "C'est cliqué !"
//});



//VARIABLES//
class Teddy{
    constructor (name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
    }
}
let maroon = new Teddy(
    "maroon", "", 129,
); 
let white = new Teddy(
    "white", "Don't want to hear about it, Every single one's got a story to tell, Everyone knows about it, From the Queen of England to Me", 89,
); 
let poetic = new Teddy(
    "poetic", "L'amour ", 139,
);  
let fool = new Teddy(
    "fool", "", 109,
);  
let odyssey = new Teddy(
    "odyssey", "", 119,
); 

console.log(maroon);
console.log(white);
console.log(poetic);
console.log(fool);
console.log(odyssey);

/*pour accéder aux données (ex pour le name), ecrire let maroonName = maroon.name;

/*let prenom="albert", nom="einstein";
*let quantity =  ; 
*let totalMaroonPrice =  ; 
*let totalWhitePrice =  ; 
*let totaPoeticPrice =  ; 
*let totalFoolPrice =  ; 
*let totalOdysseyPrice =  ; 
*let value = "euros" ; 
*let finalMaroonPrice = totalMaroonPrice + value; 
*let finalWhitePrice = totalWhitePrice + value; 
*let finalPoeticPrice = totaPoeticPrice + value; 
*let finalFoolPrice = totalFoolPrice + value; 
*let finalOdysseyPrice = totalOdysseyPrice + value; 
*let   =  ; 
// let  =  ; */


//EVENTUELLES CONSTANTES//
// let const  =  ; //
// let const  =  ; //
// let const  =  ; //
// let const  =  ; //
// let const  =  ; //
// let const  =  ; //
// let const  =  ; //
// let const  =  ; //
// let const  =  ; //
// let const  =  ; //
// let const  =  ; //


//FONCTIONS//
// function prixTotal (){    return nombre * prix;   } //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //

//MAP DES EVENEMENTS : //
// Index : 
// au clic sur panier, envoie sur page panier   //
// au clic sur  //
// //
// //
// //
// //
// Produit : //
// lors choix de la couleur, affiche l'image correspondante //
// lors clic sur ajouter au panier, ajoute un ours au panier et reste sur la page //
// lors clic sur +, ajoute un ours au panier en restant sur la page //
// lors clic sur -, enlève un ours au panier en restant sur la page //
// //
// //
// //
// //
// //
// Panier : //
// //
// //
// //
// //
// //
// //
// Commande : //
// //
// //
// //


/*Point sur les addEventListener//
* écouter les évènements

/*Qu'est ce que les XHR */
