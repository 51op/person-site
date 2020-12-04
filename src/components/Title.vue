<template>
    <div class="mem-header">
        <div class="header-left"><a href="/"><img src="@/assets/img/logo.png"></a></div>
        <div class="header-right">
            <el-menu
                mode="horizontal"
                background-color="#333333"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-menu-item index="1"><router-link to="/">首页</router-link></el-menu-item>
                <el-menu-item index="2"><router-link to="/tikulist">运维题库</router-link></el-menu-item>
                <el-submenu index="3">
                    <template slot="title">教程干货</template>
                    <el-menu-item index="3-1"><router-link to="/details/javamanual">Java教程</router-link></el-menu-item>
                    <el-menu-item index="3-2"><a href="https://kubernetes.io/zh/docs/home/">K8s教程</a></el-menu-item>
                    <el-menu-item index="3-3"><a href="https://docs.docker.com/">Docker教程</a></el-menu-item>
                    <el-menu-item index="3-4"><a href="https://tldp.org/LDP/abs/html/">Shell教程</a></el-menu-item>
                    <el-menu-item index="4-5"><router-link to="/details/gomanual">Golang教程</router-link></el-menu-item>
                    <el-menu-item index="5-6"><a href="https://docs.python.org/zh-cn/3/">Python教程</a></el-menu-item>
                    <el-menu-item index="6-7"><a href="http://nginx.org/en/docs/">Nginx教程</a></el-menu-item>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title">运维工具</template>
                    <el-menu-item index="4-1">ansible</el-menu-item>
                    <el-menu-item index="4-2">saltstack</el-menu-item>
                    <el-menu-item index="4-3">fabric</el-menu-item>
                    <el-menu-item index="4-4">jenkins</el-menu-item>
                    <el-menu-item index="4-5">gitlab</el-menu-item>
                    <el-menu-item index="4-6">zabbix</el-menu-item>
                    <el-menu-item index="4-7">grafana</el-menu-item>
                    <el-menu-item index="4-8">prometheus</el-menu-item>
                </el-submenu>
                <el-menu-item index="5"><router-link to="/">运维资讯</router-link></el-menu-item>
                <el-menu-item index="6"><router-link to="/">搜索</router-link></el-menu-item>
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





.mem-header{
    display: flex;
    background-color: #333333;
}
.header-left img{
     margin: 15px;
      width: 150px;
}
    ::v-deep .el-submenu__title, ::v-deep.el-menu-item {
        font-size: 16px!important;
        display: flex;
        align-items: center;

    }
::v-deep .el-submenu__title, ::v-deep.el-menu-item a {
    text-decoration: none;
    color: white;
}


</style>