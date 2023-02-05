`TODO` 即待办事项。在代码中使用 `TODO` 标记，表示在该处有情况需要特殊处理

## TODO

用于标识该处有功能待实现

```js
function plus() {
  // TODO: implement plus method
}
```

## FIXME

用于标识该处代码存在问题， 需要修复

```js
// FIXME: Fixed in a future release
function subtract(num1, num2) {
  return num1 - num2
}
```

## XXX

用于表示该处代码虽然实现了功能，但是实现的方法有待商榷，希望将来能改进

```js
// XXX:
function plus() {
  // HACK
}
```

## HACK

用于表示该处代码需要根据自己的需求调整

```js
// HACK
function plus() {}
```

WebStorm 还支持自定义标记，需要开发人员自己配置

![TODO](https://cdn.jsdelivr.net/gh/qinghuanI/webstorm-guide-images@main/uPic/todo_configuration.png)

点击 <icons-Plus/> 按钮，按照`\b***\b.*`的格式，添加自定义标记，使用方式同内置标记一样

比如，添加一个 `Tip` 的标记，对应的 Pattern 是 `\btip\b.*`，使用方式如下

```js
// TIP: Use the arrow function to prevent the loss of this pointer
setTimeout(() => {
  this.printName()
}, 2 * 1000)
```
