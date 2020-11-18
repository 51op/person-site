<template>
    <div class="detail-info">
        <div class="iconimg"><slot name="imgSlot"><img src="../assets/img/shouye.png"></slot></div>
        <div class="shouye"><slot name="shouyeSlot"><router-link to="/" tag="a">首页 <img src="../assets/img/jiantou.png"/></router-link></slot></div>
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
        line-height: 45px;
        padding: 2px;

    }
    .shouye {
        margin: 22px 2px;
    }
    .iconimg{
        margin: auto 5px;
    }
    .iconContent{
        margin: 22px 5px;
    }
</style>