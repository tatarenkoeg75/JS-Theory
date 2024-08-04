/**
 * https://learn.javascript.ru/array
 * https://learn.javascript.ru/array-methods
 */

//? .at()
const nums = ['one', 'two', 'three', 'four', 'five', ];
console.log( nums[nums.length - 1] );
console.log( nums.at(-1) );


//? .foreach (full)
['one', 'two', 'three', 'four', 'five', ]
  .forEach( (item, index, arr) => console.log(++index, item, arr ) );


//? .sort()
console.log(
  [ {id: 3, name: 'one',},
    {id: 1, name: 'two',},
    {id: 2, name: 'three',},
  ]
    .sort((a, b) => (a.id - b.id))
);


//? .revers()
console.log(
  [ {id: 3, name: 'one',},
    {id: 1, name: 'two',},
    {id: 2, name: 'three',},
  ]
    .reverse()
);


//? toCamelStyle
const toCamelStyle = str => str
  .split('_')
  .map((item, index) => index ? item[0].toUpperCase()+item.slice(1) : item )
  .join('');
console.log( toCamelStyle('var_test_name') );


//? make copy of array
const standart = ['one', 'two', 'three', 'four', 'five', ];
console.log( standart.slice().sort() );
console.log( standart );


//? shaffle
const array = [1, 2, 3, 4, 5, 6, 7, ];
//! uncorrect: const shaffle = arr => arr.sort(() => Math.random()-0.5); 
// console.log(shaffle(array));
const shaffle = arr => {
  for ( let i = arr.length - 1; i > 0; i-- ) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
shaffle(array); console.log(array);
shaffle(array); console.log(array);


//? getAverage
const getAverage = arr => arr.reduce((sum, cur) => sum + cur, 0) / arr.length;
console.log( getAverage([1, 2, 3, 4, 5, 6, 7, ]) );
