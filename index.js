/**
 * https://learn.javascript.ru/nullish-operators
 */

let width = null;
// width = 0;
console.log( `Width: ${width ?? 30}vmax` );

let height = null;
// height = 0;
height ??= 10;
console.log( `Width: ${height}vmax` );

