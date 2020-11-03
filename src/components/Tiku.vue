<template>

<div class="tiku">
    <!--    title-->
    <Title></Title>
    
    
    
    <div class="tiku-icon">
        <img src="../assets/img/title.png">
        <div class="tiku-shouye"><a href="/">首页 &nbsp;&nbsp;&nbsp;&nbsp;></a></div>
        <div class="tiku-mianshi">运维面试总结&nbsp;&nbsp;&nbsp;&nbsp;></div>
    </div>

    <div class="content-zongjie">运维面试总结</div>
    <div class="content-list">
        <div class="tiku-content" v-for="item in list" :key="item.id">
            <div class="tiku-content-img"><img :src="item.img"></div>
            <div class="tiku-contend-zhaiyao">
<!--                <div class="tiku-contend-tile"><router-link tag="a" :to="'/details/'+item.id">{{item.title}}</router-link></div>-->
                <div class="tiku-contend-tile"><router-link tag="a" :to="{ name: 'details', params: { id: item.id }}">{{item.title}}</router-link></div>
                <div class="tiku-contend-content"><p>{{item.content}}</p></div>
            </div>
        </div>
    </div>

<Footer_contend></Footer_contend>


</div>

</template>
<script >
    import Title from './Title'
    import Footer_contend from  './Footer_contend'
export default {
    name:'Tiku',
    data(){
        return {

            list: [
                {
                    id: "123",
                    title: '汇总当下20k以上运维面试总结',
                    content:'1、tcp和udp的区别? 2、tcp三次握手四次挥手? 3、https传输是怎么是安全的？4、Kubernetes创建一个Pod的主要流程？',
                    img: require('../assets/img/Linux-250x165.png')
                },
                {
                    id: 1234,
                    title: '大数据运维面试汇总',
                    content:'1、redis集群是如何分片的? 2、RabbitMq怎么数据被自消费? 3、redis集群模式有哪几种？4、elastisearch分片、副本如何规划？',
                    img: require('../assets/img/data.png')
                },
            ]
        }
    },
    components:{
        Title,
        Footer_contend

    }
}
</script>
<style>

.content-list{
    width: 960px;
    background-color: #fff;
}
.content-zongjie{
        font-size: 20px;
        line-height: 40px;
        font-weight: 500;
        color: seagreen;
        margin: 20px 2px;
        padding: 20px 25px;
        background-color: #fff;
        width: 910px;
    }
.tiku{
    background-color:#f6f6f6;

}
.tiku-shouye a {
    text-decoration: none;
    display: block;
    color: #171c21;
    padding-right: 10px;
}
.tiku-icon {
        display: flex;
        font-size: 14px;
        color: #333;
        padding: 8px;
    }
    .tiku-icon img{
        padding: 0 10px 0 25px;
    }

    .tiku-content{
        display: flex;
        padding: 20px;
    }
.tiku-contend-tile{
    padding: 0 20px;
}
.tiku-content-img img{
    width: 270px;
    height: 160px;
}
    .tiku-contend-tile a {
        font-size: 20px;
        font-weight: 500;
        line-height: 24px;
        text-decoration: none;
        color: seagreen;
    }
    .tiku-contend-content{
        color: #747f8c;
        padding: 10px;
        line-height: 24px;
        height: 48px;
        overflow: hidden;
    }
</style>