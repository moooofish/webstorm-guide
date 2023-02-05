const themeConfig = {
  lastUpdated: "上次更新",
  // smoothScroll: true,
  repo: "qinghuanI/webstorm-guide",
  editLinks: true,
  editLinkText: "帮助我们改善此页面！",
  sidebar: [
    {
      title: "指南",
      collapsable: false,
      sidebarDepth: 1,
      children: [
        ["/guide/start", "开始"],
        ["/guide/search_navigation", "搜索与导航"],
        ["/guide/debugger", "代码调试"],
        ["/guide/git", "Git"],
        ["/guide/vim", "Vim 操作"],
        ["/guide/inspection_linter", "Inspection 与 Linter"],
        ["/guide/plugins", "插件"],
      ],
    },
    {
      title: "进阶",
      collapsable: false,
      sidebarDepth: 1,
      children: [
        ["/advanced/refactor", "重构"],
        ["/advanced/review_code", "快速熟悉代码"],
        ["/advanced/run_debugger_configuration", "运行/调试配置"],
        ["/advanced/rest_client", "Rest Client"],
        ["/advanced/TODO", "TODO"],
        ["/advanced/markdown", "Markdown"],
        ["/advanced/code_with_me", "Code With Me"],
        ["/advanced/remote", "远程开发"],
      ],
    },
    {
      title: "插件开发",
      collapsable: false,
      sidebarDepth: 1,
      children: [
        ["/plugins/theme_plugin", "主题插件"],
        ["/plugins/function_plugin", "功能插件"],
      ],
    },
    {
      title: "生态系统",
      collapsable: false,
      sidebarDepth: 1,
      children: [
        ["/ecology/Qodana", "Qodana"],
        ["/ecology/TeamCity", "TeamCity"],
        ["/ecology/Docker", "Docker"],
      ],
    },
    {
      title: "其他",
      collapsable: false,
      sidebarDepth: 1,
      children: [
        ["/others/WebStorm_vs_VScode", "WebStorm vs VScode"],
        ["/others/get_webstorm", "申请 WebStorm"],
        ["/others/directory_organization", "目录组织"],
        ["/others/thanks_formally", "鸣谢"],
      ],
    },
  ],
}

const plugins = ["@vuepress/back-to-top", "@vuepress/medium-zoom", "img-lazy"]

module.exports = {
  title: "WebStorm 使用指南",
  description: "本指南旨在向开发人员介绍 WebStorm 使用",
  port: 8888,
  head: [
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  serviceWorker: true,
  plugins,
  themeConfig,
}
