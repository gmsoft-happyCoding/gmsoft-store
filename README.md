# gm-storage
前端缓存策略 设置、获取工具
# gmsoft-store 前端缓存策略 设置、获取工具  

<!-- TOC -->

- [gm-storage](#gm-storage)
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



## Update Log  

- ### 1.0.0  
  