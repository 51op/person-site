<template>
    <div class="k8supdate">
        <Ttile></Ttile>



        <Zhaiyao>
            <slot slot="contentSlot">k8s证书升级</slot>
        </Zhaiyao>



        <div class="content">

        <p>用kubeadm部署的k8s集群，生成的证书默认只有一年有效期，需要每年都要升级</p>


          <h1> 使用自定义的证书</h1>
            <p>
                默认情况下, kubeadm 会生成运行一个集群所需的全部证书。 你可以通过提供你自己的证书来改变这个行为策略。

                如果要这样做, 你必须将证书文件放置在通过 --cert-dir 命令行参数或者配置文件里的 CertificatesDir 配置项指明的目录中。默认的值是 /etc/kubernetes/pki。

                如果在运行 kubeadm init 之前存在给定的证书和私钥对，kubeadm 将不会重写它们。 例如，这意味着您可以将现有的 CA 复制到 /etc/kubernetes/pki/ca.crt 和 /etc/kubernetes/pki/ca.key 中，而 kubeadm 将使用此 CA 对其余证书进行签名。
            </p>

            <h1>外部 CA 模式</h1>

            <p>
                只提供了 ca.crt 文件但是不提供 ca.key 文件也是可以的 (这只对 CA 根证书可用，其它证书不可用)。 如果所有的其它证书和 kubeconfig 文件已就绪， kubeadm 检测到满足以上条件就会激活 "外部 CA" 模式。kubeadm 将会在没有 CA 密钥文件的情况下继续执行。否则, kubeadm 将独立运行 controller-manager，附加一个 --controllers=csrsigner 的参数，并且指明 CA 证书和密钥。
            </p>

            <h1>检查证书是否过期</h1>
            <code>kubeadm alpha certs check-expiration</code>
            <img src="https://gitee.com/stto_32/img/raw/master/20201113100322.png" style="width: 580px;margin: 30px 30px"/>
            <p>该命令显示 /etc/kubernetes/pki 文件夹中的客户端证书以及 kubeadm 使用的 KUBECONFIG 文件中嵌入的客户端证书的到期时间/剩余时间</p>
            <h1>自动更新证书</h1>
            <p>kubeadm在升级的时候会自动升级证书，kubeadm升级见https://kubernetes.io/zh/docs/tasks/administer-cluster/kubeadm/kubeadm-upgrade/</p>
            <h1>手动更新证书</h1>
            <p>可以通过 kubeadm alpha certs renew 命令手动更新你的证书。
                此命令用 CA （或者 front-proxy-CA ）证书和存储在 /etc/kubernetes/pki 中的密钥执行更新。

                kubeadm alpha certs renew 提供下列选项

                --csr-only 可用于经过一个外部 CA 生成的证书签名请求来更新证书（无需实际替换更新证书）； 更多信息请参见下节。
                可以更新单个证书而不是全部证书</p>


        </div>


        <Share></Share>
        <el-divider></el-divider>
        <Footer_contend></Footer_contend>

    </div>
</template>

<script>
    import Ttile from  '../../components/Title';
    import Footer_contend from '../../components/Footer_contend';
    import Share from '../../components/Share'
    import Zhaiyao from '../../components/Zhaiyao'
    export  default {
        name:'K8sUpdate',
        components:{
            Zhaiyao,
            Ttile,
            Footer_contend,
            Share
        },
        data(){
            return{

            }

        },
        methods: {

        },
    }
</script>
<style scoped>
    .tiku-shouye a {
        text-decoration: none;
        display: block;
        color: #171c21;
        padding-right: 10px;
    }
.k8supdate{
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
    .content h1 {
        margin: 20px 30px;
        color: #42b983;
        font-size: 20px;
        font-weight: bold;
        line-height: 45px;
    }
    code{
        margin: 8px 40px;
        background-color: #302327;
        color: #FFFFFF;
    }

</style>