<template>
    <div class="k8sversionupdate">
        <Ttile></Ttile>

        <Zhaiyao>
            <slot slot="contentSlot">kubernets 升级由v1.16.4-v1.17.4版本</slot>
        </Zhaiyao>


        <div class="content">
        <h1 style="margin: 20px 30px;font-size: 30px;color: #42b983">kubernets 升级由v1.16.4-v1.17.4版本</h1>
        <p>此次升级是kubernets由v1.16.4-v1.17.4版本，特别注意尽量<span style="color: red;font-weight: bold">不要跨版本升级</span> <a href="https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/kubeadm-upgrade/">参见官方文档</a></p>

        <h1> 提前准备</h1>

        <p>1、环境</p>
        <el-table :data="envData" border style="width:55%;margin: 20px 30px;">
            <el-table-column prop="os" label="操作系统" width="180"></el-table-column>
            <el-table-column prop="node" label="节点" width="180"></el-table-column>
            <el-table-column prop="ip" label="ip地址" width="180"></el-table-column>

        </el-table>
        <p>2、版本对比</p>
        <el-table :data="versionData"  border style="width: 240px;margin: 20px 30px;">
            <el-table-column prop="before" label="升级前版本" width="120"></el-table-column>
            <el-table-column prop="after" label="升级后版本" width="120"></el-table-column>

        </el-table>
        <p>3、所有master和node下载v1.17.4镜像</p>
            <pre v-highlight><code>
[root@master01 ~]# cat image-1.17.4.sh
#!/bin/bash
 url=aiotceo
 version=v1.17.4
 images=(`kubeadm config images list --kubernetes-version=$version|awk -F '/' '{print $2}'`)
 for imagename in ${images[@]} ; do
   docker pull $url/$imagename
   docker tag $url/$imagename k8s.gcr.io/$imagename
   docker rmi -f $url/$imagename
 done
[root@master01 ~]# sh image-1.17.4.sh
            </code></pre>
            <img src="https://gitee.com/stto_32/img/raw/master/20201113181803.png" style="width: 600px;height: 200px;"/>

            <h1>升级 master01 节点</h1>
            <p>1、升级kubeadm</p>
                <li>查看可安装的kubeadm版本</li>
            <pre v-highlight><code>yum list --showduplicates kubeadm --disableexcludes=kubernetes</code></pre>
                <img src="https://gitee.com/stto_32/img/raw/master/20201116100711.png" style="width: 600px;height: 200px;"/>
            <li>安装v1.17.4版本</li>
            <pre v-highlight><code>yum install -y kubeadm-1.17.4-0 --disableexcludes=kubernetes</code></pre>
        <img src="../../assets/img/kube01.png">
            <li>查看版本</li>
            <pre v-highlight><code>kubeadm version</code></pre>
            <img src="../../assets/img/kube02.png" style="width: 900px" />
            <li>执行drain命令，将运行在master01上运行的pod平滑的赶到其他节点上</li>
            <pre v-highlight><code>kubectl drain master01 --ignore-daemonsets</code></pre>
            <li>检查您的集群是否处于可升级状态</li>
            <pre v-highlight><code>kubeadm upgrade plan</code></pre>
            <pre v-highlight><code>
                [root@master01 ~]# kubeadm upgrade plan
[upgrade/config] Making sure the configuration is correct:
[upgrade/config] Reading configuration from the cluster...
[upgrade/config] FYI: You can look at this config file with 'kubectl -n kube-system get cm kubeadm-config -oyaml'
[preflight] Running pre-flight checks.
[upgrade] Making sure the cluster is healthy:
[upgrade] Fetching available versions to upgrade to
[upgrade/versions] Cluster version: v1.16.4
[upgrade/versions] kubeadm version: v1.17.4
I0909 11:01:08.452486   17430 version.go:251] remote version is much newer: v1.19.0; falling back to: stable-1.17
[upgrade/versions] Latest stable version: v1.17.11
[upgrade/versions] Latest version in the v1.16 series: v1.16.15

Components that must be upgraded manually after you have upgraded the control plane with 'kubeadm upgrade apply':
COMPONENT   CURRENT       AVAILABLE
Kubelet     3 x v1.16.4   v1.16.15

