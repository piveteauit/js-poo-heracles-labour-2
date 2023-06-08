const Fighter = require("./src/Fighter.js");
const Shield = require("./src/Shield.js");
const Weapon = require("./src/Weapon.js");

/*
4. Dans le fichier *index.js*, instancie un objet de type `Weapon` 
avec le nom "Épée", un dommage de 10. Ensuite associe-le à Héraclès.
 */
const heraclesWeapon = new Weapon("Épée", 10)
const heraclesShield = new Shield(5);
/** Create Heracles  */
const heracles = new Fighter("🧔 Heracles", 20, 6);
heracles.weapon = heraclesWeapon;
heracles.shield = heraclesShield;

/** Create the opponent  */
const boar = new Fighter("🐗 Erymanthian Boar", 25, 12);

/**
 * Helper to produce the result of a round
 */
const roundDisplay = (fighter1, fighter2) => {
  return `${fighter1.name} 🗡️  ${fighter2.name} 💙 ${fighter2.name} : ${fighter2.life}`;
};

/**
 * Helper to dispatch fighters between winner and loser
 */
const score = (fighter1, fighter2) => {
  return fighter1.isAlive() ? {
    winner: fighter1,
    loser: fighter2,
  } : {
    winner: fighter2,
    loser: fighter1
  };
};

while (heracles.isAlive() && boar.isAlive()) {
    console.log(roundDisplay(heracles, boar))
    heracles.fight(boar);
    boar.fight(heracles);
}

console.log(score(heracles, boar))