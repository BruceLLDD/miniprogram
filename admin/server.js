// server.js
const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');

const app = express();

// 解析请求体中的 JSON 数据
app.use(bodyParser.json());

// 使用 admin 路由
app.use('/admin', adminRoutes);

// 启动服务器
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
