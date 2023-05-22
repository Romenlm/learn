### call,apply,bind

#### 1. 作用

* 目前的应用都是基于改变函数执行的this指向，所以在使用call,apply,bind时必须是个函数
* call,apply,bind的核心理念是借用方法，借助已实现的方法，改变方法中数据的this指向，减少重复代码，节省内存

#### 2. 区别

##### call与apply的区别

* call从第二个参数开始都是传递给函数的
* apply的第二个参数是一个数组，将所有的参数放到一个数组中传递过去

##### call/apply与bind的区别

* call/apply改变了函数的上下文后马上执行该函数
* bind是返回改变了上下文后的函数，不执行该函数

返回值：

* call/apply返回fun的执行结果
* bind返回fun的拷贝，并指定了fun的this指向，保存了fun的参数

#### 3. 如何选择call和apply

* 参数数量/顺序确定就用call,参数数量/顺序不确定的话就用apply
* 可读性： 参数数量不多就用call,参数数量较多就用apply
* 参数集合已经是一个数组就用apply

#### 



