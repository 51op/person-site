<template>
    <div class="share">


        <a class="shareZan" title="点赞" href="###">
            <div @click="btnDianzan" >点赞
                <span>{{dianzanNum}}</span>
            </div>
        </a>


        <el-popover placement="top" v-model="visible">
                <p class="imgInfoText">扫码关注公众号"<span style="color: red;font-weight: bold">51运维com"</span></p>
                <p class="imgErweima"></p>
                <el-button slot="reference"  class="shareWeixin">分享到微信</el-button>
        </el-popover>



    </div>
</template>
<script>
export default {
    name:'share',
    data(){
        return{
            showModal:false,
            visible: false,
            dianzanNum:1
        }
    },
    components:{
    },
    computed:{


    },
    methods:{
        btnDianzan(){
            this.dianzanNum++
        }
    }
}
</script>
<style scoped>
    .shareZan{
        float: left;
        margin: 0 10px 0 0;
        padding: 0 20px 0 50px;
        line-height: 34px;
        color: #333333;
        font-size: 14px;
        background: #fff url("../assets/img/dianzan.png") no-repeat 20px 8px;
        border: 2px solid #209E80;
        text-decoration: none;
        border-radius: 34px;
    }

    .shareWeixin{
        float: left;
        margin: 0 10px 0 0;
        padding: 0 20px 0 50px;
        line-height: 34px;
        color: #333333;
        font-size: 14px;
        background: #fff url("../assets/img/weixin.png") no-repeat 20px 8px;
        border: 2px solid #209E80;
        text-decoration: none;
        border-radius: 34px;
    }
    .share{
        margin: 40px 400px 100px;

    }

    a:hover{
        background-color: #8c939d;
    }

    .imgErweima{
        background: url("../assets/img/erweima_gaitubao_254x254.jpg") no-repeat;
        height: 254px;
        width: 270px;
    }
    .imgInfoText{
        margin: 5px auto auto 15px;
    }

</style>