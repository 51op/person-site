<template>
    <div class="keyword">

        <div class="markdown-body">
            <KeyWord></KeyWord>
        </div>

    </div>
</template>
<script>
    import 'highlight.js/styles/github.css'
    import 'github-markdown-css'
    import  KeyWord from '@/views/manuals/java/part1/keyword.md'
    export default {
        name:'KeyWord',
        data(){
        },
        components:{
            KeyWord
        }
    }
</script>
<style scoped></style>