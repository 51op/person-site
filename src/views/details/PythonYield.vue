<template>
    <div class="pyield">
        <Ttile></Ttile>
        <Zhaiyao>
            <slot slot="contentSlot">python中yield的用法详解</slot>
        </Zhaiyao>
        <div class="content">
            <h1>python中yield的用法详解</h1>
            <p> 每次看见代码中出现yield这个关键字就一脸懵逼，什么东西？？？什么鬼啊？？？然后百度一看，靠用途这么多，解释的原理也一大推，但就是看不懂，下面跟着三哥一起探索yield的奥秘吧</p>
            <p> 首先，如果你还没有对yield有个初步认识，你先把yield看做“return”，这个是直观的，就是在程序中返回某个值，当然返回之后程序就不再往下运行了。看做return之后再把它看做一个是生成器（generator）的一部分，直接小例子</p>
            <pre v-highlight><code>
def yieldTest():
  while True:
    res = yield 100
    print "res:",res

g = yieldTest()
print g
print next(g)
print "---------"
print next(g)
            </code></pre>
            <p>输出结果：</p>
            <img src="../../assets/img/pythonRes.png" style="width: 680px;">

            <p>运行顺序：</p>

            <p>1.程序开始执行以后，因为foo函数中有yield关键字，所以yieldTest函数并不会真的执行，而是先得到一个generator(相当于一个对象)</p>
            <p> 2.直到调用next方法，yieldTest函数正式开始执行，直接进入while循环</p>
            <p> 3.程序运行到yield关键字后，会把yield当成成return,直接return了一个100之后，程序停止，也并没有执行赋值给res操作，此时第一个next(g)语句执行完成，所以输出的前两行，一个是generator对象，一个yield返回的结果值100</p>

            <p>4.开始执行第二个next(g),这个时候是从刚才那个next程序停止的地方开始执行的，也就是要执行res的赋值操作，这时候要注意，这个时候赋值操作的右边是没有值的（因为刚才那个是return出去了，并没有给赋值操作的左边传参数），所以这个时候res赋值是None,所以接着下面的输出就是res: None</p>
            <p>6.代码程序会继续在while里执行，又一次碰到yield,这时候同样return 返回100，程序停止</p>

            <p>到这里你可能就明白yield和return的关系和区别了，带yield的函数是一个生成器，而不是一个函数了，这个生成器有一个函数就是next函数，next就相当于“下一步”生成那个数，这一次的next开始的地方是接着上一次的next停止的地方执行的，所以调用next的时候，生成器并不会从函数最开始执行，而是接着上一步停止的地方开始，然后遇到yield后，return出要生成的数，此步就结束</p>

            <p>yield组合：</p>

            <pre v-highlight><code>
def Dotest(num):
  while num < 10000:
    num +=1
    yield num

D = Dotest(200)
print  next(D)
print  next(D)
print  next(D)
print  next(D)
输出：
201
202
203
204
            </code></pre>

            <p>使用yield写文件</p>
            <pre v-highlight><code>
 def file_iterator(file_name, chunk_size=512):
     with open(file_name) as f:
         while True:
             c = f.read(chunk_size)
             if c:
                 yield c
             else:
                 break
            </code></pre>
        </div>
        <Share></Share>
        <Footer_contend></Footer_contend>
    </div>
</template>
<script>
    import Ttile from  '../../components/Title';
    import Footer_contend from '../../components/Footer_contend';
    import Share from '../../components/Share'
    import Zhaiyao from '../../components/Zhaiyao'
    export default {
        name:'pythonYield',
        data(){
            return{

            }
        },
        components:{
            Zhaiyao,
            Ttile,
            Footer_contend,
            Share
        }
    }
</script>
<style scoped>
    .pyield{
        background-color: #f6f6f6;
        color: #171C21;
    }
    h1{
        margin: 20px 30px;
        font-size: 30px;
        color: #42b983;
        margin: auto 70px;;

    }
    .content{
        width: 960px;
        background-color:#fff;
        margin: auto 70px;
    }

    .content p {
        margin: 8px 30px;
        line-height: 1.8;
        padding: 0px 0 0 0;
        word-break: break-all;
        font-size: 16px;
        letter-spacing: 0;
    }
    li{
        margin: 8px 30px;
    }
    .content h1 {
        margin: 20px 30px;
        color: #42b983;
        font-size: 20px;
        font-weight: bold;
        line-height: 45px;
    }
    code{
        margin: 8px 40px;
        /*background-color: #f4f4f4;*/
    }
    img{
        margin: 4px 30px;
    }
</style>