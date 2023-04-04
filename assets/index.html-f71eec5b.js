import{_ as e,p as a,q as n,a1 as s}from"./framework-5866ffd3.js";const i={},l=s(`<h1 id="kubernetes" tabindex="-1"><a class="header-anchor" href="#kubernetes" aria-hidden="true">#</a> KUBERNETES</h1><h2 id="linux下-相关软件安装" tabindex="-1"><a class="header-anchor" href="#linux下-相关软件安装" aria-hidden="true">#</a> Linux下 相关软件安装</h2><h3 id="_1-minikube安装" tabindex="-1"><a class="header-anchor" href="#_1-minikube安装" aria-hidden="true">#</a> 1. minikube安装</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>**********************!!!PROTECTION POLICY!!!**********************
Waiting For The Next Deployment, Maybe It Will Be Displayed After That.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-docker安装" tabindex="-1"><a class="header-anchor" href="#_2-docker安装" aria-hidden="true">#</a> 2. docker安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> docker.io <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-podman安装" tabindex="-1"><a class="header-anchor" href="#_3-podman安装" aria-hidden="true">#</a> 3. podman安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token parameter variable">-y</span>  <span class="token function">install</span> software-properties-common
<span class="token function">sudo</span> add-apt-repository <span class="token parameter variable">-y</span> ppa:projectatomic/ppa
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token parameter variable">-y</span> <span class="token function">install</span> <span class="token function">podman</span>

<span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/containers/registries.conf <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
unqualified-search-registries = [&quot;docker.io&quot;]

[[registry]]
prefix = &quot;docker.io&quot;
location = &quot;uyah70su.mirror.aliyuncs.com&quot;
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Debian Unstable/Sid</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;deb http://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/Debian_Unstable/ /&#39;</span> <span class="token operator">&gt;</span> /etc/apt/sources.list.d/devel:kubic:libcontainers:stable.list
<span class="token function">curl</span> <span class="token parameter variable">-L</span> https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/Debian_Unstable/Release.key <span class="token operator">|</span> <span class="token function">sudo</span> apt-key <span class="token function">add</span> -

<span class="token comment"># Debian Testing</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;deb http://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/Debian_Testing/ /&#39;</span> <span class="token operator">&gt;</span> /etc/apt/sources.list.d/devel:kubic:libcontainers:stable.list
<span class="token function">curl</span> <span class="token parameter variable">-L</span> https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/Debian_Testing/Release.key <span class="token operator">|</span> <span class="token function">sudo</span> apt-key <span class="token function">add</span> -

<span class="token comment"># Debian 10</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;deb http://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/Debian_10/ /&#39;</span> <span class="token operator">&gt;</span> /etc/apt/sources.list.d/devel:kubic:libcontainers:stable.list
<span class="token function">curl</span> <span class="token parameter variable">-L</span> https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/Debian_10/Release.key <span class="token operator">|</span> <span class="token function">sudo</span> apt-key <span class="token function">add</span> -

<span class="token function">sudo</span> <span class="token function">apt-get</span> update <span class="token parameter variable">-qq</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token parameter variable">-qq</span> <span class="token parameter variable">-y</span> <span class="token function">install</span> <span class="token function">podman</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="minikube-基本使用" tabindex="-1"><a class="header-anchor" href="#minikube-基本使用" aria-hidden="true">#</a> minikube 基本使用</h2><h3 id="_1-minikube-启动集群" tabindex="-1"><a class="header-anchor" href="#_1-minikube-启动集群" aria-hidden="true">#</a> 1. minikube 启动集群</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>minikube start --image-mirror-country cn --iso-url<span class="token operator">=</span>https://kubernetes.oss-cn-hangzhou.aliyuncs.com/minikube/iso/minikube-v1.11.0.iso --registry-mirror https://uyah70su.mirror.aliyuncs.com
<span class="token comment"># registry-mirror 影响docker镜像拉取速度 最好使用镜像站</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-查询集群状态" tabindex="-1"><a class="header-anchor" href="#_2-查询集群状态" aria-hidden="true">#</a> 2. 查询集群状态</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>minikube status
minikube dashboard
minikube addons list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-连接到内部集群" tabindex="-1"><a class="header-anchor" href="#_3-连接到内部集群" aria-hidden="true">#</a> 3. 连接到内部集群</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>minikube <span class="token function">ssh</span>
<span class="token comment"># 内部集群可使用docker、podman命令直接管理容器</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-停止集群" tabindex="-1"><a class="header-anchor" href="#_4-停止集群" aria-hidden="true">#</a> 4. 停止集群</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>minikube stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5-删除集群" tabindex="-1"><a class="header-anchor" href="#_5-删除集群" aria-hidden="true">#</a> 5. 删除集群</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>**********************!!!PROTECTION POLICY!!!**********************
Waiting For The Next Deployment, Maybe It Will Be Displayed After That.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-获取容器环境" tabindex="-1"><a class="header-anchor" href="#_6-获取容器环境" aria-hidden="true">#</a> 6. 获取容器环境</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">eval</span> <span class="token variable"><span class="token variable">$(</span>minikube <span class="token parameter variable">-p</span> minikube docker-env<span class="token variable">)</span></span>
<span class="token builtin class-name">eval</span> <span class="token variable"><span class="token variable">$(</span>minikube <span class="token parameter variable">-p</span> minikube podman-env<span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="virtualbox-虚拟机跨操作系统共享" tabindex="-1"><a class="header-anchor" href="#virtualbox-虚拟机跨操作系统共享" aria-hidden="true">#</a> * virtualbox 虚拟机跨操作系统共享</h3><h4 id="相关目录路径" tabindex="-1"><a class="header-anchor" href="#相关目录路径" aria-hidden="true">#</a> 相关目录路径</h4><table><thead><tr><th style="text-align:left;">系统类型</th><th>minikube涉及配置</th><th>kubectl涉及配置</th><th>vbox涉及配置</th></tr></thead><tbody><tr><td style="text-align:left;">Linux</td><td>~/.minikube</td><td>~/.kube</td><td>~/.config/VirtualBox</td></tr><tr><td style="text-align:left;">Windows</td><td>~/.minikube</td><td>~/.kube</td><td>~/.VirtualBox</td></tr></tbody></table><h4 id="在virtualbox媒介管理界面内将容器虚拟机的挂载磁盘释放掉-并注册加载共享的磁盘-在虚拟机下挂载注册好的磁盘-linux下最好使用文件管理器覆盖证书秘钥等文件-避免文件权限不符问题-在virtualbox网卡配置里将网卡ip和mac地址内容覆盖使之与虚拟机内已有配置匹配-修改目录内相关ip端口等使之相符" tabindex="-1"><a class="header-anchor" href="#在virtualbox媒介管理界面内将容器虚拟机的挂载磁盘释放掉-并注册加载共享的磁盘-在虚拟机下挂载注册好的磁盘-linux下最好使用文件管理器覆盖证书秘钥等文件-避免文件权限不符问题-在virtualbox网卡配置里将网卡ip和mac地址内容覆盖使之与虚拟机内已有配置匹配-修改目录内相关ip端口等使之相符" aria-hidden="true">#</a> 在VirtualBox媒介管理界面内将容器虚拟机的挂载磁盘释放掉，并注册加载共享的磁盘，在虚拟机下挂载注册好的磁盘；Linux下最好使用文件管理器覆盖证书秘钥等文件，避免文件权限不符问题；在VirtualBox网卡配置里将网卡ip和mac地址内容覆盖使之与虚拟机内已有配置匹配，修改目录内相关ip端口等使之相符</h4><h2 id="kubectl-基本使用" tabindex="-1"><a class="header-anchor" href="#kubectl-基本使用" aria-hidden="true">#</a> kubectl 基本使用</h2><h3 id="_1-常用操作" tabindex="-1"><a class="header-anchor" href="#_1-常用操作" aria-hidden="true">#</a> 1. 常用操作</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># minikube kubectl -- get nodes</span>
<span class="token comment"># 可使用 minikube kubectl -- 代替 kubectl 命令</span>
kubectl get nodes
kubectl get pods
kubectl get namespaces
kubectl create namespace development
kubectl create namespace qa
kubectl run nginx <span class="token parameter variable">--image</span><span class="token operator">=</span>nginx:latest <span class="token parameter variable">--namespace</span> development
kubectl describe pod nginx <span class="token parameter variable">-n</span> development
kubectl get pods --all-namespaces <span class="token parameter variable">-o</span> wide
kubectl delete namespaces development qa
kubectl delete pods nginx-674ff86d-4qjgk
kubectl get services,deployment <span class="token parameter variable">-n</span> default
kubectl get all <span class="token parameter variable">-n</span> development
kubectl get services --sort-by<span class="token operator">=</span>.metedate.name
kubectl get pods --sort-by<span class="token operator">=</span><span class="token string">&#39;.status.containerStatuses[0].restartCount&#39;</span>
kubectl describe deployment nginx
kubectl describe pod nginx
kubectl describe nodes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>**********************!!!PROTECTION POLICY!!!**********************
Waiting For The Next Deployment, Maybe It Will Be Displayed After That.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl config current-context
kubectl config get-contexts
kubectl config use-context mycluster
kubectl config set-context <span class="token parameter variable">--current</span> <span class="token parameter variable">--namespace</span><span class="token operator">=</span>dev-frontend
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>**********************!!!PROTECTION POLICY!!!**********************
Waiting For The Next Deployment, Maybe It Will Be Displayed After That.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl create <span class="token parameter variable">-f</span> app-manifest.yaml
kubectl create <span class="token parameter variable">-f</span> deployment.yaml <span class="token parameter variable">-f</span> service.yaml
kubectl create <span class="token parameter variable">-f</span> ./webapp
kubectl create <span class="token parameter variable">-f</span> https://xxx.xxx.xxx/deployment.yaml

<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">|</span> kubectl create <span class="token parameter variable">-f</span> -</span>
apiVersion: v1
kind: Pod
metadata:
  name: nginx
spec:
  containers:
  - name: nginx
    image: nginx:latest
    ports:
     - containerPort: 80
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,34),t=[l];function d(r,c){return a(),n("div",null,t)}const p=e(i,[["render",d],["__file","index.html.vue"]]);export{p as default};
