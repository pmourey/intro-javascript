//Définition du prototype du contact
contact = {
    // Initialisation du contact
    init: function (nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    },

    // Renvoie le nom et prénom du contact
    afficher: function () {
        var description = "Nom : " + this.nom.toUpperCase() + ", prénom : " + this.prenom + "\n";
        return description;
    }
};

// fonction pour tester la validité de saisie du nom ou prénom
function estAlpha(chaine) {
    var regex = /^[a-zA-Z]+[a-zA-Z àéèêëîùç\- \']*$/;
    if (regex.test(chaine))
        return true;
    else
        return false;
}

//fonction de saisie d'un nouveau contact
function ajouterContact() {

    var nouveauContact = Object.create(contact);
    var saisieNomValide = false;
    var saisiePrenomValide = false;
    var errMsgVide = "Nom vide invalide !";
    var errMsgNom = "Nom invalide ! (Caractères autorisés: 'a-z', 'A-Z', '-', ''', 'àéèêëîùç' ou 'Espace' et doit commencer par une lettre)";
    var errMsgPrenom = "Prénom invalide ! (Caractères autorisés: 'a-z', 'A-Z', '-', ''', 'àéèêëîùç' ou 'Espace' et doit commencer par une lettre)";

    while (!saisieNomValide) {
        nouveauContact.nom = prompt("Entrez le nom du nouveau contact :");
        if (nouveauContact.nom === null)
            return null;
        else if (nouveauContact.nom === "")
            console.log(errMsgVide);
        else if (!estAlpha(nouveauContact.nom))
            console.log("'" + nouveauContact.nom + "'" + " : " + errMsgNom);
        else
            saisieNomValide = true;
    }
    while (!saisiePrenomValide) {
        nouveauContact.prenom = prompt("Entrez le prénom du nouveau contact :");
        if (nouveauContact.prenom === null)
            return null;
        else if (nouveauContact.prenom === "" || nouveauContact.prenom === null)
            console.log(errMsgVide);
        else if (!estAlpha(nouveauContact.prenom))
            console.log("'" + nouveauContact.prenom + "'" + " : " + errMsgPrenom);
        else
            saisiePrenomValide = true;
    }
    nouveauContact.init(nouveauContact.nom, nouveauContact.prenom);

    return nouveauContact;
}

//fonction de listing des contacts
function listerContacts() {
    var liste = "Voici la liste de tous vos contacts :\n";
    contacts.forEach(function (contact) {
        liste += contact.afficher();
    });
    console.log(liste);
}



// Création des 2 premiers contacts à l'initialisation
var contact1 = Object.create(contact);
contact1.init("Lévisse", "Carole");
var contact2 = Object.create(contact);
contact2.init("Nelsonne", "Mélodie");

// Initialisation du tableau des contacts avec les 2 contacts précédents
var contacts = [contact1, contact2];

var menu = "1 : Lister les contacts \n\
2 : Ajouter un contact \n\
0 : Quitter";

console.log("Bienvenue dans le gestionnaire des contacts !");
console.log(menu);

listerContacts();

var saisieOptionValide = false;
var quitter = false;

while (!saisieOptionValide && !quitter) {
    saisieOption = prompt("Choisissez une option :");
    switch (saisieOption) {
        case '1':
            listerContacts();
            console.log(menu);
            break;
        case '2':
            var nouveauContact = ajouterContact();
            if (nouveauContact !== null) {
                contacts.push(nouveauContact);
                console.log("Le contact a bien été ajouté !");
            }
            else
                console.log("Opération d'ajout annulée !");
            console.log(menu);
            break;
        case '0':
            quitter = true;
            break;
        case null:
            quitter = true;
            break;
        default:
            console.log("'" + saisieOption + "'" + " : " + "choix d'option invalide !");
            console.log(menu);
    }
}

console.log("Au revoir !");
