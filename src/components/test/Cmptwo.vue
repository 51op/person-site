<template>
    <div class="cmptwo">

        <div>这是子组件2</div>
<!--        slot使用-->
        <slot>默认为<li>hhhh</li></slot>

<!--        具名插槽使用-->

        <slot name="left">左边</slot>
        <slot name="center">中间</slot>
        <slot name="right">右边</slot>
    </div>

</template>
<script>

    export default {
        name: 'Cmptwo',
        components:{

        }
    }
</script>
<style scoped>

</style>