//default settings for testing
var toolEquipped = true;
var lvl2Exp = {num: 100};
var lvl2HikingExp = {num: 100};
playerLocation = '';
hikingExp = '';
equipedItemType = '';
woodLvl = '';
hikingLvl = '';
woodcuttingExp = '';
actionStatus = '';
inventory = '';
houseStorageItem = '';
onlinePlayers = '';
allItems = '';
items = '';
localShopItems = '';
playerGold = '';
inventoryItems = '';
droppedItems = '';
equipment = '';
nextLvlExp = '';

localStorage.clear();
if(localStorage.length <= 0){
    localStorage.setItem("playerGold", JSON.stringify({gold: 5000}));
    localStorage.setItem("playerLocation", JSON.stringify({location: "Town1"}));
    localStorage.setItem("equipedItemType", "axe");
    localStorage.setItem("woodLvl", JSON.stringify({num: 1}));
    localStorage.setItem("hikingLvl", JSON.stringify({num: 1}));
    localStorage.setItem("woodcuttingExp", JSON.stringify({num: 0}));
    localStorage.setItem("hikingExp", JSON.stringify({num: 0}));
    localStorage.setItem("actionStatus", JSON.stringify({status: ""}));
    localStorage.setItem("inventory", JSON.stringify({oak: 0, ash: 0, spruce: 0, regular: 0}));
    localStorage.setItem("houseStorageItem", JSON.stringify({sword: {name: "steelSword", num: 2, title: "Steel Sword", type: "weapon", path: "images/sword.png"}, helmet: {name: "steelHelmet", num: 1, title: "Steel Helmet", type: "armor", path: "images/helmet.png"}, armor: {name: "ironArmor", num: 5, title: "Iron Armor", type: "armor", path: "images/armor.png"}}));
    localStorage.setItem("onlinePlayers", JSON.stringify({Town1: ["Bob", "George", "Player1", "Player2"], oakWoods: ["Player3", "Player4", "Player5"], regWoods1: ["Player6", "Player7"]}));
    localStorage.setItem("allItems", JSON.stringify({items: {name: ["steelSword", "ironHammer"], num: [20, 50], title: ["Steel Sword", "Iron Hammer"], type: ["weapons", "tools"], path: ["images/sword.png", "images/hammer.png"], locations: {town1: [10, 20], town2: [10, 20], town3: [0, 10]}}}));
    localStorage.setItem("items", JSON.stringify({axe: {name: "Gold Axe", type: "weapon", src: "images/axe2.png"}, healthPotion: {name: "Health Potion", type: "consumable", src: "images/potionRed.png"}, steelSword: {name: "Steel Sword", type: "weapon", src: "images/sword.png"}}));
    localStorage.setItem("localShopItems", JSON.stringify({items: {name: ["Gold Axe", "Health Potion", "Steel Sword"], qty: [2, 5, 3], price: ["1,000", "3,000", "1,500"]}}));
    localStorage.setItem("inventoryItems", JSON.stringify({items: {name: ["Double Axe", "Iron Armor", "Steel Axe", "Steel Bow", "Iron Dagger", "Iron Hammer", "Steel Helmet", "Iron Shield", "Small Shield", "Steel Sword", "Magic Wand"], qty: [1,1,3,1,1,2,1,1,1,1,1], type: ["weapon", "armor", "tool", "weapon", "weapon", "tool", "helmet", "shield", "shield", "weapon", "weapon"], class: ["equipable", "equipable", "equipable", "equipable", "equipable", "equipable", "equipable", "equipable", "equipable", "equipable", "equipable"], src: ["images/axeDouble.png", "images/armor.png", "images/axe.png", "images/bow.png", "images/dagger.png", "images/hammer.png", "images/helmet.png", "images/shieldLarge.png", "images/shieldSmall.png", "images/sword.png", "images/wand.png"], index: [1,2,3,4,5,6,7,8,9,10,11]}}));
    localStorage.setItem("droppedItems", JSON.stringify({items: {name: ["Double Axe", "Iron Armor", "Steel Axe", "Steel Bow", "Iron Dagger", "Magic Wand"], qty: [1,1,1,1,1,8], type: ["weapon", "armor", "weapon", "weapon", "weapon", "weapon"], src: ["images/axeDouble.png", "images/armor.png", "images/axe.png", "images/bow.png", "images/dagger.png", "images/wand.png"]}}));
    localStorage.setItem("equipment", JSON.stringify({slot: {helmet: {name: "", type: "", src: ""}, righthand: {name: "", type: "", src: ""}, armor: {name: "", type: "", src: ""}, lefthand: {name: "", type: "", src: ""}, shield: {name: "", type: "", src: ""}, legs: {name: "", type: "", src: ""}, weapon: {name: "", type: "", src: ""}, belt: {name: "", type: "", src: ""}, feet: {name: "", type: "", src: ""}, ring: {name: "", type: "", src: ""}}}));
    localStorage.setItem("nextLvlExp", JSON.stringify({hiking: 100, woodcutting: 100, playerLevel: 100}));
}

