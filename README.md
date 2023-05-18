# 开始学习react的代码



## Available Scripts

In the project directory, you can run:

## 启动项目的命令
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## 笔记记录

### 三、路由的基本使用
1. 明确好界面中的导航区、展示区
2. 导航区的`a`标签改为`Link`标签 `<Link to="/xxxxx">Demo</Link>`
3. 展示区写`Route`标签进行路径的匹配 `<Route path="/xxxx" component={Demo}>`
4. `<App>`的最外侧包裹的是`<BrowserRouter>`或`<HashRouter>`

### 四、路由组件与一般组件
1. 写法不同：
- 一般组件: `<Demo/>`
- 路由组件: `<Route path="/demo" component={Demo}>`
2. 存放位置不同:
- 一般组件: `components`
- 路由组件: `pages`
3. 接收到`props`不同:
- 一般组件: 写组件标签时传递什么，就能收到什么
- 路由组件: 接收到三个固定的属性
```json
history: 
    go: ƒ go(n)
    goBack: ƒ goBack()
    goForward: ƒ goForward()
    push: ƒ push(path, state)
    replace: ƒ replace(path, state)

location: 
    pathname: "/about"
    search: ""
    state: undefined

match: 
    params: {}
    path: "/about"
    url: "/about"

```

### 五、NavLink与封装NavLink
1. `NavLink`可以实现路由链接的高亮,通过`activeClassName`指定样式名
2. 标签体内容是一个特殊的标签属性
3. 通过`this.props.children`可以获取标签体内容

### 六、Switch的使用
1. 通常情况下，`path`和`component`是一一对应的关系
2. `Switch`可以提高路由匹配效率（单一匹配）

### 七、解决多级路径刷新页面样式丢失问题
1. `public/index.html`中引入样式时不写 `./ `写`/ `（常用）
2. `public/index.html`中引入样式时不写` ./ `写 `%PUBLIC_URL%` （常用）
3. 使用`HashRouter`

### 八、路由的严格匹配与模糊匹配
1. 默认使用的是模糊匹配 输入的路径必须包含要匹配的路径，顺序要一致
2. 开启严格匹配:`<Route exact path="/home" component={Home} />` 使用`exact`字段
3. 严格匹配不要随便开启，需要再开，否则有时候会导致无法匹配二级路由

### 九、Redirect的使用
1. 一般写在所有路由的最下方,当没有匹配到路由的时候,跳转`Redirect`到指定的路由
2. 举例:
```
<Switch>
    <Route  path="/about" component={About} />
    <Route  path="/home" component={Home} />
    <Redirect to="/home"></Redirect>
</Switch>
```

### 十、嵌套路由
1. 注册子路由时要写上父路由点path值
2. 路由的匹配是按照注册路由的顺序进行的

### 十一、向路由组件传递参数
1. params参数
- 路由链接(携带参数)：` <Link to='/home/message/detail/01/tom'>详情数据</Link>`
- 注册路由(接收参数): `<Route path="/home/message/detail/:id/:name" component={Detail}></Route>`
- 接收参数： `const {id,title} = this.props.match.params;`
2. search参数
- 路由链接(携带参数)：` <Link to='/home/message/detail/?id=01&name=tom'>详情数据</Link>`
- 注册路由(接收参数): `<Route path="/home/message/detail" component={Detail}></Route>`
- 接收参数： `const {id,title} = this.props.location.search;`
- 备注：获取到`search`是`urlencoded`编码的字符串，需要用querystring解析，引入方式`import qs from 'qs'`
3. state参数
- 路由链接(携带参数)：` <Link to={{pathname:'/home/message/detail',state:{name:'tom',id:1}}}>详情数据</Link>`
- 注册路由(接收参数): `<Route path="/home/message/detail" component={Detail}></Route>`
- 接收参数： `const {id,title} = this.props.location.state;`
- 备注：刷新也可以保留住参数


### 十二、编程式路由导航
借助`this.props.history`对象上的`api`对操作路由跳转,前进,后退
- this.props.history.push()  记录历史
- this.props.history.replace()  不记录
- this.props.history.goBack()  返回
- this.props.history.goForward()  前进
- this.props.history.go()  前进(正数)或后退(负数)n步


### 十三、BrowserRouter与HashRouter的区别
1. 底层原理不一样:
        `BrowserRouter`使用的是`h5`的`history api`，不兼容ie9及以下版本
        `HashRouter`使用的是`url`的哈希值
2. path表现形式不一样
        `BrowserRouter`的路径中没有`#`，`eg:http://localhost:3000/demo/test`
        `HashRouter`的路径包含`#`,`eg:http://localhost:3000/#/demo/test`
3. 刷新后对路由`state`参数的影响
        (1).`BrowserRouter`没有任何影响，因为`state`保存在`history`对象里
        (2).`HashRouter`刷新后会导致路由`state`参数的丢失
4. 备注:`HashRouter`可以用于解决一些路径错误相关的问题

### 十四、antd的引入
1. 安装依赖:`npm add react-app-rewired`
2. 修改`package.json`
```
  "scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test"
  },
```
3. 根目录创建craco.config.js（5.0版本）


