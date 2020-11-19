<template>

    <div class="article-header">
        <div class="article">
            <h2>最新文章|</h2>
        </div>
        <div class="article-content" v-for="item in  listSort":key="list.id">
            <div class="article-content-1">
                <div class="article-content-left" >
                    <img :src=item.img></img>
                </div>
                <div class="article-content-right">
                    <div class="article-title"><router-link :to="{path:'/details/'+item.path}">{{ item.title }}</router-link></div>
                    <div class="article-content-info"><p>{{ item.info }}</p></div>
                    <div class="article-tag"><span><el-tag>{{item.tag}}</el-tag></span></div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
    export default {
        name: 'Conent_info',
        data() {
            return {
                list: [
                    {
                        id: 4,
                        img: require("../assets/img/kubeTitle_gaitubao_271x150.png"),
                        title: "k8s证书升级",
                        path: "k8supdate",
                        info: "由 kubeadm 生成的客户端证书在 1 年后到期,证书升级有两种方法。",
                        tag: "k8s"
                    },
                    {
                        id: 6,
                        img: require("../assets/img/docker_gaitubao_267x127.png"),
                        title: "5款非常好用的 Docker 工具",
                        path:"dockertools",
                        info: "Docker 社区已经创建了许多开源工具，它们能帮我们处理各种用例。作者在本文中推荐了 5 款认为最有用的 Docker 工具，分别是 Watchtower（自动更新 Docker 容器）、docker-gc（容器和镜像的垃圾回收）、docker-slim（容器瘦身）、 rocker：突破 Dockerfile 的限制，以及 ctop（容器的类顶层接口）。",
                        tag: "docker"
                    },
                    {
                        id: 3,
                        img: require("../assets/img/pythonTitle_gaitubao_265x136.png"),
                        title: "python 生成器和迭代器",
                        path:"pygen",
                        info: "python中生成器和迭代器最常用",
                        tag: "python"
                    },
                    {
                        id: 2,
                        img: require("../assets/img/python.png"),
                        title: "Python中yield用法",
                        path:"pyield",
                        info: "首先我要吐槽一下，看程序的过程中遇见了yield这个关键字，然后百度的时候，发现没有一个能简单的让我懂的，讲起来真TM的都是头头是道，什么参数，什么传递的，还口口声声说自己的教程是最简单的，最浅显易懂的，我就想问没有有考虑过读者的感受",
                        tag: "python"
                    },
                    {
                        id: 5,
                        img: require("../assets/img/k8s_gaitubao_262x167.jpg"),
                        title: "kubernets 升级由v1.16.4-v1.17.4版本",
                        path:'K8sVersionUpdate',
                        info: "kubernets 升级由v1.16.4-v1.17.4版本,3个节点",
                        tag: "k8s"
                    },
                ]
            }

        },
        computed: {
            listSort() {
                return this.sortByKey(this.list,'id')
            }
        },
        filters: {},
        methods: {
            //数组对象方法排序:
            sortByKey(array, key) {
                return array.sort(function (b, a) {
                    var x = a[key];
                    var y = b[key];
                    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
                });
            }


        }
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
        padding: 10px;
        font-size: 14px;
        color: #999;
        font-weight: bold;
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
        margin: 10px 30px;
    }

</style>