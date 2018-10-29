'use strict';

function jediName (firstName, lastName) {
  return `${lastName.slice(0,3)}${firstName.slice(0,2)}`;
}

const result = jediName('Beyonce', 'Knowles');

console.log(result);

const beyond = (num) => {
  if (num === Infinity){
    console.log('And beyond');
  }
  if (num > 0 && num < Infinity){
    console.log('To infinity');
  }
  if (num < 0 && num > Infinity){
    console.log('To negative infinity');
  }
  if (num === 0){
    console.log('Staying home');
  }

};

beyond(Infinity);

function decode(word) {
  if (word[0] === 'a') {
    return word[1];
  }
  else if (word[0] === 'b') {
    return word[2];
  }
  else if (word[0] === 'c') {
    return word[3];
  }
  else if (word[0] === 'd') {
    return word[4];
  }
  else {
      return ' ';
  }
}

function decodeString(string) {
    return string.split(' ').map(word => decode(word)).join('');

}

let codeBreaker = decodeString('craft block argon meter bells brown croon droop');
console.log(codeBreaker);

const daysOfMonth = (month, leapYear) => {
  let daysCount;
  switch(month) {
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
      daysCount = 31;
      break;

    case 'April':
    case 'June':
    case 'September':
    case 'November':
      daysCount = 30;
      break;

    case 'February':
      if (leapYear) {
        daysCount = 29;
      }else{
        daysCount = 28;
      }
      break;

    default:
      throw new Error('Must provide a valid month.');
      break;
  }
  return `${month} has ${daysCount} days.`;
}
console.log(daysOfMonth("February", true))
