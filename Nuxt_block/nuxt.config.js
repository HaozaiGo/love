/*
 * @Description: xiaoHao
 * @Date: 2022-04-19 11:08:41
 * @LastEditTime: 2023-07-31 11:54:09
 * @FilePath: \Nuxt_block\nuxt.config.js
 */
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nuxt_block',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
    "animate.css",
    "@/assets/font/iconfont.css",
   
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/element-ui',}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],
  axios:{
    // baseURL:"http://146.56.208.175:3001",
    baseURL:"http://localhost:3001",  //开发
    // proxy:true
  },
  proxy:{
    // "/api":"http://localhost:3001"
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // extend webpack config
    // extend(config,ctx){
    //   if(ctx.isDev && ctx.isClient){
    //     config.module.rules.push({
    //       enforce:'pre',
    //       test:/\.(js|vue)$/,
    //       loader:'eslint-loader',
    //       exclude:/(node_modules)/
    //     })
    //     config.devtool = "#source-map"
    //   }
    // },
    transpile: [/^element-ui/], // 打包时不包含element-ui
      vendor: ["axios"]
    
  },
}
