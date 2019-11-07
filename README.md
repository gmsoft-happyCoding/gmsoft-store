# gmsoft-storage
前端缓存策略 设置、获取工具
# gmsoft-store 前端缓存策略 设置、获取工具  

<!-- TOC -->

- [gmsoft-storage](#gmsoft-storage)
- [gmsoft-store 前端缓存策略 设置、获取工具](#gmsoft-store-%E5%89%8D%E7%AB%AF%E7%BC%93%E5%AD%98%E7%AD%96%E7%95%A5-%E8%AE%BE%E7%BD%AE%E8%8E%B7%E5%8F%96%E5%B7%A5%E5%85%B7)
  - [Why](#Why)
  - [Todo](#Todo)
  - [Install](#Install)
  - [Api](#Api)
  - [Update Log](#Update-Log)

<!-- /TOC -->
## Why  

- 封装了 ```localStorage``` 与 ```sessionStorage``` 的设置和获取方法；
- 约定了标识key，当本地存储到达上限无法继续注入时，依照策略清空缓存，便于新的缓存可以注入；
- 设定全局时效，获取、设置时清空无效数据；

## Todo  
- 针对react 封装 ```hooks```；
- 尝试 ```indexed DB``` 的封装；

## Install

```

  yarn add gmsoft-store

```
## Api  

| api                  | 描述                                                      | 调用                                                                                  | 返回 | 注意                                  |
| -------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------- | ---- | ------------------------------------- |
| removeLocalStoreBy   | 调用回调函数，清除对应的 Localstorage                     | removeLocalStoreBy(cb:(key:string)=>boolean)                                          | void | ```警告``` 操作的范围为任意key        |
| clearLocalStore      | 清空 通过gmsoft-store创建的非冻结状态的Localstorage数据   | clearLocalStore()=>boolean)                                                           | void | -                                     |
| setLocalStore        | 创建 Localstorage 数据                                    | setLocalStore(params:[SetParams](./src/type.d.ts))                                    | void | -                                     |
| getLocalStore        | 获取 Localstorage 数据                                    | setLocalStore(key:string) <br/>setLocalStore(params:[GetParams](./src/type.d.ts))     | void | ```冻结模式只能用GetParams模式调用``` |
| removeSessionStoreBy | 调用回调函数，清除对应的 Sessionstorage                   | removeSessionStoreBy(cb:(key:string)=>boolean)                                        | void | ```警告``` 操作的范围为任意key        |
| clearSessionStore    | 清空 通过gmsoft-store创建的非冻结状态的Sessionstorage数据 | clearSessionStore()=>boolean)                                                         | void | -                                     |
| setSessionStore      | 创建 Sessionstorage 数据                                  | setSessionStore(params:[SetParams](./src/type.d.ts))                                  | void | -                                     |
| getSessionStore      | 获取 Sessionstorage 数据                                  | setSessionStore(key:string) <br/>setSessionStore(params:[GetParams](./src/type.d.ts)) | void | ```冻结模式只能用GetParams模式调用``` |




## Update Log  

- ### 1.0.0  
  2019-11-07 
  - 🛠  重构项目结构；
  - 🌟 添加 Localstorage、Sessionstorage 基础方法；
  