### JavaScript执行上下文和执行栈



#### 1. 执行上下文

##### 什么是执行上下文

* 就是当前JavaScript代码被解析和执行时所在环境的抽象概念，JavaScript中运行任何的代码都是在执行上下文中运行。

##### 执行上下文的类型

* 执行上下文的类型有3种

1. 全局执行上下文：这是默认的，最基础的执行上下文。不在任何函数中的代码都位于全局执行上下文中，主要做两件事，一、创建一个全局对象，如window或global。二、将`this` 指针指向全局对象。一个程序中只能存在一个全局执行上下文。
2. 函数执行上下文： 每次函数调用时，都会为函数创建一个新的执行上下文，每个函数都拥有自己的执行上下文。但是只有在函数被创建的时候才会被创建。
3. Eval函数执行上下文: 在运行eval函数中的代码也获得自己的执行上下文。

#### 2. 执行栈

* 一个具有先进后出的结构。用于存储代码执行期间创建的所有执行上下文。
* JavaScript引擎首次读取脚本时，会创建一个全局执行上下文并将其推入当前的执行栈，每当发生一个函数调用，引擎都会为该函数创建一个新的执行上下文并将其推到当前执行栈的顶端。
* 引擎会运行执行上下文在执行栈顶的函数，函数运行完，对其执行上下文将会从执行栈中弹出，上下文控制权将移到当前执行栈的下一个执行上下文。

#### 3. 执行上下文的阶段

* 执行上下文分为两个阶段。一个是创建阶段，另一个是执行阶段

##### 创建阶段

* 任意js代码被执行前，执行上下文处于创建阶段，创建阶段发生三件事

  1. 确定this,也被称为this binding
  2. lexicalEnvironment (词法环境)组件被创建
  3. variavbleEnvironment(变量环境)组件被创建

  ###### this binding 

  * 在全局执行上下文中，this的值指向全局对象，浏览器中window，node中是global。在函数执行上下文中，this取决于函数的调用方式，如果它被一个对象引用调用，那么this的值被设置为该对象。否知this被设置为全局对象或undefined

  ###### 词法环境（Lexical Environment）

  * 是一种规范类型，基于js代码的词法嵌套结构来定义表示符与特定变量和函数的关系，词法环境有环境记录和可能为空引用的外部词法环境组成。简单来说词法环境就是一个包含标识符变量映射的结构。（此处的表示符表示变量/函数的名称）

  * 词法环境中有两部分组成，

    1. 环境记录：是存储变量和函数声明的实际位置
    2. 对外部环境的引用： 表示它可以访问其他词法环境

  * 词法环境有两种类型：

    1. 全局环境： 是一个没有外部环境的词法环境，外部环境引用为null。拥有一个全局对象window和关联的方法和属性，还有用户定义的全局变量。
    2. 函数环境：在函数中定义的变量被存储在环境记录中，对外部环境引用可以是全局环境也可以包含内部函数的外部函数变量。还包含arguments

    环境记录也有两种类型：

    1. 声明函数记录存储变量，函数和参数
    2. 对象环境记录用于定义在全局执行上下文中出现的变量和函数的关联。

    ###### 变量环境

    * 也是一个词法环境，因此拥有词法环境的所有属性。在 ES6 中，**LexicalEnvironment** 组件和 **VariableEnvironment** 组件的区别在于前者用于存储函数声明和变量（ `let` 和 `const` ）绑定，而后者仅用于存储变量（ `var` ）绑定。

  ##### 执行阶段

  * 完成对所有变量的分配，最后执行代码。

