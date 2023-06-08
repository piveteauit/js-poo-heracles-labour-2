const MAX_LIFE = 100;

class Fighter {
    name;
    strength;
    dexterity;
    life;
    weapon;
    shield;

    constructor(name, strength, dexterity) {
        this.name = name;
        this.strength = strength;
        this.dexterity = dexterity;
        this.life = MAX_LIFE;
        this.shield = null;
        this.weapon = null;
    }




    // Launch a fight
    fight(defender) {
        defender.life = Math.max(defender.life - this.getDamage(defender), 0);
    }

    getDamage(defender) {
        const attackPoints = this.getRandomInt(this.strength);
        const damages = Math.max(attackPoints - defender.getDefense(), 0);
        return (this.weapon)
            ? damages + this.weapon.damage
            : damages
    }

    getDefense() {
        return this.shield
            ? this.shield.protection + this.dexterity
            : this.dexterity;
    }

    // Generate a random value between 1 and max
    getRandomInt(max) {
        return 1 + Math.floor(Math.random() * max);
    }


    // Determine if a fighter is still alive
    isAlive() {
        return this.life > 0;
    }
}

module.exports = Fighter;
