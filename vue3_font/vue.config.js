// 配置文件
const path = require('path');
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);
const resolve = (dir) => path.join(__dirname, dir);
module.exports = {
    // entry: ["babel-polyfill", "./main/js"]
    publicPath: process.env.NODE_ENV === 'production' ? '/dist' : '/', //公共路径
    indexPath: 'index.html', //相对于打包路径index.html路径
    outputDir: process.env.outputDir || 'dist', //'dist'生产环境构建文件的目录
    assetsDir: 'static', //相对于outputDir静态资源（js,css,fonts）目录 静态资源
    lintOnSave: false, //是否开发环境下通过eslint-loader每次保存lint代码
    runtimeCompiler: true, //是否使用包含运行编译器的Vue构建版本
    productionSourceMap: !IS_PROD, //生产环境的source map
    parallel: require('os').cpus().length > 1, //是否Babel或TypeScript使用thread-loader，该选项在系统的CPU有多于一个内核自动启动，仅用于生产构建
    pwa: {}, //向PWA插件传递选项
    chainWebpack: config => {
        config.resolve.symlinks(true); //热更新失效
        // 如果使用多页面打包，使用vue inspect --plugins查看html是否在结果数组中
        config.plugin('html').tap(args => {
            // 修复 Lazy loading routes Error
            args[0].chunksSortMode = "none";
            return args;
        });
        config.resolve.alias //添加别名
            .set('@', resolve('src'))
            .set('@assets', resolve('src/assets'))
            .set('@components', resolve('src/components'))
            .set('@store', resolve('src/store'))
    },
    /*css: {
        extract: IS_PROD,
        requireModuleExtension: false, //去掉文件名中拿到.module
        loaderOptions: {
            //给less-loader传递less相关配置
            less: {
                //'globalVars'定义全局对象，可以加入全局变量
                globalVars: {
                    primary: '#333'
                }
            }
        }
    },*/
    devServer: {
        overlay: { //让浏览器overlay同时显示警告和错误
            warnings: true,
            errors: true
        },
        host: "localhost",
        port: 8083, //端口号
        https: false, //https:{type:Boolean}
        open: true, //配置后自动启动浏览器
        hotOnly: true, //热更新
        proxy: {
            //配置多个代理
            "/proxy": {
                target: "http://203.195.129.113",
                // target: "http://localhost:3000",
                changeOrigin: true,
                ws: true,
                //websocket支持
                secure: false,
                pathRewrite: {
                    "^/proxy": '/'
                }
            },
            // "/elseIp": {
            //     target: "http://localhost:3000",
            //     changeOrigin: true,
            //     secure: false,
            //     pathRewrite: {
            //         "^/elseIp": "/"
            //     }
            // }
        }
    }
}