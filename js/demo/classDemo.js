class CoffeeMachine {
    _waterAmount = 0; // 受保护的属性，在外界可以使用实例对象访问到。不是在语言级别强制实施的，但是程序员之间有一个众所周知的约
    #waterLimit = 200; // 私有属性，外部不能访问，只能在类的内部被访问
    get waterAmount() {
        return this._waterAmount
    }

    getWaterLimit() {
        return this.#waterLimit
    }
    /**
     * @description: 通过方法来设置类中的私有属性
     * @param {*} waterLimit 属性的赋值，可进行拦截
     * @return {*}
     */
    setWaterLimit(waterLimit) {
        if (waterLimit > 0) {
            this.#waterLimit = waterLimit
        } else {
            console.log('waterLimit不能小于0')
        }
    }
}

let coffee = new CoffeeMachine()
coffee._waterAmount = '1'// 也可以使用实例对象设置
console.log(coffee._waterAmount) // 使用实例对象访问
console.log(coffee.waterAmount) // 使用方法访问

coffee.setWaterLimit(100)
console.log(coffee.getWaterLimit()) // 通过方法访问内部私有属性