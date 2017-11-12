// pages/supply/detail/commit/commit.js
const app = getApp();
var appUrl = app.globalData.appUrl;
var devUrl = app.globalData.devUrl;
var bizId = null;

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
   bizId = options.bizId;
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
      url: devUrl + "biz/detail?bizId=" + bizId,
      success: function (res) {
        _this.setData({
          biz: res.data.data
        })

      }
    })

    wx.request({
      url: devUrl + "biz/bizImage?bizId=" + bizId,
      success: function (res) {
        var image = appUrl + res.data.data[0].url;
        _this.setData({
          image: image
        })
        wx.hideLoading();
      }
    })

    wx.request({
      url: devUrl + "biz/comment?bizId=" + bizId,
      success: function (res) {
        var comments = res.data.data;
        _this.setData({
          comments: comments
        })
      }
    })
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
  
  }
})