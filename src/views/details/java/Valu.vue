<template>
    <div class="valu markdown-body">

        <BianLiang></BianLiang>
    </div>
</template>
<script>
    import 'highlight.js/styles/github.css'
    import 'github-markdown-css'
    import  BianLiang from '@/views/manuals/java/part1/var.md'
    export default {
        name:'valu',
        data(){
            return{

            }
        },
        components:{
            BianLiang
        }
    }
</script>
<style scoped></style>