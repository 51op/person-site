<template>
   <div class="Test">




<!--      <div class="test-003" style="padding: 20px">-->
<!--          <router-link :to="{ name: item, params: { id: item.id }}" v-for="item in list":key="item.id">{{item.title}}</router-link>-->
<!--          <component :is="cmpName"></component>-->
<!--      </div>-->

<!--       <div :class="{active:isActive,line:isLine}">hello</div>-->
<!--       <button v-on:click="btButten"> 按一下</button>-->

<!--<ul>-->
<!--    <li v-for="(item,index) in movices"  @click="btButten(index)" :class="{active:  index == currentIndex}">{{index}}-{{item}}</li>-->
<!--</ul>-->

<!--        <h2>总价格{{totalPrice}}</h2>-->
<!--       <button @click="btButten3('abc',$event)">点下</button>-->



<!--       <input type="text" value="message">-->
<!--       <input type="text" :value="message" v-on:input="message=$event.target.value">-->

<div v-if="books.length">
       <table>
           <thead>
           <tr>
               <th></th>
               <th>书籍名称</th>
               <th>出版日期</th>
               <th>价格</th>
               <th>购买数量</th>
               <th>操作</th>
           </tr>
           </thead>
           <tbody>
           <tr v-for="(item,index) in books">
               <td>{{item.id}}</td>
               <td>{{item.name}}</td>
               <td>{{item.date}}</td>
               <td>{{item.price|showPrice}}</td>
<!--               <td>{{getFinalPrice(item.price)}}</td>-->
               <td>
                   <button @click="decrement(index)" :disabled="item.count <= 1">-</button>
                   {{item.count}}
                   <button @click="increment(index)">+</button>

               </td>
               <td><button @click="removeHandler(index)">移除</button></td>
           </tr>
           </tbody>
       </table>
       <h2>总价格:{{totalPrice|showPrice}}</h2>

</div>
       <h2 v-else>购物车为空</h2>


<!--       <cmpone :forChildMsg="books"></cmpone>-->
<!--       <cmpone :postTitle="movices"></cmpone>-->
<!--       自定义事件，接收子组件传递的数据据-->
<!--       <cmpone @itemclick="cpnclick"></cmpone>-->

       <h2>父组件中num1 num2的值</h2>
       <div style="margin: 40px 50px;">{{num1}}</div>
       <div style="margin: 40px 50px;">{{num2}}</div>


       <cmpone :num1="num1" :num2="num2" ref="cmpone"></cmpone>

       <button @click="Btrefs">父组件引用子组件</button>


       <cmptwo><button>点下</button></cmptwo>
       <cmptwo></cmptwo>
       <cmptwo> <span slot="center">标题</span></cmptwo>

       <cmpthree>
           <div slot-scope="slot">

<!--               <span v-for="item in slot.data">{{item}}&#45;&#45;&#45;&#45;</span>-->
               <span>{{slot.data.join('----')}}</span>
           </div>

       </cmpthree>
       <cmpthree></cmpthree>




   </div>
</template>
<script>
import Cmpone from './Cmpone'
import Cmpthree from './Cmpthree'
import Cmptwo from './Cmptwo'
export default {
    name: 'Test',
    components:{
        Cmpone,
        Cmptwo,
        Cmpthree
    },

    props:{
    },
    data(){
        return{
            cmpName: '',
            currentIndex:-1,
            isLine:true,
            movices:['路西法','潇洒','无尽','婉儿'],
            list:[
                {
                    id: "compone",
                    title: 'compone',
                    price:200
                },
                {
                    id: "comptwo",
                    title: 'comptwo',
                    price:400
                },
                {
                    id: "compthree",
                    title: 'compthree',
                    price:600
                },
            ],
            books:[
                {
                    id:1,
                    name:'《算法理论》',
                    date:'2006-3',
                    price:85.00,
                    count:1
                },
                {
                    id:2,
                    name:'《编程技术》',
                    date:'2007-8',
                    price:67.00,
                    count:1
                },
                {
                    id:3,
                    name:'《SRE理论》',
                    date:'2106-3',
                    price:109.00,
                    count:1
                },
                {
                    id:4,
                    name:'《python编程》',
                    date:'2016-3',
                    price:86.00,
                    count:1
                },

            ],
            info:"info",
            num1:0,
            num2:1
        }
    },
    methods: {
        changeCmp(cmpName) {
            this.cmpName = cmpName
        },
        btButten(index){

            this.currentIndex=index

        },
        btButten3(abc,event){
            console.log('+++++',abc,event)
        },
        getFinalPrice(price){
            return '¥'+price.toFixed(2)
        },
        decrement(index){
             this.books[index].count--

        },
        increment(index){
            this.books[index].count++
        },
        removeHandler(index){
            this.books.splice(index,1)
        },
        cpnclick(item){
            console.log(item)
        },
        Btrefs(){
            console.log(this.$refs.cmpone)
        },

    },
    //过滤器
    filters:{
        showPrice(price){
            return '¥'+price.toFixed(2)
        }
    },
    computed:{
        totalPrice:function () {
            let res=0

            // for (let i = 0; i < this.books.length; i++) {
            //     res += this.books[i].price * this.books[i].count
            //
            // }

            // for(let i in this.books){
            //     res += this.books[i].price * this.books[i].count
            // }
            // for (let i of this.books){
            //     res += i.price * i.count
            // }
            // return res

            return this.books.reduce(function (pre,item) {
                     return pre + item.price*item.count
            },0)
        },
        fullname:{
            set:function (name) {
                console.log('-----',name)

            },
            get:function () {
                
            }
        }
    }
}
</script>
<style scoped>
.active{
    color: red;
}
    table{
        margin: 50px 80px;
        border: 1px solid #e9e9e9;
        border-collapse: collapse;
        border-spacing: 0;
    }
    th,td{
        padding: 8px 16px;
        border: 1px solid #e9e9e9;
        text-align: left;
    }
    th{
        background-color: #f7f7f7;
        color: #5c6b77;
        font-weight: 600;
    }

h2{
    color: red;
    margin: 30px 80px;
}


</style>