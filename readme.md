# Reflect White 静态博客主题
![主题预览](https://i.imgur.com/OZNoO1I.png)

Reflect White 是一款适用于 [MWeb app](https://zh.mweb.im/) 的静态博客主题。它拥有简洁大气的外观设计，以及完善的 MWeb 动态内容支持。

## 安装方法
如果你不会使用 Git：

- 点击右上角的「Clone or download」按钮，选择 Download ZIP
- 将下载回来的 ZIP 解压至 `/Users/<Your Username>/Library/Containers/com.coderforart.MWeb3/Data/Documents/themes` 下
- 在 MWeb 中右键点击希望应用主题的静态网站文档库，点击「模板」右侧的「刷新」按钮，并在「模板」列表中找到 `reflect-white-mweb-theme` 主题
- `生成网站`

如果你会使用 Git：

```
cd /Users/<Your Username>/Library/Containers/com.coderforart.MWeb3/Data/Documents/themes
git clone https://github.com/Astrian/reflect-white-mweb-theme
```

然后在 MWeb 中右键点击希望应用主题的静态网站文档库，点击「模板」右侧的「刷新」按钮，并在「模板」列表中找到 `reflect-white-mweb-theme` 主题，最后生成网站即可。

## 配置
所有配置都可以在 MWeb 中完成。

### 网站基础配置
![MWeb 静态博客设置](https://i.imgur.com/FeADjIy.png)

- 网站名称：访客访问你的网站时，主题显示的网站名称。
- 网站网址：请携带 `http://` 或 `https://`，就是你的网站域名。
- 每页显示文章数：顾名思义，不做过多解释。建议使用奇数，以获得最佳体验。
- 网站描述：每页底部 footer 中字号最大的 slogan。
- 评论和分享代码：粘贴社会化评论工具的代码，会应用于文章页面底部。
- 网站其他代码：可以插入需要在 `<head>` 部分插入的代码。

### 网站扩展配置
![MWeb 偏好设置的「扩展」页面](https://i.imgur.com/bffKIHI.png)

- 你的笔名：会应用于 RSS 输出。
- 脚注信息：会应用于每页底部的小字体脚注。

### 网站菜单设置
![MWeb 偏好设置的「扩展」页面](https://i.imgur.com/ajxmEnT.png)

在此设置的菜单将会应用于网页顶部网站名称之下。

### 文档扩展信息
在每篇文章右上角的「i」按钮中可以找到这部分信息设置。

![文章扩展信息设置](https://i.imgur.com/hypFXJN.png)

- 次要标题：会在文章详情页和列表页的文章标题之下显示，帮助读者快速了解文章的主旨。相当于微信公众号中的「摘要」一栏。
- 题图：会在文章详情页和列表页显示。

## 未来更新计划
- [ ] 优化移动设备使用
- [ ] 支持 PWA