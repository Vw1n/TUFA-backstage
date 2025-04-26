# TUFA 后台管理系统

## 项目简介

TUFA 后台管理系统是一个基于 Vue 3 开发的后台管理系统，集成了用户管理、数据统计、权限控制等核心功能。支持 Mock 数据调试与模块化扩展。

## 核心功能

### 1. 用户管理模块

- **CRUD 操作**：支持用户数据的增删改查，提供「新增用户」「编辑用户」「删除用户」功能（接口见 `src/api/mockData/user.js`）。
- **分页搜索**：通过关键词搜索用户，支持分页展示（每页默认 10 条，可扩展配置）。
- **字段格式化**：自动处理性别（0/1）、日期格式等数据展示（前端组件内实现）。

### 2. 数据统计与可视化

- **多维度图表**：首页包含趋势（折线图）、分布（柱状图）、画像（饼图）等，基于 ECharts 5.6+ 实现（数据来自 `src/api/mockData/home.js`）。

### 3. 权限控制系统

- **动态菜单加载**：根据用户角色（如管理员 `admin`、普通用户 `xiaoxiao`）返回不同菜单（Mock 规则见 `src/api/mockData/permission.js`）。
- **登录状态校验**：通过 Token 验证登录状态，未登录用户自动跳转至登录页（路由守卫在 `src/main.js` 中实现）。

### 4. 响应式布局

- **侧边栏折叠**：支持展开 / 收起侧边导航栏，适配不同屏幕尺寸。
- **标签页管理**：多页面通过 Tabs 标签页切换，避免频繁路由跳转（状态管理使用 Pinia，见 `src/stores/index.js`）。

## 技术栈

| 类别       | 技术 / 工具        | 版本   | 说明                      |
| ---------- | ------------------ | ------ | ------------------------- |
| 前端框架   | Vue                | 3.5.13 | 基于 Composition API 开发 |
| UI 组件库  | Element Plus       | 2.9.4  | 企业级 Vue 3 组件库       |
| 状态管理   | Pinia              | 2.3.1  | Vue 官方推荐状态管理库    |
| 路由管理   | Vue Router         | 4.5.0  | 单页面应用路由解决方案    |
| 网络请求   | Axios + 自定义封装 | 1.7.9  | 支持 Mock / 生产环境切换  |
| 数据模拟   | Mock.js            | 1.1.0  | 生成测试用模拟数据        |
| 图表可视化 | ECharts            | 5.6.0  | 高性能数据可视化库        |
| 构建工具   | Vite               | 6.1.0  | 快速构建与开发服务器      |

## 安装与运行

### 前置条件

- Node.js ≥ 18（部分依赖如 `esbuild` 要求 Node.js ≥ 18）

### 步骤

1. **克隆项目**

   bash

   

   

   

   

   

   ```bash
   git clone https://github.com/Vw1n/TUFA-backstage.git  
   cd TUFA-backstage  
   ```

2. **安装依赖**

   bash

   

   

   

   

   

   ```bash
   npm install  # 或 yarn install  
   ```

3. **启动开发环境**

   bash

   

   

   

   

   

   ```bash
   npm run dev  # 访问 http://localhost:5173  
   ```

4. **构建生产版本**

   bash

   

   

   

   

   

   ```bash
   npm run build  # 输出至 dist 目录（需配置生产环境 API 地址）  
   ```

## 目录结构

plaintext











```plaintext
TUFA-backstage/  
├── src/                  # 核心源码  
│   ├── api/              # 接口请求与 Mock 配置（含请求封装、Mock 数据）  
│   ├── assets/           # 静态资源（图片、Less 样式）  
│   ├── components/       # 通用组件（头部、侧边栏、标签页）  
│   ├── router/           # 路由配置（动态路由通过权限生成）  
│   ├── stores/           # Pinia 状态管理（全局状态如菜单、Token）  
│   ├── views/            # 页面组件（首页 Home、用户页 User、商品页 Mall 等）  
│   ├── App.vue           # 根组件  
│   └── main.js           # 入口文件（初始化路由、Pinia、Element Plus）  
├── public/               # 公共静态资源（如 favicon.ico）  
├── .gitignore            # Git 忽略配置  
├── package.json          # 依赖与脚本配置  
└── vite.config.js        # Vite 构建配置（支持 Less、Mock 拦截）  
```

## 贡献与反馈

- **问题反馈**：如有 BUG 或功能需求，可通过 [GitHub Issues](https://github.com/Vw1n/TUFA-backstage/issues) 提交。
- **代码贡献**：欢迎通过 Pull Request 提交优化代码，提交前请确保测试通过。
