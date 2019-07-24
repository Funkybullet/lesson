const app = getApp()

Page({
  data:{
    files: []
  },
  chooseImage(e) {
    let that = this
    wx.chooseImage({
      sizeType: ['original','compressed'],
      sourceType: ['album','camera'],
      success(res) {
        console.log(res)
        that.setData({
            files: that.data.files.concat(res.tempFilePaths[0])
        })
      }
    })
  },
  previewImage(e) {
      console.log(e)
      wx.preview
          current:e.currentTarget.id  
      }
  }
})