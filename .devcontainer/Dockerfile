ARG VARIANT=16
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

RUN su node -c "npm install -g yarn pnpm @nestjs/cli ts-node @nrwl/cli"

# install the esteem cli to make it easier to manage nx monorepos
RUN curl https://raw.githubusercontent.com/IgnisDa/developrs/main/packages/esteem/install.sh | sudo sh -s -- --yes
