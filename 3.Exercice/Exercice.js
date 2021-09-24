// Modifier le tableau d’objets ci-dessous pour modifier le format du numéro de téléphone, créer un type de contact admin et supprimer les doublons :

var contacts = [
   {
       prenom : 'john',
       telephone : '0611223344',
   },
   {
       prenom : 'elise',
       telephone : '0655667799'
   },
   {
       prenom : 'franck',
       telephone : '0612345678'
   },
   {
       prenom : 'elisa',
       telephone : '0612345678'
   }
]

// 1 -  Téléphone

// 👉 Dans ce challenge, il faut modifier les numéros de téléphone afin de les afficher en format international +33612345678.

// 👉 Le résultat doit être un nouveau tableau.


 
for (var i=0 ; i < contacts.length; i++) {
   
    console.log("+33"+contacts[i].telephone);
 
}


// 2 -  Admin

// 👉 Modifiez votre tableau pour créer une nouvelle propriété “admin” pour chaque contact

// Cette propriété doit être à true si le contact est admin, à false sinon.

// 👉 Faire en sorte que John soit admin, les autres non.

// 👉 Le résultat doit être un nouveau tableau.

var tableauContacts = [
    {
        prenom : 'john',
        telephone : '0611223344',
        admin :'oui'
    },
    {
        prenom : 'elise',
        telephone : '0655667799',
        admin :' non'
    },
    {
        prenom : 'franck',
        telephone : '0612345678',
        admin  :'non '
    },
    {
        prenom : 'elisa',
        telephone : '0612345678',
        admin :"non"
    }
 ]

console.log(contacts)

var tableauTOF=[];
for(var contacts of tableauContacts){
    console.log(admin);

    if(contacts.admin=oui){ 
        tableauTOF.
    }

}
