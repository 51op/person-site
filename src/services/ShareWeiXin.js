import wx from 'weixin-js-sdk'
import Axios from 'axios'


const  ShareImpl = function (option) {
    //获取当前url
    const  url = window.location.href.split("#")[0];
    console.log(url,JSON.stringify(option));
    Axios.get('获取参数配置路径',{
        params: url
    }).then((respone) => {
        wx.config({
            debug: false,
            appId: response.data.AppId,
            timestamp: response.data.Timestamp,
            nonceStr: response.data.NonceStr,
            signature: response.data.Signature,
            jsApiList: [
                'updateAppMessageShareData',
                'updateTimelineShareData',
            ]
        });
    }).catch(error => {
        window.console.log(error);
    });
    wx.ready(function () {
        wx.updateAppMessageShareData({
            title: option.shareTitle,
            desc: option.shareDesc,
            link: option.shareUrl,
            imgUrl: option.shareImg
        });
        wx.updateTimelineShareData({
            title: option.shareTitle,
            desc: option.shareDesc,
            link: option.shareUrl,
            imgUrl: option.shareImg,
        });
    })

}

module.exports = ShareImpl;
