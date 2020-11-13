<template>
<div class="art-1">
        <Ttile></Ttile>
        <zhaiyao>
            <div slot="contentSlot">汇总当下20k以上运维面试总结&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </zhaiyao>


        <div class="content">

            <h1 style="margin: 20px 30px;font-size: 30px;color: #42b983">汇总当下20k以上运维面试总结</h1>
            <p>现在网上搜到关于运维的面试题都是前几年的，分享一下亲身经历的现在运维面试问到的问题</p>
            <p>现在运维划分的比较细，大概分这么几类：系统运维、应用运维、大数据运维、安全运维、网络运维、DBA运维、k8s运维、开发运维</p>
            <h1>1、tcp和udp的区别</h1>

            <el-table :data="TcpData"  border style="width: 920px;margin: 20px 30px;">
                <el-table-column prop="tcp" label="TCP" width="420"></el-table-column>
                <el-table-column prop="udp" label="UDP" width="420"></el-table-column>
            </el-table>

               <h1> 2、https传输是怎么是安全的？</h1>
               <p>
                   https相对于http，其实就是在http和tcp之间多加了一层TLS/SSL加密协议
                原先是应用层将数据直接给到TCP进行传输，现在改成应用层将数据给到TLS/SSL，将数据加密后，再给到TCP进行传输。现在一般加密套件都是TLS，TLS是SSL的升级版
                加密又又对称加密和非对称加密两种
               </p>

                <h1>3、nginx状态码499过很多，如何解决？</h1>
                <p>499 ：client has closed connection
                499产生的原因“服务端处理时间太长，客户端主动断开”，即服务器upstream处理过慢，导致用户提前关闭连接，可以通过修改nginx配置proxy_ignore_client_abort on;来解决
                </p>
                <h1>4、redis cluster集群分片机制是怎么样的？</h1>
                <p>
                    Redis Cluster 采用虚拟哈希槽分区，所有的键根据哈希函数映射到 0 ~ 16383 整数槽内，计算公式：slot = CRC16(key) & 16383。每一个节点负责维护一部分槽以及槽所映射的键值数据。
                </p>
                <h1>5、redis 配置中rdb aof区别？</h1>
                    <el-table :data="RedisData" border  style="width: 920px;margin: 20px 30px;">
                        <el-table-column prop="rdb" label="RDB" width="420"></el-table-column>
                        <el-table-column prop="aof" label="AOF" width="420"></el-table-column>
                    </el-table>

                <h1>6、redis缓存过期key优化</h1>
                <p>为啥设置了expire过期key，内存没有释放??</p>
                <p>key设置过期时间了，ttl为0后并不会自行删除该key，而是等到下次访问该key发现已过期，才会删除。
                <p>解决方法：</p>
                <p>命令keys * 会瞬间释放所有过期key，但是有风险,慎行。
                <p>其实缓存是在释放的，只不过是没有那么快，释放的快慢取决于redis.conf中的hz参数默认为10，意思是每秒执行10次删除过期key。所以在redis过期较多的场景可以适当调大。并观察cpu是否升高， 提高它的值将会占用更多的cpu，固然相应的redis将会更快的处理同时到期的许多key，和更精确的去处理超时 在命令行执行：config set hz 50
                </p>

            <h1>6、python 用一行实现对一个列表中元素做平方操作</h1>
            <code>
                <li style="background-color:#f4f4f4;margin: 15px 30px;font-size: 16px">列表生成式 : newlist =  [a*a for a in list] </li>
                 <li style="background-color:#f4f4f4;margin: 15px 30px;font-size: 16px">
                     map 函数:<br>
                     newlist = map(lambda a:a*a,list)<br>
                     A1 = [1,2,3,4,5,6]<br>
                     print(list(map(lambda x:x*2,A1)))<br>
                     print([a*2 for a in A1])<br>
                 </li>

            </code>
            <el-divider></el-divider>


    </div>
        <Share></Share>
        <el-divider></el-divider>
        <Footer_contend></Footer_contend>

</div>
</template>

<script>
import Ttile from  '../../components/Title'
import Footer_contend from '../../components/Footer_contend'
import Share from '../../components/Share'
import  Zhaiyao from '../../components/Zhaiyao'
export  default {
        name:'art01',
        components:{
                Ttile,
                Footer_contend,
                Share,
                Zhaiyao,
        },
        data(){
           return{
               value2:null,
               colors:['#99A9BF', '#F7BA2A', '#FF9900'],
               RedisData:[
                   {
                       rdb:'RDB很适用于灾难恢复，它只有一个文件',
                       aof: 'AOF持久化会让Redis变得非常耐久，以设置不同的 fsync 策略，比如无 fsync ，每秒钟一次 fsync ，或者每次执行写入命令时 fsync',
                   },
                   {
                       rdb:'RDB可以最大化redis性能，生成RDB快照时redis会fock出一个子进程，由子进程处理保存快照工作，父进程无磁盘I/O操作',
                       aof: 'AOF文件有序保存了所有写入操作，可以很轻松的对文件进行分析和导出',
                   },
                   {
                       rdb:'RDB恢复速度比AOF快',
                       aof: '自动缩小：当aof文件大小到达一定程度的时候，后台会自动的去执行aof重写',
                   },
                   {
                       rdb:'缺点：在数据量庞大的时候，fork进程会很耗时',
                       aof: '缺点：性能相对较差',
                   },
                   {
                       rdb:'缺点：不能事实保存快照数据，存在数据丢失的风险',
                       aof: '缺点： 体积相对更大，恢复速度更慢',
                   },


               ],
               TcpData:[
                   {
                       tcp:'tcp是面向连接的，需要经过三次握手后才能连接',
                       udp:'udp是无连接的，直接发送数据即可',
                   },
                   {
                       tcp:'tcp提供可靠传输，无差错，不丢失',
                       udp:'udp尽最大努力交付，即不保证可靠交付',
                   },
                   {
                       tcp:'面向字节流',
                       udp:'面向报文',
                   },
                   {
                       tcp:'点对点连接',
                       udp:'一对一，一对多，多对一，多对多',
                   },

               ]
           }

        },
    methods: {

    },
    }
</script>
<style scoped>


    .art-1{
        background-color: #f6f6f6;
        color: #171C21;
    }
    .content{
        width: 960px;
        background-color:#fff;
    }
    .content p {
        margin: 8px 30px;
        line-height: 1.8;
        padding: 0px 0 0 0;
        word-break: break-all;
        font-size: 16px;
        letter-spacing: 0;
    }
    .content h1{
        margin: 20px 30px;
        color: #42b983;
        font-size: 20px;
        font-weight: bold;
        line-height: 45px;
}

</style>