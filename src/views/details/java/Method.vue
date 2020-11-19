<template>
    <div class="Method markdown-body">

        <methodCmp></methodCmp>
    </div>
</template>
<script>
    import 'highlight.js/styles/github.css'
    import 'github-markdown-css'
    import  methodCmp from '@/views/manuals/java/part2/method.md'
    export default {
        name:'Method',
        data(){
            return{

            }
        },
        components:{
            methodCmp
        }
    }
</script>
<style scoped></style>