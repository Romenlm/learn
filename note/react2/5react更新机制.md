1. react渲染流程

   jsx-->虚拟dom-->真实dom

2. 更新流程

   props/state改变 --> render函数重新执行 --> 产生新的dom树 --> 新旧dom树进行diff --> 计算出差异进行更新 --> 更新到真实dom



### 如果数据改变，render会重新调用，子组件也会重新调用，消耗性能。

* 优化方法,使用shouldComponentUpdate（nextProps, nextState）生命周期函数函数

  ```js
  // 第一个参数表示传递过来参数即将要变化的值，第二个参数表示当前组件中即将要改变的属性值
  // 这个方法可以提高组件中的render的渲染性能
  shouldComponentUpdate(nextProps,nextState){
  	if(nextProps.content !== this.props.content){
  		return false
  	} else {
  		return true
  	}
  }
  ```

  * 鉴于每次都需要写上面代码，比较麻烦。所以优化方案是创建组件的时候继承Component修改为PureComponent,PureComponent会每次自动判断是否需要执行组件render函数。

    ```js
    class Dome extends PureComponent {
        render() {
            return ()
        }
    }
    ```

    PureComponent可以解决类组件，但是不能解决函数式组件的重新渲染。要解决此问题需要使用memo

    ```js
    import React, {Component,memo} from 'react'
    
    // 函数式组件使用memo
    const Footer = memo(()=>{
      return (
        <div>
          <span>底部</span>
        </div>
      )
    })
    
    ```

    【推荐使用上面方法写类组件和函数式组件】