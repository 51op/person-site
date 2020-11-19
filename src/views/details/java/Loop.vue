<template>
    <div class="Loop markdown-body">

        <Loop></Loop>
    </div>
</template>
<script>
    import 'highlight.js/styles/github.css'
    import 'github-markdown-css'
    import  Loop from '@/views/manuals/java/part2/loop.md'
    export default {
        name:'Loop',
        data(){
            return{

            }
        },
        components:{
            Loop
        }
    }
</script>
<style scoped></style>