<template>
    <div class="box-content">
        <div class="content">
            <div class="item-1" v-for="item in list" :key="item.name">
<!--                <a href="/">{{ item.name }}</a>-->
                <router-link :to="{path:'/details/'+item.href}">{{ item.name }}</router-link>
                <p>{{ item.text }}</p>
            </div>


        </div>
        <div class="weixin_shequ">
            <span>加入社区</span>
            <img :src="imgurl"></img>
        </div>





    </div>


</template>
<script>
    export default {
        name:'Content',
        data(){
            return{
                'imgurl':require('@/assets/img/shequ_gaitubao_378x130.png'),
                list: [
                    {
                        name:"Java教程",
                        text:"Java语言作为静态面向对象编程语言的代表，极好地实现了面向对象理论，允许程序员以优雅的思维方式进行复杂的编程",
                        href:"javamanual"
                    },

                    {
                        name:"Python教程",
                        text:"Python是一种不受局限、跨平台的开源编程语言，其数据处理速度快、功能强大且简单易学，在数据分析与处理中被广泛应用",
                        href:"javamanual"
                    },
                    {
                        name:"Docker教程",
                        text:"Docker 是一个开放源代码软件，是一个开放平台，用于开发应用、交付（shipping）应用、运行应用。",
                        href:"javamanual"
                    },

                    {
                        name:"K8s教程",
                        text:"Kubernetes 是一个自动化部署，缩放，以及容器化管理应用程序的开源系统,可弹性伸缩扩容",
                        href:"javamanual"
                    },
                    {
                        name:"Nginx教程",
                        text:"Nginx是一款轻量级的Web服务器、反向代理服务器,其特点占用内存少，并发高，模块众多等",
                        href:"javamanual"
                    },

                    {
                        name:"Shell教程",
                        text:"Linux 命令行与 shell 脚本编程的全方位教程，主要包括四大部分：Linux 命令行，shell 脚本编程基础，高级 shell 脚本编程，如何创建实用的 shell 脚本",
                        href:"javamanual"
                    },
                    {
                        name:"Golang教程",
                        text:"Go 是一个开源的编程语言，它能让构造简单、可靠且高效的软件变得容易，Go 语言被设计成一门应用于搭载 Web 服务器，存储集群或类似用途的巨型中央服务器的系统编程语言。\n" +
                            "\n" +
                            "对于高性能分布式系统领域而言，Go 语言无疑比大多数其它语言有着更高的开发效率。它提供了海量并行的支持，这对于游戏服务端的开发而言是再好不过了",
                        href:"gomanual"
                    },

                ]
            }
        }
    }

</script>
<style scoped>


    .box-content{
        display: flex;
        flex-wrap: nowrap;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        color: #2c3e50;

    }
    .content {
        height: 400px;
        width: 960px;
        padding: 10px 5px;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
    }
    .item-1{
        width: 280px;
        margin: 10px  10px;
        padding: 10px ;
        display: block;
        border:0px solid ;
        font-size: 20px;
        height: 80px;
        background-color: #f6f6f6;
        text-align: center;

    }
    .item-1 a {
        text-decoration: none;
        color: cornflowerblue;
        font-weight: bold;
        font-size: 16px;
        line-height: 30px;

    }
    .item-1 p {
        font-size: 14px;
        font-weight: inherit;
        font-style: inherit;
        font-family: inherit;
        overflow: hidden;
        height: 40px;
        color: #999;
    }
    .weixin_shequ{
        padding:5px;
        background-color: #fff;
    }
    .weixin_shequ img{
        height: 180px;
        width: 370px;
    }
    .weixin_shequ span{
        text-align: left;
        line-height: 45px;
        font-size: 16px;
        color: #42b983;
        display: block;
        font-weight: bold;
    }



</style>