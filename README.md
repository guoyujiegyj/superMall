# supermall

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
### 项目目录结构
src: 
1：views:主要是本项目的组件文件。
2：components: 分为contents和common两个文件夹。contents里是抽离的本项目的公共组件。
common是任何项目都可以复用的组件。
3：common文件。是公共的工具类，比如抽离的常量，公共的工具方法。
4：network文件夹。对于网络请求框架的封装。