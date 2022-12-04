# Stock Ticker App

## Getting Setup

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
