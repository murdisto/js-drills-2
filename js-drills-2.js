'use strict';

function jediName (firstName, lastName) {
 return `${lastName.slice(0,3)}${firstName.slice(0,2)}`;
}

const result = jediName('Beyonce', 'Knowles');

console.log(result);

const beyond = (num) => {
  if (num === Infinity){
    console.log("And beyond")
  }
  if (num > 0 && num < Infinity){
    console.log("To infinity")
  }
  if (num < 0 && num > Infinity){
    console.log("To negative infinity")
  }
  if (num === 0){
    console.log("Staying home")
  }

}

beyond(Infinity);
