
import Character from "./Character";

export default function Bowerman(name, type) {
  Character.call(this, name, type);
  this.attack = 25;
  this.deffence = 25;
}

Bowerman.prototype = Object.create(Character.prototype);
Bowerman.prototype.constructor = Bowerman;