// pages/shop/shop.js
const app = getApp();
var appUrl = app.globalData.appUrl;
var devUrl = app.globalData.devUrl;

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var _this = this;
    wx.showLoading({
      title: '加载中。。。',
    })
    wx.request({
      url: devUrl + "shop/list",
      success: function (res) {
        var shops = res.data.data;
        _this.setData({
          shops:shops
        })
        wx.hideLoading();
      },
      error:function(err){
        console.log(err)
      }
     });
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  getDetail: function (event) {
    var dataset = event.target.dataset;
    wx.navigateTo({
      url: './detail/card/card?shopId='+dataset.id,
    })
  }
})