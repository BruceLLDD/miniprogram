// pages/shoppingCart/shoppingCart.js
Page({
  data: {
    cartList: [] // 购物车商品列表数据
  },
  onLoad: function() {
    // 在页面加载时从后端获取购物车商品列表数据
    this.getCartList();
  },
  getCartList: function() {
    // 发起网络请求，从后端获取购物车商品列表数据
    wx.request({
      url: 'https://example.com/api/cartList',
      success: (res) => {
        this.setData({
          cartList: res.data
        });
      },
      fail: (error) => {
        console.error('请求购物车列表失败', error);
      }
    });
  },
  removeFromCart: function(event) {
    const id = event.currentTarget.dataset.id;
    // 在实际项目中，应该向后端发送请求，从购物车列表中移除对应商品，并更新页面数据
    console.log("向后端发送请求，从购物车中删除商品，商品ID:", id);
  }
});
