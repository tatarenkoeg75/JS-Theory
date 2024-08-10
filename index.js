/**
 * https://learn.javascript.ru/map-set
 */

//? Map
console.log(`
  new Map()
  `);
const map = new Map();
map.set('one', 1);
map.set(2, 'two');
map.set(true, false);
map.set('wrong', null);
console.log(map);

if ( map.has('wrong') ) map.delete('wrong');
console.log(map);

console.log( 'true->', map.get(true) );
console.log( 'size:', map.size );

map.clear();
console.log(map);

const keyObjectFirst = { id: 1, name: 'one' };
const keyObjectSeccond = { id: 2, name: 'two' };
map.set(keyObjectFirst, 'FIRST');
map.set(keyObjectSeccond, 'SECCOND');
console.log(map);
console.log( map.get(keyObjectFirst) );

map.clear();

//? Call chain
map
  .set('one', false)
  .set(3, 'test')
  .set(true, 1e6);
console.log(map);

//?
for ( let items of map.keys() ) console.log(items);
for ( let items of map.values() ) console.log(items);
for ( let items of map.entries() ) console.log(items);
map.forEach((val, key, map) => console.log(val, key, ) );

//? Map from arr and obj
const arr = [['one', 1], ['two', 2], ['three', 3]];
const newMap = new Map(arr);
console.log('arr -> map', newMap.get('two') );

const obj = {id: 0, name: 'Name', mode: 'test'};
console.log( Object.entries(obj) );
console.log('obj -> map', new Map(Object.entries(obj)) );

console.log( 'map->obj', Object.fromEntries(map.entries()) );
console.log( 'map->obj', Object.fromEntries(map) );

console.log(`
  new Set()
`);

const initArray = ['one', 'two', 'three', 'foour', 'five', 'five', 'foour', 'three', 'two', 'one', ];
const set = new Set();
initArray.map(item => set.add(item));
console.log( set );

for ( item of set ) console.log('>', item);

for ( let items of set.keys() ) console.log('keys>', items);
for ( let items of set.values() ) console.log('values>', items);
for ( let items of set.entries() ) console.log('entries>', items);
set.forEach((val, valAgain, set) => console.log(val, valAgain, ) );

console.log(`
  Examples
`);

const getUnique = arr => Array.from(new Set(arr));
console.log( getUnique([1, 2, 3, 4, 5, 5, 4, 3, 2, 1, ]) );
