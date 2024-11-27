import { Publication } from "./Publication.js";
import { Utilitaires } from "./Utilitaires.js";

/**
 * Représente l'utilisateur du réseau social.
 * @class
 */
export class Utilisateur {
    /**
     * @constructor
     * @param {string} nom Le nom de l'utilisateur.
     * @param {Publication[]} publications La liste des publications de l'utilisateur.
     * @param {Groupe[]} groupes La liste des groupes auxquels l'utilisateur appartient.
     */
    constructor(nom, publications = [], groupes = []) {
        this.nom = nom,
        this.publications = publications,
        this.groupes = groupes;
    }
    /**
     * @method
     * @param {Publication} contenu La publication que l'utilisateur essaie de créer. 
     */
    publier(contenu){
        if(Utilitaires.censure(contenu)){
            const post = new Publication(this, contenu);
            return post;
        }
        else {
            throw new Error("Cette publication contient un mot interdit")
        }
    }
}