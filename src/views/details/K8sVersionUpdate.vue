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
        margin: 8px 60px;
        line-height: 1.8;
        padding: 0px 0 0 0;
        word-break: break-all;
        font-size: 16px;
        letter-spacing: 0;
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
</style>