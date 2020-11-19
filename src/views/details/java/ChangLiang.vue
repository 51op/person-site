<template>
    <div class="ChangLiang markdown-body">

        <ChangLiangVal></ChangLiangVal>
    </div>
</template>
<script>
    import 'highlight.js/styles/github.css'
    import 'github-markdown-css'
    import  ChangLiangVal from '@/views/manuals/java/part1/changliang.md'
    export default {
        name:'ChangLiang',
        data(){
            return{

            }
        },
        components:{
            ChangLiangVal
        }
    }
</script>
<style scoped></style>