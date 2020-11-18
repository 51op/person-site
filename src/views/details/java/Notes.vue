<template>
    <div class="Notes markdown-body">

        <notes></notes>
    </div>
</template>
<script>
    import 'highlight.js/styles/github.css'
    import 'github-markdown-css'
    import  notes from '@/views/manuals/java/part1/notes.md'
export default {
        name:'Notes',
    data(){
            return{

            }
    },
    components:{
        notes
    }
}
</script>
<style scoped></style>