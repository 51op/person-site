<template>

    <div class="article-header">
        <div class="article">
            <h2>最新文章|</h2>
        </div>
        <div class="article-content">
            <div class="article-content-1">
                <div class="article-content-left" >
                    <img src="../assets/img/k8s_gaitubao_262x167.jpg"></img>
                </div>
                <div class="article-content-right">
                    <div class="article-title"><a href="###">k8s证书升级</a></div>
                    <div class="article-content-info"><p>由 kubeadm 生成的客户端证书在 1 年后到期</p></div>
                    <div class="article-tag"><span>k8s</span></div>
                </div>
            </div>
            <div class="article-content-1">
                <div class="article-content-left" >
                    <img src="../assets/img/docker_gaitubao_267x127.png"></img>
                </div>
                <div class="article-content-right">
                    <div class="article-title"><a href="###">5款非常好用的 Docker 工具</a></div>
                    <div class="article-content-info"><p>Docker 社区已经创建了许多开源工具，它们能帮我们处理各种用例。作者在本文中推荐了 5 款认为最有用的 Docker 工具，分别是 Watchtower（自动更新 Docker 容器）、docker-gc（容器和镜像的垃圾回收）、docker-slim（容器瘦身）、 rocker：突破 Dockerfile 的限制，以及 ctop（容器的类顶层接口）</p></div>
                    <div class="article-tag"><span>docker</span></div>
                </div>
            </div>
            <div class="article-content-1">
                <div class="article-content-left" >
                    <img src="../assets/img/python.png"></img>
                </div>
                <div class="article-content-right">
                    <div class="article-title"><a href="###">python 生成器和迭代器</a></div>
                    <div class="article-content-info"><p>python中生成器和迭代器最常用</p></div>
                    <div class="article-tag"><span>python</span></div>
                </div>
            </div>

            <div class="article-content-1">
                <div class="article-content-left" >
                    <img src="../assets/img/python.png"></img>
                </div>
                <div class="article-content-right">
                    <div class="article-title"><a href="###">Python中yield用法</a></div>
                    <div class="article-content-info"><p>首先我要吐槽一下，看程序的过程中遇见了yield这个关键字，然后百度的时候，发现没有一个能简单的让我懂的，讲起来真TM的都是头头是道，什么参数，什么传递的，还口口声声说自己的教程是最简单的，最浅显易懂的，我就想问没有有考虑过读者的感受</p></div>
                    <div class="article-tag"><span>python</span></div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
    export default {
        name:'Conent_info',
    }

</script>
<style scoped>
    .article-content{
        display: flex;
        flex-direction: column;
        width: 960px;
        background-color:#f6f6f6;
    }
    .article-content-1{
        display: flex;
        flex-direction: row;
        padding: 20px;
        /*height: 150px;*/
    }
    .article-title a{
   text-decoration: none;
    overflow: hidden;
    font-size: 18px;
    font-weight: 600;
    max-height: 48px;
    line-height: 24px;
    color: #38485a;
    display: inline;
}
    .article-content-info p{
        font-size: 14px;
        overflow: hidden;
        height: 36px;
        /*float: left;*/
        overflow: hidden;
        margin-top: 10px;
        padding: 0;
        color: #747f8c;
        height: 48px;
        line-height: 24px;
    }
    .article-content-right{
        margin: 10px;
    }
    .article-content-right .article-tag{
        padding: 2px;
        font-size: 14px;
        color: #999;
    }
    .article{
        background-color:#f6f6f6;
        width: 960px;
        line-height: 40px;
    }
    .article h2{
        height: 50px;
        width: 80px;
        text-align: left;
        font-size: 18px;
        color: #38485a;
        line-height: 40px;
        border-bottom: 2px solid #209E80;
    }

</style>