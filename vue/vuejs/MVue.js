/**
 * 编译指令类，根据不同的指令执行不同的方法
 */
const compileUtil = {
  // 考虑data.person.value情况
  getValue(expr, vm) {
    return expr
      .split(".")
      .reduce((data, currentValue) => data[currentValue], vm.$data);
  },
  setValue(expr, vm, inputValue) {
    return expr.split(".").reduce((data, currentValue) => {
      data[currentValue] = inputValue;
    }, vm.$data);
  },
  getContentVal(expr, vm) {
    return expr.replace(/\{\{(.+?)\}\}/g, (...args) => {
      return this.getValue(args[1], vm);
    });
  },
  /**
   * 编译v-text指令的方法
   * @param {*} node 节点
   * @param {*} expr 属性值
   * @param {*} vm vm对象
   */
  text(node, expr, vm) {
    let value;
    if (expr.indexOf("{{") !== -1) {
      value = expr.replace(/\{\{(.+?)\}\}/g, (...args) => {
        new Watcher(vm, args[1], (val) => {
          this.updater.textUpdater(node, this.getContentVal(expr, vm));
        });
        return this.getValue(args[1], vm);
      });
    } else {
      new Watcher(vm, expr, (val) => {
        this.updater.textUpdater(node, val);
      });
      value = this.getValue(expr, vm);
    }
    // value = this.getValue(expr,vm)
    this.updater.textUpdater(node, value);
  },
  model(node, expr, vm) {
    const value = this.getValue(expr, vm);
    // 绑定观察者，数据驱动视图
    new Watcher(vm, expr, (val) => {
      this.updater.modelUpdater(node, val);
    });

    // 视图驱动数据
    node.addEventListener("input", (e) => {
      // 设置值
      this.setValue(expr, vm, e.target.value);
    });
    this.updater.modelUpdater(node, value);
  },
  html(node, expr, vm) {
    const value = this.getValue(expr, vm);
    // 绑定观察者
    new Watcher(vm, expr, (val) => {
      this.updater.htmlUpdater(node, val);
    });
    this.updater.htmlUpdater(node, value);
  },
  /**
   * 处理事件
   * @param {*} node  节点
   * @param {*} expr 绑定的值，如方法名
   * @param {*} vm
   * @param {*} evenName 事件名称
   */
  on(node, expr, vm, evenName) {
    let fn = vm.$options.methods && vm.$options.methods[expr];
    node.addEventListener(evenName, fn.bind(vm), false);
  },
  bind(node, expr, vm, attrName) {
    const value = this.getValue(expr, vm);
    new Watcher(vm, expr, (val) => {
      node.setAttribute(attrName, val);
    });
    node.setAttribute(attrName, value);
  },
  /**
   * 更新的对象
   */
  updater: {
    /**htmlStr
     * 将v-text的值替换到节点子元素
     * @param {*} node 绑定有v-text的节点
     * @param {*} value 值
     */
    textUpdater(node, value) {
      node.textContent = value;
    },
    htmlUpdater(node, value) {
      node.innerHTML = value;
    },
    modelUpdater(node, value) {
      node.value = value;
    },
  },
};
/**
 * 指令解析类，解析template，将其变为标准html
 */
class Compile {
  constructor(el, vm) {
    this.el = this.isElementNode(el) ? el : document.querySelector(el);
    this.vm = vm;
    // 1. 将获取文档碎片对象，放入内存中会减少页面的回流和重绘,文档碎片页是在缓存中存在
    const fragment = this.node2Fragment(this.el);
    // 2. 编译模板
    this.compile(fragment);
    // 3. 追加子元素到根元素
    this.el.appendChild(fragment);
  }

  /**
   * 编译模板
   * @param fragment
   */
  compile(fragment) {
    // 1. 获取子节点
    const childNode = fragment.childNodes;
    childNode.forEach((child) => {
      if (this.isElementNode(child)) {
        // 是元素节点，编译元素节点
        this.compileElement(child);
      } else {
        // 表示文本节点，编译文本节点
        this.compileText(child);
      }
      if (child.childNodes && child.childNodes.length) {
        this.compile(child);
      }
    });
  }

  /**
   * 编译标签元素
   * @param node 要编译的元素
   */
  compileElement(node) {
    // 元素属性强制转换为一个数组
    const attributes = [...node.attributes];
    attributes.forEach((item) => {
      console.log(item);
      const { name, value } = item;
      if (this.isDirective(name)) {
        // 是一个指令
        const [, dirctive] = name.split("-"); // 使用‘-’分割字符串，只要第二个数组数据即可
        const [dirName, eventName] = dirctive.split(":"); // 考虑on:click情况，dirName获取的值为text,html,model,on
        // 更新数据，数据驱动视图
        compileUtil[dirName](node, value, this.vm, eventName);
        // 删除有指令的标签属性
        node.removeAttribute("v-" + dirctive);
      } else if (this.isEventName(name)) {
        let [, eventName] = name.split("@");
        compileUtil["no"](node, value, this.vm, eventName);
      } else if (this.isBind(name)) {
        let [, bindName] = name.split(":");
        compileUtil["bind"](node, value, this.vm, bindName);
        node.removeAttribute(":" + bindName);
      }
    });
  }

  /**
   * 编译文本元素
   * @param node 要编译的元素
   */
  compileText(node) {
    const content = node.textContent;
    if (/\{\{.+?\}\}/.test(content)) {
      compileUtil["text"](node, content, this.vm);
    }
  }

  /**
   * 判断是否为指令
   * @param attr 指令属性
   * @returns {boolean|boolean|*} 返回true 或false
   */
  isDirective(attr) {
    // 判断是否以v-开头的
    return attr.startsWith("v-");
  }
  isBind(attr) {
    return attr.startsWith(":");
  }
  /**
   * 判断是否为'@'事件
   * @param {*} attr
   */
  isEventName(attr) {
    // 判断是否以v-开头的
    return attr.startsWith("@");
  }
  /**
   * 创建文档碎片页
   * @param el 要添加到文档碎片页的节点
   */
  node2Fragment(el) {
    const f = document.createDocumentFragment();
    let firstChild;
    // 将子节点添加到文档碎片页中
    while ((firstChild = el.firstChild)) {
      f.appendChild(firstChild);
    }

    return f;
  }
  /**
   * 判断是否为dom节点
   * @param el 要判断的节点
   * @returns {boolean} 返回true或false
   */
  isElementNode(el) {
    return el.nodeType === 1;
  }
}

/**
 * vue实现入口类
 */
class MVue {
  constructor(options) {
    this.$el = options.el;
    this.$data = options.data;
    this.$options = options;
    if (this.$el) {
      // 1. 实现一个数据的观察者
      new Observer(this.$data);
      // 2. 实现一个指令解析器
      new Compile(this.$el, this);
      this.proxyData(this.$data)
    }
  }
  /**
   * 在方法中或钩子函数中使用this,代理this
   */
  proxyData(data){
    for(const key in data){
      Object.defineProperty(this,key,{
        get(){
          return data[key]
        },
        set(newValue){
          data[key] = newValue
        }
      })
    }
  }
}
