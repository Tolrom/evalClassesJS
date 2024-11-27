import { Commentaire } from "./Commentaire.js";
import { Utilisateur } from "./Utilisateur.js";
import { Utilitaires } from "./Utilitaires.js";

/**
 * Représente une publication sur le réseau social.
 * @class
 */
export class Publication {
    /**
     * @constructor
     * @param {Utilisateur} auteur L'auteur de la publication.
     * @param {string} contenu Le contenu textuel de la publication.
     * @param {Commentaire[]} commentaires Les commentaires liés à la publication.
     */
    constructor(auteur, contenu, commentaires = []) {
        this.auteur = auteur,
        this.contenu = contenu,
        this.commentaires = commentaires;
    }
    /**
     * Méthode permettant l'ajout d'un commentaire à une publication.
     * @method
     * @param {Commentaire} commentaire Le commentaire appartenant à la publication.
     */
    ajouterCommentaire(commentaire){
        if(Utilitaires.censure(commentaire.contenu)){
            this.commentaires.push(commentaire);
        }
        else {
            throw new Error("Ce message contient au moins un mot interdit");
        }
    }
}