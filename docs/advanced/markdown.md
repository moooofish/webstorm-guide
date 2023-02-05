Markdown 是一种用于向纯文本添加格式化元素的轻量级标记语言

本章节主要向开发人员讲述使用 WebStorm 写 Markdown 的优点。市面上有非常多的 Markdown 工具，有免费开源的产品，
也有付费产品，产品形态各有不同，但是使用 WebStorm 写 Markdown 有如下优点

## 代码高亮

WebStorm 支持广泛的代码块语法高亮，除了常用的 `js`、`jsx`、`ts`等，还支持 `puml` 等等，开箱即用，非常方便

## 可视化操作

WebStorm 提供便捷的可视化工具帮助开发人员进行 markdown 内容排版

### 选中内容后操作

光标选中文本后，会在文本旁显示浮动工具条，如图所示

![Float Toolbar](https://cdn.jsdelivr.net/gh/qinghuanI/webstorm-guide-images@main/uPic/markdown_float_toolbar.png)

根据功能分类，从左往右依次是

- 设置标题
- 粗体
- 斜体
- 删除
- 代码块
- 链接
- 列表

### 直接插入

直接插入指可以直接插入链接、表格、图片和目录。

点击鼠标右键，调出上下文操作菜单，选择 `Insert` 选项

![Insert](https://cdn.jsdelivr.net/gh/qinghuanI/webstorm-guide-images@main/uPic/markdown_insert.png)

## shell 自动执行

Markdown 中的 shell 命令，可以点击装订线里的 <icons-CaretRight/>，调用 Terminal 并运行命令

![Shell](https://cdn.jsdelivr.net/gh/qinghuanI/webstorm-guide-images@main/uPic/shell_in_markdown.png)

## 导出

WebStorm 支持 markdown 转 pdf 功能，不过需要先安装 pandoc。推荐使用 brew 安装 pandoc

```shell
brew install pandoc
```

pandoc 安装成功后，需要在 WebStorm 中配置 pandoc

![WebStorm Pandoc](https://cdn.jsdelivr.net/gh/qinghuanI/webstorm-guide-images@main/uPic/pandoc_settings.png)
