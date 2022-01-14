FROM ignisda/developr-workspace

RUN sudo apt-get update && sudo apt-get upgrade -y ;\
    sudo pnpm install --global @nestjs/cli ;\
    sudo apt-get install -y redis-server ;\
    sudo rm -rf /var/lib/apt/lists/* ;\
    echo "[[ \$(redis-cli ping) ]] || redis-server > /dev/null" | sudo tee -a "/etc/bash.bashrc" ;

RUN sudo yarn global add nx @nestjs/cli@latest ts-node

# install the esteem cli to make it easier to manage nx monorepos
RUN curl https://raw.githubusercontent.com/IgnisDa/developrs/main/packages/esteem/install.sh | sudo sh -s -- --yes
