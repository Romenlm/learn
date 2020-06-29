let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null,
  gender: undefined,
  fun(){
    console.log('我是函数')
  }
};

let json = JSON.stringify(student);
console.log(json)