<template>
    <div class="mem-header">
        <ul>
            <li><a href="/"><img src="../assets/img/logo.png" style="width: 200px;"></a></li>
            <li><a href="/">首页</a></li>
            <li><a href="/tiku">运维题库</a></li>
            <li><a href="/">运维干货</a></li>
            <li><a href="/">面试题经</a></li>
            <li><a href="/">资讯</a></li>
            <li><a href="/">搜索</a></li>
        </ul>
    </div>

</template>
<script>


    export default {
        name:'Title',
    };

</script>
<style scoped>

    ul{
        list-style-type: none;
        background-color: #333333;
        display:flex;

    }
    li a {
        display: block;
        color: white;
        text-align: center;
        padding: 20px 24px;
        text-decoration: none;
        font-size: 20px;

    }
    li a:hover {
        background-color: #111;
    }

</style>