// pages/goodsDetail/goodsDetail.js
Page({

  data: {
    goods: {} // 商品信息
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 从上个页面获取商品ID
    const id = options.id;
    // 模拟数据，实际项目中应该根据商品ID发起网络请求获取商品详情数据
    const goods = {
      id: id,
      name: "拖鞋" + id,
      imageUrl: "https://example.com/goods" + id + ".jpg",
      price: Math.floor(Math.random() * 100) + 50 // 随机生成一个价格
    };
    // 更新数据
    this.setData({
      goods: goods
    });
  },

  /**
   * 用户点击加入购物车按钮
   */
  addToCart() {
    // 模拟加入购物车操作，实际项目中可以将商品加入购物车缓存或者发送网络请求
    wx.showToast({
      title: '已加入购物车',
      icon: 'success',
      duration: 2000
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: '分享标题',
      path: '/pages/goodsDetail/goodsDetail?id=' + this.data.goods.id // 分享页面的路径
    };
  }
});
