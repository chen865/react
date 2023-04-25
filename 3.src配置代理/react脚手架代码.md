# reacta脚手架代理配置说明

## 方法一
> 在package.json里追加下面的内容

```json
"proxy":"http://localhost:99"
```

说明：
1、配置简单，前端请求可不带前缀
2、不能配置多个
3、工作方式：3000端口找不到就会转发给99端口

## 方法二
> 创建一个setupProxy.js文件
配置内容如下

```json
const {createProxyMiddleware} = require('http-proxy-middleware')

// 注意这里的写法，必须是写成这个样子不然会报错
module.exports = function (app) {
    app.use(
        // 有api1前缀就触发转发
        createProxyMiddleware('/api1', {
            // 请求转发
            target: 'http://localhost:99',
            // 控制服务器收到的响应头的host字段的值
            changeOrigin: true,
            //重写请求路径 因为服务器的路径无api1,需要替换调
            pathRewrite: { '^/api1': '' }
        })
    )
}
```