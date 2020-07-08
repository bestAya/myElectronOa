module.exports = {
  configureWebpack: {
    output: {
      libraryExport: "default",
    },
    externals: {
      vue: "Vue",
      "element-ui": "ELEMENT",
    },
  },
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        win: {
          icon: "./public/favicon.png",
          target: 'nsis'
        },
        mac: {
          icon: "./public/favicon.png",
        },
        nsis: {
          oneClick: false,
          allowToChangeInstallationDirectory: true
        },
      },
    },
  },
  devServer: {
    open: false,
    proxy: {
      "/apis": {
        target: process.env.VUE_APP_BASE_API, // 'http://192.168.1.8:8094'
        // target: 'http://apisaas.coolrong.net', //源地址`
        ws: true,
        // eslint-disable-next-line prettier/prettier
        changeOrigin: true,
        pathRewrite: {
          "^/apis": "", // 路径重写
        },
      },
    },
  },
};
