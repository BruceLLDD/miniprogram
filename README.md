# MiniProgram

This WeChat Mini Program is my first attempt at creating an online shoe mart. It may seem very easy, simple, or even ridiculous, but it's important to me. Let's update it!

## Structure

miniprogram
├── app.json
├── app.js
├── app.wxss
├── pages
│   ├── index
│   │   ├── index.js
│   │   ├── index.wxml
│   │   └── index.wxss
│   ├── goodsList
│   │   ├── goodsList.js
│   │   ├── goodsList.wxml
│   │   └── goodsList.wxss
│   ├── goodsDetail
│   │   ├── goodsDetail.js
│   │   ├── goodsDetail.wxml
│   │   └── goodsDetail.wxss
│   ├── shoppingCart
│   │   ├── shoppingCart.js
│   │   ├── shoppingCart.wxml
│   │   └── shoppingCart.wxss
│   ├── order
│   │   ├── order.js
│   │   ├── order.wxml
│   │   └── order.wxss
│   └── me
│       ├── me.js
│       ├── me.wxml
│       └── me.wxss
└── admin
    ├── server.js
    ├── routes
    │   └── admin.js
    └── public
        ├── login.html
        ├── goodsManagement.html
        ├── orderManagement.html
        ├── userManagement.html
        └── styles.css


## Updates

Feel free to contribute or suggest updates!

2. 项目设计流程：
**步骤一：创建一个新的微信小程序项目**
1. 打开微信开发者工具。
2. 选择「新建项目」，填写项目名称、项目目录和 AppID（如果没有可以先填写测试用的 AppID）。
3. 点击「新建项目」按钮。

   
**步骤二：设计页面结构**
拖鞋商城通常包括以下页面：

1. 首页：展示热门商品、推荐商品等。
2. 商品列表页：展示所有拖鞋商品。
3. 商品详情页：展示单个商品的详细信息。
4. 购物车页：展示用户已选商品和结算功能。
5. 订单页：展示用户已下单的商品列表和订单状态。
6. 我的页：展示用户个人信息、订单历史等。


**步骤三：编写页面代码和样式**

1. 使用 WXML 编写页面结构。
2. 使用 WXSS 编写页面样式。
3. 使用 JavaScript 编写页面逻辑。


   
**步骤四：处理数据和交互**
1. 使用微信小程序提供的 API 请求后端接口获取商品信息。
2. 处理用户的交互操作，例如点击商品跳转到商品详情页，加入购物车等操作。
3. 实现购物车功能，包括添加商品、删除商品、修改商品数量等功能。


**步骤五：测试和调试**
1. 在微信开发者工具中进行页面预览和调试。
2. 使用真机测试功能，在手机上进行实际测试。
3. 处理可能出现的 bug 和优化用户体验。


**步骤六：发布上线**
1. 完成开发和测试后，在微信开发者工具中上传代码并提交审核。
2. 审核通过后，即可发布上线，让用户在微信中搜索并使用你的小程序。
