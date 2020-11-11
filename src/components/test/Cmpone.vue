<template>
    <div class="cmpone">

<!--        <div>{{forChildMsg}}</div>-->
<!--        <div>{{postTitle}}</div>-->
<!--        <p>aaa</p>-->
<!--        <button v-for="item in catalireies" @click="btclick(item)">{{item.name}}</button>-->
<!--        -->

        <h1>props接收到中num1 num2的值</h1>

        <div>{{num1}}</div>
        <div>{{num2}}</div>

        <h1>data接收到中dnum1 dnum2的值</h1>
        <div>{{dnum1}}</div>
        <div>{{dnum2}}</div>

<!--        <input type="text"  v-model="dnum1"></input><br>-->
        <input type="text"  :value="dnum1" @input="num1Input"></input><br>
<!--        <input type="text"  v-model="dnum2"></input><br>-->
        <input type="text"  :value="dnum2" @input="num2Input"></input><br>

    </div>

</template>
<script>

    export default {
        name: 'Cmpone',
        components:{

        },
        data(){
            return{
                'catalireies':[
                    {'id':22,'name':'热门推荐','age':29},
                    {'id':56,'name':'电脑办公','age':29},
                    {'id':12,'name':'笔记本','age':29},
                    {'id':82,'name':'超市','age':29},
                ],
                'dnum1':this.num1,
                'dnum2':this.num2
            }

        },
        methods:{
            btclick(item){
                // this.$emit('chclik')
                // console.log(item)
                this.$emit('itemclick',item) //自定义事件，子组件向父组件传递数据
            },
            num1Input(){
                this.dnum1=event.target.value

            },
            num2Input(){
                this.dnum2=event.target.value
            }
        },
        props: {
            "forChildMsg": {
                type: Array,
                // default() {
                //     return {}
                // },
                // required: true,
            },
            "postTitle":{
                type:Array

            },
            "num1":{
                type:Number
            },
            "num2":{
                type:Number
            },

        }


    }
</script>
<style scoped>

</style>