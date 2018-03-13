1.搭建vue项目结构，配置express作为前端开发服务器
==============================
参考链接 https://vue-loader.vuejs.org/zh-cn/features/css-modules.html


2.配置babel插件
===========
参考链接
babel官网 http://babeljs.io/docs/setup#installation
另一篇 https://segmentfault.com/a/1190000008159877

# 3.构建webpack vue开发环境

参考链接
https://segmentfault.com/a/1190000010265972
https://segmentfault.com/a/1190000008678236


# 4.代码的live reload和HMR模块热替换功能的实现

express+webpack-dev-middleware+webpack_hot-middleware
参考链接
 http://acgtofe.com/posts/2016/02/full-live-reload-for-express-with-webpack
 https://github.com/webpack-china/awesome-webpack-cn

# 5 报错
#### 1.Module build failed: Error: Cannot find module 'vue-template-compiler'
#### 2.vue做的单页面组件（单文件组件）不起作用，webpack已经打包成功，页面中没有结果http://blog.csdn.net/jiang7701037/
#### 3. Unknown custom element: <router-view> - did you register the component correctly? For recursive components, make sure to provide the "name" option
