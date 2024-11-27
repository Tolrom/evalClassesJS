import { Utilisateur } from "./Utilisateur.js";

/**
 * Représente un commentaire sous une publication du réseau social.
 * @class
 */
export class Commentaire {
    /**
     * @constructor
     * @param {Utilisateur} auteur L'utilisateur ayant écrit le commentaire.
     * @param {string} contenu Le contenu du commentaire posté.
     */
    constructor(auteur, contenu) {
        this.auteur = auteur,
        this.contenu = contenu;
    }
}