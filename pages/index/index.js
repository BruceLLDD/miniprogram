// pages/index/index.js
Page({
  data: {
    bannerList: [], // 轮播图数据
    goodsList: [] // 商品列表数据
  },
  onLoad: function() {
    // 模拟数据，实际项目中应该从后端接口获取数据
    this.setData({
      bannerList: [
        { imageUrl: 'https://example.com/banner1.jpg' },
        { imageUrl: 'https://example.com/banner2.jpg' },
        { imageUrl: 'https://example.com/banner3.jpg' }
      ],
      goodsList: [
        { id: 1, name: '拖鞋1', imageUrl: 'https://example.com/goods1.jpg' },
        { id: 2, name: '拖鞋2', imageUrl: 'https://example.com/goods2.jpg' },
        { id: 3, name: '拖鞋3', imageUrl: 'https://example.com/goods3.jpg' },
        { id: 4, name: '拖鞋4', imageUrl: 'https://example.com/goods4.jpg' }
      ]
    });
  },
  goToDetail: function(event) {
    const id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/goodsDetail/goodsDetail?id=' + id
    });
  },
  goToShoppingCart: function() {
    wx.navigateTo({
      url: '/pages/shoppingCart/shoppingCart'
    });
  },
  goToMe: function() {
    wx.navigateTo({
      url: '/pages/me/me'
    });
  }
});

