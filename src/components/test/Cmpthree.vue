<template>
    <div class="cmpthree">

        <slot :data="languages">
        <ul v-for="item in languages">
            <li>{{item}}</li>
        </ul>
        </slot>
    </div>
</template>
<script>

    export default {
        name: 'Cmpthree',
        components:{

        },
        data(){
            return{
                "languages":['python','go','java','css']
            }
        }
    }
</script>
<style scoped>

</style>