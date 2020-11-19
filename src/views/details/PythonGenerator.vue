<template>
    <div class="PythonGenerator">
        <Ttile></Ttile>
        <Zhaiyao>
            <slot slot="contentSlot">python生成器和迭代器</slot>
        </Zhaiyao>
        <div class="content">
            <h1>python生成器和迭代器</h1>
            <p>很多童鞋搞不懂python迭代器和生成器到底是什么？它们之间又有什么样的关系？</p>
            <p>这篇文章就是要用最简单的方式让你理解Python迭代器和生成器！</p>
            <img src="https://gitee.com/stto_32/img/raw/master/20201119170020.jpg"/>
            <h1>1、迭代器和迭代过程</h1>
            <p>维基百科解释道：</p>

            <p>在Python中，迭代器是遵循迭代协议的对象。使用iter()从任何序列对象中得到迭代器（如list, tuple, dictionary, set等）。另一种形式的输入迭代器是generator（生成器）。</p>
            <p>很多容器诸如列表、字符串可以用for循环遍历对象。for 语句会调用容器对象中的 iter()函数， 该函数返回一个定义了 __next__() 方法的迭代器对象，该方法将逐一访问容器中的元素。</p>
            <p>所以说：python中，任意对象，只要定义了__next__方法，它就是一个迭代器。因此，python中的容器如列表、元组、字典、集合、字符串都可以用于创建迭代器。</p>
            <img src="https://gitee.com/stto_32/img/raw/master/20201119170200.jpg"/>
            <p>讲完迭代器后，迭代就比较好理解了，迭代就是从迭代器中取元素的过程。</p>

            <p>比如我们用for循环从列表[1,2,3]中取元素，这种遍历过程就被称作迭代。</p>
            <img src="https://gitee.com/stto_32/img/raw/master/20201119170415.png"/>


            <p>如果你不想用for循环迭代呢？这时你可以：</p>
            <p>1.先调用容器（以字符串为例）的iter()函数</p>
            <p>2.再使用 next() 内置函数来调用 __next__() 方法</p>
            <p>3.当元素用尽时，__next__() 将引发 StopIteration 异常</p>
            <img src="https://gitee.com/stto_32/img/raw/master/20201119170602.jpg"/>
           <img src="https://gitee.com/stto_32/img/raw/master/20201119170929.png"/>

            <h1>2、生成器 Generators</h1>

            <p>看看廖雪峰大神的解释：</p>

            <pre v-highlight><code>
通过列表生成式，我们可以直接创建一个列表。
但是，受到内存限制，列表容量肯定是有限的。
而且，创建一个包含100万个元素的列表，不仅占用很大的存储空间，如果我们仅仅需要访问前面几个元素，那后面绝大多数元素占用的空间都白白浪费了。
所以，如果列表元素可以按照某种算法推算出来，那我们是否可以在循环的过程中不断推算出后续的元素呢？
这样就不必创建完整的list，从而节省大量的空间。在Python中，这种一边循环一边计算的机制，称为生成器（Generator）。
            </code></pre>

            <p>生成器也是一种迭代器，但是你只能对其迭代一次。这是因为它们并没有把所有的值存在内存中，而是在运行时生成值。</p>

            <p>你通过遍历来使用它们，要么用一个for循环，要么将它们传递给任意可以进行迭代的函数和结构。大多数时候生成器是以函数来实现的。然而，它们并不返回一个值，而是yield(暂且译作“生出”)一个值。</p>

            <p> 每次对生成器调用 next() 时，它会从上次离开位置恢复执行（它会记住上次执行语句时的所有数据值）。显示如何非常容易地创建生成器的示例如下:</p>
            <pre v-highlight><code>
def reverse(data):
  for index in range(len(data)-1, -1, -1):
  yield data[index]
>>> for char in reverse('golf'):
...     print(char)
...
f
l
o
g           </code></pre>

            <p>可以用生成器来完成的操作同样可以用前一节所描述的基于类的迭代器来完成。但生成器的写法更为紧凑，因为它会自动建 __iter__() 和 __next__()方法。</p>

            <h1>3、生成器表达式</h1>
            <p>生成器不一定要用复杂的函数表示，python提供了简洁的生成器表达式。</p>
            <p>从形式上来看，生成器表达式和列表推导式很像，仅仅是将列表推导式中的[]替换为()，但是两者差别挺大，生成器表达式可以说组合了迭代功能和列表解析功能。</p>
            <p>生成器表达式可以认为是一种特殊的生成器函数，类似于lambda表达式和普通函数。但是和生成器一样，生成器表达式也是返回生成器generator对象，一次只返回一个值。</p>
   <pre v-highlight><code>
>>> sum(i*i for i in range(10))
285

>>> xvec = [10, 20, 30]
>>> yvec = [7, 5, 3]
>>> sum(x*y for x,y in zip(xvec, yvec))
260

#列表生成式
lis = [x*x for x in range(10)]
print(lis)
#生成器
generator_ex = (x*x for x in range(10))
print(generator_ex)  #generator
结果：
[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

   </code>
   </pre>


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
        name:'PythonGenerator',
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
    .PythonGenerator{
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
        width: 680px
    }
    img{
        margin: 4px 30px;
        width: 680px;
        height: 400px;
    }
</style>