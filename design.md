# 项目目录结构和技术要点

## 项目目录结构
/love-compatibility-frontend
├── public
│ ├── favicon.ico
│ ├── index.html
│ ├── logo192.png
│ ├── logo512.png
│ ├── manifest.json
│ └── robots.txt
├── src
│ ├── App.css
│ ├── App.js
│ ├── App.test.js
│ ├── index.css
│ ├── index.js
│ ├── logo.svg
│ ├── reportWebVitals.js
│ └── setupTests.js
├── .gitignore
├── package.json
└── README.md

## 技术要点

1. **项目初始化**：
   - 项目使用 [Create React App](https://github.com/facebook/create-react-app) 初始化，适合快速启动 React 项目。

2. **主要依赖**：
   - `react` 和 `react-dom`：用于构建用户界面。
   - `react-scripts`：提供开发和构建工具。
   - `web-vitals`：用于测量和报告 Web 性能指标。

3. **项目结构**：
   - `public` 目录：包含静态资源，如 HTML 模板、图标和 manifest 文件。
   - `src` 目录：包含应用的源代码，包括组件、样式和测试文件。

4. **样式和布局**：
   - 使用 CSS 文件进行样式管理，主要使用 Flexbox 布局。
   - 响应式设计：通过媒体查询实现动画效果。

5. **开发和构建**：
   - 使用 `npm start` 启动开发服务器。
   - 使用 `npm run build` 进行生产环境构建。

6. **测试**：
   - 使用 Jest 和 React Testing Library 进行单元测试。

7. **性能优化**：
   - 使用 `reportWebVitals` 进行性能监控。

8. **浏览器支持**：
   - 通过 `browserslist` 配置支持的浏览器版本。

这个 `design.md` 文件将帮助我们在后续讨论需求时更好地理解项目的结构和技术细节。如果有任何问题或需要进一步的帮助，请随时告诉我！