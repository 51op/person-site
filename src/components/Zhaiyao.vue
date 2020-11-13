<template>
    <div class="detail-info">
        <slot name="imgSlot"><img src="../assets/img/shouye.png" class="titlIcon"></slot>
        <slot name="shouyeSlot"><div class="tiku-shouye"><router-link to="/">首页 <img src="../assets/img/jiantou.png"/></router-link></div></slot>
<!--        <slot name="shouyeSlot"><div class="tiku-shouye"><router-link :to="'Index'">首页 &nbsp;&nbsp;&nbsp;&nbsp;></router-link></div></slot>-->
        <slot name="contentSlot"><div class="iconContent"></div></slot>
    </div>
</template>

<script>
    export default {
        name: "Zhaiyao"
    }
</script>

<style scoped>
    .tiku-shouye a {
        text-decoration: none;
        margin: auto 5px;
    }
    .detail-info {
        display: flex;
        font-size: 14px;
        width: auto;
        color: #333;
        margin: 20px 30px ;
        /*padding: 2px;*/

    }
    .iconContent{
        margin: auto 5px;
    }
</style>