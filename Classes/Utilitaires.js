/**
 * Classe répertoriant des méthodes utilitaires.
 * @class
 */
export class Utilitaires {
    constructor() {}
    /**
     * Méthode statique renvoyant false en cas de correspondance avec les caractères ou mots à identifier.
     * @param {string} contenu Le contenu à vérifier.
     */
    static censure(contenu){
        const censor = ['idiot', 'stupide', 'fck', 'fcked'];
        const match = censor.some(r => contenu.includes(r));
        return !match;
    }
}