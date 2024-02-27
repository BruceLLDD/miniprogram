// pages/goodsList/goodsList.js
// pages/goodsList/goodsList.js
Page({
  data: {
    goodsList: [] // 商品列表数据
  },
  onLoad: function() {
    // 模拟数据，实际项目中应该发起网络请求获取商品列表数据
    const goodsList = [{
      id: 1,
      name: "拖鞋1",
      imageUrl: "https://example.com/goods1.jpg",
      price: 99.99
    }, {
      id: 2,
      name: "拖鞋2",
      imageUrl: "https://example.com/goods2.jpg",
      price: 89.99
    }, {
      id: 3,
      name: "拖鞋3",
      imageUrl: "https://example.com/goods3.jpg",
      price: 79.99
    }];
    this.setData({
      goodsList: goodsList
    });
  },
  goToDetail: function(event) {
    const id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/goodsDetail/goodsDetail?id=' + id
    });
  }
});
