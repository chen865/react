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