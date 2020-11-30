<template>
    <div class="footer">
                <div class="footer-title">
                    <div class="footer-title-1">
                        <span>好文推荐</span>
                    </div>
                    <div class="footer-title-2">
                        <b></b>
                    </div>
                </div>
                <div class="footer-txt">
                        <div class="footer-txt-link"><a href="http://imcn.me" title="" target=_blank>开源资讯网</a></div>
                        <div class="footer-txt-link"><a href="http://www.ttlsa.com" title="" target=_blank>运维生存时间</a></div>
                        <div class="footer-txt-link"><a href="http://www.yunweipai.com" title="" target=_blank>运维派</a></div>
                        <div class="footer-txt-link"><a href="https://www.proginn.com/about/links" title="" target=_blank>程序员客栈</a></div>
                        <div class="footer-txt-link"><a href="http://www.ctolib.com/" title="" target=_blank>码库</a></div>
                        <div class="footer-txt-link"><a href="https://www.kubernetes.org.cn" title="" target=_blank>Kubernetes社区</a></div>
                        <div class="footer-txt-link"><a href="https://gitee.com/" title="" target=_blank>码云</a></div>
                        <div class="footer-txt-link"><a href="https://www.sxt.cn/" title="" target=_blank>速学堂</a></div>
                        <div class="footer-txt-link"><a href="https://juejin.im/" title="" target=_blank>掘金</a></div>
                        <div class="footer-txt-link"><a href="https://www.iyunv.com/" title="" target=_blank>运维网</a></div>
                        <div class="footer-txt-link"><a href="http://www.178linux.com/" title="" target=_blank>运维部落</a></div>
                        <div class="footer-txt-link"><a href="http://www.bigops.com/" title="" target=_blank>运维帮</a></div>
                        <div class="footer-txt-link"><a href="https://studygolang.com/" title="" target=_blank>Golang社区</a></div>
                        <div class="footer-txt-link"><a href="http://www.ctolib.com/" title="" target=_blank>码库</a></div>


                </div>

                <div class="footer-booter">
                    <div class="foot_navi">
                            <div class="footer-booter-1"><a href="">网站首页</a></div>
                            <div class="footer-booter-1"><a href="">关于我们</a></div>
                            <div class="footer-booter-1"><a href="">商务合作</a></div>
                            <div class="footer-booter-1"><a href="">欢迎投稿</a></div>
                    </div>
                    <div class="foot_copy">
                        <div class="foot_copy-1"> Copyright © 2020 &&  <a href="/">51运维com</a> && <a href="http://beian.miit.gov.cn/">京ICP备2020038231号</a> </div>
                    </div>

                </div>

    </div>



</template>
<script>
    export default {
        name:'Footer_contend',
        data(){
            return{

            }
        },
    }
</script>
<style scoped>
.footer{
    /*width: 100%;*/
    background-color:  #2E3338;

}
.footer-booter{
    background-color: #171C21;
}
.footer-title{
    margin: 20px 10px;;
    display: flex;
    height: 40px;

}
 .footer-title-1  span{
    width: 75px;
    display: block;
    color: white;
    font-size: 18px;
    font-weight: normal;
    border-bottom: 4px solid #209E80;
    line-height: 30px;

}
.footer-title-2 b{
    margin:  8px 20px;
    display: block;
    width: 1px;
    height: 20px;
    line-height: 15px;
    border-left: 1px solid #999;
}

.footer-txt {
    display: flex;
    flex-wrap: wrap;
}
.footer-txt .footer-txt-link {
    padding: 20px 40px;
}
.footer-txt .footer-txt-link a {
    color: #747f8c;
    text-decoration: none;
    display: block;
    font-size: 14px;
    text-align: left;

}
.foot_navi{
    display: flex;
    margin: 0 500px;

}
.footer-booter-1{
    padding: 30px 10px;

}
    .foot_navi a {
        font-size: 14px;
        line-height: 40px;
        color: #FFF;
        font-family: inherit;
        text-decoration: none;
    }


.foot_copy{
        color: #666;
        font-size: 14px;
        line-height: 15px;
        text-align: center;
    padding:0 0 20px 0;
    }

.foot_copy .foot_copy-1 a {
        text-decoration: none;
        color: #666;
    }
</style>