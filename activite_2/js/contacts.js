//Définition du prototype
contact = {
    init: function(nom,prenom) {
        this.nom = nom;
        this.prenom = prenom;
    }
}

//fonction de saisie d'un nouveau contact
function ajouterContact() {
    
    var nouveauContact = Object.create(contact);
    while ((nouveauContact.nom = prompt("Entrez le nom du nouveau contact :")) === "")
        console.log("Nom vide invalide !");
    while ((nouveauContact.prenom = prompt("Entrez le prénom du nouveau contact :")) === "")
        console.log("Prénom vide invalide !");
    nouveauContact.init(nouveauContact.nom, nouveauContact.prenom);
    
    return nouveauContact;
}

//fonction de listing des contacts
function listerContacts() {
    console.log("Voici la liste de tous vos contacts :");
    contacts.forEach(function(contact) { 
        console.log("Nom : " + contact.nom + ", prénom : " + contact.prenom); 
    });
}

// Création des 2 premiers contacts à l'initialisation
var contact1 = Object.create(contact);
contact1.init("Lévisse", "Carole");
var contact2 = Object.create(contact);
contact2.init("Nelsonne", "Mélodie");

// Initialisation du tableau des contacts avec les 2 contacts précédents
var contacts = [contact1,contact2];

var msgBienvenue = "Bienvenue dans le gestionnaire des contacts !\n\
1 : Lister les contacts \n\
2 : Ajouter un contact \n\
0 : Quitter";

console.log(msgBienvenue);

listerContacts();

while ((saisieOption = prompt("Choisissez une option :")) !== '0') {
    switch (saisieOption) {
        case '1':
            listerContacts();
            break;
        case '2': 
            var nouveauContact = ajouterContact();
            contacts.push(nouveauContact);
            console.log("Le contact a bien été ajouté !");
            break;
        default: 
            console.log("choix d'option invalide!");
            console.log(msgBienvenue);
    }
}

console.log("Au revoir");