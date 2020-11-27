<template>
    <div class="gomanual">
        <Ttile></Ttile>
        <Zhaiyao><slot slot="contentSlot">Golang教程</slot></Zhaiyao>
        <div class="content markdown-body">
            <GoManual></GoManual>
        </div>
        <Share></Share>
        <Footer_contend></Footer_contend>
    </div>
</template>
<script>
    import 'highlight.js/styles/github.css'
    import 'github-markdown-css'
    import  GoManual from '@/views/manuals/go/go.md'

    import Ttile from  '../../components/Title'
    import Footer_contend from '../../components/Footer_contend'
    import Share from '../../components/Share'
    import Zhaiyao from '../../components/Zhaiyao'
    export default {
        name:'gomanual',
        data(){
            return{

            }
        },
        components:{
            GoManual,
            Zhaiyao,
            Ttile,
            Footer_contend,
            Share,
        }
    }
</script>
<style scoped>
    .gomanual{
        background-color: #f6f6f6;
        color: #171C21;
    }
    .content{
        width: 960px;
        background-color:#fff;
        margin: auto 70px;
    }

    .content p {
        margin: 8px 30px;
        line-height: 1.8;
        padding: 0px 0 0 0;
        word-break: break-all;
        font-size: 16px;
        letter-spacing: 0;
    }
    .content h1 {
        margin: 20px 30px;
        color: #42b983;
        font-size: 20px;
        font-weight: bold;
        line-height: 45px;
    }
    code{
        margin: 8px 40px;
    }
</style>