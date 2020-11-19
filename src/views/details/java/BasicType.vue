<template>
    <div class="basictype markdown-body">

        <BasicTypeVal></BasicTypeVal>
    </div>
</template>
<script>
    import 'highlight.js/styles/github.css'
    import 'github-markdown-css'
    import  BasicTypeVal from '@/views/manuals/java/part1/basic_type.md'
    export default {
        name:'BasicType',
        data(){
            return{

            }
        },
        components:{
            BasicTypeVal
        }
    }
</script>
<style scoped></style>