<template>
    <div class="iden">

        <div class="markdown-body">
            <identifier></identifier>
        </div>

    </div>
</template>
<script>
    import 'highlight.js/styles/github.css'
    import 'github-markdown-css'
    import  identifier from '@/views/manuals/java/part1/identifier.md'
    export default {
        name:'iden',
        data(){
            return{

            }
        },
        components:{
            identifier
        }
    }
</script>
<style scoped></style>