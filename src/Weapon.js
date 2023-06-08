/*
1. Créé une nouvelle classe `Weapon` dans le dossier *src/*.
2. Celle-ci va correspondre à l'arme dont tu vas équiper les combattants. 
Elle doit avoir un nom et une propriété `damage` initialisée à 10.
3. Pour ajouter l'arme au personnage, dans la classe `Fighter`, 
on crée une propriété `weapon`. Celle-ci sera initialisée à `null`.



> Tout ce calcul pourrait être réalisé directement dans `fight()`, mais l'utilisation de la méthode `getDamage()` permet de simplifier la méthode `fight()` et de déporter la logique de calcul des dommages ailleurs. De plus, il est maintenant possible d'utiliser `getDamage()` indépendamment de `fight()`, ce qui sera utile par la suite.

*/

class Weapon {
    damage;
    name;

    constructor(name, damage = 10) {
        this.name = name;
        this.damage = damage
    }

}

module.exports = Weapon;