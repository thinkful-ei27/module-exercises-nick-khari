'use strict';
const Item = (function(){
  const foo = 'bar';
  return {};
}());

function validateName (name) {
    try{
        if(name === '' || name === undefined){
          throw new Error;
        }
    } catch(error){alert('That is the wrong input');}
    
}
