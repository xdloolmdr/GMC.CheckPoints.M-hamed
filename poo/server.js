class Fighter {
  name;
  health;
  attack_power;
  constructor(name, health, attack_power) {
    this.name = name;
    this.health = health;
    this.attack_power = attack_power;
  }

  getName() {
    return `${this.name}`;
  }
  getHealth() {
    return `${this.health}`;
  }
  getAttackPower() {
    return `${this.attack_power}`;
  }
  getHit(attack_power) {
    this.health -= attack_power;
  }
  attack(opponent) {
    opponent.getHit(this.attack_power);
  }
  toString() {
    return `${this.name} has health of ${this.health}`;
  }
}

class Warrior extends Fighter {
  DMGReduction = 0.8;
  constructor(name, health, attack_power) {
    super(name, health, attack_power);
  }
  getHit(attack_power) {
    this.health -= attack_power * this.DMGReduction;
  }
}
class Mage extends Fighter {
  constructor(name, health, attack_power) {
    super(name, health, attack_power);
  }
  attack(opponent) {
    opponent.getHit(this.attack_power * 2);
    this.health -= 10;
  }
}
class Referee {
  constructor() {}
  /*startmatch(fighter1, fighter2) {
    if (fighter1 != null && fighter2 != null) {
      console.log("duel");
      let turn = fighter1;
      while (true) {
        if (turn.health <= 0) {
          console.log(turn + "died");
          return;
        }
        const opponent = turn === fighter1 ? fighter2 : fighter1;
        turn.attack(opponent);
        console.log(turn + "attacked opponent" + opponent);
        turn = opponent;
      }
    }
  }*/
  startmatch(fighter1, fighter2) {
    if (fighter1 != null && fighter2 != null) {
      console.log("duel");
      let turn = fighter2;
      while (true) {
        if (turn.health <= 0) {
          console.log(turn + "died");
          return;
        }
        const opponent = turn === fighter2 ? fighter1 : fighter2;
        turn.attack(opponent);
        console.log(turn + "attacked opponent" + opponent);
        turn = opponent;
      }
    }
  }
}

const warrior = new Warrior("Thor", 100, 15);
const mage = new Mage("Gandalf", 80, 20);

const referee = new Referee();
referee.startmatch(warrior, mage);
