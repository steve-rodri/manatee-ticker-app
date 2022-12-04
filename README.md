# Stock Ticker App

live site: [https://manatee-ticker-app-client.vercel.app](https://manatee-ticker-app-client.vercel.app)

![Stock Ticker App](/preview.png "Stock Ticker")

## Getting Setup Locally

Create .env in packages/server/ and add API_KEY

In a new terminal:
```sh
yarn
yarn start
```
This will install packages and start both servers
Once started, make note of your port number on the client, change the clientUrl in packages/server/index.ts to enable cors

## Running Tests

To run tests:
```sh
cd packages/client && yarn cy:open
cd packages/server && yarn test
```
I've also added swagger documentation at the /docs endpoint
[https://manatee-ticker-app-server.up.railway.app/docs](https://manatee-ticker-app-server.up.railway.app/docs)
