const obj = {
  name: '张山'
}

let desc = Object.getOwnPropertyDescriptor(obj,'name')
console.log(desc) /// { value: '张山', writable: true, enumerable: true, configurable: true }

Object.defineProperty(obj,'name',{ value: '张山', writable: false, enumerable: false, configurable: false })

console.log(obj.name)

obj.name = '李四'
console.log(obj.name) // 修改失败，不能修改，输入还是张山



console.log(obj)