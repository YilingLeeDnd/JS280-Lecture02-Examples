function Pokemon(nationalNo, hp, type, species, height, weight, abilities, localNo, japanese) {
    this.nationalNo = nationalNo;
    this.hp = hp;
    this.type = type;
    this.species = species;
    this.height = height;
    this.weight = weight;
    this.abilities = abilities;
    this.localNo = localNo;
    this.japanese = japanese;
    this.attack = function (other) {
        other.hp -= 20; //攻擊-20
    };
}

var Fushigidane = new Pokemon(
    1,
    1200,
    ["GRASS", "POISON"],
    "Seed Pokémon",
    0.71,
    6.9,
    "Overgrow",
    [1, 226, 231, 80],
    "Fushigidane"
);

var Hitokage = new Pokemon(
    4,
    2000,
    ["FIRE"],
    "Lizard Pokémon",
    0.61,
    8.5,
    ["Blaze"],
    [4, 229, 234, 83],
    "Hitokage"
);

console.log("妙蛙種子hp:" + Fushigidane.hp);//原本妙蛙種子的HP
console.log("小火龍hp:" + Hitokage.hp);//原本小火龍的HP
console.log("小火龍發動攻擊");
Hitokage.attack(Fushigidane);
console.log("妙蛙種子hp:" + Fushigidane.hp);
console.log("小火龍hp:" + Hitokage.hp);
console.log("妙蛙種子發動攻擊");
Fushigidane.attack(Hitokage);
console.log("妙蛙種子hp:" + Fushigidane.hp);
console.log("小火龍hp:" + Hitokage.hp);