$(document).ready(function(){
    playerGold = JSON.parse(localStorage.getItem('playerGold'));
    playerLocation = JSON.parse(localStorage.getItem('playerLocation'));
    hikingExp = JSON.parse(localStorage.getItem('hikingExp'));
    equipedItemType = localStorage.getItem('equipedItemType');
    woodLvl = JSON.parse(localStorage.getItem('woodLvl'));
    hikingLvl = JSON.parse(localStorage.getItem('hikingLvl'));
    woodcuttingExp = JSON.parse(localStorage.getItem('woodcuttingExp'));
    actionStatus = JSON.parse(localStorage.getItem('actionStatus'));
    inventory = JSON.parse(localStorage.getItem('inventory'));
    houseStorageItem = JSON.parse(localStorage.getItem('houseStorageItem'));
    onlinePlayers = JSON.parse(localStorage.getItem('onlinePlayers'));
    allItems = JSON.parse(localStorage.getItem('allItems'));
    items = JSON.parse(localStorage.getItem('items'));
    localShopItems = JSON.parse(localStorage.getItem('localShopItems'));
    inventoryItems = JSON.parse(localStorage.getItem('inventoryItems'));
    droppedItems = JSON.parse(localStorage.getItem('droppedItems'));
    equipment = JSON.parse(localStorage.getItem('equipment'));
    nextLvlExp = JSON.parse(localStorage.getItem('nextLvlExp'));
    
    //item display testing
    if($('#itemTableBody').length){

        var array = [];
        $('.parent').each(function(){
            array.push($(this).attr('aria-labeledby'));
        })

        for(var i = 1; i < array.length; i++){
            if(Object.values(allItems.items.type).indexOf(array[i]) <= -1)
            {
                $(`#${array[i]}`).attr('aria-disabled', 'true');
            }
        }

        var html = "";
        var activeIds = $('ul.list-inline').find('[aria-selected="true"]').attr('aria-labeledby');

        if(activeIds == "all"){
            for (var prop in allItems.items.name){
                
                html += `<tr class='parent' id='${allItems.items.name[prop]}'>`;
                html += `<td><div class='itemList'><span class='plusminus-${allItems.items.name[prop]}' id='span1'>+</span><img src='${allItems.items.path[prop]}'> ${allItems.items.title[prop]}</div></td>`;
                html += `<td>${allItems.items.num[prop]}</td>`
                html += `<tr class='child-${allItems.items.name[prop]} toggle-hidden' id='display-hidden'>`;
                html += `<td style='padding-top: 0;' colspan='2'>`;
                html += `<table class='table table-sm table-bordered fontColor'>`;
                html += `<thead><th>Location</th><th>Quantity</th></thead><tbody>`;
                

                    for(var prop2 in allItems.items.locations){
                        if(allItems.items.locations[prop2][prop] != 0)
                            html += `<tr><td>${prop2}</td><td>${allItems.items.locations[prop2][prop]}</td></tr>`;
                    }
                    html += `</tbody></table></td></tr></tr>`;
            }
            $('#itemTableBody').html(html);
        }else{
            for (var prop in allItems.items.name){
                if(allItems.items.type[prop] == activeIds){
                    html += `<tr class='parent' id='${allItems.items.name[prop]}'>`;
                    html += `<td><div class='itemList'><span class='plusminus-${allItems.items.name[prop]}' id='span1'>+</span><img src='${allItems.items.path[prop]}'> ${allItems.items.title[prop]}</div></td>`;
                    html += `<td>${allItems.items.num[prop]}</td>`
                    html += `<tr class='child-${allItems.items.name[prop]} toggle-hidden' id='display-hidden'>`;
                    html += `<td style='padding-top: 0;' colspan='2'>`;
                    html += `<table class='table table-sm table-bordered fontColor'>`;
                    html += `<thead><th>Location</th><th>Quantity</th></thead><tbody>`;
                    
                        for(var prop2 in allItems.items.locations){
                            if(allItems.items.locations[prop2][prop] != 0)
                                html += `<tr><td>${prop2}</td><td>${allItems.items.locations[prop2][prop]}</td></tr>`;
                        }
                        html += `</tbody></table></td></tr></tr>`;
                }
            }
            $('#itemTableBody').html(html);
        }

        $('li.parent').on('click',function () {
            html = "";
            var id = $(this).children().attr('id');
            var disabledAttr = $(this).children().attr('aria-disabled');

            if(disabledAttr != "true"){
                if(id == "all"){
                    for (var prop in allItems.items.name){
                        html += `<tr class='parent' id='${allItems.items.name[prop]}'>`;
                        html += `<td><div class='itemList'><span class='plusminus-${allItems.items.name[prop]}' id='span1'>+</span><img src='${allItems.items.path[prop]}'> ${allItems.items.title[prop]}</div></td>`;
                        html += `<td>${allItems.items.num[prop]}</td>`
                        html += `<tr class='child-${allItems.items.name[prop]} toggle-hidden' id='display-hidden'>`;
                        html += `<td style='padding-top: 0;' colspan='2'>`;
                        html += `<table class='table table-sm table-bordered fontColor'>`;
                        html += `<thead><th>Location</th><th>Quantity</th></thead><tbody>`;
                        
    
                            for(var prop2 in allItems.items.locations){
                                if(allItems.items.locations[prop2][prop] != 0)
                                    html += `<tr><td>${prop2}</td><td>${allItems.items.locations[prop2][prop]}</td></tr>`;
                            }
                            html += `</tbody></table></td></tr></tr>`;
                    }
                    $('#itemTableBody').html(html);
                }else{
                    for (var prop in allItems.items.name){
                        if(allItems.items.type[prop] == id){
                            html += `<tr class='parent' id='${allItems.items.name[prop]}'>`;
                            html += `<td><div class='itemList'><span class='plusminus-${allItems.items.name[prop]}' id='span1'>+</span><img src='${allItems.items.path[prop]}'> ${allItems.items.title[prop]}</div></td>`;
                            html += `<td>${allItems.items.num[prop]}</td>`
                            html += `<tr class='child-${allItems.items.name[prop]} toggle-hidden' id='display-hidden'>`;
                            html += `<td style='padding-top: 0;' colspan='2'>`;
                            html += `<table class='table table-sm table-bordered fontColor'>`;
                            html += `<thead><th>Location</th><th>Quantity</th></thead><tbody>`;
                            
    
                                for(var prop2 in allItems.items.locations){
                                    if(allItems.items.locations[prop2][prop] != 0)
                                        html += `<tr><td>${prop2}</td><td>${allItems.items.locations[prop2][prop]}</td></tr>`;
                                }
                                html += `</tbody></table></td></tr></tr>`;
                        }
                    }
                    $('#itemTableBody').html(html);
                }
                displayItemData();
            }
        });
        
       
    }
    //end item display testing

    //Begin Inventory display
    if($('#inventory').length){
        var html = "";
        for (var i=0; i<inventoryItems.items.name.length; i++){
            html += `<div class="items inv ${inventoryItems.items.class[i]}" item-type='${inventoryItems.items.type[i]}'><img title="${inventoryItems.items.name[i]}" src="${inventoryItems.items.src[i]}"><span class="inventoryCount" aria-hidden="false">${inventoryItems.items.qty[i]}</span></div>`;
        }
        $('#inventory').html(html);
    }
    //end inventory display


    //begin dropped items Display
    if($('#droppedItems').length){
        var html = "";
        for(var i=0; i<droppedItems.items.name.length; i++){
            html += `<div class="items dropped equipable" item-type="${droppedItems.items.type[i]}"><img title="${droppedItems.items.name[i]}" src="${droppedItems.items.src[i]}"><span class="inventoryCount" aria-hidden="false">${droppedItems.items.qty[i]}</span></div>`;
        }
        $('#droppedItems').html(html);
    }

    //begin equipment display
    if($('#equipment').length){
        var html = "";
        //for(var i=0; i<droppedItems.items.name.length; i++){
            //html += `<div class="items dropped equipable" item-type="${droppedItems.items.type[i]}"><img title="${droppedItems.items.name[i]}" src="${droppedItems.items.src[i]}"><span class="inventoryCount" aria-hidden="false">${droppedItems.items.qty[i]}</span></div>`;
        //}
        for(var key in equipment.slot){
            if(equipment.slot[key].name != ''){
                $(`#${key}`).html(`<div class="items equipable equip" item-type="${equipment.slot[key].type}"><img title="${equipment.slot[key].name}" src="${equipment.slot[key].src}"><span class="inventoryCount" aria-hidden="true">1</span></div>`);
                $(`#${key}`).css('background-image', 'url("")');
            }    
        }
    }

    
    //displaying local shop table
    if($("#localShopTableBody").length)
    {
        var text = "";
        var i = 0;
        for(var key in localShopItems.items)
        {
            text += `<tr id="shopItem-${i}">
                            <td id="shopItemName-${i}" class="columnWidth">${localShopItems.items.name[i]}</td>
                            <td id="shopItemPrice-${i}" class="columnWidth">${localShopItems.items.price[i]}</td>
                            <td class="columnWidth">
                                <input class="shopInput" id="shopBuyItem-${i}" type="text"> 
                                <button class="btn-success" type="button" onclick="buyLocal(${i});">Buy</button>
                            </td>
                </tr>`;
               i++;   
        }
        $('#localShopTableBody').append(text);
        
    }

    fillOptionsToSell();
    //test on displaying items in inventory to sell
    $('#inventoryItems').on('click', function(){
        fillOptionsToSell();
    });
    
    $('#inventoryItems').change(function(){
        var selectedOption = $('#inventoryItems').find(":selected").val();
        $('#selectedOption').text(selectedOption);
        $('#shopSellItem').attr('aria-hidden', 'false');
        $('#shopSellBtn').attr('aria-hidden', 'false');
    });
    
    //end inventory to sell

    //display player gold
    if($("#player_money").length){
        
        $("#player_money").text(playerGold.gold);
    }

    loadOnlinePlayers();
    

    $("#events").click(function() {
        $("#actionScreen").load("events.php");
    });

   $("#home").on('click', function() {
        $("#actionScreen").load("home.php");
    });
    
    $("#items").click(function() {
        $("#actionScreen").load("items.php");
    });

    $("#clans").click(function() {
        $("#actionScreen").load("clans.php");
    });
    
    //check if a tool is equiped and assign the type of tool
    if($('#lefthand').find('.items').attr('item-type')){
        equipedItemType = $('#lefthand').find('.items').attr('tool-type');
        toolEquipped = true;
    }

    //moving items from inventory to equiped
    $("#inventory").on('click', '.items', function(){
        var $this = $(this);
        var movingItemName = $this.children('img').attr('title');
        //find location of item in array
        var itemIndex = inventoryItems.items.name.findIndex(function(name){
            return name == movingItemName;
        });
        var qty = inventoryItems.items.qty[itemIndex];//qty of item in inventory being equipped
        var src = inventoryItems.items.src[itemIndex];//src of item in inventory being equipped
        var itemType = inventoryItems.items.type[itemIndex]; //type of item in inventory being equipped

        if($this.hasClass('equipable')){
            if(actionStatus.status != "working")
            {
                if($this.hasClass('inv')){
                    //if equiping a tool
                    if(itemType == 'tool'){
                        //if left hand empty
                        if($('#lefthand').html() == ''){
                            if(qty > 1){// more than 1 item in inventory
                                
                                //change qty of amount in inventory
                                inventoryItems.items.qty[itemIndex] = qty - 1;
                                localStorage.setItem("inventoryItems", JSON.stringify(inventoryItems));
                                
                                //add item to equipped slot
                                equipment.slot['lefthand'].name = movingItemName;
                                equipment.slot['lefthand'].type = itemType;
                                equipment.slot['lefthand'].src = src;
                                localStorage.setItem("equipment", JSON.stringify(equipment));
                            }else{
                                for (var key in inventoryItems.items){
                                    inventoryItems.items[key].splice(itemIndex, 1);
                                }
                                localStorage.setItem("inventoryItems", JSON.stringify(inventoryItems));

                                equipment.slot['lefthand'].name = movingItemName;
                                equipment.slot['lefthand'].type = itemType;
                                equipment.slot['lefthand'].src = src;
                                localStorage.setItem("equipment", JSON.stringify(equipment));
                            }
                            equipedItemType = $('#lefthand').find('.items').attr('tool-type');
                            $('#lefthand').css('background-image', 'url("")');
                            toolEquipped = true;
                        }else{//if left hand has tool
                            var equipedItem = $('#lefthand div');
                            var equipItemName = equipment.slot["lefthand"].name;

                            var equippedIndex = inventoryItems.items.name.findIndex(function(name){
                                return name == equipItemName;
                            });

                            if(equippedIndex != -1){//equipped item is in inventory
                                if(equipItemName == movingItemName){//do nothing
                                    console.log('trying to move same item - do nothing');
                                }else{
                                    if(qty > 1){
                                        //change qty of amount in inventory
                                        inventoryItems.items.qty[itemIndex] -= 1;//change qty of item leaving inventory
                                        inventoryItems.items.qty[equippedIndex] += 1;//change qty of item going into inventory
                                        for(var i=0; i<inventoryItems.items.name.length; i++){
                                            inventoryItems.items.index[i] = i+1;
                                        }//change index number of all InventoryItems

                                        localStorage.setItem("inventoryItems", JSON.stringify(inventoryItems));
                                        //add item to equipped slot
                                        equipment.slot['lefthand'].name = movingItemName;
                                        equipment.slot['lefthand'].type = itemType;
                                        equipment.slot['lefthand'].src = src;
                                        localStorage.setItem("equipment", JSON.stringify(equipment));
                                    }else{
                                        for (var key in inventoryItems.items){
                                            inventoryItems.items[key].splice(itemIndex, 1);
                                        }//remove item being moved from inventory
                                        
                                        inventoryItems.items.qty[equippedIndex] += 1;//update qty of item going into inventory
                                        for(var i=0; i<inventoryItems.items.name.length; i++){
                                            inventoryItems.items.index[i] = i+1;
                                        }//change index number of all InventoryItems
                                        localStorage.setItem("inventoryItems", JSON.stringify(inventoryItems));

                                        equipment.slot['lefthand'].name = movingItemName;
                                        equipment.slot['lefthand'].type = itemType;
                                        equipment.slot['lefthand'].src = src;
                                        localStorage.setItem("equipment", JSON.stringify(equipment));
                                    }
                                }
                            }else{//equipped item is not in inventory
                                if(qty > 1){//moving item more than 1
                                    //change qty of amount in inventory
                                    
                                    inventoryItems.items.qty[itemIndex] -= 1;
                                    var count = inventoryItems.items.name.length;
                                    //push equipped item into InventoryItems
                                    inventoryItems.items.name.push(`${equipItemName}`);
                                    inventoryItems.items.qty.push(1);
                                    inventoryItems.items.type.push(`${equipment.slot['lefthand'].type}`);
                                    inventoryItems.items.src.push(`${equipment.slot['lefthand'].src}`);
                                    inventoryItems.items.index.push(count+1);
                                    for(var i=0; i<inventoryItems.items.name.length; i++){
                                        inventoryItems.items.index[i] = i+1;
                                    }//change index number of all InventoryItems

                                    localStorage.setItem("inventoryItems", JSON.stringify(inventoryItems));
                                    //add item to equipped slot
                                    equipment.slot['lefthand'].name = movingItemName;
                                    equipment.slot['lefthand'].type = itemType;
                                    equipment.slot['lefthand'].src = src;
                                    localStorage.setItem("equipment", JSON.stringify(equipment));
                                }else{
                                    for (var key in inventoryItems.items){
                                        inventoryItems.items[key].splice(itemIndex, 1);
                                    }//remove item being moved from inventory

                                    var count = inventoryItems.items.name.length;
                                    //push equipped item into InventoryItems
                                    inventoryItems.items.name.push(`${equipItemName}`);
                                    inventoryItems.items.qty.push(1);
                                    inventoryItems.items.type.push(`${equipment.slot['lefthand'].type}`);
                                    inventoryItems.items.src.push(`${equipment.slot['lefthand'].src}`);
                                    inventoryItems.items.index.push(count+1);
                                    for(var i=0; i<inventoryItems.items.name.length; i++){
                                        inventoryItems.items.index[i] = i+1;
                                    }//change index number of all InventoryItems

                                    localStorage.setItem("inventoryItems", JSON.stringify(inventoryItems));
                                    //add item to equipped slot
                                    equipment.slot['lefthand'].name = movingItemName;
                                    equipment.slot['lefthand'].type = itemType;
                                    equipment.slot['lefthand'].src = src;
                                    localStorage.setItem("equipment", JSON.stringify(equipment));
                                }
                            }
                            toolEquipped = true;
                        }
                    }else {
                        //if equiping items that are not tools
                        if($('#'+itemType).html() == ''){//if slot is empty
                            if(qty > 1){
                                //change qty of amount in inventory
                                inventoryItems.items.qty[itemIndex] = qty - 1;
                                localStorage.setItem("inventoryItems", JSON.stringify(inventoryItems));
                                
                                //add item to equipped slot
                                equipment.slot[itemType].name = movingItemName;
                                equipment.slot[itemType].type = itemType;
                                equipment.slot[itemType].src = src;
                                localStorage.setItem("equipment", JSON.stringify(equipment));
                            }else{
                                for (var key in inventoryItems.items){
                                    inventoryItems.items[key].splice(itemIndex, 1);
                                }
                                localStorage.setItem("inventoryItems", JSON.stringify(inventoryItems));

                                equipment.slot[itemType].name = movingItemName;
                                equipment.slot[itemType].type = itemType;
                                equipment.slot[itemType].src = src;
                                localStorage.setItem("equipment", JSON.stringify(equipment));
                            }
                            $(`#${itemType}`).css('background-image', 'url("")');
                        }else{//if slot is not empty
                            var equipItemName = equipment.slot[itemType].name;

                            var equippedIndex = inventoryItems.items.name.findIndex(function(name){
                                return name == equipItemName;
                            });
                            if(equippedIndex != -1){//equipped item is in inventory
                                invQtyEquipped = inventoryItems.items.qty[equippedIndex];
                                if(equipItemName == movingItemName){//do nothing
                                    console.log('trying to move same item - do nothing');
                                }else{
                                    if(invQtyEquipped > 1){
                                        //change qty of amount in inventory
                                        inventoryItems.items.qty[equippedIndex] += 1;
                                        if(qty > 1){
                                            inventoryItems.items.qty[itemIndex] -= 1;
                                        }else{
                                            for (var key in inventoryItems.items){
                                                inventoryItems.items[key].splice(itemIndex, 1);
                                            }
                                        }
                                        
                                        for(var i=0; i<inventoryItems.items.name.length; i++){
                                            inventoryItems.items.index[i] = i+1;
                                        }
                                        localStorage.setItem("inventoryItems", JSON.stringify(inventoryItems));
                                        //add item to equipped slot
                                        equipment.slot[itemType].name = movingItemName;
                                        equipment.slot[itemType].type = itemType;
                                        equipment.slot[itemType].src = src;
                                        localStorage.setItem("equipment", JSON.stringify(equipment));
                                    }else{
                                        if(qty > 1){
                                            inventoryItems.items.qty[itemIndex] -= 1;
                                        }else{
                                            for (var key in inventoryItems.items){
                                                inventoryItems.items[key].splice(itemIndex, 1);
                                            }
                                        }
                                        
                                        inventoryItems.items.qty[equippedIndex] += 1;
                                        for(var i=0; i<inventoryItems.items.name.length; i++){
                                            inventoryItems.items.index[i] = i+1;
                                        }
                                        localStorage.setItem("inventoryItems", JSON.stringify(inventoryItems));

                                        equipment.slot[itemType].name = movingItemName;
                                        equipment.slot[itemType].type = itemType;
                                        equipment.slot[itemType].src = src;
                                        localStorage.setItem("equipment", JSON.stringify(equipment));
                                    }
                                }
                            }else{//equipped item is not in inventory
                                if(qty > 1){//moving item more than 1
                                    //change qty of amount in inventory
                                    inventoryItems.items.qty[itemIndex] -= 1;
                                    var count = inventoryItems.items.name.length;
                                    inventoryItems.items.name.push(`${equipItemName}`);
                                    inventoryItems.items.qty.push(1);
                                    inventoryItems.items.type.push(`${equipment.slot[itemType].type}`);
                                    inventoryItems.items.src.push(`${equipment.slot[itemType].src}`);
                                    inventoryItems.items.index.push(count+1);
                                    for(var i=0; i<inventoryItems.items.name.length; i++){
                                        inventoryItems.items.index[i] = i+1;
                                    }
                                    localStorage.setItem("inventoryItems", JSON.stringify(inventoryItems));
                                    //add item to equipped slot
                                    equipment.slot[itemType].name = movingItemName;
                                    equipment.slot[itemType].type = itemType;
                                    equipment.slot[itemType].src = src;
                                    localStorage.setItem("equipment", JSON.stringify(equipment));
                                }else{
                                    for (var key in inventoryItems.items){
                                        inventoryItems.items[key].splice(itemIndex, 1);
                                    }//remove item being moved from inventory

                                    var count = inventoryItems.items.name.length;
                                    //push equipped item into InventoryItems
                                    inventoryItems.items.name.push(`${equipItemName}`);
                                    inventoryItems.items.qty.push(1);
                                    inventoryItems.items.type.push(`${equipment.slot[itemType].type}`);
                                    inventoryItems.items.src.push(`${equipment.slot[itemType].src}`);
                                    inventoryItems.items.index.push(count+1);
                                    for(var i=0; i<inventoryItems.items.name.length; i++){
                                        inventoryItems.items.index[i] = i+1;
                                    }//change index number of all InventoryItems

                                    localStorage.setItem("inventoryItems", JSON.stringify(inventoryItems));
                                    //add item to equipped slot
                                    equipment.slot[itemType].name = movingItemName;
                                    equipment.slot[itemType].type = itemType;
                                    equipment.slot[itemType].src = src;
                                    localStorage.setItem("equipment", JSON.stringify(equipment));
                                    
                                }
                            }
                        }
                    }
                    //load new inventory display
                    if($('#inventory').length){
                        var html = "";
                        for (var i=0; i<inventoryItems.items.name.length; i++){
                            html += `<div class="items inv equipable" item-type='${inventoryItems.items.type[i]}'><img title="${inventoryItems.items.name[i]}" src="${inventoryItems.items.src[i]}"><span class="inventoryCount" aria-hidden="false">${inventoryItems.items.qty[i]}</span></div>`;
                        }
                        $('#inventory').html(html);
                    }
                    //load new equipment display
                    if($('#equipment').length){
                        for(var key in equipment.slot){
                            if(equipment.slot[key].name != ''){
                                $('#'+key).html(`<div class="items equipable equip" item-type="${equipment.slot[key].type}"><img title="${equipment.slot[key].name}" src="${equipment.slot[key].src}"><span class="inventoryCount" aria-hidden="true">1</span></div>`);
                            }    
                        }
                    }
                }
            }else{
                window.alert("Please stop working before moving equipment.");
            }
        }
    });

    //moving from equipped to inventory
    $("#equipment").on('click', '.items', function(){
        var $this = $(this);
        if($this.hasClass('equipable')){
            if(actionStatus.status != "working")
            {
                if($this.hasClass('equip')){
                    var equipItemName = $this.children('img').attr('title');
                    var equipItemSrc = $this.children('img').attr('src');
                    var equippedType = $this.attr('item-type');

                    var itemIndex = inventoryItems.items.name.findIndex(function(name){
                        return name == equipItemName;
                    });
                    
                    
                    if(itemIndex != -1){//equipped item in inventory
                        inventoryItems.items.qty[itemIndex] += 1;
                        localStorage.setItem("inventoryItems", JSON.stringify(inventoryItems));
                        if(equippedType == "tool"){
                            equipment.slot["lefthand"].name = '';
                            equipment.slot["lefthand"].type = '';
                            equipment.slot["lefthand"].src = '';
                            localStorage.setItem("equipment", JSON.stringify(equipment));
                            $(`#lefthand`).css('background-image', `url("images/lefthand.jpeg")`);
                        }else{
                            equipment.slot[equippedType].name = '';
                            equipment.slot[equippedType].type = '';
                            equipment.slot[equippedType].src = '';
                            localStorage.setItem("equipment", JSON.stringify(equipment));
                        }
                    }else{//equipped item not in inventory
                        if(equippedType == "tool"){
                            equipment.slot["lefthand"].name = '';
                            equipment.slot["lefthand"].type = '';
                            equipment.slot["lefthand"].src = '';
                            localStorage.setItem("equipment", JSON.stringify(equipment));
                            $(`#lefthand`).css('background-image', `url("images/lefthand.jpeg")`);
                        }
                        else{
                            equipment.slot[equippedType].name = '';
                            equipment.slot[equippedType].type = '';
                            equipment.slot[equippedType].src = '';
                            localStorage.setItem("equipment", JSON.stringify(equipment));
                        }
                        var count = inventoryItems.items.name.length;
                        inventoryItems.items.name.push(equipItemName);
                        inventoryItems.items.qty.push(1);
                        inventoryItems.items.type.push(equippedType);
                        inventoryItems.items.src.push(equipItemSrc);
                        inventoryItems.items.index.push(count+1);
                        for(var i=0; i<inventoryItems.items.name.length; i++){
                            inventoryItems.items.index[i] = i+1;
                        }
                        localStorage.setItem("inventoryItems", JSON.stringify(inventoryItems));
                    }
                    //load new inventory display
                    if($('#inventory').length){
                        var html = "";
                        for (var i=0; i<inventoryItems.items.name.length; i++){
                            html += `<div class="items inv equipable" item-type='${inventoryItems.items.type[i]}'><img title="${inventoryItems.items.name[i]}" src="${inventoryItems.items.src[i]}"><span class="inventoryCount" aria-hidden="false">${inventoryItems.items.qty[i]}</span></div>`;
                        }
                        $('#inventory').html(html);
                    }
                    //load new equipment display
                    if($('#equipment').length){
                        for(var key in equipment.slot){
                            if(equipment.slot[key].name != ''){
                                $('#'+key).html(`<div class="items equipable equip" item-type="${equipment.slot[key].type}"><img title="${equipment.slot[key].name}" src="${equipment.slot[key].src}"><span class="inventoryCount" aria-hidden="true">1</span></div>`);
                            }else{
                                $('#'+key).html('');
                            } 
                        }
                    }
                    equipedItemType = "";
                    $(`#${equippedType}`).css('background-image', `url("images/${equippedType}.jpeg")`);
                }
            }else{
                window.alert("Please stop working before moving equipment.");
            }
        }
    });

    //moving from town dropped items to Inventory
    $("#droppedItems").on('click', '.items', function(){
        var $this = $(this);
        if($this.hasClass('equipable')){
            if($this.hasClass('dropped')){
                var droppedItemName = $this.children('img').attr('title');
                var droppedItemCount = parseInt($this.children('span').text());
                var droppedItemType = $this.attr('item-type');
                var droppedItemSrc = $this.children('img').attr('src');
                //var invItemCount = parseInt($('#inventory').find(`img[title='${droppedItemName}']`).next().text());
                var itemIndex = inventoryItems.items.name.findIndex(function(name){
                    return name == droppedItemName;
                });
                var droppedIndex = droppedItems.items.name.findIndex(function(name){
                    return name == droppedItemName;
                });
                
                if(itemIndex != -1){
                    inventoryItems.items.qty[itemIndex] = inventoryItems.items.qty[itemIndex] + droppedItemCount;
                    
                    for (var key in droppedItems.items){
                        droppedItems.items[key].splice(droppedIndex, 1);
                    }
                    localStorage.setItem("inventoryItems", JSON.stringify(inventoryItems));
                    localStorage.setItem("droppedItems", JSON.stringify(droppedItems));
                }else{
                    var count = inventoryItems.items.name.length;
                    inventoryItems.items.name.push(`${droppedItemName}`);
                    inventoryItems.items.qty.push(droppedItemCount);
                    inventoryItems.items.type.push(`${droppedItemType}`);
                    inventoryItems.items.src.push(`${droppedItemSrc}`);
                    inventoryItems.items.index.push(count+1);
                    for (var key in droppedItems.items){
                        droppedItems.items[key].splice(droppedIndex, 1);
                    }
                    localStorage.setItem("inventoryItems", JSON.stringify(inventoryItems));
                    localStorage.setItem("droppedItems", JSON.stringify(droppedItems));
                }
                
                if($('#inventory').length){
                    var html = "";
                    for (var i=0; i<inventoryItems.items.name.length; i++){
                        html += `<div class="items inv equipable" item-type='${inventoryItems.items.type[i]}'><img title="${inventoryItems.items.name[i]}" src="${inventoryItems.items.src[i]}"><span class="inventoryCount" aria-hidden="false">${inventoryItems.items.qty[i]}</span></div>`;
                    }
                    $('#inventory').html(html);
                }
                if($('#droppedItems').length){
                    var html = "";
                    for(var i=0; i<droppedItems.items.name.length; i++){
                        html += `<div class="items dropped equipable" item-type="${droppedItems.items.type[i]}"><img title="${droppedItems.items.name[i]}" src="${droppedItems.items.src[i]}"><span class="inventoryCount" aria-hidden="false">${droppedItems.items.qty[i]}</span></div>`;
                    }
                    $('#droppedItems').html(html);
                }
            }
        }
    });


    //House option navigation
    $('li.parent').on('click',function () {
        var disabledAttr = $(this).children().attr('aria-disabled');
        var id = $(this).children().attr('id');

        var activeId = $('ul.list-inline').find('[aria-selected="true"]').attr('aria-labeledby');
            
        if(id != '' && id != activeId && disabledAttr != "true"){
            $('#'+id+'Option').attr('aria-hidden', 'false');
            $('#'+activeId+'Option').attr('aria-hidden', 'true');
            $('ul.list-inline').find('[aria-labeledby="'+activeId+'"]').attr('aria-selected', 'false');
            $('ul.list-inline').find('[aria-labeledby="'+id+'"]').attr('aria-selected', 'true');
        }
    });

    //moving to woodcutting locations
    $('#woodsMap area').on('click', function(){
        if(toolEquipped == true && equipedItemType == "axe"){
            var id = $(this).attr('id');
            $('#woods').attr('aria-hidden', 'true');
            $('#locationText').attr('aria-hidden', 'true');
            $('#backTownText').attr('aria-hidden', 'true');
            $('#woodsWalk').attr('aria-hidden', 'false');
            $('#statusText').attr('aria-hidden', 'false');
            
            switch(id){
                case 'ash':
                    time = '5';
                    expGaind = Math.round(time*4);
                    startTravelCountdown(time, id, lvl2HikingExp, expGaind, "hiking", hikingExp, hikingLvl, "hikingExp", "hikingLvl");
                    $('#treeLocation').text('Ash trees');
                    $('#locationTime').text(time);
                    $('.hikingExpGain').text(expGaind);
                    break;
                case 'reg1':
                    time = '5';
                    expGaind = Math.round(time*4);
                    startTravelCountdown(time, id, lvl2HikingExp, expGaind, "hiking", hikingExp, hikingLvl, "hikingExp", "hikingLvl");
                    $('#treeLocation').text('Regular trees');
                    $('#locationTime').text(time);
                    $('.hikingExpGain').text(expGaind);
                    break;
                case 'oak':
                    time = '5';
                    expGaind = Math.round(time*4);
                    startTravelCountdown(time, id, lvl2HikingExp, expGaind, "hiking", hikingExp, hikingLvl, "hikingExp", "hikingLvl");
                    $('#treeLocation').text('Oak trees');
                    $('#locationTime').text(time);
                    $('.hikingExpGain').text(expGaind);
                    break;
                case 'reg2':
                    time = '5';
                    expGaind = Math.round(time*4);
                    startTravelCountdown(time, id, lvl2HikingExp, expGaind, "hiking", hikingExp, hikingLvl, "hikingExp", "hikingLvl");
                    $('#treeLocation').text('Regular trees');
                    $('#locationTime').text(time);
                    $('.hikingExpGain').text(expGaind);
                    break;
                case 'spruce':
                    time = '5';
                    expGaind = Math.round(time*4);
                    startTravelCountdown(time, id, lvl2HikingExp, expGaind, "hiking", hikingExp, hikingLvl, "hikingExp", "hikingLvl");
                    $('#treeLocation').text('Spruce trees');
                    $('#locationTime').text(time);
                    $('.hikingExpGain').text(expGaind);
                    break;
            }
        }
        else{
            window.alert('Please equip an axe before beginning!');
        }
        
        //change status to traveling in database
    });

    //Leave work area
    $('#stopWorking').on("click", function(){
        stopCountdown();
        $('#woodsCut').attr('aria-hidden', 'true');
        $('#actionText').attr('aria-hidden', 'true');
        $('#woodsWalk').attr('aria-hidden', 'false');
        $('#returnText').attr('aria-hidden', 'false');

        switch(playerLocation.location){
            case 'ashWoods':
                time = '5';
                    expGaind = Math.round(time*4);
                startReturnCountdown(time, lvl2HikingExp, expGaind, "hiking", hikingExp, hikingLvl, "hikingExp", "hikingLvl");
                $('#locationTime2').text(time);
                $('.hikingExpGain').text(expGaind);
                break;
            case 'regWoods1':
                time = '5';
                    expGaind = Math.round(time*4);
                startReturnCountdown(time, lvl2HikingExp, expGaind, "hiking", hikingExp, hikingLvl, "hikingExp", "hikingLvl");
                $('#locationTime2').text(time);
                $('.hikingExpGain').text(expGaind);
                break;
            case 'oakWoods':
                time = '5';
                    expGaind = Math.round(time*4);
                startReturnCountdown(time, lvl2HikingExp, expGaind, "hiking", hikingExp, hikingLvl, "hikingExp", "hikingLvl");
                $('#locationTime2').text(time);
                $('.hikingExpGain').text(expGaind);
                break;
            case 'regWoods2':
                time = '5';
                    expGaind = Math.round(time*4);
                startReturnCountdown(time, lvl2HikingExp, expGaind, "hiking", hikingExp, hikingLvl, "hikingExp", "hikingLvl");
                $('#locationTime2').text(time);
                $('.hikingExpGain').text(expGaind);
                break;
            case 'spruceWoods':
                time = '5';
                    expGaind = Math.round(time*4);
                startReturnCountdown(time, lvl2HikingExp, expGaind, "hiking", hikingExp, hikingLvl, "hikingExp", "hikingLvl");
                $('#locationTime2').text(time);
                $('.hikingExpGain').text(expGaind);
                break;
        }
        
    });

    //stop hiking
    $('#stopHiking').on("click", function(){
        stopCountdown();
        $('#woods').attr('aria-hidden', 'false');
        $('#locationText').attr('aria-hidden', 'false');
        $('#backTownText').attr('aria-hidden', 'false');
        $('#woodsWalk').attr('aria-hidden', 'true');
        $('#statusText').attr('aria-hidden', 'true');
        actionStatus.status = "nothing";
        $(".onlinePlayers").attr('id', '');
        $('.onlinePlayers').text('');
    });

    //items page
    displayItemData();
    //$('tr[@class^=child-]').hide().children('td');
});


    //display players at location Test
    function loadOnlinePlayers(){
        $('.onlinePlayers').text('');
        if($('.onlinePlayers').attr('id') != ''){
            var playersHtml = "";
            for(var key in onlinePlayers){
                if(key == playerLocation.location){
                    for(var key2 in onlinePlayers[key]){
                        playersHtml += `<div><a>${onlinePlayers[key][key2]}</a></div>`;
                    }
                }
            }
            $('.onlinePlayers').append(playersHtml);
        }
    }
    //End players at location Test


    //start counter
    function startTravelCountdown(timeremaining, id, lvlExp, expGain, skillType, currentXp, skillTypeLv, updateCookieName, skillLvlCookie){
        var expToGo = ((lvlExp.num*2)*skillTypeLv.num) - hikingExp.num;
        $('.hikingExpNeed').text(expToGo);
        console.log("EXP to Go: "+expToGo);
        console.log("lvlExp: "+lvlExp.num);
        console.log("hikingExp: "+hikingExp.num);
        $('.hikingLevel').text(skillTypeLv.num);
        document.getElementById("timeRemaining").innerHTML = timeremaining+'s';
        action = setInterval(function(){
            timeremaining -= 1;
            if(timeremaining > 0){
                document.getElementById("timeRemaining").innerHTML = timeremaining+'s';
            }else{
                document.getElementById("timeRemaining").innerHTML = '';
            }


            if(timeremaining <= 0){//reached destination
                stopCountdown();
                updateExp(lvlExp, expGain, skillType, currentXp, skillTypeLv, updateCookieName, skillLvlCookie);
                //change actual location in database
                $('#woodsWalk').attr('aria-hidden', 'true');
                $('#statusText').attr('aria-hidden', 'true');
                $('#woodsCut').attr('aria-hidden', 'false');
                $('#actionText').attr('aria-hidden', 'false');
                $('.onlinePlayers').attr('id', 'atLocation');
                

                switch(id){
                    case 'ash':
                        time = '10';
                        playerLocation.location = "ashWoods";
                        startActionCountdown(time, nextLvlExp.woodcutting, 20, 'wood', woodcuttingExp, "Ash", woodLvl, "woodcuttingExp", "woodLvl");
                        //$('#logInventory').text(inventory.ash);
                        $('#logType').text('Ash');
                        loadOnlinePlayers();
                        break;
                    case 'reg1':
                        playerLocation.location = "regWoods1";
                        time = '10';
                        startActionCountdown(time, nextLvlExp.woodcutting, 20, 'wood', woodcuttingExp, "Regular", woodLvl, "woodcuttingExp", "woodLvl");
                        //$('#logInventory').text(inventory.regular);
                        $('#logType').text('Regular');
                        loadOnlinePlayers();
                        break;
                    case 'oak':
                        playerLocation.location = "oakWoods";
                        time = '10';
                        startActionCountdown(time, nextLvlExp.woodcutting, 20, 'wood', woodcuttingExp, "Oak", woodLvl, "woodcuttingExp", "woodLvl");
                        //$('#logInventory').text(inventory.oak);
                        $('#logType').text('Oak');
                        loadOnlinePlayers();
                        break;
                    case 'reg2':
                        playerLocation.location = "regWoods2";
                        time = '10';
                        startActionCountdown(time, nextLvlExp.woodcutting, 20, 'wood', woodcuttingExp, "Regular", woodLvl, "woodcuttingExp", "woodLvl");
                        //$('#logInventory').text(inventory.regular);
                        $('#logType').text('Regular');
                        loadOnlinePlayers();
                        break;
                    case 'spruce':
                        playerLocation.location = "spruceWoods";
                        time = '10';
                        startActionCountdown(time, nextLvlExp.woodcutting, 20, 'wood', woodcuttingExp, "Spruce", woodLvl, "woodcuttingExp", "woodLvl");
                        //$('#logInventory').text(inventory.spruce);
                        $('#logType').text('Spruce');
                        loadOnlinePlayers();
                        break;
                }
            }
            actionStatus.status = "working";
        }, 1000);
        
    }

    function startActionCountdown(timeremaining, lvlExp, expGain, skillType, currentXp, logCountType, skillTypeLv, updateCookieName, skillLvlCookie){
        var expGainHolder = expGain;
        initialTime = timeremaining;
        document.getElementById("timeRemaining2").innerHTML = initialTime+'s';
        $(`.${skillType}Level`).text(skillTypeLv.num);
        var itemIndex = inventoryItems.items.name.findIndex(function(name){
            return name == `${logCountType}Log`;
        });

        if(itemIndex != -1){
            $('#logInventory').text(inventoryItems.items.qty[itemIndex]);
        }else{
            $('#logInventory').text("0");
        }

        if(currentXp.num == 0){
            var expToGo = lvlExp - currentXp.num;
            $('.'+skillType+'ExpNeed').text(expToGo);
        }

        initalLogCountType = logCountType;
        action = setInterval(function(){
            timeremaining -= 1;
            if(timeremaining > 0)
                document.getElementById("timeRemaining2").innerHTML = timeremaining+'s';
            else
                document.getElementById("timeRemaining2").innerHTML = initialTime+'s';

            if(timeremaining == 0){
                lvlExp = 100 * skillTypeLv.num;
                stopCountdown();
                updateItems(logCountType);
                updateExp(lvlExp, expGain, skillType, currentXp, skillTypeLv, updateCookieName, skillLvlCookie);
                startActionCountdown(initialTime, lvlExp, expGainHolder, skillType, currentXp, initalLogCountType, skillTypeLv, updateCookieName);
            }
        }, 1000);
        

    }

    function startReturnCountdown(timeremaining1, lvlExp, expGain, skillType, currentXp, skillTypeLv, updateCookieName, skillLvlCookie){
        var expToGo = lvlExp - hikingExp.num;
        $('.hikingExpNeed').text(expToGo);
        $('.hikingLevel').text(skillTypeLv.num);
        document.getElementById("timeRemaining3").innerHTML = timeremaining1+'s';
        action = setInterval(function(){
            timeremaining1 -= 1;
            if(timeremaining1 > 0){
                document.getElementById("timeRemaining3").innerHTML = timeremaining1+'s';
            }
            else{
                document.getElementById("timeRemaining3").innerHTML = '';
            }

            if(timeremaining1 <= 0){//reached destination
                updateExp(lvlExp, expGain, skillType, currentXp, skillTypeLv, updateCookieName, skillLvlCookie);
                stopCountdown();
                //change actual location in database
                $('#woods').attr('aria-hidden', 'false');
                $('#locationText').attr('aria-hidden', 'false');
                $('#backTownText').attr('aria-hidden', 'false');
                $('#woodsWalk').attr('aria-hidden', 'true');
                $('#returnText').attr('aria-hidden', 'true');
                actionStatus.status = "nothing";
                $(".onlinePlayers").attr('id', '');
                $('.onlinePlayers').text('');
            }

        }, 1000);
    }


    //update Inventory
    function updateItems(logCountType){
        logs = parseInt(Math.floor((Math.random() * 2)+1));
        $('#logAmt').text(logs);
        $('#collectedAmt').attr('aria-hidden', 'false');//show amount collected
        
        
        logType = $('#logType').text();
        var itemIndex = inventoryItems.items.name.findIndex(function(name){
            return name == `${logCountType}Log`;
        });
        //check if logs are in inventory
        if(itemIndex != -1){
            inventoryItems.items.qty[itemIndex] = inventoryItems.items.qty[itemIndex] + logs;
            
            localStorage.setItem("inventoryItems", JSON.stringify(inventoryItems));
        }else{//not in inventory, add to inventory
            var count = inventoryItems.items.name.length;
            inventoryItems.items.name.push(`${logType}Log`);
            inventoryItems.items.qty.push(logs);
            inventoryItems.items.type.push(`resource`);
            inventoryItems.items.class.push(`resource`);
            inventoryItems.items.src.push(`images/scroll.png`);
            inventoryItems.items.index.push(count+1);
            
            localStorage.setItem("inventoryItems", JSON.stringify(inventoryItems));
        }

        if($('#inventory').length){
            var html = "";
            for (var i=0; i<inventoryItems.items.name.length; i++){
                html += `<div class="items inv ${inventoryItems.items.class[i]}" item-type='${inventoryItems.items.type[i]}'><img title="${inventoryItems.items.name[i]}" src="${inventoryItems.items.src[i]}"><span class="inventoryCount" aria-hidden="false">${inventoryItems.items.qty[i]}</span></div>`;
            }
            $('#inventory').html(html);
        }
    }

    //update Exp
    function updateExp(nextLvExp, expGains, skill, currentExp, skillTypeLvl, updateCookie, skillLvlCookie){
        
        currentExp.num += expGains;
        localStorage.setItem(updateCookie, JSON.stringify(currentExp));
        var count = 1;
        //check if current exp is pass or equal to next level exp
        //update new level and new next level exp
        if(currentExp.num >= nextLvExp)
        {
            
            skillTypeLvl.num += count;
            localStorage.setItem(skillLvlCookie, JSON.stringify(skillTypeLvl));
            nextLvExp = 100 * skillTypeLvl.num;
            switch(updateCookie){
                case 'woodcuttingExp':
                    nextLvlExp.woodcutting = nextLvExp;
                    nextLvExp = nextLvlExp.woodcutting;
                    localStorage.setItem("nextLvlExp", JSON.stringify(nextLvlExp.woodcutting));
                    break;
            }
            
            $('.'+skill+'Level').text(skillTypeLvl.num);
            
        }
        //display exp to go
        var expToGo = nextLvExp - currentExp.num;
        
        $('.'+skill+'ExpNeed').text(expToGo);
    }

    //stop countdown
    function stopCountdown(){
        clearInterval(action);
    }

    //test for buying items in local shop
    function buyLocal(id){
        var amt = document.getElementById(`shopBuyItem-${id}`).value;
        var itemName = $(`#shopItemName-${id}`).text();
        var itemPrice = parseInt($(`#shopItemPrice-${id}`).text().replace(/,/g, ''));
        var invItemName = '';
        var invItemCount = '';
        var itemFound = false;
        var newInvCount = '';
        var foundItem = '';
        if(amt != ""){
                total = amt*itemPrice;
                if(playerGold.gold >= total){
                    playerGold.gold -= total;
                    switch(itemName)
                    {
                        case "Gold Axe":
                            $('#inventory').children().each(function(index){
                                invItemName = $(this).children().attr('title');
                                foundItem = $(this).children('span');
                                if(invItemName == itemName){
                                    invItemCount = parseInt($(this).children().text().replace(/,/g, ''));
                                    itemFound = true;
                                    return false;
                                }else{
                                    itemFound = false;
                                }
                            });
                            if(itemFound){
                                var itemIndex = inventoryItems.items.name.findIndex(function(name){
                                    return name == itemName;
                                });
                                //newInvCount = parseInt(amt)+parseInt(invItemCount);
                                //foundItem.text(newInvCount);
                                inventoryItems.items.qty[itemIndex] = inventoryItems.items.qty[itemIndex] + parseInt(amt);
                                localStorage.setItem("inventoryItems", JSON.stringify(inventoryItems));
                                
                                if($('#inventory').length){
                                    var html = "";
                                    for (var i=0; i<inventoryItems.items.name.length; i++){
                                        html += `<div class="items inv equipable" item-type='${inventoryItems.items.type[i]}'><img title="${inventoryItems.items.name[i]}" src="${inventoryItems.items.src[i]}"><span class="inventoryCount" aria-hidden="false">${inventoryItems.items.qty[i]}</span></div>`;
                                    }
                                    $('#inventory').html(html);
                                }
                            }else{
                                var count = inventoryItems.items.name.length;
                                inventoryItems.items.name.push(`${items.axe.name}`);
                                inventoryItems.items.qty.push(parseInt(amt));
                                inventoryItems.items.type.push(`${items.axe.type}`);
                                inventoryItems.items.src.push(`${items.axe.src}`);
                                inventoryItems.items.index.push(count+1);
                                localStorage.setItem("inventoryItems", JSON.stringify(inventoryItems));
                                
                                if($('#inventory').length){
                                    var html = "";
                                    for (var i=0; i<inventoryItems.items.name.length; i++){
                                        html += `<div class="items inv equipable" item-type='${inventoryItems.items.type[i]}'><img title="${inventoryItems.items.name[i]}" src="${inventoryItems.items.src[i]}"><span class="inventoryCount" aria-hidden="false">${inventoryItems.items.qty[i]}</span></div>`;
                                    }
                                    $('#inventory').html(html);
                                }
                            }
                            $("#player_money").text(playerGold.gold);
                            displayText('boughtText', `You bought ${amt} ${items.axe.name} for ${total}gp.`);
                            document.getElementById(`shopBuyItem-${id}`).value = '';
                            fillOptionsToSell();
                            itemFound = false;
                            break;
                        case "Health Potion":
                            $('#inventory').children().each(function(index){
                                invItemName = $(this).children().attr('title');
                                foundItem = $(this).children('span');
                                if(invItemName == itemName){
                                    invItemCount = parseInt($(this).children().text().replace(/,/g, ''));
                                    itemFound = true;
                                    return false;
                                }else{
                                    itemFound = false;
                                }
                            });
                            if(itemFound){
                                var itemIndex = inventoryItems.items.name.findIndex(function(name){
                                    return name == itemName;
                                });
                                inventoryItems.items.qty[itemIndex] = inventoryItems.items.qty[itemIndex] + parseInt(amt);
                                localStorage.setItem("inventoryItems", JSON.stringify(inventoryItems));
                                
                                if($('#inventory').length){
                                    var html = "";
                                    for (var i=0; i<inventoryItems.items.name.length; i++){
                                        html += `<div class="items inv equipable" item-type='${inventoryItems.items.type[i]}'><img title="${inventoryItems.items.name[i]}" src="${inventoryItems.items.src[i]}"><span class="inventoryCount" aria-hidden="false">${inventoryItems.items.qty[i]}</span></div>`;
                                    }
                                    $('#inventory').html(html);
                                }
                                //newInvCount = parseInt(amt)+parseInt(invItemCount);
                                //foundItem.text(newInvCount);
                            }else{
                                var count = inventoryItems.items.name.length;
                                inventoryItems.items.name.push(`${items.healthPotion.name}`);
                                inventoryItems.items.qty.push(parseInt(amt));
                                inventoryItems.items.type.push(`${items.healthPotion.type}`);
                                inventoryItems.items.src.push(`${items.healthPotion.src}`);
                                inventoryItems.items.index.push(count+1);
                                localStorage.setItem("inventoryItems", JSON.stringify(inventoryItems));
                                
                                if($('#inventory').length){
                                    var html = "";
                                    for (var i=0; i<inventoryItems.items.name.length; i++){
                                        html += `<div class="items inv equipable" item-type='${inventoryItems.items.type[i]}'><img title="${inventoryItems.items.name[i]}" src="${inventoryItems.items.src[i]}"><span class="inventoryCount" aria-hidden="false">${inventoryItems.items.qty[i]}</span></div>`;
                                    }
                                    $('#inventory').html(html);
                                }
                                //var itemTxt = `<div class="items inv consumable" item-type="${items.healthPotion.type}"><img title="${items.healthPotion.name}" src="${items.healthPotion.src}"><span class="inventoryCount" aria-hidden="false">${amt}</span></div>`;
                                //$(itemTxt).appendTo('#inventory');
                            }
                            $("#player_money").text(playerGold.gold);
                            displayText('boughtText', `You bought ${amt} ${items.healthPotion.name} for ${total}gp.`);
                            document.getElementById(`shopBuyItem-${id}`).value = '';
                            fillOptionsToSell();
                            itemFound = false;
                            break;
                        case "Steel Sword":
                            $('#inventory').children('div').each(function(index){
                                invItemName = $(this).children('img').attr('title');
                                foundItem = $(this).children('span');
                                if(invItemName == itemName){
                                    invItemCount = parseInt($(this).children().text().replace(/,/g, ''));
                                    itemFound = true;
                                    return false;
                                }else{
                                    itemFound = false;
                                }
                            });
                            if(itemFound){
                                var itemIndex = inventoryItems.items.name.findIndex(function(name){
                                    return name == itemName;
                                });
                                inventoryItems.items.qty[itemIndex] = inventoryItems.items.qty[itemIndex] + parseInt(amt);
                                localStorage.setItem("inventoryItems", JSON.stringify(inventoryItems));
                                
                                if($('#inventory').length){
                                    var html = "";
                                    for (var i=0; i<inventoryItems.items.name.length; i++){
                                        html += `<div class="items inv equipable" item-type='${inventoryItems.items.type[i]}'><img title="${inventoryItems.items.name[i]}" src="${inventoryItems.items.src[i]}"><span class="inventoryCount" aria-hidden="false">${inventoryItems.items.qty[i]}</span></div>`;
                                    }
                                    $('#inventory').html(html);
                                }
                                //newInvCount = parseInt(amt)+parseInt(invItemCount);
                                //foundItem.text(newInvCount);
                            }else{
                                var count = inventoryItems.items.name.length;
                                inventoryItems.items.name.push(`${items.steelSword.name}`);
                                inventoryItems.items.qty.push(parseInt(amt));
                                inventoryItems.items.type.push(`${items.steelSword.type}`);
                                inventoryItems.items.src.push(`${items.steelSword.src}`);
                                inventoryItems.items.index.push(count+1);
                                localStorage.setItem("inventoryItems", JSON.stringify(inventoryItems));
                                
                                if($('#inventory').length){
                                    var html = "";
                                    for (var i=0; i<inventoryItems.items.name.length; i++){
                                        html += `<div class="items inv equipable" item-type='${inventoryItems.items.type[i]}'><img title="${inventoryItems.items.name[i]}" src="${inventoryItems.items.src[i]}"><span class="inventoryCount" aria-hidden="false">${inventoryItems.items.qty[i]}</span></div>`;
                                    }
                                    $('#inventory').html(html);
                                }
                                //var itemTxt = `<div class="items inv equipable" item-type="${items.steelSword.type}"><img title="${items.steelSword.name}" src="${items.steelSword.src}"><span class="inventoryCount" aria-hidden="false">${amt}</span></div>`;
                                //$(itemTxt).appendTo('#inventory');
                            }
                            $("#player_money").text(playerGold.gold);
                            displayText('boughtText', `You bought ${amt} ${items.steelSword.name} for ${total}gp.`);
                            document.getElementById(`shopBuyItem-${id}`).value = '';
                            fillOptionsToSell();
                            itemFound = false;
                            break;
                    }
                    localStorage.setItem("playerGold", JSON.stringify(playerGold));
                }else{
                    displayText('boughtText', `Not enough gold to buy ${amt} ${itemName}.`);
                }
            //}
        }
    }

    function sellLocal(){
        var soldItem = $('#selectedOption').text();
        var amt = document.getElementById(`shopSellItem`).value;
        var newCount = '';
        var cost = '';
        if(amt != ""){
            $('#inventory').children().each(function(index){
                var itemName = $(this).children().attr('title');
                var itemCount = $(this).children().text();
                if(soldItem == itemName){
                    if(amt <= itemCount){
                        var itemIndex = inventoryItems.items.name.findIndex(function(name){
                            return name == itemName;
                        });
                        newCount = itemCount - amt;
                        cost = amt * 1000;
                        if(newCount != 0){//more than 1 item
                            inventoryItems.items.qty[itemIndex] = newCount;
                            localStorage.setItem("inventoryItems", JSON.stringify(inventoryItems));
                            //$(this).children('span').text(newCount);
                        }else{//only 1 item
                            var itemIndex = inventoryItems.items.name.findIndex(function(name){
                                return name == itemName;
                            });

                            for (var key in inventoryItems.items){
                                inventoryItems.items[key].splice(itemIndex, 1);
                            }
                            for(var i=0; i<inventoryItems.items.name.length; i++){
                                inventoryItems.items.index[i] = i+1;
                            }
                            localStorage.setItem("inventoryItems", JSON.stringify(inventoryItems));
                            
                            //$(this).remove();//remove item from inventory
                        }
                        playerGold.gold += cost;
                        localStorage.setItem("playerGold", JSON.stringify(playerGold));
                        $("#player_money").text(playerGold.gold);
                        displayText('soldText', `You sold ${amt} ${soldItem} for ${cost}gp`);
                        $('#selectedOption').text("");
                        $('#shopSellItem').attr('aria-hidden', 'true');
                        $('#shopSellBtn').attr('aria-hidden', 'true');
                        document.getElementById(`shopSellItem`).value = "";
                        if($('#inventory').length){
                            var html = "";
                            for (var i=0; i<inventoryItems.items.name.length; i++){
                                html += `<div class="items inv equipable" item-type='${inventoryItems.items.type[i]}'><img title="${inventoryItems.items.name[i]}" src="${inventoryItems.items.src[i]}"><span class="inventoryCount" aria-hidden="false">${inventoryItems.items.qty[i]}</span></div>`;
                            }
                            $('#inventory').html(html);
                        }
                        fillOptionsToSell();
                    }
                    
                }
            });
        }
    }

    function fillOptionsToSell(){
        var itemText = `<option value="" selected disabled>Choose Item to Sell</option>`;
        $('#inventory').children().each(function(index){
            var itemName = $(this).children().attr('title');
            var itemCount = $(this).children().text();
            itemText += `<option value="${itemName}">${itemName} (${itemCount})</option>`;
        });
        $('#inventoryItems').html(itemText);
        //$(itemText).appendTo("#inventoryItems");
    }

    function displayText(id, text){
        var timer = 3;
        //display text
        $(`#${id}`).text(text).css('color', 'red');
        actionCount = setInterval(function(){
            timer -= 1;
            if(timer == 0){
                //remove text
                $(`#${id}`).html('<br />');
                clearInterval(actionCount);
            }
        }, 1000);
    }

    function displayItemData(){
        $('tr.parent').on('click',function () {
            $(this).siblings('.child-' + this.id).toggle();
            var status = $(this).siblings('.child-' + this.id).attr('id');
            if(status == 'display-hidden'){
                $(this).find(".plusminus-"+this.id).text('- ');
                $(this).siblings('.child-'+ this.id).attr('id', 'display-view');
            }
            else{
                $(this).find(".plusminus-"+this.id).text('+');
                $(this).siblings('.child-'+ this.id).attr('id', 'display-hidden');
            }
        });  
    }