let defaultItemGrid = [
    [
        "bow",
        "hookshot",
        "hammer",
        "firerod",
        "glove",
        "moonpearl",
    ],
    [
        "somaria",
        "lantern",
        "flute",
        "book",
        "boots",
        "flippers",
        "mirror",
    ],
    [
        "sword",
        "tunic",
        "shield",
        "blank",
        "bombos",
        "ether",
        "quake",
    ],
    [
        "shovel",
        "mushroom",
        "powder",
        "bottle",
        "cape",
        "icerod",
        "silvers",
    ],
    [
        "boss3",
        "boss4",
        "boss5",
        "boss6",
        "boss7",
        "boss8",
        "boss9",
    ],
    [
        "blank",
        "boss0",
        "boss1",
        "boss2",
        "agahnim",
        "blank",
    ],
];

let itemsInit = {
    bowarrows: 0,
    boomerang: 0,
    hookshot: false,
    bomb: 0,
    mushroompowder: 0,
    sword: 0,
    boots: false,
    bow: false,
    silvers: false,
    boss0: 1,

    firerod: false,
    icerod: false,
    bombos: false,
    ether: false,
    quake: false,
    shield: 0,
    glove: 0,
    mushroom: false,
    powder: false,
    boss1: 1,

    lantern: false,
    hammer: false,
    shovelflute: 0,
    net: false,
    book: false,
    tunic: 1,
    flippers: false,
    shovel: false,
    flute: false,
    boss2: 1,

    bottle: 0,
    somaria: false,
    byrna: false,
    cape: false,
    mirror: false,
    mpupgrade: 0,
    moonpearl: false,
    heartcontainer: 0,
    heartpiece: 0,
    agahnim: 0,

    boss3: 1,
    boss4: 1,
    boss5: 1,
    boss6: 1,
    boss7: 1,
    boss8: 1,
    boss9: 1,
    boss10: 1,
    blank: false
};

let dungeonchestsInit = {
    0: 3,
    1: 2,
    2: 2,
    3: 5,
    4: 6,
    5: 2,
    6: 4,
    7: 3,
    8: 2,
    9: 5,
    10: 20
};


let dungeonbeatenInit = [false, false, false, false, false, false, false, false, false, false, false];
let prizesInit = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let medallionsInit = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


let itemsMin = {
    sword: 0,
    shield: 0,
    tunic: 1,

    bottle: 0,
    boomerang: 0,
    glove: 0,
    mpupgrade: 0,
    bomb: 0,
    heartcontainer: 0,
    heartpiece: 0,

    bowarrows: 0,
    shovelflute: 0,
    mushroompowder: 0,

    boss0: 1,
    boss1: 1,
    boss2: 1,

    agahnim: 0,

    boss3: 1,
    boss4: 1,
    boss5: 1,
    boss6: 1,
    boss7: 1,
    boss8: 1,
    boss9: 1,
    boss10: 1
};

let itemsMax = {
    sword: 4,
    shield: 3,
    tunic: 3,

    bottle: 4,
    boomerang: 3,
    glove: 2,
    mpupgrade: 2,
    bomb: 2,
    heartcontainer: 11,
    heartpiece: 24,

    bowarrows: 3,
    shovelflute: 3,
    mushroompowder: 3,

    boss0: 2,
    boss1: 2,
    boss2: 2,

    agahnim: 1,

    boss3: 2,
    boss4: 2,
    boss5: 2,
    boss6: 2,
    boss7: 2,
    boss8: 2,
    boss9: 2,
    boss10: 2,

    chest0: 3,
    chest1: 2,
    chest2: 2,
    chest3: 5,
    chest4: 6,
    chest5: 2,
    chest6: 4,
    chest7: 3,
    chest8: 2,
    chest9: 5,
    chest10: 20
};
