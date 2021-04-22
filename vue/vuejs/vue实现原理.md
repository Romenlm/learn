
#### 数据劫持
* vue采用的是数据劫持结合发布者-订阅者模式，通过Object.defineProperty()来劫持各个属性的setter,getter.在数据变化时发布消息给订阅者，触发响应的监听回调


面试题
阐述一下你所理解的mvvm响应试原理

vue是采用数据劫持配合发布者-订阅者的方式，通过Object.defineProperty()来劫持各个属性的setter和getter，在数据变动时发布消息给依赖收集器，去通知观察者，做出对应的回调函数去更新视图

MVVM作为绑定的入口，整合Observer,compile和watcher三者，通过Observer来监听model的数据变化表，通过compile来解析编译模板指令，最终利用watcher搭起Observer，compile之间的通信桥梁，达到数据变化=》视图更新。视图交互变化=>数据model变更的双向绑定效果