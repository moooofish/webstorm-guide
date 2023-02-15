Qodana 是 JetBrains 推出的代码质量检测工具。它将 JetBrains IDE 具有的智能代码检查带入了项目 CI/CD 管道中。它可以识别代码中的错误，安全漏洞，重复项和缺陷并提出修复建议。使开发人员轻松地改善代码结构，使代码符合众多准则和标准，解决潜在的性能问题

Qodana 为您提供项目质量概览，让您设定质量目标并跟踪其进度。您可以快速调整应用于项目的检查列表，并在分析中包括或删除目录

Qodana 支持与很多代码仓库集成

## 为什么选择 Qodana

- **减少花费在代码审查和修正问题上的时间**。Qodana 可以自动执行代码质量检查并执行例行任务，例如查找重复项、可能的错误、格式问题，以及您选择的其他规则。这样一来，您可以修正检测到的问题并立即返回项目
- **一处配置，随处运行**。通过相同的代码检查和配置文件，Qodana 可以使用与您喜爱的 JetBrains IDE 相同的语言。您可以配置检查，在本地依赖它们，并使用服务器端质量门确保整个团队的规则
- **在不降低 IDE 性能的情况下运行资源密集型检查**。在庞大的代码库中，数据流分析需要大量额外资源，几乎不可能在开发者机器上运行。借助 Qodana，您可以在服务器上运行这些检查并将其结果直接传送到您的 IDE
- **通过静态代码分析丰富 CI 管道**。Qodana 几乎可与任何 CI 管道集成，因此您可以在开发早期发现缺陷。如果您的 CI 系统的用户界面可以扩展，Qodana UI 将与其无缝集成。同样，您可以通过 Web 服务器公开 Qodana UI
- **告别孤立团队和不一致的检查**。使用 Qodana，您可以确保所有同事都将相同的规则应用于代码质量检查。最后，你们将共同创建整洁一致的代码
- **对外部贡献保持信心**。在接受对项目的外部贡献之前，您需要额外保证贡献者遵循您的准则。无论是对开源项目的拉取请求还是您委派给分包商的任务，Qodana 都会执行例行检查，并帮助您确定它对项目是否安全
- **更好的规划工作**。将大项目分成小步骤！切换到更新版本的语言或框架，或者摆脱某种实用程序或模式可能是一项艰巨的任务。您可以构建一个报告来评估所有待修改的代码片段、估计工作量、决定应该涉及多少团队成员，并使用 Qodana 仪表板监控进度

## 语言支持

Qodana 目前支持 `Java`、`PHP`、`Python`、`JavaScript`、`.NET` 和 `Go` 等语言，如果缺少您将在项目中经常使用的语言，请联系 [Qodana 团队](https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=qodana-support@jetbrains.com)

## 使用 Qodana Cloud

1. 登陆 Qodana Cloud

在浏览器地址栏输入 [https://qodana.cloud/](https://qodana.cloud/)，打开 Qodana 官网，如图所示

![Qodana Login](https://cdn.jsdelivr.net/gh/qinghuanI/blog-images@main/uPic/qodana_login.png)

点击 `Continue with your JetBrains account` 按钮，跳转登陆界面

![Qodana Sign in](https://cdn.jsdelivr.net/gh/qinghuanI/blog-images@main/uPic/qodana_sign_in.png)

如图所示，笔者选择使用 `GitHub` 账号登陆，根据自己的使用情况，选择对应的选项，其结果如下

![Welcome to qodana cloud](https://cdn.jsdelivr.net/gh/qinghuanI/blog-images@main/uPic/welcome_to_qodana_cloud.png)

2. 创建新项目

点击第一步中的 `+ Create first project` 按钮，如图所示

![Create First project](https://cdn.jsdelivr.net/gh/qinghuanI/blog-images@main/uPic/create_project.png)

点击 `Save` 按钮，再点击 `Generate token` 按钮，生成 `token`, 复制 `token`, 创建 `Secret`

![Qodana Secret](https://cdn.jsdelivr.net/gh/qinghuanI/blog-images@main/uPic/qodana_secret_token.png)

3. 在项目中添加 Qodana 配置文件

在项目的根目录中，创建 `.github/workflows/code_quality.yml` 文件，文件内容如下：

```yaml
name: Qodana
on:
  workflow_dispatch:
  pull_request:
  push:
    branches:
      - main

jobs:
  qodana:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0
      - name: "Qodana Scan"
        uses: JetBrains/qodana-action@v2022.3.2
        env:
          QODANA_TOKEN: ${{secrets.QODANA}}
```

使用此工作流程，Qodana 将在主分支和进入您的存储库的拉取请求上运行

4. 查看结果

将 `code_quality.yml` 配置文件推送到远程仓库。等构建完成后，可以在 Qodana Cloud 上看到结果

![Qodana Cloud Check Result](https://cdn.jsdelivr.net/gh/qinghuanI/blog-images@main/uPic/qodana_cloud_check_result.png)

如图所示，项目中的检查结果以列表的形式展示出来，给出具体文件名和原因。比如 `index.js` 中有一个 `Unresolved variable or type module`。点击 `Unresolved variable or type module` 查看详情

![Check Result Detail](https://cdn.jsdelivr.net/gh/qinghuanI/blog-images@main/uPic/check_result_detail.png)

Qodana 展示具体的代码位置，点击 `Open file in WebStorm` 按钮，可以直接跳转编辑区的代码位置

## 在本地试用 Qodana
