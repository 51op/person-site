<template>
    <div class="detail-info">
        <div class="iconimg"><slot name="imgSlot"><img src="../assets/img/shouye.png"></slot></div>
        <div class="shouye">
            <slot name="shouyeSlot">
                <router-link to="/" tag="a">首页
                <img src="../assets/img/jiantou.png"/>
                </router-link>
            </slot>

        </div>
        <div class="iconContent"><slot name="contentSlot"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "Zhaiyao"
    }
</script>

<style scoped>
    .detail-info {
        display: flex;
        font-size: 14px;
        width: auto;
        margin: 20px 70px ;
        line-height: 40px;
        padding: 0 0 0 25px;
        color: #606A75;

    }
    .shouye{
        /*padding-right: 15px;*/
    }
    .shouye a {
        color: #606A75;
    }
   .shouye img{
       /*background: red;*/
   }
    .iconimg{
        /*padding-right: 6px;*/

    }
    .iconContent{

    }
</style>