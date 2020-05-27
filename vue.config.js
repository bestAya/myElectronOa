module.exports = {
    configureWebpack: {
        externals: {
            'vue': 'Vue',
            'element-ui': 'ELEMENT'
        }
    },
    devServer: {
        open: false,
        proxy: {
          '/apis': {
            target: process.env.VUE_APP_BASE_API, // 'http://192.168.1.8:8094'
            // target: 'http://apisaas.coolrong.net', //源地址`
            ws: true,
            // eslint-disable-next-line prettier/prettier
            changeOrigin: true,
            pathRewrite: {
              '^/apis': '' // 路径重写
            }
          }
        }
      },
}