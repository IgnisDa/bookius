# Radix scroll-area in production error

To reproduce it -

```bash
git clone --branch radix-error https://github.com/IgnisDa/bookius.git
pnpm install # install the dependencies
```

Add this to root `.env` file:

```txt
NEXT_SERVER_GRAPHQL_API="https://bookius-server.ignisda.tech/graphql"
NEXT_PUBLIC_GRAPHQL_API="https://bookius-server.ignisda.tech/graphql"
```

To run the server:

```bash
npx nx serve site # in development mode
npx nx build site --skip-nx-cache && npx nx serve site --prod # in production mode
```
