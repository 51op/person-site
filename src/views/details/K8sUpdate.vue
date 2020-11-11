<template>
    <div class="k8supdate">
        <Ttile></Ttile>

        <div class="detail-info">
            <img src="../../assets/img/title.png">
            <div class="tiku-shouye"><a href="/">首页 &nbsp;&nbsp;&nbsp;&nbsp;></a></div>
            <div class="tiku-mianshi">k8s证书升级&nbsp;&nbsp;&nbsp;&nbsp;></div>
        </div>



        <div class="content">



        </div>



        <Footer_contend></Footer_contend>

    </div>
</template>

<script>
    import Ttile from  '../../components/Title';
    import Footer_contend from '../../components/Footer_contend';
    import Share from '../../components/Share'
    export  default {
        name:'k8supdate',
        components:{
            Ttile,
            Footer_contend,
            Share
        },
        data(){
            return{

            }

        },
        methods: {

        },
    }
</script>
<style scoped>


</style>