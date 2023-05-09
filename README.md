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