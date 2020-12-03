<template>
    <div class="detail-info">
        <div class="iconimg"><slot name="imgSlot"><img src="../assets/img/shouye.png"></slot></div>
        <div class="shouye">
            <slot name="shouyeSlot"><router-link to="/" tag="a">首页</router-link></slot>
        </div>
        <div class="jiantou"><img src="../assets/img/jiantou.png"/></div>
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
        /*line-height: 40px;*/
        color: #606A75;

    }
    .detail-info div{
        padding: 0 0 0 8px;
    }
    .shouye{
    }
    .shouye a {
        color: #606A75;
        text-decoration: none;
    }
   .shouye img{
       /*margin-top: 5px;*/
   }
    .iconimg{
        /*margin-top: 10px;*/

    }
    .iconContent{

    }
</style>