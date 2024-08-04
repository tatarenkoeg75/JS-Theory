/**
 * https://learn.javascript.ru/string
 */

//? Tab
console.log("String \tTab noTab");


//? First Upper case
const upperFirst = str => str && typeof(str) === 'string' 
  ? str[0].toUpperCase() + str.slice(1)
  : str;
console.log( upperFirst('qwas') );
console.log( upperFirst(1) );


//? Truncating
const truncate = (str, maxLength) => str && typeof(str) === 'string' && str.length > maxLength
  ? `${str.slice(0, maxLength-1)}…`
  : str;
console.log( truncate('This string will be trancated', 10) );
console.log( truncate('This string will be trancated', 10).length );
console.log( truncate(1, 10) );
console.log( truncate('', 10) );


