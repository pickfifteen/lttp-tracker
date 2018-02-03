var defaultItemGrid = [
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

var itemsInit = {
    bow: false,
    boomerang: 0,
    hookshot: false,
    hammer: false,
    firerod: false,
    glove: 0,
    moonpearl: false,
    sword: 0,
    tunic: 1,
    shield: 0,
    bombos: false,
    ether: false,
    quake: false,
    somaria: false,
    lantern: false,
    flute: false,
    book: false,
    boots: false,
    flippers: false,
    mirror: false,
    shovel: false,
    mushroom: false,
    powder: false,
    bottle:0,
    cape: false,
    icerod: false,
    byrna: false,
    net: false,
    silvers: false,
    mpupgrade: 0,
    bomb: 0,
    heartcontainer: 0,
    heartpiece: 0,

    boss0: 1,
    boss1: 1,
    boss2: 1,
    boss3: 1,
    boss4: 1,
    boss5: 1,
    boss6: 1,
    boss7: 1,
    boss8: 1,
    boss9: 1,
    boss10: 1,
    boss11: 1,

    blank: false
};

var dungeonchestsInit = {
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
    10: 20,
    11: 0
};

var bigkeyInit = [false, false, false, false, false, false, false, false, false, false, false, false];
var smallkeyInit = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var dungeonbeatenInit = [false, false, false, false, false, false, false, false, false, false, false, false];
var prizesInit = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var medallionsInit = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


var itemsMin = {
    sword:0,
    shield:0,
    tunic:1,

    bottle:0,
    boomerang:0,
    glove:0,
    mpupgrade: 0,
    bomb: 0,
    heartcontainer: 0,
    heartpiece: 0,

	boss0: 1,
	boss1: 1,
	boss2: 1,

	boss3: 1,
	boss4: 1,
	boss5: 1,
	boss6: 1,
	boss7: 1,
	boss8: 1,
	boss9: 1,
    boss10: 1,
    boss11: 1
};

var itemsMax = {
    sword:4,
    shield:3,
    tunic:3,

    bottle:4,
    boomerang:3,
    glove:2,
    mpupgrade: 2,
    bomb: 2,
    heartcontainer: 11,
    heartpiece: 24,

	boss0: 2,
	boss1: 2,
	boss2: 2,

	boss3: 2,
	boss4: 2,
	boss5: 2,
	boss6: 2,
	boss7: 2,
	boss8: 2,
	boss9: 2,
    boss10: 2,
    boss11: 2,

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
    chest10: 20,
    chest11: 0,

    key0: 0,
    key1: 1,
    key2: 1,
    key3: 6,
    key4: 1,
    key5: 3,
    key6: 1,
    key7: 2,
    key8: 3,
    key9: 4,
    key10: 4,
    key11: 2
};
