<template>
<div class="art-1">
        <Ttile></Ttile>
        <zhaiyao>
            <div slot="contentSlot">汇总当下20k以上运维面试总结&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </zhaiyao>


        <div class="content">

            <h1>汇总当下20k以上运维面试总结</h1>
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
           <pre v-highlight><code>
               列表生成式 : newlist =  [a*a for a in list]
               map 函数:<br>
               newlist = map(lambda a:a*a,list)
               A1 = [1,2,3,4,5,6]<br>
               print(list(map(lambda x:x*2,A1)))
               print([a*2 for a in A1])

            </code></pre>

            <h1>7、redis缓存过期key优化</h1>

            <p> 为啥设置了expire过期key，内存没有释放</p>

            <p>key设置过期时间了，ttl为0后并不会自行删除该key，而是等到下次访问该key发现已过期，才会删除。</p>
            <p>解决方法：</p>

            <p>1. 命令keys * 会瞬间释放所有过期key，但是有风险,慎行。</p>
            <p>2. 其实缓存是在释放的，只不过是没有那么快，释放的快慢取决于redis.conf中的hz参数默认为10，意思是每秒执行10次删除过期key。所以在redis过期较多的场景可以适当调大。并观察cpu是否升高， 提高它的值将会占用更多的cpu，固然相应的redis将会更快的处理同时到期的许多key，和更精确的去处理超时</p>
            <p>可在命令行执行：config set hz 50</p>


            <h1> 8、简述Kubernetes创建一个Pod的主要流程？</h1>

            <p>1.客户端提交pod配置信息到apiserver</p>
            <p>2.apiserver收到指令后，会通知controll-manager创建资源对象</p>
            <p>3.apiserver会讲配置信心存储到etcd数据中心</p>
            <p>4.scheduler检测到pdo信息后开始调度预选，会先过滤掉不符合pod资源配置的节点，然后开始调度优选评分，挑选出更适合的pod节点，然后将pod资源配置信息发送到node节点上的kubelet组件上</p>
            <p>5.kubelet根据scheduler发来的资源配置运行pod，运行结果返回scheduler，scheduler将运行状况信息存储到etcd数据中心</p>


            <h1> 11、docker网络模式</h1>
            |网络模式|说明|
            |--|--|
            |host模式|容器和宿主机共享网络空间|
            |none模式|使用none模式，Docker容器拥有自己的Network Namespace，但是，并不为Docker容器进行任何网络配置。也就是说，这个Docker容器没有网卡、IP、路由等信息。需要我们自己为Docker容器添加网卡、配置IP，只有回环网络，没有网卡|
            |container模式|新创建的容器和已经存在的一个容器共享一个 Network Namespace，而不是和宿主机共享|
            |briage模式|默认为该模式，Docker启动时，会创建一个docker0的虚拟网桥，此主机上启动的Docker容器会连接到这个虚拟网桥上。虚拟网桥的工作方式和物理交换机类似，工作在二层网络中，从docker0子网中分配一个IP给容器使用，并设置docker0的IP地址为容器的默认网关。在主机上创建一对虚拟网卡veth pair设备，Docker将veth pair设备的一端放在新创建的容器中，并命名为eth0（容器的网卡），另一端放在主机中，以vethxxx这样类似的名字命名，并将这个网络设备加入到docker0网桥中|

            <h1> 12、Dockerfile中cmd和entrypoint的区别</h1>

            |CMD(默认方式)|ENTRYPOINT|
            |--|--|
            |Dockerfile中只能有一条CMD指令，如果有多个CMD 则只有最后一个CMD才会生效|如果Dockerfile中有CMD和ENTRYPOINT，那么CMD将作为ENTRYPOINT的参数执行|
            |docker run指定的cmd可以覆盖Dockerfile中定义的CMD|docker run --entrypoint可覆盖Dockerfile定义的ENTRYPOINT|

            <h1> 13、docker存储驱动有哪些？</h1>

            |Driver|说明|特点|
            |--|--|--|
            |overlay2|首选存储驱动程序，官方推荐|文件级别存储|
            |aufs|内核支持|文件级别存储|
            |devicemapper|以后可能会废弃|块级别存储，适合io密集|


            <h1> 14、docker数据存储方式？</h1>

            |options|information|
            |--|--|
            |volumes|首选，基于本地文件系统Volumn管理，通过-v参数,volume中的数据并不会因为容器的删除二消失，实现了数据持久化的目标。但是这种方式的volume需要在Dockerfile中使用VOLUME来预先指定容器中的数据存放路径|
            |bind mounts|可以动态的指定容器内文件存放路径和宿主机上的数据库卷目录,通过--mount,|

            `
            docker run -d   -p 80:80  --mount type=bind,source=/Users/u51/Desktop/dockerfile/,target=/usr/share/nginx/html --name web  xull_n`

            <h1>> 15、elastisearch分片机制是怎么分配的？</h1>

            ```
            Elasticsearch6.X及之前的版本默认索引分片数为5、副本数为1，从Elasticsearch7.0开始调整为默认索引分片数为1、副本数为1.
            数据的最小单元块,ES默认为一个索引创建1个主分片，并分别为其创建一个副本
            建议：（仅参考）
            SN(分片数) = IS(索引大小) / 10-40G
            1、每一个分片数据文件小于10-40GB
            2、每一个索引中的一个分片对应一个节点
            3、节点数大于等于分片数
            ```

        <h1> 16、nginx工作机制是怎样的？</h1>

            ```
            通常采用１个master+多个worker进程配合异步非阻塞的工作机制。
            master进程主要负责管理自身和下属的worker进程，worker负责处理请求。　
            master（master进程会先建立好需要listen的socket）－－－fork生成子进程，继承socket（每个进程监控同一ｉｐ和端口）－－－当一个连接进入，产生惊群现象，所有进程都会收到通知，但只有一个进程能够抢到互斥锁，accept这个连接，其他进程则失败。
            惊群现象：指一个fd事件被触发后，等候这个fd的所有进程、线程都被唤醒，但是只有一个会去响应。

            worker进程工作：
            当一个worker在accept这个连接之后，就开始读取请求，解析请求，处理请求，产生数据后，再返回给客户端，最后才断开连接，一个完整的请求。一个请求，完全由worker进程来处理，而且只在一个worker中处理

            为什么Nginx支持高并发？
            １个worker进程只有一个主线程，采用异步非阻塞的工作方式实现高并发。即每进来一个请求，会有一个worker去处理，但不是全程处理，处理到可能发生阻塞的地方（比如向后端FPM转发请求，并等待请求返回），这个worker不会这个傻等，它会在发送请求后，注册一个事件：如果有返回了，通知我。于是worker就去休息（继续监听连接），再有请求进来同样处理。一旦FPM返回了，就会触发事件，worker接手，请求才会往下走

            worker_processes 工作进程数,一般设置为CPU核心数
            worker_connections 单个工作进程可以允许同时建立外部连接的数量
            ```

        <h1> 17、elasticsearch优化</h1>

           <p> 1. 选择合适的硬件，尽量选择SSD硬盘</p>
            <p>2. es服务配置合适的jvm内存，建议配置为机器的一半内存，不超过32G</p>
            <p>3. 规模较大集群，配置专门主节点、数据节点，避免脑裂情况发生</p>
            <pre v-highlight><code>
            主节点：`node.master:true
            node.data: false
            node.ingest:false`
            数据节点：`node.master:false
            node.data:true
            node.ingest:true`
                </code></pre>
            <p>4. linux系统调优</p>
            <p> 5. 调大refresh_interval间隔</p>

            <h1> 18、CDN加速原理？</h1>







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
    .content h1{
        margin: 20px 30px;
        color: #42b983;
        font-size: 20px;
        font-weight: bold;
        line-height: 45px;
}
    code{
        margin: 8px 40px;
    }

</style>