<template>
    <div class="mem-header">
<!--        <ul>-->
<!--            <li><a href="/"><img src="@/assets/img/logo.png" style="width: 200px;"></a></li>-->
<!--            <li><a href="/">首页</a></li>-->
<!--            <li><a href="/tikulist">运维题库</a></li>-->
<!--            <li><a href="/">运维干货</a></li>-->
<!--            <li><router-link to="/">资讯</router-link></li>-->
<!--            <li><router-link to="/">搜索</router-link></li>-->

<!--        </ul>-->

        <div class="header-left"><a href="/"><img src="@/assets/img/logo.png"></a></div>

        <div class="header-right">
            <el-menu
                mode="horizontal"
                background-color="#333333"
                text-color="#fff"
                active-text-color="#ffd04b" style="height: 60px">
                <el-menu-item index="1"><router-link to="/">首页</router-link></el-menu-item>
                <el-menu-item index="6"><router-link to="/tikulist">运维题库</router-link></el-menu-item>
                <el-submenu index="3">
                    <template slot="title">教程干货</template>
                    <el-menu-item index="1-1">Java教程</el-menu-item>
                    <el-menu-item index="1-2">K8s教程</el-menu-item>
                    <el-menu-item index="1-3">Docker教程</el-menu-item>
                    <el-menu-item index="1-4">Shell教程</el-menu-item>
                    <el-menu-item index="1-5">Golang教程</el-menu-item>
                    <el-menu-item index="1-6">Python教程</el-menu-item>
                    <el-menu-item index="1-7">Nginx教程</el-menu-item>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">运维工具</template>
                    <el-menu-item index="2-1">ansible</el-menu-item>
                    <el-menu-item index="2-2">saltstack</el-menu-item>
                    <el-menu-item index="2-3">fabric</el-menu-item>
                    <el-menu-item index="2-4">jenkins</el-menu-item>
                    <el-menu-item index="2-5">gitlab</el-menu-item>
                    <el-menu-item index="2-6">zabbix</el-menu-item>
                    <el-menu-item index="2-7">grafana</el-menu-item>
                    <el-menu-item index="2-8">prometheus</el-menu-item>
                </el-submenu>
                <el-menu-item index="4"><router-link to="/">运维资讯</router-link></el-menu-item>
                <el-menu-item index="5"><router-link to="/">搜索</router-link></el-menu-item>
            </el-menu>
        </div>





    </div>

</template>
<script>


    export default {
        name:'Title',
        data(){
            return{
            }
        }
    };

</script>
<style scoped>




    /*ul{*/
    /*    list-style-type: none;*/
    /*    background-color: #333333;*/
    /*    display:flex;*/
    /*}*/
    /*li a {*/
    /*    display: block;*/
    /*    color: white;*/
    /*    text-align: center;*/
    /*    padding: 20px 24px;*/
    /*    text-decoration: none;*/
    /*    font-size: 20px;*/
    /*}*/
    /*li a:hover {*/
    /*    background-color: #111;*/
    /*}*/
.mem-header{
    display: flex;
    background-color: #333333;
}
    .header-left{
    }
.header-left img{
     margin: 15px;
      width: 150px;
/*    height: 100px;*/
}
    ::v-deep .el-submenu__title, ::v-deep.el-menu-item {
        font-size: 16px!important;
    }
</style>