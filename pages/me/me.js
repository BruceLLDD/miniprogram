// pages/me/me.js
// pages/me/me.js
Page({
  data: {
    userInfo: {} // 用户信息
  },
  onLoad: function() {
    // 模拟数据，实际项目中应该从微信 API 获取用户信息
    const userInfo = {
      avatarUrl: "https://example.com/avatar.jpg",
      nickName: "小程序用户"
    };
    this.setData({
      userInfo: userInfo
    });
  },
  viewOrderHistory: function() {
    // 跳转到订单页面
    wx.navigateTo({
      url: '/pages/order/order'
    });
  }
});
