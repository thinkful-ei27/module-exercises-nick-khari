'use strict';
const Item = (function(){
  const foo = 'bar';
  return {};
}());

function validateName(name) {
    try{
        if(name === '' || name === undefined){
          throw new Error;
        }
    } catch(error){alert('Name does not exist');}
}

function create(name) {
    let obj = {id: cuid(),
    name: name,
    checked: false
  };
    return obj;
}

console.log(create('Bilbo Baggins'));