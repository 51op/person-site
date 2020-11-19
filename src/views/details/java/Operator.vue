<template>
    <div class="Operator markdown-body">

        <OperatorV></OperatorV>
    </div>
</template>
<script>
    import 'highlight.js/styles/github.css'
    import 'github-markdown-css'
    import  OperatorV from '@/views/manuals/java/part1/operator.md'
    export default {
        name:'Operator',
        data(){
            return{

            }
        },
        components:{
            OperatorV
        }
    }
</script>
<style scoped></style>