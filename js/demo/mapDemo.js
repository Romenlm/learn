// let map = new Map()
//
// map.set(1,'one')
// map.set('1','一')
// console.log(map.get(1))
// console.log(map.get('1'))
//
// console.log(map.has(2))
// console.log(map.size)

let map = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',    50]
]);

for(let key of map.keys()){
  console.log(key)
}

console.log('----------------')
for(let value of map.values()){
  console.log(value)
}

console.log('----------------')
for (let obj of map.entries()){
  console.log(obj)
}
// 效果与上方一样
for (let obj of map){
  console.log(obj)
}