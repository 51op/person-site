<template>
    <div class="Loop markdown-body">

        <LoopHuan></LoopHuan>
    </div>
</template>
<script>
    import 'highlight.js/styles/github.css'
    import 'github-markdown-css'
    import  LoopHuan from '@/views/manuals/java/part2/loop.md'
    export default {
        name:'Loop',
        data(){
            return{

            }
        },
        components:{
            LoopHuan
        }
    }
</script>
<style scoped></style>