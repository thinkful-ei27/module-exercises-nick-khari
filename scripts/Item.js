'use strict';
const Item = (function(){
  return {validateName, create};
}());

function validateName(input) {
  if(input === '' || input === undefined){
    throw new TypeError('Name does not exist');
  }
} 


function create(name) {
  return {id: cuid(),
    name: name,
    checked: false
  };
}

// eslint-disable-next-line no-console
