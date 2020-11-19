<template>
    <div class="fenlei markdown-body">

        <fenlei></fenlei>
    </div>
</template>
<script>
    import 'highlight.js/styles/github.css'
    import 'github-markdown-css'
    import  fenlei from '@/views/manuals/java/part1/var1.md'
    export default {
        name:'FenLei',
        data(){
            return{

            }
        },
        components:{
            fenlei
        }
    }
</script>
<style scoped></style>