#### 当路由跳转使用vuex作为状态管理，在跳转后的页面刷新保证数据不丢失的方法

#### 方案一
在提交数据上去后，在mutations中直接使用sessionStorage存储数据。
1. 第一个页面代码如下
```vue
<template>
  <div class="home">
    <button @click="goAbout">关于</button>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: 'Home',
  methods: {
    ...mapMutations(['setUsername']),
    goAbout(){
      this.setUsername('张三') // 设置存储的值
      this.$router.push('/About') // 路由跳转
    }
  }
}
</script>
```

2. 第二个页面
```vue
<template>
    <div>
        关于页面
        =======
        {{username}}
    </div>
</template>
<script>
    export default {
        name: "About",
        computed: {
            username(){
                 return sessionStorage.getItem('username') // 直接从sessionStorage中取
            }
        }
    }
</script>
<style scoped>

</style>
```
3. store文件中
```js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    username: ''
  },
  getters:{
    getUsername(state){
      return state.username
    }
  },
  mutations: {
    setUsername(state,value){
      state.username = value
      sessionStorage.setItem('username',value) // 直接存储
    }
  }
})

```

#### 方案二
使用第三方插件

1. 安装插件
```
npm install vuex-persistedstate --save
```

2. store中的配置
```js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import createPersistedState from "vuex-persistedstate" // 导入插件
export default new Vuex.Store({
  state: {
    username: ''
  },
  getters:{
    getUsername(state){
      return state.username
    }
  },
  mutations: {
    setUsername(state,value){
      state.username = value
    }
  },
  // 使用插件配置
  // 默认是存储到localStorage,此处将其变为sessionStorage
  plugins: [createPersistedState({
    storage: window.sessionStorage,
    reducer(value) {
      return {
        username: value.username
      }
    }
  })]
})

```

3. 第一个vue页面与方案一一致
4. 第二个页面获取数据的页面如下
```vue
<template>
    <div>
        关于页面
        --------
        {{getUsername}}
        =======
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "About",
        computed: {
            ...mapGetters(['getUsername'])
        }
    }
</script>
```