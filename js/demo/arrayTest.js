
const arr = [1,2,3,4,5]

let a = arr.reduce((num,item,index,arrs)=>{
  console.log('------------')
  console.log(num)
  console.log('+++++++')
  console.log(index)
  return item
},10)

console.log(a)