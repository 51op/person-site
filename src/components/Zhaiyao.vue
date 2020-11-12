<template>
    <div class="detail-info">
        <slot name="imgSlot"><img src="../assets/img/title.png"></slot>
<!--        <slot name="shouyeSlot"><div class="tiku-shouye"><a href="/">首页 &nbsp;&nbsp;&nbsp;&nbsp;></a></div></slot>-->
        <slot name="shouyeSlot"><div class="tiku-shouye"><router-link to="/">首页 &nbsp;&nbsp;&nbsp;&nbsp;></router-link></div></slot>
<!--        <slot name="shouyeSlot"><div class="tiku-shouye"><router-link :to="'Index'">首页 &nbsp;&nbsp;&nbsp;&nbsp;></router-link></div></slot>-->
        <slot name="contentSlot"></slot>
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
        display: block;
        color: #171c21;
        padding-right: 10px;
    }
    .detail-info {
        display: flex;
        font-size: 16px;
        width: auto;
        color: #333;
        margin: 20px 30px ;
        padding: 8px;

    }
    .tiku-icon img{
        padding: 0 10px 0 25px;
    }
</style>