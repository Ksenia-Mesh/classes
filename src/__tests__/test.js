import Character from "../js/Character";
import Bowerman from "../js/Bowerman";
import Daemon from "../js/Daemon";
import Magician from "../js/Magician";
import Swordsman from "../js/Swordsman";
import Undead from "../js/Undead";
import Zombie from "../js/Zombie";

test("Test 1", () => {
  expect(() => {
    const result = new Character("Pop", "Noise");
    return result;
  }).toThrow();
});

test("creation Bowerman", () => {
  const recieved = new Bowerman("Kio", "Bowerman");
  expect(recieved).toEqual({
    name: "Kio",
    type: "Bowerman",
    health: 100,
    level: 1,
    attack: 25,
    deffence: 25,
  });
});

test("creation Daemon", () => {
  const recieved = new Daemon("Kio", "Daemon");
  expect(recieved).toEqual({
    name: "Kio",
    type: "Daemon",
    health: 100,
    level: 1,
    attack: 10,
    deffence: 40,
  });
});
test("creation Magician", () => {
  const recieved = new Magician("Kio", "Magician");
  expect(recieved).toEqual({
    name: "Kio",
    type: "Magician",
    health: 100,
    level: 1,
    attack: 10,
    deffence: 40,
  });
});
test("creation Swordsman", () => {
  const recieved = new Swordsman("Tic", "Swordsman");
  expect(recieved).toEqual({
    name: "Tic",
    type: "Swordsman",
    health: 100,
    level: 1,
    attack: 40,
    deffence: 10,
  });
});
test("creation Undead", () => {
  const recieved = new Undead("Nic", "Undead");
  expect(recieved).toEqual({
    name: "Nic",
    type: "Undead",
    health: 100,
    level: 1,
    attack: 25,
    deffence: 25,
  });
});
test("creation Zombie", () => {
  const recieved = new Zombie("Nic", "Zombie");
  expect(recieved).toEqual({
    name: "Nic",
    type: "Zombie",
    health: 100,
    level: 1,
    attack: 40,
    deffence: 10,
  });
});


test("Test 2", () => {
  const recieved = new Magician("Miri", "Magician");
  recieved.recovery();
  expect(recieved).toEqual({
    name: "Miri",
    type: "Magician",
    health: 100,
    level: 2,
    attack: 12,
    deffence: 48,
  });
});

test("Test 3", () => {
  const recieved = new Zombie("Lopi", "Zombie");
  recieved.health = 0;
  expect(() => recieved.recovery()).toThrow(
    "Error"
  );
});


test("Test 4", () => {
  const recieved = new Swordsman("Terry", "Swordsman");
  recieved.health = 0;
  const result = {
    name: "Terry",
    type: "Swordsman",
    health: 0,
    level: 1,
    attack: 40,
    deffence: 10,
  };
  recieved.destruction(10);
  expect(recieved).toEqual(result);
});

test("Test 5", () => {
  const recieved = new Daemon("Tery", "Daemon");
  const expectedHealth = 0;
  recieved.destruction(500);
  recieved.health = 0;

  expect(recieved.health).toEqual(expectedHealth);
});


test("Test 6", () => {
  expect(() => {
    const result = new Character("Y", "Daemon");
    return result;
  }).toThrow();
});

test("test 7", () => {
  expect(() => {
    const result = new Character("Normaniertical", "Swordsman");
    return result;
  }).toThrow();
});

test("Test 8", () => {
  expect(() => {
    const result = new Character(123456789, "Ric");
    return result;
  }).toThrow();
});
