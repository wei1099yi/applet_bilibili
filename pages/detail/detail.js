// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoInfo: [],
    otherList: [],
    commentData: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let videoId = options.id;
    this.getCurrrntVideo(videoId);
    this.getOthersList(videoId);
    this.getCommentList(videoId);
  },

  /**
   * 根据视频的id获取视频详情
   */
  getCurrrntVideo(videoId) {
    wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/videoDetail?id=" + videoId',
      success: (result)=>{
        const{videoInfo} = result.data.data;
        console.log(result);
        if(result.data.code===0) {
          this.setData({
            videoInfo
          })
        }
      },
    });
  },

  /**
   * 根据视频的id获取推荐视频详情
   */
  getOthersList(videoId) {
    wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/otherList?id=" + videoId',
      success: (result)=>{
        const{otherList} = result.data.data;
        console.log(result);
        if(result.data.code===0) {
          this.setData({
            otherList
          })
        }
      },
    });
  },

  /**
   * 根据视频的id获取推荐视频评论数据
   */
  getCommentList(videoId) {
    wx.request({
      url: "http://mock-api.com/mnEe4VnJ.mock/commentList?id=" + videoId,
      success: (result)=>{
        const{commentData} = result.data.data;
        console.log(result);
        if(result.data.code===0) {
          this.setData({
            commentData
          })
        }
      },
    });
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