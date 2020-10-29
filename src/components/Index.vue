<template>

<div class="nav-in" >


<!--引入组件-->
    <!--    title-->
    <Ttile></Ttile>
    <!--    content-->
    <Content_List></Content_List>
    <!--contend list-->
    <Conent_info></Conent_info>
    <!--    footer-->
    <Footer_contend></Footer_contend>



</div>


</template>

<script>
import Conent_info from '../components/Conent_info';
import Content_List from  '../components/Content'
import Ttile from  '../components/Title'
import Footer_contend from './Footer_contend'
export default {
  name: 'Index',
  props: {
  },
    data(){
        return{
        }
    },
    components:{
        Conent_info,
        Content_List,
        Ttile,
        Footer_contend
    }

}
</script>

<style scoped>



</style>
