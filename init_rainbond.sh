#!/bin/bash
sleep 3s
echo -e "\033[34m 正在加载数据，预计3分钟，时间取决于磁盘性能... \033[0m"
while :
do
  sleep 3s
  kubectl get node &>> /app/logs/init_rainbond_node.log
  NODE_IS_READY=$(sed -n '$p' /app/logs/init_rainbond_node.log | awk '{print $2}')
    if [ $NODE_IS_READY == "Ready" ]; then
      echo -e "\033[34m 正在启动Rainbond，预计5分钟... \033[0m"
      break
    fi
done
NODE_NAME=$(kubectl get node | sed -n '2p' | awk '{print $1}')
NODE_IP=$(kubectl get node -owide | sed -n '2p' | awk '{print $6}')
EIP=${EIP:-$NODE_IP}
IIP=${IIP:-$NODE_IP}


# 创建命名空间
(kubectl create ns rbd-system) &>> /app/logs/init_rainbond.log
# helm安装
(helm install rainbond-operator /app/chart -n rbd-system --kubeconfig /root/.kube/config --set operator.image.name=registry.cn-hangzhou.aliyuncs.com/goodrain/rainbond-operator --set operator.image.tag=v2.2.0) &>> /app/logs/init_rainbond.log
# 修改yaml
sed -i "s/single_node_name/$NODE_NAME/" /app/ui/rainbond-operator/config/single_node_cr/rbdcluster.yml
sed -i "s/single_node_external_ip/$EIP/" /app/ui/rainbond-operator/config/single_node_cr/rbdcluster.yml
sed -i "s/single_node_internal_ip/$IIP/" /app/ui/rainbond-operator/config/single_node_cr/rbdcluster.yml

# 创建Pod
(kubectl apply -f /app/ui/rainbond-operator/config/single_node_cr/ -n rbd-system) &>> /app/logs/init_rainbond.log

while :
do
    sleep 3s
    (kubectl get po -l name=rbd-api -n rbd-system | sed -n '2p') &>> /app/logs/init_rainbond_api.log
    API_RUNNING=$(sed -n '$p' /app/logs/init_rainbond_api.log | awk '{print $3}')
      if [[ $API_RUNNING == "Running" ]]; then
        API_READY=$(sed -n '$p' /app/logs/init_rainbond_api.log | awk '{print $2}')
        if [[ $API_READY == "1/1" ]]; then
          echo -e "\033[32m Rainbond启动成功，可以通过访问: http://$EIP:7070 进入Rainbond控制台。 \033[0m"
          break
        fi
      fi
done
