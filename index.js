/**
 * https://learn.javascript.ru/iterable
 */

//? Array.from
const string = "Test string";
Array.from(string).map((latter, index) => console.log( `${''.padStart(index)}${latter}` ));

//? 
// const obj = {
//   index: 0,
//   // gap() { return ''.padStart(this.index++) }, 
// }
// const arr = Array.from(string, latter => `${''.padStart(obj.index++)} ${latter.toUpperCase()}`, obj )
// arr.map( item =>  console.log(item));



//? Slice for emoji
// console.log( str.slice(1, 3) ); //!Not Work
const slice = (str, start, end) => Array.from(str).slice(start, end).join('');
let str = '𝒳😂𩷶';
console.log( slice(str, 1, 3) );
