<template>
    <div class="mem-header">
        <ul>
            <li><img src="../assets/img/logo.png" style="width: 200px; margin: 16px;"></li>
            <li><a href="/">首页</a></li>
            <li><a href="/tiku">运维题库</a></li>
            <li><a href="/ganhuo">运维干货</a></li>
            <li><a href="#info">面试题经</a></li>
            <li><a href="#info">资讯</a></li>
            <li><a href="#info">搜索</a></li>
        </ul>
    </div>

</template>
<script>
    export default {
        name:'Title',
    }

</script>
<style scoped>

    ul{
        list-style-type: none;
        background-color: #333333;
        display:flex;
        margin: 0px 0px auto 0px;

    }
    li a {
        display: block;
        color: white;
        text-align: center;
        padding: 24px 16px;
        text-decoration: none;
        font-size: 20px;

    }
    li a:hover {
        background-color: #111;
    }

</style>