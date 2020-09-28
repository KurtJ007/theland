//default settings for testing
var toolEquipped = true;
var playerLocation = {location: "Town1"};
var playerGold = {gold: 5000};
var hikingExp = {num: 0};
var equipedItemType = "axe";
var lvl2Exp = {num: 100};
var woodLvl = 1;
var woodcuttingExp = {num: 0};
var actionStatus = {status: ""};
var inventory = {oak: 0, ash: 0, spruce: 0, regular: 0};
var houseStorageItem = {sword: {name: "steelSword", num: 2, title: "Steel Sword", type: "weapon", path: "images/sword.png"}, helmet: {name: "steelHelmet", num: 1, title: "Steel Helmet", type: "armor", path: "images/helmet.png"}, armor: {name: "ironArmor", num: 5, title: "Iron Armor", type: "armor", path: "images/armor.png"}};
var onlinePlayers = {Town1: ["Bob", "George", "Player1", "Player2"], oakWoods: ["Player3", "Player4", "Player5"], regWoods: ["Player6", "Player7"]};
var allItems = {items: {name: ["steelSword", "ironHammer"], num: [20, 50], title: ["Steel Sword", "Iron Hammer"], type: ["weapon", "tool"], path: ["images/sword.png", "images/hammer.png"], locations: {town1: [10, 20], town2: [10, 20], town3: [0, 10]}}};

var items = {axe: {name: "Gold Axe", type: "weapon", src: "images/axe2.png"}, healthPotion: {name: "Health Potion", type: "consumable", src: "images/potionRed.png"}, steelSword: {name: "Steel Sword", type: "weapon", src: "images/sword.png"}}
var localShopItems = {items: {name: ["Gold Axe", "Health Potion", "Steel Sword"], qty: [2, 5, 3], price: ["1,000", "3,000", "1,500"]}};