<template>
    <div class="javamanual">
        <Ttile></Ttile>
        <Zhaiyao>
            <slot slot="contentSlot">Java基本教程语法</slot>
        </Zhaiyao>
        <div class="content">
            <div class="nav-left">
                <div class="nav-root">Java入门教程</div>
                <div class="nav-tree">
                    <el-container>
                        <el-aside width="200px">
                            <el-menu >
                                <el-submenu index="1" >
                                    <template slot="title"><i class="el-icon-location"></i>基本语法</template>
                                    <el-menu-item-group >
                                        <el-menu-item index="1-1">
                                            <router-link to="/java/notes">注释</router-link>
                                        </el-menu-item>
                                        <el-menu-item index="1-2">
                                            <router-link to="/java/identifier">标识符</router-link>
                                        </el-menu-item>
                                        <el-menu-item index="1-3">
                                            <router-link to="/java/keyword">Java中的关键字/保留字</router-link>
                                        </el-menu-item>
                                        <el-menu-item index="1-4">
                                            <router-link to="">变量的本质</router-link>
                                        </el-menu-item>
                                        <el-menu-item index="1-5">
                                            <router-link to="">变量的分类</router-link>
                                        </el-menu-item>
                                        <el-menu-item index="1-6">
                                            <router-link to="">常量(Constant)</router-link>
                                        </el-menu-item>
                                        <el-menu-item index="1-7">
                                            <router-link to="">基本数据类型</router-link>
                                        </el-menu-item>
                                        <el-menu-item index="1-8">
                                            <router-link to="">运算符</router-link>
                                        </el-menu-item>
                                        <el-menu-item index="1-9">
                                            <router-link to="">类型转换</router-link>
                                        </el-menu-item>
                                    </el-menu-item-group>
                                </el-submenu>
                                <el-submenu index="2">
                                    <template slot="title"><i class="el-icon-location"></i>控制语句</template>
                                    <el-menu-item-group>
                                        <el-menu-item index="2-1">
                                            <router-link to="">循环语句</router-link>
                                        </el-menu-item>
                                        <el-menu-item index="2-2">
                                            <router-link to="">方法</router-link>
                                        </el-menu-item>
                                        <el-menu-item index="2-3">
                                            <router-link to="">方法的重载(overload)</router-link>
                                        </el-menu-item>
                                    </el-menu-item-group>
                                </el-submenu>
                                <el-submenu index="3">
                                    <template slot="title"><i class="el-icon-location"></i>java面向对象</template>
                                    <el-menu-item-group>
                                        <el-menu-item index="3-1">
                                            <router-link to="">类和对象的概念</router-link>
                                        </el-menu-item>
                                        <el-menu-item index="3-2">
                                            <router-link to="">类的定义</router-link>
                                        </el-menu-item>
                                        <el-menu-item index="3-3">
                                            <router-link to="">面向对象的内存分析</router-link>
                                        </el-menu-item>
                                        <el-menu-item index="3-3">
                                            <router-link to="">构造方法</router-link>
                                        </el-menu-item>
                                        <el-menu-item index="3-3">
                                            <router-link to="">垃圾回收</router-link>
                                        </el-menu-item>
                                        <el-menu-item index="3-3">
                                            <router-link to="">this</router-link>
                                        </el-menu-item>
                                    </el-menu-item-group>
                                </el-submenu>
                                <el-submenu index="4">
                                    <template slot="title"><i class="el-icon-location"></i>java面向对象进阶</template>
                                    <el-menu-item-group>
                                        <el-menu-item index="4-1">
                                            <router-link to="">继承 instanceof运算符</router-link>
                                        </el-menu-item>
                                        <el-menu-item index="4-2">
                                            <router-link to="">方法的重写override</router-link>
                                        </el-menu-item>
                                        <el-menu-item index="4-3">
                                            <router-link to="">toString方法</router-link>
                                        </el-menu-item>
                                        <el-menu-item index="4-3">
                                            <router-link to="">equals和==方法</router-link>
                                        </el-menu-item>
                                    </el-menu-item-group>
                                </el-submenu>
                            </el-menu>
                        </el-aside>

                        <el-container>

                            <div class="right-content">
                                <el-main>
                                    <router-view />
                                </el-main>
                            </div>

                        </el-container>
                    </el-container>
                </div>
            </div>


        </div>
        <Share></Share>
        <Footer_contend></Footer_contend>
    </div>
</template>
<script>
    import Ttile from  '../../components/Title';
    import Footer_contend from '../../components/Footer_contend';
    import Share from '../../components/Share'
    import Zhaiyao from '../../components/Zhaiyao'
    export default {
        name:'javamanual',
        data(){
            return{

            }
        },
        components:{
            Zhaiyao,
            Ttile,
            Footer_contend,
            Share,
        }
    }
</script>
<style scoped>
    .javamanual{
        background-color: #f6f6f6;
        color: #171C21;
    }
    h1{
        margin: 20px 30px;
        font-size: 30px;
        color: #42b983;
        margin: auto 70px;;

    }
    .content{
        width: 960px;
        background-color:#fff;
        margin: auto 70px;
        display: flex;
    }
  a{
      color: #171C21;
  }
  .nav-root{
      margin: 2px 30px;
      line-height: 30px;
      color: #42b983;
      font-weight: bold;
  }
    .right-content{
        width: 760px;
    }

</style>