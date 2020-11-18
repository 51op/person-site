<template>
    <div class="keyword">
        <div class="markdown-body">
            <KeyWords></KeyWords>
        </div>

    </div>
</template>
<script>
    import 'highlight.js/styles/github.css'
    import 'github-markdown-css'
    import  KeyWords from '@/views/manuals/java/part1/keyword.md'
    export default {
        name:'KeyWord',
        data(){
            return{

            }
        },
        components:{
            KeyWords
        }
    }
</script>
<style scoped></style>