Upgrade to the latest version in the v1.16 series:

COMPONENT            CURRENT   AVAILABLE
API Server           v1.16.4   v1.16.15
Controller Manager   v1.16.4   v1.16.15
Scheduler            v1.16.4   v1.16.15
Kube Proxy           v1.16.4   v1.16.15
CoreDNS              1.6.2     1.6.5
Etcd                 3.3.15    3.3.17-0

You can now apply the upgrade by executing the following command:

	kubeadm upgrade apply v1.16.15

_____________________________________________________________________

Components that must be upgraded manually after you have upgraded the control plane with 'kubeadm upgrade apply':
COMPONENT   CURRENT       AVAILABLE
Kubelet     3 x v1.16.4   v1.17.11

Upgrade to the latest stable version:

COMPONENT            CURRENT   AVAILABLE
API Server           v1.16.4   v1.17.11
Controller Manager   v1.16.4   v1.17.11
Scheduler            v1.16.4   v1.17.11
Kube Proxy           v1.16.4   v1.17.11
CoreDNS              1.6.2     1.6.5
Etcd                 3.3.15    3.4.3-0

You can now apply the upgrade by executing the following command:

	kubeadm upgrade apply v1.17.11

Note: Before you can perform this upgrade, you have to update kubeadm to v1.17.11.

_____________________________________________________________________

            </code></pre>
            <li>升级应用v1.17.4版本</li>
            <pre v-highlight><code>kubeadm upgrade apply v1.17.4</code></pre>
            <li>恢复master01调度任务</li>
            <pre v-highlight><code>kubectl uncordon master01</code></pre>



            <p>2、 升级 kubelet 和 kubectl</p>
            <pre v-highlight><code>yum install -y kubelet-1.17.4-0 kubectl-1.17.4-0 --disableexcludes=kubernetes</code></pre>
            <li>重新加载配置and重启kubelet</li>
            <pre v-highlight><code>systemctl daemon-reload && systemctl restart kubelet</code></pre>

            <p>3、查看升级后的版本</p>
            <p>master01已经升级成v1.17.4版本</p>
            <img src="../../assets/img/kube03.png" style="width: 780px">



            <h1>升级node01节点</h1>
            <p>1、上安装kubeadm（node02节点）</p>
            <pre v-highlight><code>yum install -y kubeadm-1.17.4-0 --disableexcludes=kubernetes</code></pre>
            <img src="../../assets/img/kube04.png" />
            <p>2、执行 train node01（在master01上操作）</p>
            <pre><code>kubectl drain node01 --ignore-daemonsets</code></pre>
            <img src="../../assets/img/kube05.png" style="width: 920px"/>
            <p>3、在master01上执行 kubeadm upgrade node</p>
            <img src="../../assets/img/kube06.png" style="width: 920px">
            <p>4、升级 kubelet and kubectl（在node01上操作）</p>
            <pre v-highlight><code>yum install -y kubelet-1.17.4-0 kubectl-1.17.4-0 --disableexcludes=kubernetes</code></pre>
            <p>5、重新加载配置and重启kubelet （在node01上操作）</p>
            <pre v-highlight><code>systemctl daemon-reload && systemctl restart kubelet</code></pre>
            <p>6、uncordon node01(在master01上操作)</p>
            <pre v-highlight><code>kubectl uncordon node01</code></pre>
            <img src="../../assets/img/kube07.png" style="width: 920px" >

            <p>至此master01和node01已经全部升级完成，其他master和woker节点按照以上升级即可</p>
            <img src="../../assets/img/kube08.png"style="width: 920px" >

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
        name: "K8sVersionUpdate",
        data(){
            return{
                envData:[
                    {
                        os:'centos7',
                        node:'master01',
                        ip:'10.1.126.33'
                    },
                    {
                        os:'centos7',
                        node:'node01',
                        ip:'10.1.126.32'
                    },
                    {
                        os:'centos7',
                        node:'node02',
                        ip:'10.1.126.31'
                    },
                ],
                versionData:[
                    {
                        before:'v1.16.4',
                        after:'v1.17.4'
                    },
                ]
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

.k8sversionupdate{
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
        background-color: #f4f4f4;
    }
    img{
        margin: 4px 30px;
    }
</style>