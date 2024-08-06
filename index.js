/**
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
 */

//? padStart()
const string = "Test string";
Array.from(string).map((latter, index) => console.log( `${''.padStart(index)}${latter}` ));