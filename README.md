# Bookius

The monorepo containing all the micro-services that are associated with the Bookius
ecosystem of tools.

## Deployment

We use dokku on a Digital Ocean server for deployment.

The `site` and `server` containers need to be connected together via a network for them to
communicate. To do so, use the following instructions.

```bash
dokku apps:create bookius-site
dokku builder-dockerfile:set bookius-site dockerfile-path apps/site/Dockerfile
dokku apps:create bookius-server
dokku builder-dockerfile:set bookius-server dockerfile-path apps/server/Dockerfile
dokku proxy:ports-add bookius-site http:80:80
dokku proxy:ports-add bookius-server http:80:80
dokku network:create bookius-network
dokku network:set bookius-site attach-post-deploy bookius-network
dokku network:set bookius-server attach-post-deploy bookius-network
# deploy both applications from host machine
# after doing that, enable SSL
dokku letsencrypt:enable bookius-site
dokku letsencrypt:enable bookius-server
```

To test if the above worked, run the following:

```bash
docker exec -it bookius-site.web.1 ash # drop into site's container
curl -v http://bookius-server.web:80/status # see if the server is accessible internally
# if the response is `true`, then it works
```

## Others

This project was generated using [Nx](https://nx.dev).
