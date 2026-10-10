/**
 * 静态前端部署配置（本文件会被 GitHub Pages 原样发布）
 *
 * ═══════════════════════════════════════════════════
 *   只有下面这一个 PROD_API 需要你填，其它都不用动
 * ═══════════════════════════════════════════════════
 *
 * PROD_API：后端 api.php 的地址，最终请求 = apiBase + '/api.php'
 *
 *   留空 ''                → 用 '/'，即同域根目录
 *                            本地 start.bat（http://localhost:8000/frontend/index.html）
 *                            和「把 frontend/ 放进自己服务器 app/ 里」的场景都自动对
 *
 *   'https://api.xxx.com'  → 部署到 GitHub Pages 时必须填这个
 *                            同时到后台「系统设置 → 允许的跨域来源」放行
 *                            你的 Pages 地址，例如 https://你的用户名.github.io
 *
 * 结尾不带斜杠（带了也会被自动去掉）。
 *
 * 注意：服务端渲染的 app/index.php 会自己注入 window.PB_CONFIG = { apiBase: '' }，
 * 所以走 /index.php 时永远是同源，不受这里影响。
 */
var PROD_API = '';

window.PB_CONFIG = window.PB_CONFIG || {
  apiBase: PROD_API || '/'
};
