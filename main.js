import { Commentaire } from "./Classes/Commentaire.js";
import { Groupe } from "./Classes/Groupe.js";
import { Utilisateur } from "./Classes/Utilisateur.js";

// Tests
    //! Creation d'utilisateurs
const utilisateur1 = new Utilisateur("Alice");
const utilisateur2 = new Utilisateur("Bob");
    //! Création de groupes
const groupePublic = new Groupe("Voyageurs", false);
const groupePrivé = new Groupe("Investisseurs", true);
    //! Ajout des membres aux groupes
groupePublic.ajouterMembre(utilisateur1);
groupePrivé.ajouterMembre(utilisateur2);

// Scénario réussi : Publication conforme.
try {
    const publication = utilisateur1.publier("Bienvenue  dans mon réseau social !");
    if (publication) {
        console.log(`${utilisateur1.nom} a publié : "${publication.contenu}"`);
    }
    
    // Scénario réussi : commentaire conforme. 
    try {
        const commentaireValide = new Commentaire(utilisateur2, "Super publication !");
        if (publication) {
            publication.ajouterCommentaire(commentaireValide);
            console.log(`${utilisateur2.nom} a commenté : "${commentaireValide.contenu}" sous la publication de ${utilisateur1.nom}`);
        };
    } catch (error) {
        console.error(`Erreur globale : ${error.message}`);
    }

    //! Scénario FAIL : Le commentaire contient un mot interdit
    try {
        const commentaireInsultant = new Commentaire(utilisateur2, "C'est stupide !");
        if (publication) {
            publication.ajouterCommentaire(commentaireInsultant);
            console.log(`${utilisateur2.nom} a commenté : "${commentaireInsultant.contenu}" sous la publication de ${utilisateur1.nom}`);
        };
    } catch (error) {
        console.error(`Erreur globale : ${error.message}`);
    }
} catch (error) {
    console.error(`Erreur globale : ${error.message}`);
}

try {
    //! Scénario FAIL : La publication contient un mot interdit
    const publicationInvalide = utilisateur2.publier("Bienvenue  dans mon réseau social idiot!");
    if (publicationInvalide) {
        console.log(`${utilisateur1.nom} a publié : "${publication.contenu}"`);
    }
} catch (error) {
    console.error(`Erreur globale : ${error.message}`);
}

try {
    //! Scénario FAIL : Amandine est dans un groupe privé 
    // Mais elle essaie quand meme de rejoindre ce groupe donc erreur 
    // vous etes déjà dans ce groupe (ca évite les doublons)
    const amandine38 = new Utilisateur("Amandine du 38");
    groupePrivé.ajouterMembre(amandine38);
    groupePrivé.ajouterMembre(amandine38);
} catch (error) {
    console.error(`Erreur globale : ${error.message}`);
}

try {
    //! Scénario FAIL : on essaie d'afficher  le contenu d'un groupe privé à Charlie
    // Mais charlie n'est pas membre de ce groupe donc erreur
    const justiceLeague = new Groupe("La Justice League", true);
    const charlie = new Utilisateur("Charlie");
    justiceLeague.afficherContenu(charlie); // Cela devrait déclencher l'erreur on affiche pas le contenu privé à charlie
} catch (error) {
    console.error(`Erreur globale : ${error.message}`);
}