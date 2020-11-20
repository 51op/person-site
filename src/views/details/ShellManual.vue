<template>
    <div class="ShellManual">
        <Ttile></Ttile>
        <Zhaiyao>
            <slot slot="contentSlot">shell教程</slot>
        </Zhaiyao>
        <div class="content">
            <div class="markdown-body">
                <shellDetails></shellDetails>
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
    import 'highlight.js/styles/github.css'
    import 'github-markdown-css'
    import  shellDetails from '@/views/details/shell/shellDetail.md'
    export default {
        name:'ShellManual',
        data(){
            return{

            }
        },
        components:{
            Zhaiyao,
            Ttile,
            Footer_contend,
            Share,
            shellDetails
        }
    }
</script>
<style scoped>

    .ShellManual{
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
        margin: auto 90px;
        display: flex;
    }


</style>