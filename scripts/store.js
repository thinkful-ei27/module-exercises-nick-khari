/* global shoppingList, cuid */
'use strict';

const store = (function(){
  let items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  let hideCheckedItems = false;
  let searchTerm = '';
  let findById = function(input){
    function isId(item){
      return input === item.id;
    }
    return store.items.find(isId);
  };
  let addItem = function(name){
    try{
      Item.validateName(name);
      this.items.push(Item.create(name));
      shoppingList.render();
    } catch(e){alert(e.message);}
  };
  let findAndToggleChecked = function(id){
    this.findById(id).checked = !this.findById(id).checked;
  };
  let findAndUpdateName = function(id, newName){
    try{
      Item.validateName(newName);
      this.findById(id).name = newName;
      shoppingList.render();
    } catch(e){console.log(`Cannot update name: ${e.message}`);}
  };
  return {items,
    hideCheckedItems,
    searchTerm, findById, addItem, findAndToggleChecked, findAndUpdateName};
}());




/*
function findById(input){
  function isId(item){
    return input === item.id;
  }
  return store.items.find(isId);
}

function addItem(name){
  try{
    Item.validateName(name);
    store.items.push(Item.create(name));
    shoppingList.render();
  } catch(e){alert(e.message);}
}
*/