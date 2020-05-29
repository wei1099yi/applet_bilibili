//Page Object
Page({
  data: {
    // 首页的导航数据
    navList: [],
    // 轮播图数据
    swiperList: [],
    // 被点击的首页导航的索引
    currentIndexNav: 0,
    // 视频列表
    videoList: []
  },
  //options(Object)
  onLoad: function (options) {
    this.getNavList();
    this.getSwiperList();
    this.getVideoList();
  },

  /**
   * 获取首页导航数据
   */
  getNavList() {
    wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/navList',
      success: (result) => {
        const {navList} = result.data.data;
        this.setData({
          navList
        })
      }
    });
  },

  /**
   * 获取轮播图数据
   */
  getSwiperList() {
    wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/swiperList',
      success: (result) => {
        const {swiperList} = result.data.data;
        this.setData({
          swiperList
        })
      }
    });
  },

  /**
   * 获取视频数据
   */
  getVideoList() {
    wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/videoList',
      success: (result) => {
        console.log(result);
        const {videoList} = result.data.data;
        this.setData({
          videoList
        })
      }
    });
  },

  /**
   * 导航点击事件
   */
  activeNav(e) {
    const {index} = e.currentTarget.dataset;
    this.setData({
      currentIndexNav: index
    })
  }
});
