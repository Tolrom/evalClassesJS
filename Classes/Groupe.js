import { Utilisateur } from "./Utilisateur.js";

/**
 * Représente un groupe d'utilisateurs sur le réseau social.
 * @class
 */
export class Groupe {
    /**
     * @constructor
     * @param {string} nom Le nom du groupe.
     * @param {boolean} prive Définit si le groupe est privé ou public.
     * @param {Utilisateur[]} membres La liste des membres du groupe.
     */
    constructor(nom, prive, membres = []) {
        this.nom = nom,
        this.prive = prive,
        this.membres = membres;
    }
    /**
     * Méthode permettant l'ajout d'un membre au groupe.
     * @method
     * @param {Utilisateur} utilisateur 
     */  
    ajouterMembre(utilisateur){
        if(this.membres.includes(utilisateur)){
            throw new Error(`${utilisateur.nom} déjà présent.e dans le groupe!`);
        }
        this.membres.push(utilisateur);
    }
    /**
     * Méthode vérifiant l'appartenance de l'utilisateur au groupe pour définir s'il est autorisé à acceder au contenu d'un groupe privé.
     * @method
     * @param {Utilisateur} utilisateur 
     */
    afficherContenu(utilisateur){
        if (this.prive) {
            if(!this.membres.includes(utilisateur)){
                throw new Error(`${utilisateur.nom}, vous n'avez pas l'autorisation d'accéder à ce contenu!`)
            }
            return true;
        }
        return true;
    }
}