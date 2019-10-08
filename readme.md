# Reflect White 静态博客主题
![主题预览](https://i.imgur.com/qIOLsWa.png)

Reflect White 是一款适用于 [MWeb app](https://zh.mweb.im/) 的静态博客主题。它拥有如下特点：

- 简洁大气的文章排版设计
- 分别针对移动设备与桌面设备优化
- 支持 `prefers-color-scheme: dark` 动态明暗样式主题，操作系统或浏览器使用暗色界面模式时，网页也会变成暗色模式
- 原生支持 Like.co/in 小组件，让读者的赞赏化为实质收入
- 支持大量 MWeb 个性化特性，轻松修改设置，让你的博客与众不同

[点击这里](https://reflect-white-sample.astrianzheng.cn/) 在线预览本主题。

## 安装方法
如果你不会使用 Git：

- 点击右上角的「Clone or download」按钮，选择 Download ZIP
- 将下载回来的 ZIP 解压至 `~/Library/Containers/com.coderforart.MWeb3/Data/Documents/themes/SiteThemes` 下
- 在 MWeb 中右键点击希望应用主题的静态网站文档库，点击「模板」右侧的「刷新」按钮，并在「模板」列表中找到 `reflect-white-mweb-theme` 主题
- `生成网站`

如果你会使用 Git：

```
cd ~/Library/Containers/com.coderforart.MWeb3/Data/Documents/themes/SiteThemes
git clone https://github.com/Astrian/reflect-white-mweb-theme
```

然后在 MWeb 中右键点击希望应用主题的静态网站文档库，点击「模板」右侧的「刷新」按钮，并在「模板」列表中找到 `reflect-white-mweb-theme` 主题，最后生成网站即可。

## 配置
所有配置都可以在 MWeb 中完成。

### 网站基础配置
以下设置除另做标注外，都为非必填。

![MWeb 静态博客设置](https://i.imgur.com/FeADjIy.png)

- 网站名称（必填）：访客访问你的网站时，主题显示的网站名称。
- 网站网址（必填）：请携带 `http://` 或 `https://`，就是你的网站域名。
- 每页显示文章数（必填）：顾名思义，不做过多解释。建议使用奇数，以获得最佳体验。
- 网站描述：每页底部 footer 中字号最大的 slogan。
- 评论和分享代码：粘贴社会化评论工具的代码，会应用于文章页面底部。
- 网站其他代码：可以插入需要在 `<head>` 部分插入的代码。

### 网站扩展配置
以下设置皆为非必填。

![MWeb 偏好设置的「扩展」页面](https://i.imgur.com/TPm05SR.png)

- 你的笔名：会应用于 RSS 输出。
- Twitter 用户名：当你的文章被分享至 Twitter 时，文章卡片上需要标注哪一个 Twitter 用户？填写 Twitter 的用户名（username）而不是显示名。
- 脚注信息：会应用于每页底部的小字体脚注。
- Favicon 图标：访客打开你的网站时，浏览器会将其标志于网页标签页图标。可以使用 PNG 和 ICO 格式的图片。
- 你的 Like.co 用户名：如果你有 [Like.co](https://like.co/in) 的创作者帐户，可在此填入你的 Liker ID。填入后，每篇文章底部将会显示你的 Liker Widget，当读者注册后为你的文章点赞，你将可获得实质性收入。
- 标签简短介绍：在文章标签页面，为标签加注一段简短的介绍。[详情...](https://github.com/Astrian/reflect-white-mweb-theme/blob/master/tagdes-info.md)
- 自定义样式：为博客设定更个性化的样式（高级）。

### 网站菜单设置
![MWeb 偏好设置的「扩展」页面](https://i.imgur.com/ajxmEnT.png)

在此设置的菜单将会应用于网页顶部网站名称之下。

### 文档扩展信息
在每篇文章右上角的「i」按钮中可以找到这部分信息设置。

![文章扩展信息设置](https://i.imgur.com/hypFXJN.png)

- 次要标题：会在文章详情页和列表页的文章标题之下显示，帮助读者快速了解文章的主旨。相当于微信公众号中的「摘要」一栏。
- 题图：会在文章详情页和列表页显示。**可以使用 MWeb 提供的相对路径**，也可以使用网络图片或 CDN 图片。
