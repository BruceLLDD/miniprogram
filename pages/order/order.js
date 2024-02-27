// pages/order/order.js
Page({
  data: {
    orderList: [] // 订单列表数据
  },
  onLoad: function() {
    // 模拟数据，实际项目中应该发起网络请求获取订单列表数据
    const orderList = [{
      id: 1,
      total: 99.99
    }, {
      id: 2,
      total: 129.99
    }, {
      id: 3,
      total: 79.99
    }];
    this.setData({
      orderList: orderList
    });
  }
});
