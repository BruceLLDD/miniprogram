// routes/admin.js
const express = require('express');
const router = express.Router();

// 模拟用户数据（仅作为示例，实际项目中应使用数据库）
let users = [
  { id: 1, username: 'admin', password: 'admin123' },
  { id: 2, username: 'user', password: 'user123' }
];

// 登录接口
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  // 在用户数组中查找匹配的用户
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    // 登录成功，返回用户信息
    res.json({ success: true, user });
  } else {
    // 登录失败，返回错误信息
    res.status(401).json({ success: false, message: 'Invalid username or password' });
  }
});

// 商品管理接口
let goods = [];
let nextGoodId = 1;

router.post('/goods', (req, res) => {
  const newGood = { id: nextGoodId++, ...req.body };
  goods.push(newGood);
  res.status(201).json(newGood);
});

router.put('/goods/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = goods.findIndex(g => g.id === id);
  if (index !== -1) {
    goods[index] = { id, ...req.body };
    res.json(goods[index]);
  } else {
    res.status(404).json({ message: 'Good not found' });
  }
});

router.delete('/goods/:id', (req, res) => {
  const id = parseInt(req.params.id);
  goods = goods.filter(g => g.id !== id);
  res.sendStatus(204);
});

// 订单管理接口（模拟订单数据，实际项目中应使用数据库）
let orders = [];
let nextOrderId = 1;

router.get('/orders', (req, res) => {
  res.json(orders);
});

router.put('/orders/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = orders.findIndex(o => o.id === id);
  if (index !== -1) {
    orders[index].status = req.body.status;
    res.json(orders[index]);
  } else {
    res.status(404).json({ message: 'Order not found' });
  }
});

// 用户管理接口（模拟用户数据，实际项目中应使用数据库）
router.get('/users', (req, res) => {
  res.json(users);
});

router.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  users = users.filter(u => u.id !== id);
  res.sendStatus(204);
});

module.exports = router;
