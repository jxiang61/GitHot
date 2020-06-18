实战课[最新版react native+redux打造高质量上线app](https://coding.imooc.com/class/304.html)

**温馨提示：**

>课程最新升级第4章、5章的代码在[for_future](https://git.imooc.com/coding-304/GitHub_Advanced/src/for_future)单独分支上。

**号外号外，为了帮助大家更好的学习RN，我们对课程进行更新，算是送个小伙伴们的节后礼物**


>课程已升级适配react-native 0.6x以及新版react-navigation：

传送门：
- [react-native 0.6x升级适配说明](https://git.imooc.com/coding-304/GitHub_Advanced/src/master/doc/react-native-0.6x-upgrade-tutorial.md)
- [新版react navigation 升级适配说明](https://coding.imooc.com/lesson/304.html#mid=35306)
- [适配了react navigation 5x的项目代码](https://git.imooc.com/coding-304/GitHub_Advanced/src/5x)


## 概述
- 课程文档查看[doc](https://git.imooc.com/coding-304/GitHub_Advanced/src/master/doc);
- 课程中所用到的demo查看[demo](https://git.imooc.com/coding-304/GitHub_Advanced/src/master/demo);
- 更多demo可查看[demo](https://github.com/crazycodeboy/RNStudyNotes/tree/master/Demo);
- [各章节源码和课件查看指南](https://git.imooc.com/coding-304/GitHub_Advanced#%E5%90%84%E7%AB%A0%E8%8A%82%E6%BA%90%E7%A0%81%E5%92%8C%E8%BE%85%E5%AF%BC%E6%96%87%E6%A1%A3%E6%9F%A5%E7%9C%8B%E6%8C%87%E5%8D%97)
- 课程源码，可通过git查看课程各章节的源码；


## 如何运行？

1. 在项目根目录执行`npm install`或`yarn install`；
2. 切换到ios目录下执行`pod setup`来拉取最新pod库；
3. ios目录下执行`pod install`来安装iOS项目所需要的依赖；
4. 然后运行 `react-native run-ios` 或 `react-native run-android`；
5. Ok,有问题可以提在课程[问答区提问](http://coding.imooc.com/learn/qa/304.html)哦；

## 课程辅导答疑

[http://coding.imooc.com/learn/qa/304.html](http://coding.imooc.com/learn/qa/304.html)

## 更新日志

#### 2020-04-25：混合开发案例代码和教程更新，[点我查看详情](https://git.imooc.com/coding-304/GitHub_Advanced/src/master/demo/RNHybrid)

- 适配"react-native": "0.62.2"及以上版本
- 适配Android X

#### 2020-04-19：为了给小伙伴们提供快速和稳定的访问服务，GitHubTrending升级上云了

- `"GitHubTrending": "^3.2.0",` -> `"GitHubTrending": "^5.0.0"`
	- [使用说明](https://www.devio.org/io/githubapp/html/api-help.html)


#### 2020-04-06：react-native、react-navigation等核心组件升级适配至最新版

- `"react-native": "0.61.2",` -> `"react-native": "0.62.1"`
- `"react-native-code-push": "^5.7.0"` -> `"react-native-code-push": "^6.2.0"` 以适配最新rn
- `"GitHubTrending": "^3.1.5"` -> `"GitHubTrending": "^3.2.0"`
- `react-navigation` 系列组件升级
- `react-native-sortable-listview` 升级替换成 `react-native-sortable-listview-newer` 以适配最新rn
- 启动屏由`LaunchImage`改为`LaunchScreen.storyboard` 以适配新版Xcode



### 2020-02-19：GitHubTrending 升级以适配最新[https://github.com/trending](https://github.com/trending)的版面
- 升级 GitHubTrending 到 ^3.1.5
- **升级后需要先卸载APP然后在运行**

### 2020-02-09：文档教程&代码更新，下面是具体的更新内容
- 升级react-navigation 到^4.1.1 及以上版本
- 教程《[react-navigation 5x安装及升级适配说明](https://git.imooc.com/coding-304/GitHub_Advanced/src/master/doc/RN0.6x_react_navigation5x%E7%AD%89%E5%8D%87%E7%BA%A7%E9%80%82%E9%85%8D%E8%AF%B4%E6%98%8E.md#2-react-navigation-5x%E5%AE%89%E8%A3%85%E5%8F%8A%E5%8D%87%E7%BA%A7%E9%80%82%E9%85%8D%E8%AF%B4%E6%98%8E)》更新

### 2020-02-02：文档教程&代码更新，下面是具体的更新内容
- 升级react-navigation 到^4.1.0 及以上版本
- 教程《[react-navigation 5x安装及升级适配说明](https://git.imooc.com/coding-304/GitHub_Advanced/src/master/doc/RN0.6x_react_navigation5x%E7%AD%89%E5%8D%87%E7%BA%A7%E9%80%82%E9%85%8D%E8%AF%B4%E6%98%8E.md#2-react-navigation-5x%E5%AE%89%E8%A3%85%E5%8F%8A%E5%8D%87%E7%BA%A7%E9%80%82%E9%85%8D%E8%AF%B4%E6%98%8E)》更新

### 2019-10-26：视频&代码更新，下面是具体更新的章节
* 带你了解react-navigation的前世今生
* 矢量图标（react-native-vector-icons）使用指南
* react-navigation安装使用指南
* 常用导航器之堆栈导航器createStackNavigator精讲
* 常用导航器之底部导航器createBottomTabNavigator精讲
* 常用导航器之顶部导航器createMaterialTopTabNavigator精讲
* 常用导航器之切换导航器createSwitchNavigator精讲
* 常用导航器之抽屉导航器createDrawerNavigator精讲
* 基于react-navigation的APP导航框架搭建-欢迎页
* 基于react-navigation的APP导航框架搭建-底部导航
* 基于react-navigation的APP导航框架搭建-顶部导航
* react-navigation高级应用之动态实现底部导航器
* react-navigation高级应用之动态实现顶部导航器
* Redux集成开发指南

#### 2019-09-08：重大升级！react-native 0.6x，react-navigation 4x 以及其他所有依赖库升级适配到最新版本

- [点我查看升级适配说明](https://git.imooc.com/coding-304/GitHub_Advanced/src/master/doc/react-native-0.6x-upgrade-tutorial.md)


#### 2019-06-21：优化详情页webview兼容问题；升级GitHubTrending；升级react-navigation & react-navigation-tabs到最新版-解决Android下点击切换问题；

- `"GitHubTrending": "^3.0.2"` -> `"GitHubTrending": "^3.1.1"`
- `"react-navigation": "^3.3.2"` -> `"react-navigation": "^3.11.0"`
- `"react-navigation-tabs": "^2.0.0-alpha.0"` -> `react-navigation-tabs": "^2.1.3"`

#### 2019-06-12：升级GitHubTrending 具体更新如下：

- `"GitHubTrending": "^3.0.1"` -> `"GitHubTrending": "^3.0.2"`

#### 2019-06-09：适配react-native:0.59.9 具体更新如下：

- `"react-native": "0.59.1"` -> `"react-native": "0.59.9"`
- `"@babel/core": "^7.4.0"` -> `"@babel/core": "^7.4.5"`
- `"@babel/runtime": "^7.4.0"` ->  `"@babel/runtime": "^7.4.5"`
- `"babel-jest": "^24.5.0"` -> `"babel-jest": "^24.8.0"`
- `"jest": "^24.5.0"` -> `"jest": "^24.8.0"`
- `"metro-react-native-babel-preset": "^0.53.1"` -> `"metro-react-native-babel-preset": "^0.54.1"`

#### 2019-03-21：适配react-native:0.59.1 具体更新如下 - [e8c1e746fa](https://git.imooc.com/coding-304/GitHub_Advanced/commit/e8c1e746fad47c2d0b7f73131744af3aca9bcb5b)：

- `"react-native": "0.58.4"` -> `"react-native": "0.59.1"`
- `"react": "16.6.3"` -> `"react": "16.8.3"`
- `"react-native-splash-screen": "^3.1.1"` -> `"react-native-splash-screen": "^3.2.0"`
- `"react-native-webview": "^2.14.0"` -> `"react-native-webview": "^5.3.1"`
- 其他依赖升级
- Android版本升级：
	-  `targetSdkVersion = 27` -> `targetSdkVersion = 28`
	-  其他构件工具版本升级

此次更新，主要升级了一些SDK和构件工具的版本，另外，**此次从RN 0.5.84 升级到RN 0.59.1 除了版本号更新外其它需要适配的很少，为避免踩坑同学们可以参考老师的提交记录进行升级**

#### 2019-03-19：新增列表实例代码 : [1849994783](https://git.imooc.com/coding-304/GitHub_Advanced/commit/1849994783b160c899c6da4f4db0e43a1811c989)

- 新增[列表实例代码](https://git.imooc.com/coding-304/GitHub_Advanced/src/master/demo/FasterListDemo)；

#### 2019-03-14：react-navigation-tabs升级到2.x : [c8163255de](https://git.imooc.com/coding-304/GitHub_Advanced/commit/c8163255decb9629e3c53a4819ae711a5e241f9d)

- `"react-navigation": "^3.3.2"` -> `"react-navigation": "^3.3.2"`
- `"react-navigation-tabs": "^1.0.2"` -> `react-navigation-tabs": "^2.0.0-alpha.0"`
- 添加`"react-native-reanimated": "^1.0.0-alpha.12"`

>因为有些同学将[react-navigation-tabs](https://github.com/react-navigation/react-navigation-tabs)升级到了刚刚发布的alpha版本为此采坑了，主要原因归结于这个版本的[react-navigation-tab](https://github.com/react-navigation/react-navigation-tabs)引入了[react-native-reanimated](https://github.com/kmagiera/react-native-reanimated)这个第三方库，但同学们在使用时却没将其添加进来导致的，为了不让大家踩坑，老师特意为大家准备了`react-navigation-tabs`升级到了最新版的教程，如需使用最新版大家课程参考这次的提交修改即可。

**另外需要注意的是因为`react-native-reanimated`包含native部分的代码，所以我们除了运行yarn add命令之外，还需要通过`react-native link react-native-reanimated`将它的native部分的代码关联到项目中去。**

#### 2019-02-19：此次更新适配了react-navigation-redux-helpers3.0 : [24212eb835](https://git.imooc.com/coding-304/GitHub_Advanced/commit/24212eb835b6db639b82017b8090c15a14dea48f)

> react-navigation-redux-helpers3.0的两个变更:

**1.reduxifyNavigator被改名为createReduxContainer，所以：**

```
import {createReactNavigationReduxMiddleware, reduxifyNavigator} from 'react-navigation-redux-helpers';
//改为
import {createReactNavigationReduxMiddleware, createReduxContainer} from 'react-navigation-redux-helpers';
...
const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');
//改为
const AppWithNavigationState = createReduxContainer(RootNavigator, 'root');
```

**2.createReactNavigationReduxMiddleware的参数顺序发生了变化：**

```
export const middleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav
);
//改为
export const middleware = createReactNavigationReduxMiddleware(
    state => state.nav,
    'root'
);
```

可参考：[https://git.imooc.com/coding-304/GitHub_Advanced/commit/24212eb835b6db639b82017b8090c15a14dea48f](https://git.imooc.com/coding-304/GitHub_Advanced/commit/24212eb835b6db639b82017b8090c15a14dea48f)

## 各章节源码和辅导文档查看指南

>为方便同学们学习，课程为大家提供了课件和各章节的源码，请通过以下方式查看：

- [实战部分各章节源码查看方法-点击查看](https://git.imooc.com/coding-304/GitHub_Advanced/src/master/doc/如何查看各章节的源码.md)
	- [可通过git查看这部分章节的源码](https://git.imooc.com/coding-304/GitHub_Advanced/src/master/doc/如何查看各章节的源码.md)
- react-navigation5x开发指南
	- [矢量图标（react-native-vector-icons）使用指南](https://git.imooc.com/coding-304/GitHub_Advanced/src/5b155392b479f5fa7e401d659cf0137bee76bd73/demo/react_navigation_demo)
	- [react-navigation安装使用指南](https://git.imooc.com/coding-304/GitHub_Advanced/src/3a6ccd38813f54eaa507e902eaf5a75d7be849e0/demo/react_navigation_demo)
	- [常用导航器之堆栈导航器createStackNavigator精讲](https://git.imooc.com/coding-304/GitHub_Advanced/src/fdeaebdf047a83f6537ca43482f1eae64639d346/demo/react_navigation_demo)
	- [常用导航器之底部导航器createBottomTabNavigator精讲](https://git.imooc.com/coding-304/GitHub_Advanced/src/c02f66565f85eb2bfa91f356ea890247f98e450d/demo/react_navigation_demo)
	- [常用导航器之顶部导航器createMaterialTopTabNavigator精讲](https://git.imooc.com/coding-304/GitHub_Advanced/src/a8b55057db5f5d7efd2acaa87b006d33ab11e0a0/demo/react_navigation_demo)
	- [常用导航器之切换导航器createSwitchNavigator精讲](https://git.imooc.com/coding-304/GitHub_Advanced/src/12809854b600878f0f19f9277d6decd326c3fdb1/demo/react_navigation_demo)
	- [常用导航器之抽屉导航器createDrawerNavigator精讲](https://git.imooc.com/coding-304/GitHub_Advanced/src/fee148da3d98a24b1af84948149dbd889a408f59/demo/react_navigation_demo)
- 需求分析、模块设计、APP导航框架搭建
	- [基于react-navigation的APP导航框架搭建-欢迎页](https://git.imooc.com/coding-304/GitHub_Advanced/src/978e23c1a9d432ad4bfb6286bc500cdfb74cfa4f)
	- [基于react-navigation的APP导航框架搭建-底部导航](https://git.imooc.com/coding-304/GitHub_Advanced/src/db3dfdb3eae8ba0dbef79abe67bf7e7fe6e43047)
	- [基于react-navigation的APP导航框架搭建-顶部导航](https://git.imooc.com/coding-304/GitHub_Advanced/src/b9c0c3339020f66506e62d832e28bcf4845539d6)
	- [react-navigation高级应用之动态实现底部导航器](https://git.imooc.com/coding-304/GitHub_Advanced/src/932ff70e6ae5dd20f15ddd1bbe83f933f6e48d0e)
	- [react-navigation高级应用之动态实现顶部导航器](https://git.imooc.com/coding-304/GitHub_Advanced/src/f6a1629b88cafffb36e181b8c78b759d0d31cc47)
- 基于Redux的项目框架搭建
	- [Redux集成开发指南-上](https://git.imooc.com/coding-304/GitHub_Advanced/src/adedc98b4340d076e0c8ad784d7e986ea72bc32f)
	- [Redux集成开发指南-下](https://git.imooc.com/coding-304/GitHub_Advanced/src/240482a106ae806eea728e848104f8a5df3b04f0)
- React Native混合开发
    - [React Native 混合开发(Android篇)](https://www.devio.org/2020/04/19/React-Native-Hybrid-Android/)
    - [React Native 混合开发(iOS)](https://www.devio.org/2020/04/19/React-Native-Hybrid-iOS/)

- **其他部分的辅导文档和源码查看方法**
	- [通过Git查看](https://git.imooc.com/coding-304/GitHub_Advanced/src/master/doc/如何查看各章节的源码.md)





