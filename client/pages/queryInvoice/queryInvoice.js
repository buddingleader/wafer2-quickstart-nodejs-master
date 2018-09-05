//index.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

Page({
    data: {
        requestResult: '',
        invoiceID:'',
        canIUseClipboard: wx.canIUse('setClipboardData')
    },

    queryInvoice: function () {
        util.showBusy('请求中...')
        var that = this
        qcloud.request({
            url: `${config.service.host}/weapp/queryi`,
            login: true,
            data: {
                id: that.data.invoiceID,
            },
            success (result) {
                util.showSuccess('请求成功完成')
                that.setData({
                    requestResult: JSON.stringify(result.data)
                })
            },
            fail (error) {
                util.showModel('请求失败', error);
                console.log('request fail', error);
            }
        })
    },

     //用户名和密码输入框事件
  invoiceIDInput:function(e){
    this.setData({
        invoiceID:e.detail.value,
    })
  },
})